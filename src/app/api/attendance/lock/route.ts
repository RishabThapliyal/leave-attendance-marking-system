import { NextRequest } from "next/server";
import { safeParseLockBody } from "@/server/attendance/validator";
import { lockMonth } from "@/server/attendance/service";

// POST /attendance/lock – employeeId, month, lockedBy
export async function POST(request: NextRequest) {
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
  const result = await lockMonth({ body: parsed.data });

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
