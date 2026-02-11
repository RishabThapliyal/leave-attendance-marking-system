# Leave & Attendance Marking System – Full Project Documentation

This document describes every important part of the project: folder structure, files, main functions, and how they work together. Use it to understand the codebase and to explain the project in detail.

---

## 1. Project Overview

- **Purpose:** Enterprise leave and attendance marking using a calendar. Employees mark attendance (full/half leave, WFH, voluntary work); data is immutable, validated on the server, and audited.
- **Stack:** Next.js (App Router), React, TypeScript, FullCalendar, Redux Toolkit + RTK Query, Prisma, PostgreSQL, Zod.
- **Design (per spec):** Events are append-only (edit = cancel + create new); month-level locking; backend rule engine; full audit logging.

---

## 2. Folder Structure

```
major-project/
├── prisma/
│   ├── schema.prisma          # DB models (AttendanceEvent, Override, MonthLock, AuditLog)
│   └── migrations/
├── prisma.config.ts           # Prisma 7 config (DATABASE_URL)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, Providers, fonts
│   │   ├── page.tsx           # Main calendar UI (single page)
│   │   ├── globals.css        # Body + FullCalendar styling
│   │   └── api/
│   │       └── attendance/
│   │           ├── route.ts           # GET + POST /api/attendance
│   │           ├── [id]/cancel/route.ts  # POST /api/attendance/:id/cancel
│   │           └── lock/route.ts      # POST /api/attendance/lock
│   ├── data/
│   │   └── employees.ts       # Demo employees (EMPLOYEE / MANAGER / ADMIN)
│   ├── store/
│   │   ├── store.ts           # RTK store + attendanceApi reducer/middleware
│   │   ├── Providers.tsx      # Redux Provider wrapper
│   │   └── attendanceApi.ts   # RTK Query API (get, mark, cancel, lock)
│   ├── server/
│   │   ├── db/
│   │   │   └── prisma.ts      # Single Prisma client (pg adapter)
│   │   └── attendance/
│   │       ├── repository.ts  # DB access (create, cancel, overrides, locks, audit)
│   │       ├── service.ts     # Business logic (mark, get, cancel, lock)
│   │       ├── rules.ts       # Rule engine (month lock, add-event rules)
│   │       ├── validator.ts   # Zod schemas + safeParse for API
│   │       └── rules.test.ts  # Unit tests for rules
│   └── generated/             # Prisma client (do not edit)
├── .env                        # DATABASE_URL
├── package.json
└── README.md
```

---

## 3. File-by-File Description and Important Functions

### 3.1 `src/app/layout.tsx`

- **Role:** Root layout; wraps app in Redux `Providers` and loads Geist fonts.
- **Important:** `Providers` wraps `{children}` so every page has access to the RTK store.

---

### 3.2 `src/app/page.tsx`

- **Role:** Single-page UI: FullCalendar + employee selector + “Mark Attendance” form + Month Lock.
- **State:**
  - `month` – current calendar month (YYYY-MM), synced with FullCalendar `datesSet`.
  - `selectedDate` – date clicked on calendar (YYYY-MM-DD).
  - `selectedEventType`, `reason` – form fields for marking.
  - `editingEventId` – when user clicks an event, we’re in “edit” mode (cancel + create new).
  - `markError`, `lockMessage` – inline error/success messages.
  - `currentEmployee` – selected from dropdown (persisted in localStorage).
  - `toasts` – list of toast objects `{ id, message, type }` for success/error toasts (auto-dismiss 3s).
- **Important functions:**
  - **`toYearMonth(date)`** – converts `Date` to `"YYYY-MM"`.
  - **`handleDateClick(arg)`** – sets `selectedDate` to clicked date string.
  - **`handleMarkAttendance()`** – if `editingEventId` is set, calls `cancelAttendance` then `markAttendance`; else only `markAttendance`. Shows toast and sets `markError` on failure (with optional status prefix e.g. `[423]`).
  - **`handleEventClick(clickInfo)`** – for ACTIVE events only: fills form with event’s date, type, reason and sets `editingEventId` (edit mode).
  - **`handleLockMonth()`** – calls `lockMonth` with current employee and month; shows toast and `lockMessage`.
- **RTK hooks used:**
  - `useGetAttendanceQuery({ month, employeeId })` – when no employee, `employeeId: "no-employee"` to skip real request.
  - `useMarkAttendanceMutation()`, `useCancelAttendanceMutation()`, `useLockMonthMutation()`.
- **FullCalendar:** `dayGridPlugin`, `interactionPlugin`; `dayCellClassNames` adds `fc-day-selected` for `selectedDate`; `events` built from API data with colors by type and grey for CANCELLED.

---

### 3.3 `src/app/globals.css`

- **Role:** Global styles and FullCalendar theme.
- **Content:**
  - `:root` – `--background`, `--foreground` (used by `body`); dark mode override.
  - `body` – background, color, font-family.
  - `.fc` – FullCalendar CSS variables (border, today bg, etc.).
  - `.fc-theme-standard .fc-scrollgrid` – calendar border.
  - `.fc .fc-col-header` / `fc-col-header-cell` – header background and border.
  - `.fc .fc-col-header-cell-cushion` – day names (Sun–Sat) color and weight.
  - `.fc .fc-daygrid-day-number` – date number style.
  - `.fc .fc-daygrid-day` – cell background, border, transition.
  - `.fc .fc-daygrid-day:hover` – hover background and inset border.
  - `.fc .fc-daygrid-day.fc-day-selected` – selected cell background and border.
  - `.fc .fc-daygrid-day.fc-day-selected .fc-daygrid-day-number` – selected date number color and weight.

---

### 3.4 `src/store/store.ts`

- **Role:** Redux store with RTK Query.
- **Content:** `configureStore` with `attendanceApi.reducer` and `attendanceApi.middleware`; `setupListeners(store.dispatch)`; exports `RootState` and `AppDispatch`.

---

### 3.5 `src/store/Providers.tsx`

- **Role:** Client component that wraps children with `<Provider store={store}>`.

---

### 3.6 `src/store/attendanceApi.ts`

- **Role:** RTK Query API definition for attendance (matches spec: get, mark, cancel, lock).
- **Types:** `AttendanceEventDto`, `GetAttendanceArgs`, `MarkAttendanceBody`, `CancelAttendanceBody`, `LockMonthBody`.
- **Endpoints:**
  - **getAttendance** – `GET /attendance?month=&employeeId=` → `AttendanceEventDto[]`; `providesTags: [{ type: "Attendance", id: month }]`.
  - **markAttendance** – `POST /attendance` body; `invalidatesTags` for that month.
  - **cancelAttendance** – `POST /attendance/:id/cancel` with body `{ createdBy }`; invalidates `Attendance`.
  - **lockMonth** – `POST /attendance/lock` body; invalidates that month.
- **Exports:** `useGetAttendanceQuery`, `useMarkAttendanceMutation`, `useCancelAttendanceMutation`, `useLockMonthMutation`.

---

### 3.7 `src/data/employees.ts`

- **Role:** Demo employee list (no real auth).
- **Types:** `EmployeeRole` (EMPLOYEE | MANAGER | ADMIN), `Employee` (id, name, email, role).
- **Usage:** Dropdown in `page.tsx`; only MANAGER/ADMIN can lock month (button disabled for EMPLOYEE).

---

### 3.8 `src/app/api/attendance/route.ts`

- **GET:** Reads `month`, `employeeId` from query; validates with `safeParseMonthQuery`; calls `getAttendanceForMonth`; returns array of events (id, employeeId, date ISO, eventType, status, reason, createdBy, createdAt).
- **POST:** Parses JSON body with `safeParseMarkAttendanceBody`; calls `markAttendance(employeeId, createdBy, body)`; on success returns 201 with event; on failure returns `{ error: result.reason }` with `result.statusCode` (400/409/423).

---

### 3.9 `src/app/api/attendance/[id]/cancel/route.ts`

- **POST:** Reads event `id` from params; body `{ createdBy }` validated with Zod; calls `cancelAttendance({ eventId, createdBy })`; returns 200 `{ success: true }` or error with statusCode.

---

### 3.10 `src/app/api/attendance/lock/route.ts`

- **POST:** Body parsed with `safeParseLockBody`; calls `lockMonth({ body })`; on success returns 201 with lock record (id, employeeId, month, lockedBy, lockedAt); on failure returns error with statusCode (e.g. 409 if already locked).

---

### 3.11 `src/server/attendance/validator.ts`

- **Role:** Zod schemas and safe parsers for API input.
- **Schemas:**
  - `markAttendanceBodySchema` – date (coerced), eventType enum, optional reason, employeeId, createdBy.
  - `monthQuerySchema` – month (YYYY-MM regex), employeeId.
  - `lockBodySchema` – employeeId, month (YYYY-MM), lockedBy.
- **Functions:** `safeParseMarkAttendanceBody`, `safeParseMonthQuery`, `safeParseLockBody` (return safeParse result for 400 responses).

---

### 3.12 `src/server/attendance/rules.ts`

- **Role:** Backend rule engine (no DB access); returns `RuleResult` (allowed: true | allowed: false + reason + statusCode).
- **Functions:**
  - **checkMonthNotLocked(isMonthLocked)** – if locked, returns 423.
  - **checkCanAddEvent({ date, eventType, existingEventsOnDate })** – enforces: voluntary work only on weekend (400); one full-day per date (409); half AM/PM each once per date (409); no leave+WFH same day (409); if full-day already exists, no other event (409). Only ACTIVE events are considered; CANCELLED are ignored.
- **Types:** `HttpStatusForAttendance` (400 | 401 | 409 | 423), `EventOnDate` (eventType, status).

---

### 3.13 `src/server/attendance/service.ts`

- **Role:** Orchestrates repository and rules; used by API routes.
- **markAttendance({ employeeId, createdBy, body }):** Checks month not locked; loads events for that month/date; runs `checkCanAddEvent`; creates event via repository; writes audit log CREATE_EVENT; returns success + event or rule result with statusCode.
- **getAttendanceForMonth({ employeeId, month }):** Delegates to `getAttendanceEventsForMonth`.
- **cancelAttendance({ eventId, createdBy }):** Loads event; checks month not locked; creates override row (CANCEL); updates event status to CANCELLED; writes audit CANCEL_EVENT; returns success or rule result.
- **lockMonth({ body }):** If already locked returns 409; else creates month lock and audit LOCK_MONTH; returns success + lock.

---

### 3.14 `src/server/attendance/repository.ts`

- **Role:** All Prisma access for attendance.
- **Functions:**
  - **getMonthDateRange(month)** – returns start/end Date for month string.
  - **getAttendanceEventById(eventId)** – findUnique.
  - **getAttendanceEventsForMonth({ employeeId, month })** – findMany in date range, ordered by date.
  - **createAttendanceEvent(params)** – create one event.
  - **cancelAttendanceEvent(eventId)** – update status to CANCELLED.
  - **createAttendanceOverride({ originalEventId, action, newEventId?, createdBy })** – create override row.
  - **createMonthLock({ employeeId, month, lockedBy })** – create lock row.
  - **isMonthLocked({ employeeId, month })** – findUnique on employeeId_month; returns boolean.
  - **createAuditLog({ actorId, action, entityId, payload })** – create audit row.

---

### 3.15 `src/server/db/prisma.ts`

- **Role:** Single Prisma client instance (global in dev to avoid too many connections).
- **Setup:** Uses `@prisma/adapter-pg` with `pg` Pool and `process.env.DATABASE_URL`.

---

### 3.16 `prisma/schema.prisma`

- **Models:** AttendanceEvent (id, employeeId, date, eventType, status, reason, createdBy, createdAt); AttendanceEventOverride (originalEventId, action, newEventId, createdBy, createdAt); AttendanceMonthLock (employeeId, month, lockedBy, lockedAt); AttendanceAuditLog (actorId, action, entityId, payload, createdAt).
- **Enums:** AttendanceEventType, AttendanceStatus, AttendanceOverrideAction.
- **Generator:** prisma-client-js, binary engine; output ../src/generated.

---

## 4. How the UI and API Work Together

- User selects employee → `currentEmployee` set → `useGetAttendanceQuery({ month, employeeId })` runs and calendar shows that employee’s events.
- User clicks a date → `selectedDate` set; form shows that date; user picks type/reason and clicks Save → `markAttendance` mutation → POST /api/attendance → service runs rules and repository → success/error reflected in UI and toasts.
- User clicks an existing ACTIVE event → form prefilled, `editingEventId` set; Save → first `cancelAttendance` (POST …/cancel), then `markAttendance` (POST /attendance) → edit = cancel + create (per spec).
- Manager/Admin clicks Lock → `lockMonth` mutation → POST /api/attendance/lock → service creates lock and audit; further mark/cancel for that month get 423 from rules and show error in UI and toast.

---

## 5. Error Handling (Spec §13)

- **400** – Rule violation (e.g. voluntary work on weekday); validator validation errors.
- **401** – Reserved (resultUnauthorized in rules); not used by current API.
- **409** – Conflict (e.g. second full-day same date; leave+WFH same day; month already locked).
- **423** – Month locked; no mark/cancel allowed.

API returns `{ error: message }` with appropriate status; frontend shows message in form area and in toast, with optional `[status]` prefix.

---

## 6. Testing

- **Rule engine:** `src/server/attendance/rules.test.ts` – Vitest tests for `checkMonthNotLocked` and `checkCanAddEvent` (month lock, weekend voluntary, one full-day, half AM+PM, leave+WFH, cancelled ignored).
- Run: `npm run test -- src/server/attendance/rules.test.ts`

---
