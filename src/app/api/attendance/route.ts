import { NextRequest } from "next/server";
import {
  safeParseMarkAttendanceBody,
  safeParseMonthQuery,
} from "@/server/attendance/validator";
import {
  markAttendance,
  getAttendanceForMonth,
} from "@/server/attendance/service";

// PDF §7: GET /attendance?month=YYYY-MM&employeeId=xxx
export async function GET(request: NextRequest) {
  const searchParams = Object.fromEntries(request.nextUrl.searchParams);
  const parsed = safeParseMonthQuery(searchParams);
  if (!parsed.success) {
    const msg = parsed.error.issues.map((e: any) => e.message).join("; ");
    return Response.json({ error: msg }, { status: 400 });
  }
  const { month, employeeId } = parsed.data;
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

// PDF §7: POST /attendance – date, eventType, reason?, employeeId, createdBy
export async function POST(request: NextRequest) {
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
  const { employeeId, createdBy } = parsed.data;
  const result = await markAttendance({
    employeeId,
    createdBy,
    body: parsed.data,
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
