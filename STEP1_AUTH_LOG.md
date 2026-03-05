# Step 1 — Authentication Implementation Log

Yeh file Step 1 ke har sub-step ko document karti hai. Kya kiya, kyun, aur kaise use karna hai.

---

## Step 1a — Dependencies Install ✅

### Kya kiya
```bash
npm install next-auth@beta bcryptjs
npm install -D @types/bcryptjs
```

- **next-auth@beta** — NextAuth v5 (Auth.js), login/session ke liye
- **bcryptjs** — password hash/verify ke liye (database mein plain password nahi store)
- **@types/bcryptjs** — TypeScript types

### Kaise use
- NextAuth = login flow, session, protected routes
- bcrypt = `bcrypt.hash()` (register pe) aur `bcrypt.compare()` (login pe)

---

## Step 1b — Prisma Schema: User Model ✅

### Kya kiya
**File:** `prisma/schema.prisma`

User model aur UserRole enum add kiye:

```prisma
model User {
  id           String   @id @default(cuid())
  email        String   @unique
  passwordHash String   @map("password_hash")
  name         String
  employeeId   String   @unique   // emp-111, emp-222 etc se link
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

### Kaise use
- Login pe email + password → User table se verify
- `employeeId` attendance events se match karega (emp-111, emp-222)
- `role` se permission decide hogi (EMPLOYEE / MANAGER / ADMIN)

---

## Step 1c — Database Migration ✅

### Kya kiya
```bash
npx prisma migrate dev --name add_users_table
```

### Result
- `prisma/migrations/20260226050819_add_users_table/` — migration file
- Database mein `User` table create ho gaya
- `UserRole` enum bhi add ho gaya

### Kaise use
- Ab User records insert kar sakte ho (seed ya manually)
- Prisma Client se `prisma.user.findUnique()`, `prisma.user.create()` etc

---

## Step 1d — NextAuth Config ✅

### Kya kiya

**File 1:** `src/lib/auth.ts`
- NextAuth with Credentials provider
- `authorize()`: email se User find → `bcrypt.compare()` se password verify
- Session mein `userId`, `employeeId`, `role` store (JWT strategy)
- Login page: `/login`
- Session max 30 days

**File 2:** `src/types/next-auth.d.ts`
- Session aur JWT types extend kiye — `employeeId`, `role` add

### Kaise use
- `signIn("credentials", { email, password })` — login
- `signOut()` — logout
- `auth()` — server pe session get (API routes, Server Components)
- `session.user.employeeId` — attendance API mein use hoga

### Zaroori: `.env` mein add karo
```env
AUTH_SECRET=your-random-secret-here
```
Generate: `openssl rand -base64 32` ya koi random 32+ char string

---

## Step 1e — NextAuth API Route ✅

### Kya kiya

**File:** `src/app/api/auth/[...nextauth]/route.ts`

```ts
import { handlers } from "@/lib/auth";
export const { GET, POST } = handlers;
```

### Kaise use
- `POST /api/auth/signin` — login
- `POST /api/auth/signout` — logout
- `GET /api/auth/session` — current session (client se fetch)
- Yeh sab NextAuth automatically handle karta hai

---

## Step 1f — Login Page ✅

### Kya kiya

**File:** `src/app/login/page.tsx`

- Email + password form
- `signIn("credentials", { email, password, redirect: false })`
- Error dikhata hai agar invalid credentials
- Success pe `/` pe redirect (ya `callbackUrl` agar query param mein ho)

### Kaise use
- Browser mein `/login` kholo
- Email, password daalo → Sign in
- Valid credentials pe calendar (`/`) pe redirect

### Zaroori
- Abhi database mein koi User nahi hai — seed run karna padega (Step 1h)
- SessionProvider add karna padega Providers mein (Step 1g) taaki session client pe available ho

---

## Step 1g — SessionProvider + Middleware ✅

### Kya kiya

**File 1:** `src/store/Providers.tsx`
- SessionProvider add kiya — session client pe available
- Redux Provider ke andar wrap kiya

**File 2:** `src/middleware.ts`
- Logged-in nahi + `/login` nahi → redirect `/login`
- Logged-in + `/login` pe → redirect `/`
- `api`, `_next`, `favicon` excluded — inpe middleware nahi chalega

### Kaise use
- SessionProvider → `useSession()` hook client components mein
- Middleware → `/` pe bina login ke jaoge to `/login` pe bhej dega

---

## Step 1h — Seed Users ✅

### Kya kiya

**File 1:** `prisma/seed.ts`
- 3 users: Alice (emp-111), Rohit (emp-222), Admin (emp-333)
- Sab ka password: `password123`
- Raw SQL + pg Pool (Prisma client mein User model stale tha, isliye direct SQL)
- `ON CONFLICT (email) DO UPDATE` se upsert

**File 2:** `package.json` — `db:seed` script add
**File 3:** `prisma.config.ts` — `migrations.seed: "npx tsx prisma/seed.ts"` (Prisma 7 yahan se seed leta hai)

### Kaise use

```bash
npm install          # tsx install ke liye
npm run db:seed      # seed run karo
```

Phir login karo: `alice@example.com` / `password123`

---

## Step 1i — Auth Fix: Edge + User Lookup ✅

### Kya kiya

**File:** `src/lib/auth.ts`

- **Lazy load Prisma** — `authorize()` ke andar `await import("@/server/db/prisma")` — middleware Edge pe chalती hai, jahan `node:path` nahi hota; Prisma load hone pe error aata tha
- **Raw SQL for User** — `prisma.user` available nahi (generated client stale), isliye `prisma.$queryRaw` se User fetch

### Kaise use
- Middleware ab Edge pe sahi chalegi
- Login (alice@example.com / password123) kaam karega

---

## Step 1j — Main Page: Session Use ✅

### Kya kiya

**File:** `src/app/page.tsx`

- `useSession()` se session — `session.user.employeeId`, `name`, `role`
- `currentEmployee` ab session se — employees array + localStorage hata diya
- Sidebar: "Signed in" + user name/role + **Sign out** button
- `useGetAttendanceQuery` — `skip: !currentEmployee` jab session load ho rahi ho

### Kaise use
- Login karo → apna calendar dikhega (session se employeeId)
- Sign out → `/login` pe redirect

---

## Step 1 Complete ✅

Authentication flow complete.

---

## Step 2 — API Authorization ✅

### Kya kiya

**Files:** `src/app/api/attendance/route.ts`, `[id]/cancel/route.ts`, `lock/route.ts`

- **GET /attendance** — session check, employeeId query se (EMPLOYEE sirf apna dekh sakta)
- **POST /attendance** — employeeId, createdBy session se (body ignore)
- **POST /attendance/:id/cancel** — createdBy session se, body hata diya
- **POST /attendance/lock** — lockedBy session se, role check (sirf MANAGER/ADMIN)

**File:** `src/store/attendanceApi.ts` — `credentials: "include"` taaki session cookie bheje

### Kaise use
- API pe session cookie auto bhejegi
- Body mein jo bhi employeeId/createdBy bhejo — server session use karega (secure)

---

*Har step complete hone pe update hoga*
