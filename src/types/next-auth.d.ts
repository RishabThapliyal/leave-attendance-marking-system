import "next-auth";

declare module "next-auth" {
  interface User {
    id?: string;
    employeeId?: string;
    role?: string;
  }

  interface Session {
    user: {
      id?: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      employeeId?: string;
      role?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string;
    employeeId?: string;
    role?: string;
  }
}
