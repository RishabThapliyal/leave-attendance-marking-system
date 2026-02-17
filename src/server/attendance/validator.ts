import { z } from "zod";

// POST /attendance – date, eventType, reason (optional)
const EVENT_TYPES = [
  "FULL_LEAVE",
  "HALF_LEAVE_AM",
  "HALF_LEAVE_PM",
  "WFH",
  "VOLUNTARY_WORK",
] as const;

export const markAttendanceBodySchema = z.object({
  date: z.coerce.date(),
  eventType: z.enum(EVENT_TYPES),
  reason: z.string().optional(),
  employeeId: z.string().min(1, "employeeId is required"),
  createdBy: z.string().min(1, "createdBy is required"),
});

export type MarkAttendanceBody = z.infer<typeof markAttendanceBodySchema>;

// GET /attendance?month=YYYY-MM
const MONTH_REGEX = /^\d{4}-\d{2}$/;

export const monthQuerySchema = z.object({
  month: z.string().regex(MONTH_REGEX, "month must be YYYY-MM"),
  employeeId: z.string().min(1, "employeeId is required"),
});

export type MonthQuery = z.infer<typeof monthQuerySchema>;

// POST /attendance/lock – employeeId, month
export const lockBodySchema = z.object({
  employeeId: z.string().min(1, "employeeId is required"),
  month: z.string().regex(MONTH_REGEX, "month must be YYYY-MM"),
  lockedBy: z.string().min(1, "lockedBy is required"),
});

export type LockBody = z.infer<typeof lockBodySchema>;

// ---------------------------------------------------------------------------
// Parse helpers – controller me use karenge
// ---------------------------------------------------------------------------

export function parseMarkAttendanceBody(body: unknown): MarkAttendanceBody {
  return markAttendanceBodySchema.parse(body);
}

export function parseMonthQuery(query: unknown): MonthQuery {
  return monthQuerySchema.parse(query);
}

export function parseLockBody(body: unknown): LockBody {
  return lockBodySchema.parse(body);
}

/** Safe parse – agar invalid ho to error return, 400 ke liye message use kar sakte ho */
export function safeParseMarkAttendanceBody(body: unknown) {
  return markAttendanceBodySchema.safeParse(body);
}

export function safeParseMonthQuery(query: unknown) {
  return monthQuerySchema.safeParse(query);
}

export function safeParseLockBody(body: unknown) {
  return lockBodySchema.safeParse(body);
}
