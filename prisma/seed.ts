import "dotenv/config";
import { Pool } from "pg";
import bcrypt from "bcryptjs";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const DEMO_PASSWORD = "password123";

async function main() {
  const hash = await bcrypt.hash(DEMO_PASSWORD, 10);

  const users = [
    { email: "alice@example.com", name: "Alice Sharma", employeeId: "emp-111", role: "EMPLOYEE" },
    { email: "rohit@example.com", name: "Rohit Kumar", employeeId: "emp-222", role: "MANAGER" },
    { email: "admin@example.com", name: "Admin User", employeeId: "emp-333", role: "ADMIN" },
  ];

  for (const u of users) {
    await pool.query(
      `INSERT INTO "User" (id, email, password_hash, name, "employeeId", role, "createdAt", "updatedAt")
       VALUES (gen_random_uuid()::text, $1, $2, $3, $4, $5, NOW(), NOW())
       ON CONFLICT (email) DO UPDATE SET password_hash = $2, name = $3, role = $5, "updatedAt" = NOW()`,
      [u.email, hash, u.name, u.employeeId, u.role]
    );
  }

  console.log("✅ Seed done. Demo users created.");
  console.log("   Email: alice@example.com | Password:", DEMO_PASSWORD);
  console.log("   Email: rohit@example.com | Password:", DEMO_PASSWORD);
  console.log("   Email: admin@example.com | Password:", DEMO_PASSWORD);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => pool.end());
