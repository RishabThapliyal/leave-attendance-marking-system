import type {
  AttendanceEventType,
  AttendanceStatus,
} from "../../generated/client";

// ---------------------------------------------------------------------------
// Types ( Error Handling: 400 Rule violation, 401 Unauthorized, 409 Conflict, 423 Month locked)
// ---------------------------------------------------------------------------

export type HttpStatusForAttendance = 400 | 401 | 409 | 423;

export type RuleResult =
  | { allowed: true }
  | { allowed: false; reason: string; statusCode: HttpStatusForAttendance };

/** 401 Unauthorized – use when request has no valid auth (controller/service layer) */
export function resultUnauthorized(): RuleResult {
  return {
    allowed: false,
    reason: "Unauthorized",
    statusCode: 401,
  };
}

/** Event jaisa repository se aata hai – sirf woh fields jo rules ko chahiye */
export type EventOnDate = {
  eventType: AttendanceEventType;
  status: AttendanceStatus;
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const FULL_DAY = "FULL_LEAVE" as const;
const LEAVE_TYPES = ["FULL_LEAVE", "HALF_LEAVE_AM", "HALF_LEAVE_PM"] as const;
const WFH = "WFH" as const;
const VOLUNTARY_WORK = "VOLUNTARY_WORK" as const;

function isLeaveType(t: string): t is (typeof LEAVE_TYPES)[number] {
  return LEAVE_TYPES.includes(t as (typeof LEAVE_TYPES)[number]);
}

function isWeekend(date: Date): boolean {
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday
  return day === 0 || day === 6;
}

/** Sirf ACTIVE events consider karo (cancelled ignore) */
function activeEvents(events: EventOnDate[]): EventOnDate[] {
  return events.filter((e) => e.status === "ACTIVE");
}

// ---------------------------------------------------------------------------
// Rule 1: No edits on locked months ( Month lock)
// ---------------------------------------------------------------------------

export function checkMonthNotLocked(isMonthLocked: boolean): RuleResult {
  if (isMonthLocked) {
    return {
      allowed: false,
      reason: "This month is locked; no changes allowed.",
      statusCode: 423,
    };
  }
  return { allowed: true };
}

// ---------------------------------------------------------------------------
// Rules 2–5: Can we add this event on this date? ( one full-day, half AM+PM, no leave+WFH same day, voluntary weekend only)
// ---------------------------------------------------------------------------

export function checkCanAddEvent(params: {
  date: Date;
  eventType: AttendanceEventType;
  existingEventsOnDate: EventOnDate[];
}): RuleResult {
  const { date, eventType, existingEventsOnDate } = params;
  const existing = activeEvents(existingEventsOnDate);

  // --- Rule: Voluntary work only on weekends (PDF) ---
  if (eventType === VOLUNTARY_WORK) {
    if (!isWeekend(date)) {
      return {
        allowed: false,
        reason: "Voluntary work is only allowed on weekends.",
        statusCode: 400,
      };
    }
  }

  // --- Rule: Half-day – same type (AM or PM) only once per date ( half AM + PM allowed, so two entries max) ---
  if (eventType === "HALF_LEAVE_AM") {
    const hasAM = existing.some((e) => e.eventType === "HALF_LEAVE_AM");
    if (hasAM) {
      return {
        allowed: false,
        reason: "HALF_LEAVE_AM already exists for this date.",
        statusCode: 409,
      };
    }
  }

  if (eventType === "HALF_LEAVE_PM") {
    const hasPM = existing.some((e) => e.eventType === "HALF_LEAVE_PM");
    if (hasPM) {
      return {
        allowed: false,
        reason: "HALF_LEAVE_PM already exists for this date.",
        statusCode: 409,
      };
    }
  }

  // --- Rule: Leave + WFH same day not allowed  ---
  if (eventType === WFH) {
    const hasLeave = existing.some((e) => isLeaveType(e.eventType));
    if (hasLeave) {
      return {
        allowed: false,
        reason: "Leave and WFH on the same day are not allowed.",
        statusCode: 409,
      };
    }
  }
  if (isLeaveType(eventType)) {
    const hasWFH = existing.some((e) => e.eventType === WFH);
    if (hasWFH) {
      return {
        allowed: false,
        reason: "Leave and WFH on the same day are not allowed.",
        statusCode: 409,
      };
    }
  }

  // --- Full-day already present blocks any new event on same date  ---
  const hasFullDay = existing.some((e) => e.eventType === FULL_DAY);
  if (hasFullDay) {
    return {
      allowed: false,
      reason: "A full-day event already exists for this date.",
      statusCode: 409,
    };
  }

  return { allowed: true };
}
