import { prisma } from "../db/prisma";
import type { Prisma } from "../../generated/client";
import { $Enums } from "../../generated/client";

// Helper: month string "YYYY-MM" ko month ke start/end Date me convert karega
function getMonthDateRange(month: string) {
  const [yearStr, monthStr] = month.split("-");
  const year = Number(yearStr);
  const monthIndex = Number(monthStr) - 1; // JS months 0-based

  const start = new Date(Date.UTC(year, monthIndex, 1));
  const end = new Date(Date.UTC(year, monthIndex + 1, 1));

  return { start, end };
}

// Single event by id (cancel / modify ke liye)
export async function getAttendanceEventById(eventId: string) {
  return prisma.attendanceEvent.findUnique({
    where: { id: eventId },
  });
}

// Month ke saare events (ek employee ke) fetch kare
export async function getAttendanceEventsForMonth(params: {
  employeeId: string;
  month: string; // "YYYY-MM"
}) {
  const { employeeId, month } = params;
  const { start, end } = getMonthDateRange(month);

  return prisma.attendanceEvent.findMany({
    where: {
      employeeId,
      date: {
        gte: start,
        lt: end,
      },
    },
    orderBy: { date: "asc" },
  });
}

// Naya attendance event create kare
export async function createAttendanceEvent(params: {
  employeeId: string;
  date: Date;
  eventType: $Enums.AttendanceEventType;
  reason?: string;
  createdBy: string;
}) {
  const { employeeId, date, eventType, reason, createdBy } = params;

  return prisma.attendanceEvent.create({
    data: {
      employeeId,
      date,
      eventType,
      reason,
      createdBy,
    },
  });
}

// Existing event ko CANCELLED mark kare (append-only model me status field change allowed)
export async function cancelAttendanceEvent(eventId: string) {
  return prisma.attendanceEvent.update({
    where: { id: eventId },
    data: { status: $Enums.AttendanceStatus.CANCELLED },
  });
}

// Override row create kare (CANCEL / MODIFY)
export async function createAttendanceOverride(params: {
  originalEventId: string;
  action: "CANCEL" | "MODIFY";
  newEventId?: string;
  createdBy: string;
}) {
  const { originalEventId, action, newEventId, createdBy } = params;

  return prisma.attendanceEventOverride.create({
    data: {
      originalEventId,
      action,
      newEventId,
      createdBy,
    },
  });
}

// Month lock create kare
export async function createMonthLock(params: {
  employeeId: string;
  month: string; // "YYYY-MM"
  lockedBy: string;
}) {
  const { employeeId, month, lockedBy } = params;

  return prisma.attendanceMonthLock.create({
    data: {
      employeeId,
      month,
      lockedBy,
    },
  });
}

// Check kare ki month locked hai ya nahi
export async function isMonthLocked(params: {
  employeeId: string;
  month: string; // "YYYY-MM"
}) {
  const { employeeId, month } = params;

  const lock = await prisma.attendanceMonthLock.findUnique({
    where: {
      employeeId_month: {
        employeeId,
        month,
      },
    },
  });

  return Boolean(lock);
}

// Audit log entry create kare
export async function createAuditLog(params: {
  actorId: string;
  action: string;
  entityId: string;
  payload: Prisma.InputJsonValue;
}) {
  const { actorId, action, entityId, payload } = params;

  return prisma.attendanceAuditLog.create({
    data: {
      actorId,
      action,
      entityId,
      payload,
    },
  });
}
