import { NextRequest } from "next/server";
import { auth } from "@/lib/auth"; //N
import {
  safeParseMarkAttendanceBody,
  safeParseMonthQuery,
} from "@/server/attendance/validator";
import {
  markAttendance,
  getAttendanceForMonth,
} from "@/server/attendance/service";

// GET /attendance?month=YYYY-MM&employeeId=xxx (optional - defaults to self)
export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.employeeId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const searchParams = Object.fromEntries(request.nextUrl.searchParams);
  const parsed = safeParseMonthQuery(searchParams);
  if (!parsed.success) {
    const msg = parsed.error.issues.map((e: any) => e.message).join("; ");
    return Response.json({ error: msg }, { status: 400 });
  }
  let { month, employeeId } = parsed.data;
  const role = (session.user.role ?? "EMPLOYEE") as string;
  if (role === "EMPLOYEE" && employeeId !== session.user.employeeId) {
    employeeId = session.user.employeeId;
  }
  const events = await getAttendanceForMonth({ employeeId, month });
  return Response.json(
    events.map((e) => ({
      id: e.id,
      employeeId: e.employeeId,
      date: e.date.toISOString(),
      eventType: e.eventType,
      status: e.status,
      reason: e.reason,
      createdBy: e.createdBy,
      createdAt: e.createdAt.toISOString(),
    })),
  );
}

// POST /attendance – date, eventType, reason? (employeeId, createdBy from session)
export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.employeeId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  const parsed = safeParseMarkAttendanceBody(body);
  if (!parsed.success) {
    const msg = parsed.error.issues.map((e: any) => e.message).join("; ");
    return Response.json({ error: msg }, { status: 400 });
  }
  const employeeId = session.user.employeeId;
  const createdBy = session.user.employeeId;
  const result = await markAttendance({
    employeeId,
    createdBy,
    body: { ...parsed.data, employeeId, createdBy },
  });
  if (!("success" in result)) {
    return Response.json(
      { error: result.reason },
      { status: result.statusCode },
    );
  }
  const event = result.event;
  return Response.json(
    {
      id: event.id,
      employeeId: event.employeeId,
      date: event.date.toISOString(),
      eventType: event.eventType,
      status: event.status,
      reason: event.reason,
      createdBy: event.createdBy,
      createdAt: event.createdAt.toISOString(),
    },
    { status: 201 },
  );
}
