## Leave & Attendance Marking System

Enterprise-style attendance system built on top of a calendar (FullCalendar).  
Employees can mark leave / WFH / voluntary work with strong backend rules, month locking, and audit logging – designed to match a “financial ledger” style spec.

---

## Project Purpose

- Implement a **robust leave & attendance system** that:
  - Uses a **calendar UI** for marking events.
  - Treats attendance as **immutable events** (no in-place edits).
  - Enforces **server-side rules** for all operations.
  - Supports **month-level locking** and **audit logging** for future payroll/integrations.

This project was built from a formal specification (PDF) which defines the database schema, API endpoints, rules, and definition of done.

---

## Features

- **FullCalendar UI**
  - Month view with color-coded events:
    - Full Leave – red
    - Half Leave (AM/PM) – orange
    - WFH – blue
    - Voluntary Work – green
    - Cancelled – grey
  - Clear selected-day highlight and hover states.

- **Attendance Actions**
  - Mark **Full Leave / Half Leave (AM/PM) / WFH / Voluntary Work**.
  - Edit existing events:
    - Implemented as **cancel + create** (old event cancelled, new event created).
  - Backend validation for:
    - One full-day event per date.
    - Half-day AM + PM allowed (max 2 half-days per date).
    - Leave + WFH on the same date not allowed.
    - Voluntary work allowed **weekends only**.
    - No new events on **locked months**.

- **Month Locking**
  - Managers/Admins can **lock a month** for an employee.
  - Once locked, further mark/cancel operations for that month are rejected with HTTP 423.

- **Rule Engine + Audit Logging**
  - Central rule engine (`rules.ts`) returning `{ allowed, reason, statusCode }`.
  - All create/cancel/lock operations write to an **audit log** table.

- **Demo Login & Roles**
  - Simple dropdown to “log in” as:
    - EMPLOYEE – cannot lock months.
    - MANAGER / ADMIN – can lock months.
  - Selected employee is stored in `localStorage`.

- **Error UX**
  - Inline error messages with HTTP status (e.g. `[409] Leave and WFH on the same day are not allowed.`).
  - Toasts (green for success, red for error) that auto-dismiss after a short time.

---

## Screenshots

"Main calender view"
![Main calendar view](./public/Images/calendar-main.png)

“Rule engine blocking voluntary work on weekdays (400)”
![Rule violation example](./public/Images/calendar-rule-violation.png)

“Manager successfully locks the month”
![Locked Month example](./public/Images/calendar-month-lock-success.png)

“Locked month prevents new changes (423)”
![Locked month 423 error example](./public/Images/calendar-month-locked-error.png)

"AttendanceEvent table"
![Database attendance events](./public/Images/db-attendance-events.png)

"AttendanceMonthLock table"
![Database attendance MonthLock](./public/Images/db-attendance-month-locks.png)

"AttendanceAuditLog table"
![Database attendance AuditLog](./public/Images/db-attendance-audit-log.png)

"AttendanceEventOverride table"
![Database attendance Override](./public/Images/db-attendance-overrides.png)

---

## Tech Stack

- **Frontend**
  - Next.js (App Router)
  - React + TypeScript
  - FullCalendar (`@fullcalendar/react`, `@fullcalendar/daygrid`, `@fullcalendar/interaction`)
  - Tailwind CSS (via `@import "tailwindcss";` and utility classes)
  - Redux Toolkit + RTK Query

- **Backend**
  - Next.js API Routes (Node.js)
  - TypeScript
  - Zod (validation)
  - Prisma ORM (v7)
  - PostgreSQL

- **Testing**
  - Vitest (for rule engine tests)

---

## Installation & Setup

### 1. Clone repository

```bash
git clone <your-repo-url>
cd major-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the project root (`major-project/.env`):

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB_NAME
```

Example (local Postgres):

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/attendance_db
```

Ensure PostgreSQL is running and the database exists (or use `createdb attendance_db`).

### 4. Prisma generate & migrations

Generate Prisma client:

```bash
npx prisma generate
```

Apply migrations (creates tables defined in `prisma/schema.prisma`):

```bash
npx prisma migrate dev
```

This will run the migrations under `prisma/migrations/` and keep your DB schema in sync.

### 5. Run the development server

```bash
npm run dev
```

Then open:

- `http://localhost:3000`

### 6. How to use (quick demo)

1. Go to the right sidebar: **Login / Employee**.
2. Select an employee (e.g. `Alice Sharma (employee)`).
3. Click a date on the calendar → Selected Date updates.
4. Choose an **Attendance Type** and optional **Reason**.
5. Click **Save Attendance**.
6. To edit an event, click on the event in the calendar → form pre-fills → **Update Attendance**.
7. To lock a month, switch to a **MANAGER/ADMIN** employee and click **Lock {month}**.

---

## API Endpoints

All API routes are implemented using Next.js App Router under `src/app/api/attendance/` and are called via RTK Query from the frontend.

### `GET /api/attendance?month=YYYY-MM&employeeId=EMP_ID`

- Returns all events for a given employee and month.
- Response (simplified):

```json
[
  {
    "id": "uuid",
    "employeeId": "emp-111",
    "date": "2026-02-10T00:00:00.000Z",
    "eventType": "FULL_LEAVE",
    "status": "ACTIVE",
    "reason": "Doctor appointment",
    "createdBy": "emp-111",
    "createdAt": "2026-02-01T10:00:00.000Z"
  }
]
```

### `POST /api/attendance`

- Body:

```json
{
  "date": "2026-02-10",
  "eventType": "FULL_LEAVE",
  "reason": "Optional text",
  "employeeId": "emp-111",
  "createdBy": "emp-111"
}
```

- On success: returns the created event (`201 Created`).
- On rule violation / locked month: returns `{ "error": "..." }` with status `400 / 409 / 423`.

### `POST /api/attendance/:id/cancel`

- Body:

```json
{
  "createdBy": "emp-111"
}
```

- Cancels the event (marks it CANCELLED and creates an override + audit log).

### `POST /api/attendance/lock`

- Body:

```json
{
  "employeeId": "emp-111",
  "month": "2026-02",
  "lockedBy": "emp-222" // typically a manager/admin
}
```

- On success: returns created month lock.
- If already locked: returns `{ "error": "This month is already locked." }` with status `409`.

---

## Live Demo Link

Live demo: https://leave-attendance-system.netlify.app/

## Extra Documentation

- **Detailed internals:** see `PROJECT_DOCUMENTATION.md` (file-by-file explanation, rule engine, DB, etc.).
