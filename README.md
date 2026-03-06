<div align="center">

# 📅 Leave & Attendance Marking System

**Enterprise-style attendance system built on FullCalendar — designed like a financial ledger.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-f59e0b?style=for-the-badge&logo=netlify&logoColor=black)](https://leave-attendance-system.netlify.app/)
[![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech)
[![NextAuth](https://img.shields.io/badge/Auth-NextAuth.js-purple?style=for-the-badge)](https://authjs.dev)

</div>

---

## 📌 Project Purpose

Employees can mark leave / WFH / voluntary work via a calendar UI with strong backend rules, month locking, and audit logging — designed to match a "financial ledger" style spec.

- ✅ Calendar UI for marking attendance events
- ✅ **Immutable events** — no in-place edits, cancel + recreate strategy
- ✅ Server-side rule engine for all operations
- ✅ Month-level locking & audit logging for payroll integration
- ✅ **Real authentication** — NextAuth.js with JWT sessions + bcrypt password hashing
- ✅ **Session-based API authorization** — all APIs secured, employeeId from session only
- ✅ Deployed on **Netlify (serverless)** + **Neon (Cloud PostgreSQL)**

> All timestamps stored in **UTC** in DB and converted to user's local timezone on the client.

---

## ✨ Features

### 🔐 Authentication & Authorization

- Real login system — email + password, verified against database
- Passwords stored as **bcrypt hashes** — never plain text
- **JWT sessions** — persist across browser refresh (30 day expiry)
- **Middleware route protection** — unauthenticated users redirected to `/login`
- **Role-based access control**:
  - `EMPLOYEE` — can only view/mark their own attendance
  - `MANAGER` — can mark attendance + lock months
  - `ADMIN` — full access

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
- Employees cannot lock months — enforced at API level

### 🧠 Rule Engine + Audit Logging

- Central rule engine (`rules.ts`) returning `{ allowed, reason, statusCode }`
- All create / cancel / lock operations write to an **audit log** table

---

## 📸 Screenshots

**Login Page**
![Login page](./public/Images/calendar-login.png)

**Main Calendar View**
![Main calendar view](./public/Images/calendar-main.png)

**Rule Engine Blocking Weekday Voluntary Work (400)**
![Rule violation example](./public/Images/calendar-rule-violation.png)

**Manager Successfully Locks Month**
![Locked Month example](./public/Images/calendar-month-lock-success.png)

**Locked Month Prevents Changes (423)**
![Locked month 423 error example](./public/Images/calendar-month-locked-error.png)

**Database — User Table**
![Database User events](./public/Images/db-user.png)

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
| **Styling**          | Tailwind CSS v4                                       |
| **Authentication**   | NextAuth.js v5 (Auth.js) — JWT strategy               |
| **Password Hashing** | bcryptjs                                              |
| **Backend**          | Next.js API Routes, Node.js, TypeScript               |
| **Validation**       | Zod                                                   |
| **ORM**              | Prisma v7                                             |
| **Database**         | PostgreSQL (Neon Cloud)                               |
| **Testing**          | Vitest (rule engine unit tests)                       |
| **Deployment**       | Netlify (serverless)                                  |

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/RishabThapliyal/leave-attendance-marking-system
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
AUTH_SECRET=your-random-32-char-secret
```

Generate `AUTH_SECRET`:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 4. Prisma setup

```bash
# Generate Prisma client
npx prisma generate

# Apply migrations (creates all tables including User)
npx prisma migrate dev
```

### 5. Seed demo users

```bash
npm run db:seed
```

This creates 3 demo accounts:

| Email             | Password    | Role     |
| ----------------- | ----------- | -------- |
| alice@example.com | password123 | EMPLOYEE |
| rohit@example.com | password123 | MANAGER  |
| admin@example.com | password123 | ADMIN    |

### 6. Run development server

```bash
npm run dev
```

Open **http://localhost:3000** → redirects to `/login`

---

## 🚀 Quick Demo (How to Use)

1. Go to `https://leave-attendance-system.netlify.app`
2. Login with `alice@example.com` / `password123`
3. Click a date on the calendar → Selected Date updates in sidebar
4. Choose an **Attendance Type** and optional **Reason**
5. Click **Save Attendance**
6. To **edit** an event — click on it → form pre-fills → **Update Attendance**
7. To **lock a month** — login as `rohit@example.com` (MANAGER) → click **Lock {month}**
8. To **sign out** — click **Sign out** in the sidebar

---

## 📡 API Reference

All routes are under `src/app/api/attendance/` and called via RTK Query.

> **All API routes require an active session.** Unauthenticated requests return `401 Unauthorized`.

### `GET /api/attendance`

```
?month=YYYY-MM&employeeId=EMP_ID
```

Returns all events for a given employee and month. `employeeId` from session for EMPLOYEE role — query param ignored.

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

`employeeId` and `createdBy` are taken from session — not required in body.

```json
{
  "date": "2026-02-10",
  "eventType": "FULL_LEAVE",
  "reason": "Optional text"
}
```

- ✅ `201 Created` — returns the created event
- ❌ `400 / 409 / 423` — rule violation or locked month
- ❌ `401` — not authenticated

---

### `POST /api/attendance/:id/cancel`

No body required — `createdBy` taken from session.

- ✅ `200` — event cancelled
- ❌ `401` — not authenticated
- ❌ `423` — month is locked

---

### `POST /api/attendance/lock`

MANAGER or ADMIN only. `lockedBy` taken from session.

```json
{
  "employeeId": "emp-111",
  "month": "2026-02"
}
```

- ✅ `201` — month locked
- ❌ `403` — EMPLOYEE role cannot lock
- ❌ `409` — already locked

---

## 🌍 Deployment

| Service               | Platform                |
| --------------------- | ----------------------- |
| Frontend + API        | Netlify (Serverless)    |
| Database              | Neon (Cloud PostgreSQL) |
| Environment Variables | Netlify Dashboard       |

**Required env vars on Netlify:**

- `DATABASE_URL` — Neon connection string
- `AUTH_SECRET` — JWT signing secret
- `NEXTAUTH_URL` — your live site URL
- `AUTH_TRUST_HOST` — `true`

**Build command:**

```
npx prisma generate && npx prisma migrate deploy && npm run build
```

**Live Demo:** https://leave-attendance-system.netlify.app/

---

## 📖 Extra Documentation

- **Internals** — file-by-file explanation, rule engine logic, DB schema: [`PROJECT_DOCUMENTATION.md`](./PROJECT_DOCUMENTATION.md)
- **🚀 Upgrade Roadmap** — step-by-step guide to next features (leave balance, dashboard, notifications): [`UPGRADE_ROADMAP.md`](./UPGRADE_ROADMAP.md)

---

<div align="center">

Built with ❤️ by **Rishab Thapliyal**

</div>
