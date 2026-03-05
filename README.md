<div align="center">

# 📅 Leave & Attendance Marking System

**Enterprise-style attendance system built on FullCalendar — designed like a financial ledger.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-f59e0b?style=for-the-badge&logo=netlify&logoColor=black)](https://leave-attendance-system.netlify.app/)
[![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech)

</div>

---

## 📌 Project Purpose

Employees can mark leave / WFH / voluntary work via a calendar UI with strong backend rules, month locking, and audit logging — designed to match a "financial ledger" style spec.

- ✅ Calendar UI for marking attendance events
- ✅ **Immutable events** — no in-place edits, cancel + recreate strategy
- ✅ Server-side rule engine for all operations
- ✅ Month-level locking & audit logging for payroll integration
- ✅ Deployed on **Netlify (serverless)** + **Neon (Cloud PostgreSQL)**

> All timestamps stored in **UTC** in DB and converted to user's local timezone on the client.

---

## ✨ Features

### 🗓️ FullCalendar UI

Color-coded events at a glance:

| Event Type         | Color     |
| ------------------ | --------- |
| Full Leave         | 🔴 Red    |
| Half Leave (AM/PM) | 🟠 Orange |
| WFH                | 🔵 Blue   |
| Voluntary Work     | 🟢 Green  |
| Cancelled          | ⚫ Grey   |

### 📋 Attendance Actions

- Mark **Full Leave / Half Leave (AM/PM) / WFH / Voluntary Work**
- Edit events via **cancel + create** (immutable strategy)
- Backend validation rules:
  - One full-day event per date
  - Half-day AM + PM allowed (max 2 per date)
  - Leave + WFH on same date — ❌ not allowed
  - Voluntary work allowed **weekends only**
  - No events on **locked months**

### 🔒 Month Locking

- Managers/Admins can lock a month for an employee
- Locked months reject all operations with `HTTP 423`

### 🧠 Rule Engine + Audit Logging

- Central rule engine (`rules.ts`) returning `{ allowed, reason, statusCode }`
- All create / cancel / lock operations write to an **audit log** table

### 👤 Demo Login & Roles

| Role     | Permissions                 |
| -------- | --------------------------- |
| EMPLOYEE | Mark / Cancel attendance    |
| MANAGER  | Mark / Cancel + Lock months |
| ADMIN    | Full access                 |

---

## 📸 Screenshots

**Main Calendar View**
![Main calendar view](./public/Images/calendar-main.png)

**Rule Engine Blocking Weekday Voluntary Work (400)**
![Rule violation example](./public/Images/calendar-rule-violation.png)

**Manager Successfully Locks Month**
![Locked Month example](./public/Images/calendar-month-lock-success.png)

**Locked Month Prevents Changes (423)**
![Locked month 423 error example](./public/Images/calendar-month-locked-error.png)

**Database — AttendanceEvent Table**
![Database attendance events](./public/Images/db-attendance-events.png)

**Database — AttendanceMonthLock Table**
![Database attendance MonthLock](./public/Images/db-attendance-month-locks.png)

**Database — AttendanceAuditLog Table**
![Database attendance AuditLog](./public/Images/db-attendance-audit-log.png)

**Database — AttendanceEventOverride Table**
![Database attendance Override](./public/Images/db-attendance-overrides.png)

---

## 🛠️ Tech Stack

| Layer                | Technology                                            |
| -------------------- | ----------------------------------------------------- |
| **Frontend**         | Next.js (App Router), React, TypeScript, FullCalendar |
| **State Management** | Redux Toolkit + RTK Query                             |
| **Styling**          | Tailwind CSS                                          |
| **Backend**          | Next.js API Routes, Node.js, TypeScript               |
| **Validation**       | Zod                                                   |
| **ORM**              | Prisma v7                                             |
| **Database**         | PostgreSQL (Neon Cloud)                               |
| **Testing**          | Vitest (rule engine)                                  |
| **Deployment**       | Netlify (serverless)                                  |

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd major-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB_NAME
```

Example (local Postgres):

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/attendance_db
```

### 4. Prisma setup

```bash
# Generate Prisma client
npx prisma generate

# Apply migrations
npx prisma migrate dev
```

### 5. Run development server

```bash
npm run dev
```

Open **http://localhost:3000**

---

## 🚀 Quick Demo (How to Use)

1. Go to the right sidebar → **Login / Employee**
2. Select an employee (e.g. `Alice Sharma (employee)`)
3. Click a date on the calendar → Selected Date updates
4. Choose an **Attendance Type** and optional **Reason**
5. Click **Save Attendance**
6. To **edit** an event — click on it → form pre-fills → **Update Attendance**
7. To **lock a month** — switch to a MANAGER/ADMIN employee → click **Lock {month}**

---

## 📡 API Reference

All routes are under `src/app/api/attendance/` and called via RTK Query.

### `GET /api/attendance`

```
?month=YYYY-MM&employeeId=EMP_ID
```

Returns all events for a given employee and month.

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

---

### `POST /api/attendance`

```json
{
  "date": "2026-02-10",
  "eventType": "FULL_LEAVE",
  "reason": "Optional text",
  "employeeId": "emp-111",
  "createdBy": "emp-111"
}
```

- ✅ `201 Created` — returns the created event
- ❌ `400 / 409 / 423` — returns `{ "error": "..." }` on rule violation or locked month

---

### `POST /api/attendance/:id/cancel`

```json
{
  "createdBy": "emp-111"
}
```

Cancels the event — marks it `CANCELLED`, creates an override + audit log entry.

---

### `POST /api/attendance/lock`

```json
{
  "employeeId": "emp-111",
  "month": "2026-02",
  "lockedBy": "emp-222"
}
```

- ✅ Returns created month lock
- ❌ `409` — if month is already locked

---

## 🌍 Deployment

| Service               | Platform                |
| --------------------- | ----------------------- |
| Frontend + API        | Netlify (Serverless)    |
| Database              | Neon (Cloud PostgreSQL) |
| Environment Variables | Netlify Dashboard       |

**Live Demo:** https://leave-attendance-system.netlify.app/

---

## 📖 Extra Documentation

- **Internals** — file-by-file explanation, rule engine logic, DB schema: [`PROJECT_DOCUMENTATION.md`](./PROJECT_DOCUMENTATION.md)
- **🚀 Upgrade Roadmap** — step-by-step guide to make this project company-level (auth, leave balance, dashboard, testing): [`UPGRADE_ROADMAP.md`](./UPGRADE_ROADMAP.md)

---

<div align="center">

Built with ❤️ by **Rishab Thapliyal**

</div>
