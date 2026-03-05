import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const { prisma } = await import("@/server/db/prisma");
        const rows = await prisma.$queryRaw<
          { id: string; email: string; name: string; employeeId: string; role: string; password_hash: string }[]
        >`SELECT id, email, name, "employeeId", role, password_hash FROM "User" WHERE email = ${String(credentials.email)} LIMIT 1`;
        const user = rows[0];
        if (!user) return null;

        const match = await bcrypt.compare(
          String(credentials.password),
          user.password_hash,
        );
        if (!match) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          employeeId: user.employeeId,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.employeeId = user.employeeId;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.userId as string;
        session.user.employeeId = token.employeeId as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 }, // 30 days
});
