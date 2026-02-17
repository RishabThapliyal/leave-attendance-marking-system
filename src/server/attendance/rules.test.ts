import { describe, it, expect } from "vitest";
import {
  checkMonthNotLocked,
  checkCanAddEvent,
  type EventOnDate,
} from "./rules";

// Helper: same calendar day for tests
const sat = new Date("2026-02-07"); // Saturday
const sun = new Date("2026-02-08"); // Sunday
const mon = new Date("2026-02-09"); // Monday

function ev(
  eventType: EventOnDate["eventType"],
  status: EventOnDate["status"] = "ACTIVE",
): EventOnDate {
  return { eventType, status };
}

// ---------------------------------------------------------------------------
// Month lock enforcement
// ---------------------------------------------------------------------------
describe("checkMonthNotLocked", () => {
  it("returns 423 when month is locked", () => {
    const result = checkMonthNotLocked(true);
    expect(result.allowed).toBe(false);
    expect("statusCode" in result && result.statusCode).toBe(423);
  });

  it("returns allowed when month is not locked", () => {
    const result = checkMonthNotLocked(false);
    expect(result.allowed).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Weekend voluntary logic
// ---------------------------------------------------------------------------
describe("checkCanAddEvent – voluntary work only on weekends", () => {
  it("allows VOLUNTARY_WORK on Saturday", () => {
    const result = checkCanAddEvent({
      date: sat,
      eventType: "VOLUNTARY_WORK",
      existingEventsOnDate: [],
    });
    expect(result.allowed).toBe(true);
  });

  it("allows VOLUNTARY_WORK on Sunday", () => {
    const result = checkCanAddEvent({
      date: sun,
      eventType: "VOLUNTARY_WORK",
      existingEventsOnDate: [],
    });
    expect(result.allowed).toBe(true);
  });

  it("rejects VOLUNTARY_WORK on Monday (weekday)", () => {
    const result = checkCanAddEvent({
      date: mon,
      eventType: "VOLUNTARY_WORK",
      existingEventsOnDate: [],
    });
    expect(result.allowed).toBe(false);
    expect("statusCode" in result && result.statusCode).toBe(400);
  });
});

// ---------------------------------------------------------------------------
// One full-day event per date
// ---------------------------------------------------------------------------
describe("checkCanAddEvent – one full-day per date", () => {
  it("allows first FULL_LEAVE on date", () => {
    const result = checkCanAddEvent({
      date: mon,
      eventType: "FULL_LEAVE",
      existingEventsOnDate: [],
    });
    expect(result.allowed).toBe(true);
  });

  it("rejects second FULL_LEAVE on same date", () => {
    const result = checkCanAddEvent({
      date: mon,
      eventType: "FULL_LEAVE",
      existingEventsOnDate: [ev("FULL_LEAVE")],
    });
    expect(result.allowed).toBe(false);
    expect("statusCode" in result && result.statusCode).toBe(409);
  });

  it("rejects any new event when full-day already exists on date", () => {
    const existing = [ev("FULL_LEAVE")];
    expect(
      checkCanAddEvent({
        date: mon,
        eventType: "WFH",
        existingEventsOnDate: existing,
      }).allowed,
    ).toBe(false);
    expect(
      checkCanAddEvent({
        date: mon,
        eventType: "HALF_LEAVE_AM",
        existingEventsOnDate: existing,
      }).allowed,
    ).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Half-day logic – AM + PM allowed, same type once
// ---------------------------------------------------------------------------
describe("checkCanAddEvent – half-day AM + PM allowed", () => {
  it("allows HALF_LEAVE_PM when HALF_LEAVE_AM exists same date", () => {
    const result = checkCanAddEvent({
      date: mon,
      eventType: "HALF_LEAVE_PM",
      existingEventsOnDate: [ev("HALF_LEAVE_AM")],
    });
    expect(result.allowed).toBe(true);
  });

  it("allows HALF_LEAVE_AM when HALF_LEAVE_PM exists same date", () => {
    const result = checkCanAddEvent({
      date: mon,
      eventType: "HALF_LEAVE_AM",
      existingEventsOnDate: [ev("HALF_LEAVE_PM")],
    });
    expect(result.allowed).toBe(true);
  });

  it("rejects second HALF_LEAVE_AM on same date", () => {
    const result = checkCanAddEvent({
      date: mon,
      eventType: "HALF_LEAVE_AM",
      existingEventsOnDate: [ev("HALF_LEAVE_AM")],
    });
    expect(result.allowed).toBe(false);
    expect("statusCode" in result && result.statusCode).toBe(409);
  });

  it("rejects second HALF_LEAVE_PM on same date", () => {
    const result = checkCanAddEvent({
      date: mon,
      eventType: "HALF_LEAVE_PM",
      existingEventsOnDate: [ev("HALF_LEAVE_PM")],
    });
    expect(result.allowed).toBe(false);
    expect("statusCode" in result && result.statusCode).toBe(409);
  });
});

// ---------------------------------------------------------------------------
//  Leave + WFH same day not allowed
// ---------------------------------------------------------------------------
describe("checkCanAddEvent – leave and WFH same day not allowed", () => {
  it("rejects WFH when FULL_LEAVE exists same date", () => {
    const result = checkCanAddEvent({
      date: mon,
      eventType: "WFH",
      existingEventsOnDate: [ev("FULL_LEAVE")],
    });
    expect(result.allowed).toBe(false);
    expect("statusCode" in result && result.statusCode).toBe(409);
  });

  it("rejects WFH when HALF_LEAVE_AM exists same date", () => {
    const result = checkCanAddEvent({
      date: mon,
      eventType: "WFH",
      existingEventsOnDate: [ev("HALF_LEAVE_AM")],
    });
    expect(result.allowed).toBe(false);
    expect("statusCode" in result && result.statusCode).toBe(409);
  });

  it("rejects FULL_LEAVE when WFH exists same date", () => {
    const result = checkCanAddEvent({
      date: mon,
      eventType: "FULL_LEAVE",
      existingEventsOnDate: [ev("WFH")],
    });
    expect(result.allowed).toBe(false);
    expect("statusCode" in result && result.statusCode).toBe(409);
  });

  it("allows WFH when no leave on date", () => {
    const result = checkCanAddEvent({
      date: mon,
      eventType: "WFH",
      existingEventsOnDate: [],
    });
    expect(result.allowed).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Cancelled events are ignored (so after cancel, same date can have new event)
// ---------------------------------------------------------------------------
describe("checkCanAddEvent – cancelled events ignored", () => {
  it("allows FULL_LEAVE when only CANCELLED full-day exists on date", () => {
    const result = checkCanAddEvent({
      date: mon,
      eventType: "FULL_LEAVE",
      existingEventsOnDate: [ev("FULL_LEAVE", "CANCELLED")],
    });
    expect(result.allowed).toBe(true);
  });
});
