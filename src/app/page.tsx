"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { DateClickArg } from "@fullcalendar/interaction";
import { useEffect, useMemo, useState } from "react";
import type { AttendanceEventDto } from "@/store/attendanceApi";
import {
  useCancelAttendanceMutation,
  useGetAttendanceQuery,
  useLockMonthMutation,
  useMarkAttendanceMutation,
} from "@/store/attendanceApi";

import { employees, type Employee } from "@/data/employees";

function toYearMonth(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

//object
const eventColors: Record<AttendanceEventDto["eventType"], string> = {
  FULL_LEAVE: "#ef4444", // red
  HALF_LEAVE_AM: "#f97316", // orange
  HALF_LEAVE_PM: "#f97316", // orange
  WFH: "#3b82f6", // blue
  VOLUNTARY_WORK: "#22c55e", // green
};

//array -> Har element ek object hai
const eventTypeOptions: {
  value: AttendanceEventDto["eventType"];
  label: string;
}[] = [
  { value: "FULL_LEAVE", label: "Full Leave" },
  { value: "HALF_LEAVE_AM", label: "Half Leave (AM)" },
  { value: "HALF_LEAVE_PM", label: "Half Leave (PM)" },
  { value: "WFH", label: "Work From Home (WFH)" },
  { value: "VOLUNTARY_WORK", label: "Voluntary Work (Weekend)" },
];

export default function AttendanceCalendarPage() {
  const [month, setMonth] = useState<string>(toYearMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedEventType, setSelectedEventType] =
    useState<AttendanceEventDto["eventType"]>("FULL_LEAVE");
  const [reason, setReason] = useState("");
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [markError, setMarkError] = useState<string | null>(null);
  const [lockMessage, setLockMessage] = useState<string | null>(null);
  const [currentEmployee, setCurrentEmployee] = useState<Employee | null>(null);
  const [toasts, setToasts] = useState<
    { id: number; message: string; type: "success" | "error" }[]
  >([]);

  const showToast = (message: string, type: "success" | "error") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    if (typeof window !== "undefined") {
      window.setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    }
  };

  // Load selected employee from localStorage (very simple "login" for this demo).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedId = window.localStorage.getItem("currentEmployeeId");
    if (!storedId) return;
    const found = employees.find((e) => e.id === storedId) ?? null;
    setCurrentEmployee(found);
  }, []);

  const { data, isLoading, isError } = useGetAttendanceQuery(
    currentEmployee
      ? { month, employeeId: currentEmployee.id }
      : { month, employeeId: "no-employee" },
  );

  const [markAttendance, { isLoading: isMarking }] =
    useMarkAttendanceMutation();
  const [cancelAttendance] = useCancelAttendanceMutation();
  const [lockMonth, { isLoading: isLocking }] = useLockMonthMutation();

  const events = useMemo(() => {
    if (!data) return [];
    return data.map((event) => ({
      id: event.id,
      title: event.eventType.replaceAll("_", " "),
      start: event.date,
      allDay: true,
      backgroundColor:
        event.status === "ACTIVE" ? eventColors[event.eventType] : "#9ca3af",
      borderColor:
        event.status === "ACTIVE" ? eventColors[event.eventType] : "#9ca3af",
      textColor: event.status === "ACTIVE" ? "white" : "black",
      extendedProps: {
        status: event.status,
        eventType: event.eventType,
        reason: event.reason,
      },
    }));
  }, [data]);

  const handleDateClick = (arg: DateClickArg) => {
    setSelectedDate(arg.dateStr);
    setEditingEventId(null);
    setMarkError(null);
  };

  const handleMarkAttendance = async () => {
    if (!selectedDate || !currentEmployee) return;
    try {
      setMarkError(null);
      // If we are editing an existing event, follow PDF §9:
      // 1) cancel original, 2) create new event.
      if (editingEventId) {
        await cancelAttendance({
          id: editingEventId,
          body: { createdBy: currentEmployee.id },
        }).unwrap();
      }

      await markAttendance({
        date: selectedDate,
        eventType: selectedEventType,
        reason: reason || undefined,
        employeeId: currentEmployee.id,
        createdBy: currentEmployee.id,
      }).unwrap();

      setReason("");
      setEditingEventId(null);
      showToast(
        editingEventId ? "Attendance updated." : "Attendance saved.",
        "success",
      );
    } catch (e) {
      console.error("Failed to mark attendance", e);
      const err = e as any;
      const status: number | undefined =
        err?.status ?? err?.originalStatus ?? err?.data?.statusCode;
      const apiMessage =
        err?.data?.error ?? (typeof err?.error === "string" ? err.error : null);
      const prefix = status ? `[${status}] ` : "";
      if (apiMessage) {
        setMarkError(prefix + apiMessage);
      } else {
        setMarkError(
          prefix +
            "Failed to mark attendance. The month might be locked or a rule was violated.",
        );
      }
      showToast(apiMessage ?? "Failed to mark attendance.", "error");
    }
  };

  const handleEventClick = async (clickInfo: any) => {
    const eventId = clickInfo.event.id as string;
    const status = clickInfo.event.extendedProps?.status as
      | AttendanceEventDto["status"]
      | undefined;
    const eventType = clickInfo.event.extendedProps?.eventType as
      | AttendanceEventDto["eventType"]
      | undefined;
    const eventReason = clickInfo.event.extendedProps?.reason as string | null;

    if (!eventId || status !== "ACTIVE") return;

    // Put the form into "edit" mode for this event.
    setSelectedDate(clickInfo.event.startStr);
    if (eventType) {
      setSelectedEventType(eventType);
    }
    setReason(eventReason ?? "");
    setEditingEventId(eventId);
    setMarkError(null);
  };

  const handleLockMonth = async () => {
    if (!currentEmployee) return;
    const shouldLock = window.confirm(`Lock attendance for ${month}?`);
    if (!shouldLock) return;
    try {
      setLockMessage(null);
      await lockMonth({
        employeeId: currentEmployee.id,
        month,
        lockedBy: currentEmployee.id,
      }).unwrap();
      setLockMessage(`Successfully locked ${month}.`);
      showToast(`Locked month ${month}.`, "success");
    } catch (e) {
      console.error("Failed to lock month", e);
      const err = e as any;
      const status: number | undefined =
        err?.status ?? err?.originalStatus ?? err?.data?.statusCode;
      const apiMessage =
        err?.data?.error ?? (typeof err?.error === "string" ? err.error : null);
      const prefix = status ? `[${status}] ` : "";
      setLockMessage(prefix + (apiMessage ?? "Failed to lock month."));
      showToast(apiMessage ?? "Failed to lock month.", "error");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 py-8 px-4 font-sans dark:bg-black">
      {/* Toasts */}
      <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto max-w-xs rounded-md px-3 py-2 text-xs shadow-lg ${
              toast.type === "success"
                ? "bg-emerald-600 text-emerald-50"
                : "bg-red-600 text-red-50"
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900 lg:flex-row">
        <div className="w-full lg:w-3/4">
          <header className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                Leave &amp; Attendance Calendar
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {currentEmployee ? (
                  <>
                    Showing attendance for{" "}
                    <span className="font-medium">{currentEmployee.name}</span>{" "}
                    (<span className="uppercase">{currentEmployee.role}</span>)
                    – month: <span className="font-medium">{month}</span>
                  </>
                ) : (
                  <>Select an employee to begin.</>
                )}
              </p>
              {selectedDate && (
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                  Selected date:{" "}
                  <span className="font-medium">{selectedDate}</span>
                  {editingEventId ? " (editing existing event)" : null}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-zinc-600 dark:text-zinc-300">
              <LegendDot color="#ef4444" label="Full Leave" />
              <LegendDot color="#f97316" label="Half Leave (AM/PM)" />
              <LegendDot color="#3b82f6" label="WFH" />
              <LegendDot color="#22c55e" label="Voluntary Work" />
              <LegendDot color="#9ca3af" label="Cancelled" />
            </div>
          </header>

          {isError && (
            <p className="mb-3 text-sm text-red-500">
              Failed to load attendance. Please try again.
            </p>
          )}

          {isLoading && !data ? (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Loading attendance…
            </p>
          ) : (
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              height="auto"
              events={events}
              dateClick={handleDateClick}
              eventClick={handleEventClick}
              dayCellClassNames={(arg) => {
                const year = arg.date.getFullYear();
                const month = String(arg.date.getMonth() + 1).padStart(2, "0");
                const day = String(arg.date.getDate()).padStart(2, "0");
                const cellDate = `${year}-${month}-${day}`;
                return cellDate === selectedDate ? ["fc-day-selected"] : [];
              }}
              datesSet={(arg) => {
                const nextMonth = toYearMonth(arg.start);
                if (nextMonth !== month) {
                  setMonth(nextMonth);
                }
              }}
            />
          )}
        </div>

        <aside
          className="w-full rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-800
                              dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 lg:w-1/4"
        >
          <h2 className="mb-2 text-base font-semibold">Login / Employee</h2>
          <p className="mb-3 text-xs text-zinc-500 dark:text-zinc-400">
            Choose an employee to act as. This is a simple demo login – in a
            real app this would be backed by proper authentication.
          </p>

          <div className="mb-4">
            <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-300">
              Current Employee
            </label>
            <select
              className="w-full rounded-md border border-zinc-300 bg-white px-2 py-1 text-xs dark:border-zinc-700 dark:bg-zinc-900"
              value={currentEmployee?.id ?? ""}
              onChange={(e) => {
                const id = e.target.value;
                const emp = employees.find((em) => em.id === id) ?? null;
                setCurrentEmployee(emp);
                // Reset per-employee form state so old selections don't leak across users
                setSelectedDate(null);
                setSelectedEventType("FULL_LEAVE");
                setReason("");
                setEditingEventId(null);
                setMarkError(null);
                setLockMessage(null);
                if (typeof window !== "undefined") {
                  if (emp) {
                    window.localStorage.setItem("currentEmployeeId", emp.id);
                  } else {
                    window.localStorage.removeItem("currentEmployeeId");
                  }
                }
              }}
            >
              <option value="">Select employee…</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name} ({emp.role.toLowerCase()})
                </option>
              ))}
            </select>
          </div>

          <hr className="my-3 border-zinc-200 dark:border-zinc-800" />

          <h2 className="mb-2 text-base font-semibold">Mark Attendance</h2>
          <p className="mb-3 text-xs text-zinc-500 dark:text-zinc-400">
            Click on any date in the calendar to select it, then choose an
            attendance type and save.
          </p>

          <div className="mb-3">
            <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-300">
              Selected Date
            </label>
            <input
              type="text"
              value={selectedDate ?? "None"}
              readOnly
              className="w-full rounded-md border border-zinc-300 bg-zinc-100 px-2 py-1 text-xs
                          text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-300">
              Attendance Type
            </label>
            <select
              className="w-full rounded-md border border-zinc-300 bg-white px-2 py-1 text-xs dark:border-zinc-700 dark:bg-zinc-900"
              value={selectedEventType}
              onChange={(e) =>
                setSelectedEventType(
                  e.target.value as AttendanceEventDto["eventType"],
                )
              }
            >
              {eventTypeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-300">
              Reason (optional)
            </label>
            <textarea
              className="h-16 w-full resize-none rounded-md border border-zinc-300 px-2 py-1 text-xs dark:border-zinc-700 dark:bg-zinc-900"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          <button
            type="button"
            disabled={!selectedDate || !currentEmployee || isMarking}
            onClick={handleMarkAttendance}
            className="mb-2 w-full rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white disabled:cursor-not-allowed disabled:bg-zinc-500 dark:bg-zinc-100 dark:text-zinc-900"
          >
            {isMarking
              ? editingEventId
                ? "Updating…"
                : "Saving…"
              : editingEventId
                ? "Update Attendance"
                : "Save Attendance"}
          </button>

          {editingEventId && (
            <button
              type="button"
              className="mb-2 w-full rounded-md border border-zinc-400 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-600 dark:text-zinc-200"
              onClick={() => {
                setEditingEventId(null);
                setMarkError(null);
              }}
            >
              Cancel Edit
            </button>
          )}

          {markError && (
            <p className="mb-2 text-xs text-red-500">{markError}</p>
          )}

          <hr className="my-3 border-zinc-200 dark:border-zinc-800" />

          <h2 className="mb-2 text-base font-semibold">Month Lock</h2>
          <p className="mb-3 text-xs text-zinc-500 dark:text-zinc-400">
            When a month is locked, no further changes are allowed. Only
            managers/admins can lock a month.
          </p>
          <button
            type="button"
            disabled={
              !currentEmployee ||
              currentEmployee.role === "EMPLOYEE" ||
              isLocking
            }
            onClick={handleLockMonth}
            className="w-full rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white disabled:cursor-not-allowed disabled:bg-red-400"
          >
            {isLocking ? "Locking…" : `Lock ${month}`}
          </button>

          {currentEmployee && currentEmployee.role === "EMPLOYEE" && (
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Only MANAGER / ADMIN can lock months.
            </p>
          )}
          {lockMessage && (
            <p className="mt-2 text-xs text-zinc-300 dark:text-zinc-200">
              {lockMessage}
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="h-3 w-3 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span>{label}</span>
    </span>
  );
}
