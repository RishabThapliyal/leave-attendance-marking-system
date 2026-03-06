# Leave & Attendance Marking System – Full Project Documentation

This document describes every important part of the project: folder structure, files, main functions, and how they work together. Use it to understand the codebase and to explain the project in detail.

---

## 1. Project Overview

- **Purpose:** Enterprise leave and attendance marking using a calendar. Employees mark attendance (full/half leave, WFH, voluntary work); data is immutable, validated on the server, and audited.
- **Stack:** Next.js (App Router), React, TypeScript, FullCalendar, Redux Toolkit + RTK Query, Prisma, PostgreSQL, Zod, NextAuth.js v5, bcryptjs.
- **Architecture Principles (as per spec):**
  - Events are append-only (edit = cancel + create new).
  - Month-level locking.
  - Centralized backend rule engine.
  - Full audit logging for all actions.
  - **Real authentication** — JWT sessions via NextAuth.js, bcrypt hashed passwords.
  - **Session-based API authorization** — all API routes secured, `employeeId` from session only.

---

## 2. Folder Structure

```
major-project/
├── prisma/
│   ├── schema.prisma          # DB models (AttendanceEvent, Override, MonthLock, AuditLog, User)
│   ├── seed.ts                # Demo users (Alice, Rohit, Admin) with hashed passwords
│   └── migrations/
├── prisma.config.ts           # Prisma 7 config (DATABASE_URL)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, Providers, fonts, viewport
│   │   ├── page.tsx           # Main calendar UI — session-based, no employee dropdown
│   │   ├── globals.css        # Body + FullCalendar styling (Tailwind v4)
│   │   ├── login/
│   │   │   └── page.tsx       # Login form (email + password, signIn())
│   │   └── api/
│   │       ├── auth/
│   │       │   └── [...nextauth]/route.ts  # NextAuth handlers (GET + POST)
│   │       └── attendance/
│   │           ├── route.ts              # GET + POST /api/attendance (session-secured)
│   │           ├── [id]/cancel/route.ts  # POST /api/attendance/:id/cancel (session-secured)
│   │           └── lock/route.ts         # POST /api/attendance/lock (MANAGER/ADMIN only)
│   ├── lib/
│   │   └── auth.ts            # NextAuth config (credentials provider, JWT callbacks)
│   ├── types/
│   │   └── next-auth.d.ts     # TypeScript: extend session with employeeId, role
│   ├── store/
│   │   ├── store.ts           # RTK store + attendanceApi reducer/middleware
│   │   ├── Providers.tsx      # Redux Provider + SessionProvider wrapper
│   │   └── attendanceApi.ts   # RTK Query API (get, mark, cancel, lock) + credentials: include
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
├── proxy.ts                   # Route protection middleware (renamed from middleware.ts for Next.js 16)
├── .env                       # DATABASE_URL, AUTH_SECRET
├── package.json
└── README.md
```

---

## 3. File-by-File Description and Important Functions

### 3.1 `src/lib/auth.ts` ⭐ NEW

**Role:** NextAuth.js configuration — the brain of the authentication system.

- **Provider:** `Credentials` — email + password login.
- **`authorize(credentials)`:**
  1. Checks email + password present.
  2. Lazy-loads Prisma (`await import(...)`) — needed because middleware runs on Edge Runtime where full Node.js is not available.
  3. Queries `User` table via raw SQL (`$queryRaw`) — fetches id, email, name, employeeId, role, password_hash.
  4. Runs `bcrypt.compare(password, hash)` — if mismatch returns null (login fails).
  5. Returns user object `{ id, email, name, employeeId, role }` on success.
- **`jwt` callback:** On first login, copies `userId`, `employeeId`, `role` into JWT token.
- **`session` callback:** Copies token fields into `session.user` — makes them available client-side.
- **Config:** Login page `/login`, JWT strategy, 30-day session.
- **Exports:** `handlers` (for API route), `signIn`, `signOut`, `auth` (for server-side session).

---

### 3.2 `src/types/next-auth.d.ts` ⭐ NEW

**Role:** TypeScript declaration file — extends NextAuth's default types.

- By default NextAuth's `session.user` only has `name`, `email`, `image`.
- This file adds `employeeId` and `role` to `User`, `Session`, and `JWT` interfaces.
- Without this, TypeScript would throw errors when accessing `session.user.employeeId`.

---

### 3.3 `src/proxy.ts` ⭐ NEW (was middleware.ts)

**Role:** Route protection — runs on every request before the page renders.

- Checks if user is logged in (`req.auth`).
- If **not logged in** and not on `/login` → redirect to `/login`.
- If **logged in** and on `/login` → redirect to `/`.
- API routes, static files, and Next.js internals are excluded via `matcher` config.

```
User visits any page
        |
   proxy.ts runs
        |
   ┌────┴────┐
   v         v
Logged in?  Not logged in?
   |              |
   v              v
Show page    Redirect /login
```

---

### 3.4 `src/app/login/page.tsx` ⭐ NEW

**Role:** Login form UI.

- Email + password inputs.
- On submit: calls `signIn("credentials", { email, password, redirect: false })`.
- If error → shows "Invalid email or password" message.
- If success → `router.push(callbackUrl)` — redirects to original destination.
- `useSearchParams()` wrapped in `<Suspense>` — required for Next.js production build.

---

### 3.5 `src/app/api/auth/[...nextauth]/route.ts` ⭐ NEW

**Role:** NextAuth API endpoint — 2 lines only.

```ts
import { handlers } from "@/lib/auth";
export const { GET, POST } = handlers;
```

NextAuth automatically handles:

- `POST /api/auth/signin` — login
- `POST /api/auth/signout` — logout
- `GET /api/auth/session` — current session

---

### 3.6 `src/app/layout.tsx` ✏️ UPDATED

**Role:** Root layout.

- Added `SessionProvider` inside `Providers` — enables `useSession()` hook in client components.
- Added `viewport` export — `width: device-width, initialScale: 1` for correct mobile rendering.

---

### 3.7 `src/app/page.tsx` ✏️ UPDATED

**Role:** Main calendar UI.

**What changed from original:**

- Removed employee dropdown + `localStorage` — replaced with `useSession()`.
- `currentEmployee` now built from session: `session.user.employeeId`, `name`, `role`.
- Sidebar shows "Signed in" section with user name, role, and **Sign out** button.
- `useGetAttendanceQuery` skips if session not loaded (`skip: !currentEmployee`).

**Important State Variables**

- `month` – Current calendar month (`YYYY-MM`).
- `selectedDate` – Clicked date (`YYYY-MM-DD`).
- `selectedEventType`, `reason` – Form inputs.
- `editingEventId` – Indicates edit mode (cancel + create).
- `markError`, `lockMessage` – Inline feedback messages.
- `currentEmployee` – From session (employeeId, name, role).
- `toasts` – Array of toast messages `{ id, message, type }`.

**Important Functions:**

- **`toYearMonth(date)`** — Converts a `Date` to `"YYYY-MM"`.
- **`handleDateClick(arg)`** — Sets `selectedDate` when a calendar date is clicked.
- **`handleMarkAttendance()`** — If editing: cancel first, then create. Shows toast on success/failure.
- **`handleEventClick(clickInfo)`** — Prefills form for ACTIVE events only. Sets `editingEventId`.
- **`handleLockMonth()`** — Calls `lockMonth` mutation. Only enabled for MANAGER/ADMIN.

---

### 3.8 `src/store/Providers.tsx` ✏️ UPDATED

**Role:** Client component wrapping children with Redux + Session providers.

```tsx
// Before:
<Provider store={store}>{children}</Provider>

// After:
<SessionProvider>
  <Provider store={store}>{children}</Provider>
</SessionProvider>
```

`SessionProvider` makes `useSession()` hook available in all client components.

---

### 3.9 `src/store/attendanceApi.ts` ✏️ UPDATED

**Role:** RTK Query API definition.

**What changed:** Added `credentials: "include"` to `fetchBaseQuery` — ensures session cookies are sent with every API request (required for session-based auth).

```ts
const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  credentials: "include", // ← added
});
```

---

### 3.10 `src/app/api/attendance/route.ts` ✏️ UPDATED

**Role:** GET and POST attendance endpoints — now session-secured.

**GET changes:**

- Calls `await auth()` — returns 401 if no session.
- EMPLOYEE role: ignores `employeeId` query param, always uses `session.user.employeeId`.
- MANAGER/ADMIN: can query any employee.

**POST changes:**

- Calls `await auth()` — returns 401 if no session.
- `employeeId` and `createdBy` taken from `session.user.employeeId` — body values ignored for security.

---

### 3.11 `src/app/api/attendance/[id]/cancel/route.ts` ✏️ UPDATED

**Role:** Cancel attendance endpoint — now session-secured.

- Calls `await auth()` — returns 401 if no session.
- `createdBy` from `session.user.employeeId` — no longer in request body.

---

### 3.12 `src/app/api/attendance/lock/route.ts` ✏️ UPDATED

**Role:** Lock month endpoint — MANAGER/ADMIN only.

- Calls `await auth()` — returns 401 if no session.
- Role check: if `role === "EMPLOYEE"` → returns 403 Forbidden.
- `lockedBy` from `session.user.employeeId` — not from body.

---

### 3.13 `prisma/schema.prisma` ✏️ UPDATED

**Added:** `User` model and `UserRole` enum.

```prisma
model User {
  id           String   @id @default(cuid())
  email        String   @unique
  passwordHash String   @map("password_hash")
  name         String
  employeeId   String   @unique  // links to emp-111, emp-222 etc
  role         UserRole @default(EMPLOYEE)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

enum UserRole {
  EMPLOYEE
  MANAGER
  ADMIN
}
```

**How User links to AttendanceEvent:**

```
User.employeeId ("emp-111")  ←→  AttendanceEvent.employeeId ("emp-111")
```

---

### 3.14 `prisma/seed.ts` ⭐ NEW

**Role:** Creates demo users in the database with hashed passwords.

- Uses `pg` Pool with raw SQL (not Prisma client — to avoid stale generated client issues).
- `bcrypt.hash("password123", 10)` — hashes password before storing.
- `ON CONFLICT (email) DO UPDATE` — safe to run multiple times.

**Demo accounts created:**

| Email             | Password    | Role     | EmployeeId |
| ----------------- | ----------- | -------- | ---------- |
| alice@example.com | password123 | EMPLOYEE | emp-111    |
| rohit@example.com | password123 | MANAGER  | emp-222    |
| admin@example.com | password123 | ADMIN    | emp-333    |

Run with: `npm run db:seed`

---

### 3.15 `src/server/attendance/validator.ts` (unchanged)

- **Role:** Zod schemas and safe parsers for API input.
- **Schemas:** `markAttendanceBodySchema`, `monthQuerySchema`, `lockBodySchema`.
- Note: `employeeId` and `createdBy` still in schema for backward compatibility but API routes override them from session.

---

### 3.16 `src/server/attendance/rules.ts` (unchanged)

- **Role:** Backend rule engine — no DB access. Returns `RuleResult`.
- **`checkMonthNotLocked(isMonthLocked)`** — returns 423 if locked.
- **`checkCanAddEvent({ date, eventType, existingEventsOnDate })`** — enforces all attendance rules.

---

### 3.17 `src/server/attendance/service.ts` (unchanged)

- **Role:** Orchestrates repository and rules.
- `markAttendance`, `getAttendanceForMonth`, `cancelAttendance`, `lockMonth`.

---

### 3.18 `src/server/attendance/repository.ts` (unchanged)

- **Role:** All Prisma DB access for attendance.
- Functions: `getAttendanceEventById`, `getAttendanceEventsForMonth`, `createAttendanceEvent`, `cancelAttendanceEvent`, `createAttendanceOverride`, `createMonthLock`, `isMonthLocked`, `createAuditLog`.

---

### 3.19 `src/server/db/prisma.ts` (unchanged)

- **Role:** Single Prisma client instance using `@prisma/adapter-pg` with `pg` Pool.

---

## 4. How the UI and API Work Together (Detailed Flow)

```
Browser (React + FullCalendar)
        ↓
SessionProvider (NextAuth — session available)
        ↓
RTK Query (Frontend Data Layer) — credentials: include
        ↓
Next.js API Route — auth() session check
        ↓
Service Layer (Business Logic)
        ↓
Rule Engine (Validation)
        ↓
Repository (Prisma DB Access)
        ↓
PostgreSQL Database (Neon)
```

---

## 4.1 Authentication Flow (NEW)

```
User visits /
        ↓
proxy.ts checks session
        ↓
No session → redirect /login
        ↓
User enters email + password
        ↓
signIn("credentials") → POST /api/auth/signin
        ↓
auth.ts authorize():
  - DB lookup by email
  - bcrypt.compare(password, hash)
        ↓
Match? → JWT created (userId, employeeId, role)
        ↓
Cookie set in browser
        ↓
Redirect to /
        ↓
useSession() → currentEmployee from session
        ↓
Calendar loads for logged-in employee
```

---

## 4.2 Mark Attendance Flow

### Step 1 — User clicks date on calendar

```ts
handleDateClick(arg) → setSelectedDate(arg.dateStr)
```

### Step 2 — User selects attendance type and clicks Save

```ts
handleMarkAttendance();
```

### Step 3 — RTK Query sends request

```
POST /api/attendance
Cookie: session-token (auto-sent, credentials: include)
Body: { date, eventType, reason }
```

Note: `employeeId` and `createdBy` no longer needed in body — taken from session on server.

### Step 4 — API route (route.ts)

1. `await auth()` — verify session, get `employeeId` from `session.user`.
2. Validate body with Zod.
3. Call `markAttendance({ employeeId, createdBy, body })`.

### Step 5 — Service Layer

1. `checkMonthNotLocked()` — return 423 if locked.
2. Fetch existing events for that date.
3. `checkCanAddEvent()` — enforce rules.
4. `createAttendanceEvent()` — write to DB.
5. `createAuditLog()` — write audit entry.

### Step 6 — UI Update

- Returns `201 Created`.
- RTK Query invalidates `{ type: "Attendance", id: month }`.
- Calendar automatically refetches and updates.
- Success toast appears.

---

## 4.3 Edit Flow (Cancel + Create Pattern — unchanged)

Events are immutable — never updated directly.

1. User clicks ACTIVE event → `handleEventClick` prefills form, sets `editingEventId`.
2. User clicks Save → `handleMarkAttendance()`:
   - `cancelAttendance(editingEventId)` → marks old event CANCELLED, creates override row, audit log.
   - `markAttendance(...)` → creates new event, audit log.
3. Result: old event CANCELLED, new event ACTIVE. Immutable history preserved.

---

## 4.4 Month Lock Flow

1. MANAGER/ADMIN clicks "Lock Month".
2. `POST /api/attendance/lock` with session cookie.
3. API route checks `session.user.role` — EMPLOYEE gets 403.
4. Service: `isMonthLocked()` check → if not locked, `createMonthLock()` + audit log.
5. Future mark/cancel → `checkMonthNotLocked()` returns 423.

---

## 4.5 Caching & Automatic Sync (unchanged)

RTK Query `providesTags` / `invalidatesTags`:

- Event created/cancelled/month locked → invalidates cache → refetches → UI updates automatically.

---

## 5. Database Schema

### Tables Overview

| Table                     | Purpose                                   |
| ------------------------- | ----------------------------------------- |
| `AttendanceEvent`         | Leave/WFH/etc events (append-only)        |
| `AttendanceEventOverride` | Links cancelled → new event (edit trail)  |
| `AttendanceMonthLock`     | Records locked months per employee        |
| `AttendanceAuditLog`      | All actions logged (create, cancel, lock) |
| `User` ⭐ NEW             | Login users with hashed passwords         |

### How User links to Attendance

```
User table                    AttendanceEvent table
──────────────                ─────────────────────
id: "abc123"                  employeeId: "emp-111"
employeeId: "emp-111"  ←────  (same value = same person)
email: "alice@..."
passwordHash: "$2b$..."
role: "EMPLOYEE"
```

---

## 6. Error Handling

| Status | Meaning                                         |
| ------ | ----------------------------------------------- |
| 400    | Rule violation (e.g. voluntary work on weekday) |
| 401    | Not authenticated — no valid session            |
| 403    | Forbidden — EMPLOYEE trying to lock month       |
| 409    | Conflict (duplicate event, already locked)      |
| 423    | Month locked — no changes allowed               |

API returns `{ error: message }` with status code. Frontend shows message in form + toast with `[status]` prefix.

---

## 7. Testing

- **Rule engine unit tests:** `src/server/attendance/rules.test.ts`
- **Framework:** Vitest
- **Coverage:** `checkMonthNotLocked` (lock/unlock), `checkCanAddEvent` (weekend voluntary, full-day, half AM+PM, leave+WFH, cancelled events ignored)
- **Run:** `npm run test -- src/server/attendance/rules.test.ts`

---

## 8. Environment Variables

| Variable          | Purpose                           | Required      |
| ----------------- | --------------------------------- | ------------- |
| `DATABASE_URL`    | Neon PostgreSQL connection string | ✅            |
| `AUTH_SECRET`     | JWT signing secret (32+ chars)    | ✅            |
| `NEXTAUTH_URL`    | Live site URL (production only)   | ✅ Production |
| `AUTH_TRUST_HOST` | `true` — required in production   | ✅ Production |

---

## 9. Deployment (Vercel + Neon)

**Build command:**

```
npx prisma generate && npx prisma migrate deploy && npm run build
```

- `prisma generate` — regenerates Prisma client for deployment environment.
- `prisma migrate deploy` — applies any pending migrations to live Neon DB.
- `next build` — compiles Next.js app.

**After first deploy:**

```bash
# Seed demo users into live Neon DB (run once locally)
npm run db:seed
```

---

## Summary

The architecture follows enterprise best practices:

- **Authentication** — real login, hashed passwords, JWT sessions
- **Authorization** — all APIs session-secured, role-based access
- **Immutable events** — append-only, cancel + recreate pattern
- **Backend rule engine** — all validation server-side
- **Repository pattern** — DB access isolated
- **Audit logs** — every action tracked
- **RTK Query** — automatic UI sync on data changes

This makes the system: **Maintainable · Testable · Scalable · Production-ready**
