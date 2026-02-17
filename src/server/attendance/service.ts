import type { RuleResult } from "./rules";
import { checkCanAddEvent, checkMonthNotLocked } from "./rules";
import type { EventOnDate } from "./rules";
import {
  getAttendanceEventById,
  getAttendanceEventsForMonth,
  createAttendanceEvent,
  cancelAttendanceEvent,
  createAttendanceOverride,
  createMonthLock,
  isMonthLocked,
  createAuditLog,
} from "./repository";
import type { MarkAttendanceBody, LockBody } from "./validator";
import type { AttendanceEventType } from "../../generated/client";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function dateToMonthString(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

function isSameCalendarDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function toEventOnDate(e: { eventType: string; status: string }): EventOnDate {
  return {
    eventType: e.eventType as AttendanceEventType,
    status: e.status as "ACTIVE" | "CANCELLED",
  };
}

// ---------------------------------------------------------------------------
// Mark attendance ( POST / attendance)
// ---------------------------------------------------------------------------

export type MarkAttendanceResult =
  | { success: true; event: Awaited<ReturnType<typeof createAttendanceEvent>> }
  | (RuleResult & { allowed: false });

export async function markAttendance(params: {
  employeeId: string;
  createdBy: string;
  body: MarkAttendanceBody;
}): Promise<MarkAttendanceResult> {
  const { employeeId, createdBy, body } = params;
  const { date, eventType, reason } = body;
  const month = dateToMonthString(date);

  const locked = await isMonthLocked({ employeeId, month });
  const lockResult = checkMonthNotLocked(locked);
  if (!lockResult.allowed) return lockResult;

  const monthEvents = await getAttendanceEventsForMonth({ employeeId, month });
  const eventsOnDate = monthEvents
    .filter((e) => isSameCalendarDay(e.date, date))
    .map((e) => toEventOnDate({ eventType: e.eventType, status: e.status }));

  //-----------------

  const addResult = checkCanAddEvent({
    date,
    eventType: eventType as AttendanceEventType,
    existingEventsOnDate: eventsOnDate,
  });
  if (!addResult.allowed) return addResult;

  const event = await createAttendanceEvent({
    employeeId,
    date,
    eventType: eventType as AttendanceEventType,
    reason,
    createdBy,
  });

  await createAuditLog({
    actorId: createdBy,
    action: "CREATE_EVENT",
    entityId: event.id,
    payload: { date: date.toISOString(), eventType, reason },
  });

  return { success: true, event };
}

// ---------------------------------------------------------------------------
// Get attendance for month ( GET / attendance?month=)
// ---------------------------------------------------------------------------

export async function getAttendanceForMonth(params: {
  employeeId: string;
  month: string;
}) {
  return getAttendanceEventsForMonth(params);
}

// ---------------------------------------------------------------------------
// Cancel attendance ( POST /attendance/:id/cancel, §9 Editing logic)
// ---------------------------------------------------------------------------

export type CancelAttendanceResult =
  | { success: true }
  | (RuleResult & { allowed: false });

export async function cancelAttendance(params: {
  eventId: string;
  createdBy: string;
}): Promise<CancelAttendanceResult> {
  const { eventId, createdBy } = params;

  const event = await getAttendanceEventById(eventId);
  if (!event) {
    return { allowed: false, reason: "Event not found.", statusCode: 400 };
  }

  const month = dateToMonthString(event.date);
  const locked = await isMonthLocked({ employeeId: event.employeeId, month });
  const lockResult = checkMonthNotLocked(locked);
  if (!lockResult.allowed) return lockResult;

  await createAttendanceOverride({
    originalEventId: eventId,
    action: "CANCEL",
    createdBy,
  });
  await cancelAttendanceEvent(eventId);
  await createAuditLog({
    actorId: createdBy,
    action: "CANCEL_EVENT",
    entityId: eventId,
    payload: { eventType: event.eventType, date: event.date.toISOString() },
  });

  return { success: true };
}

// ---------------------------------------------------------------------------
// Lock month ( POST /attendance/lock)
// ---------------------------------------------------------------------------

export type LockMonthResult =
  | { success: true; lock: Awaited<ReturnType<typeof createMonthLock>> }
  | (RuleResult & { allowed: false });

export async function lockMonth(params: {
  body: LockBody;
}): Promise<LockMonthResult> {
  const { body } = params;
  const { employeeId, month, lockedBy } = body;

  const locked = await isMonthLocked({ employeeId, month });
  if (locked) {
    return {
      allowed: false,
      reason: "This month is already locked.",
      statusCode: 409,
    };
  }

  const lock = await createMonthLock({ employeeId, month, lockedBy });
  await createAuditLog({
    actorId: lockedBy,
    action: "LOCK_MONTH",
    entityId: lock.id,
    payload: { employeeId, month },
  });

  return { success: true, lock };
}
