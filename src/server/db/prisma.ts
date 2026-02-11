import { PrismaClient } from "../../generated/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

// Single shared Prisma client instance for the whole app.
// This avoids creating a new DB connection on every request.
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter } as any);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
