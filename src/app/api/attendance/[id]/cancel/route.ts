import { NextRequest } from "next/server";
import { z } from "zod";
import { cancelAttendance } from "@/server/attendance/service";

const cancelBodySchema = z.object({
  createdBy: z.string().min(1, "createdBy is required"),
});

// PDF §7: POST /attendance/:id/cancel
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: eventId } = await params;
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = cancelBodySchema.safeParse(body);
  if (!parsed.success) {
    const msg = parsed.error.issues.map((e) => e.message).join("; ");
    return Response.json({ error: msg }, { status: 400 });
  }
  const result = await cancelAttendance({
    eventId,
    createdBy: parsed.data.createdBy,
  });
  if (!("success" in result)) {
    return Response.json(
      { error: result.reason },
      { status: result.statusCode },
    );
  }
  return Response.json({ success: true }, { status: 200 });
}
