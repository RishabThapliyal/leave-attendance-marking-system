import { NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import { cancelAttendance } from "@/server/attendance/service";

// POST /attendance/:id/cancel (createdBy from session)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await auth();
  if (!session?.user?.employeeId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id: eventId } = await params;
  const result = await cancelAttendance({
    eventId,
    createdBy: session.user.employeeId,
  });
  if (!("success" in result)) {
    return Response.json(
      { error: result.reason },
      { status: result.statusCode },
    );
  }
  return Response.json({ success: true }, { status: 200 });
}
