# 🚀 Leave & Attendance System — Company-Level Upgrade Roadmap

**Step-by-step guide to take this project from "demo" to "production-ready" level.**



---

## 📋 Overview — Kya Kya Karna Hai

| # | Feature | Why Important | Week |
|---|---------|---------------|------|
| 1 | **Real Authentication** | Abhi sidebar se employee select — koi bhi kisi ka data dekh sakta | Week 1 |
| 2 | **API Authorization** | Session se employeeId, role-based access | Week 1 |
| 3 | **Leave Balance System** | Annual quota, consumed, remaining — HR ke liye zaroori | Week 2 |
| 4 | **Dashboard / Analytics** | Summary, charts, team overview | Week 3 |
| 5 | **Testing Expand** | API tests, integration tests — resume pe strong | Week 4 |
| 6 | **Notifications** | Email on leave approve/cancel | Week 4 |
| 7 | **UI Polish** | Loading, empty states, mobile responsive | Week 5 |

---

## 🔐 STEP 1 — Real Authentication (NextAuth.js)

**Sabse pehle yeh.** 

### Kya Karna Hai

1. **NextAuth.js install karo**
   ```bash
   npm install next-auth@beta bcryptjs
   npm install -D @types/bcryptjs
   ```

2. **Prisma mein User model add karo** (`prisma/schema.prisma`):
   ```prisma
   model User {
     id            String    @id @default(cuid())
     email         String    @unique
     passwordHash  String    @map("password_hash")
     name          String
     employeeId    String    @unique  // links to existing emp-111 etc
     role          UserRole  @default(EMPLOYEE)
     createdAt     DateTime  @default(now())
     updatedAt     DateTime  @updatedAt
   }

   enum UserRole {
     EMPLOYEE
     MANAGER
     ADMIN
   }
   ```

3. **Migration run karo**
   ```bash
   npx prisma migrate dev --name add_users_table
   ```

4. **NextAuth route banao** — `src/app/api/auth/[...nextauth]/route.ts`
   - Credentials provider use karo
   - Email + password → User table se verify
   - `bcrypt.compare()` for password
   - Session mein `userId`, `employeeId`, `role` rakhna

5. **Login page banao** — `src/app/login/page.tsx`
   - Form: email, password
   - `signIn("credentials", { email, password })`
   - Success → redirect `/`

6. **Middleware** — `src/middleware.ts`
   - Protected routes: `/` (main page)
   - Agar session nahi → redirect `/login`

7. **Seed users** — `prisma/seed.ts` mein demo users add karo (Alice, Bob etc) with hashed passwords

### Commands to Run

```bash
npm install next-auth@beta bcryptjs
npx prisma migrate dev --name add_users_table
```

### Complete Hone Par

- [ ] Login page pe jao → email/password daalo → calendar pe redirect
- [ ] Logout button → session clear
- [ ] Browser refresh ke baad bhi session maintain

### Sir Ko Dikhao

> "Sir, ab real login hai — email + password, database se verify. Demo employee selector hata diya."

---

## 🛡️ STEP 2 — API Authorization (Session-Based)

**Authentication ke baad** — ab API routes ko secure karo.

### Kya Karna Hai

1. **`employeeId` request body se mat lo — session se lo**
   - `GET /api/attendance?month=YYYY-MM` — session se `employeeId`
   - Manager/Admin agar kisi aur ka data dekhe to query param se `employeeId` (with permission check)

2. **Permission rules**
   - **EMPLOYEE**: Sirf apna data — `session.employeeId` use karo
   - **MANAGER**: Apna + team ka (abhi simple: same `employeeId` ya allow `?employeeId=xxx` with check)
   - **ADMIN**: Sab ka data

3. **Har API route mein** — `getServerSession(authOptions)` call karo, session nahi to `401`

4. **RTK Query update**
   - Request body se `employeeId`, `createdBy` hatao
   - Session se auto-inject (ya backend session use kare)

### Files to Edit

- `src/app/api/attendance/route.ts` — GET, POST
- `src/app/api/attendance/[id]/cancel/route.ts`
- `src/app/api/attendance/lock/route.ts`
- `src/store/attendanceApi.ts` — body shapes change
- `src/app/page.tsx` — sidebar employee selector hatao, session se current user dikhao

### Complete Hone Par

- [ ] Employee login → sirf apna calendar
- [ ] Manager login → apna + Lock month option
- [ ] Body mein `employeeId` bhejo to bhi backend ignore kare, session use kare

---

## 📊 STEP 3 — Leave Balance System

**Companies mein leave quota hota hai** — 20 days/year, consumed, remaining.

### Kya Karna Hai

1. **Prisma schema**
   ```prisma
   model LeaveBalance {
     id            String   @id @default(uuid())
     employeeId    String
     year          Int      // 2026
     annualQuota   Int      @default(20)  // days
     consumed      Int      @default(0)   // FULL_LEAVE + half of HALF_LEAVE
     createdAt     DateTime @default(now())
     updatedAt     DateTime @updatedAt

     @@unique([employeeId, year])
   }
   ```

2. **Logic**
   - Jab `FULL_LEAVE` create → `consumed += 1`
   - Jab `HALF_LEAVE_AM` ya `PM` → `consumed += 0.5`
   - Cancel pe `consumed` wapas kam karo

3. **API**
   - `GET /api/attendance/balance?year=2026` — returns `{ annualQuota, consumed, remaining }`
   - Session se employeeId

4. **UI**
   - Sidebar mein "Leave Balance: X / 20 days" dikhao

### Commands

```bash
npx prisma migrate dev --name add_leave_balance
```

---

## 📈 STEP 4 — Dashboard / Analytics Page

**HR ko summary chahiye.**

### Kya Karna Hai

1. **New page** — `src/app/dashboard/page.tsx`

2. **Data**
   - Is month kitne employees ne leave li
   - Team-wise breakdown (agar team structure ho)
   - Leave balance overview

3. **Charts** — `recharts` ya `chart.js`
   ```bash
   npm install recharts
   ```

4. **API** — `GET /api/attendance/stats?month=YYYY-MM`
   - Manager/Admin only
   - Returns: `{ totalLeaves, byType: {...}, byEmployee: [...] }`

---

## 🧪 STEP 5 — Testing Expand

**Resume pe "Testing" section strong banega.**

### Kya Karna Hai

1. **API integration tests** — Vitest + `@edge-runtime/jest-fetch-mock` ya `node-fetch`
   - `POST /api/attendance` — valid body → 201
   - Rule violation → 400
   - Locked month → 423

2. **Cancel + recreate flow test**
   - Create event → cancel → verify override + audit log

3. **Rules test expand** — `rules.test.ts` mein aur edge cases

---

## 📧 STEP 6 — Notifications (Basic)

**Leave mark/cancel pe email.**

### Kya Karna Hai

1. **Resend.com** (free tier) — signup, API key

2. **`.env`** — `RESEND_API_KEY=re_xxx`

3. **Service** — `src/server/email.ts`
   - `sendLeaveMarkedEmail(to, event)`
   - `sendLeaveCancelledEmail(to, event)`

4. **Hooks**
   - `markAttendance` success → email bhejo
   - `cancelAttendance` success → email bhejo

---

## 🎨 STEP 7 — UI Polish

### Checklist

- [ ] **Loading skeletons** — calendar load hone tak shimmer
- [ ] **Empty state** — "No events this month" message
- [ ] **Toast notifications** — `react-hot-toast` ya `sonner` for success/error
- [ ] **Mobile responsive** — calendar + form mobile pe sahi dikhe
- [ ] **Error boundaries** — agar API fail to user-friendly message

```bash
npm install sonner
```

---

## 📅 Recommended Timeline

| Week | Focus | Deliverable |
|------|-------|-------------|
| **1** | Auth + API Auth | Login page, session, protected APIs |
| **2** | Leave Balance | Balance table, API, sidebar display |
| **3** | Dashboard | Stats API, charts, `/dashboard` page |
| **4** | Testing + Notifications | Vitest API tests, Resend emails |
| **5** | UI Polish | Loading, toasts, mobile, empty states |

---

## ✅ Sir Ko Kaise Dikhao Progress

1. **Har step ke baad commit** — clear message: `feat: add NextAuth authentication`
2. **README update** — "Completed Features" mein move karo
3. **Chhota demo** — screen record ya live dikhao

---

## 🔗 Useful Links

- [NextAuth.js Credentials](https://authjs.dev/getting-started/installation?framework=next.js)
- [Prisma Migrations](https://www.prisma.io/docs/concepts/components/prisma-migrate)
- [Resend (Email)](https://resend.com/docs)
- [Recharts](https://recharts.org/)

---

## 📝 Quick Start (Aaj Hi)

**Sabse pehla command:**

```bash
cd major-project
npm install next-auth@beta bcryptjs
```

Phir Step 1 follow karo. Agar kahi atko to batao — ek ek karke solve karenge.

---

*Built with ❤️ — Upgrade roadmap for Leave & Attendance System*
