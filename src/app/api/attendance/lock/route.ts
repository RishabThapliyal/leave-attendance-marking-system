import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { safeParseLockBody } from "@/server/attendance/validator";
import { lockMonth } from "@/server/attendance/service";

// POST /attendance/lock – employeeId, month (lockedBy from session, MANAGER/ADMIN only)
export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.employeeId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const role = (session.user.role ?? "EMPLOYEE") as string;
  if (role === "EMPLOYEE") {
    return Response.json(
      { error: "Only MANAGER or ADMIN can lock months" },
      { status: 403 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  const parsed = safeParseLockBody(body);
  if (!parsed.success) {
    const msg = parsed.error.issues
      .map((e: { message: string }) => e.message)
      .join("; ");
    return Response.json({ error: msg }, { status: 400 });
  }
  const bodyWithSession = {
    ...parsed.data,
    lockedBy: session.user.employeeId,
  };
  const result = await lockMonth({ body: bodyWithSession });

  if (!("success" in result)) {
    return Response.json(
      { error: result.reason },
      { status: result.statusCode },
    );
  }
  const lock = result.lock;
  return Response.json(
    {
      id: lock.id,
      employeeId: lock.employeeId,
      month: lock.month,
      lockedBy: lock.lockedBy,
      lockedAt: lock.lockedAt.toISOString(),
    },
    { status: 201 },
  );
}
