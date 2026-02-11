export type EmployeeRole = "EMPLOYEE" | "MANAGER" | "ADMIN";

export type Employee = {
  id: string;
  name: string;
  email: string;
  role: EmployeeRole;
};

// Simple in-memory employee directory for this demo project.
// In a real app, this would come from the database and proper auth.
export const employees: Employee[] = [
  {
    id: "emp-111",
    name: "Alice Sharma",
    email: "alice@example.com",
    role: "EMPLOYEE",
  },
  {
    id: "emp-222",
    name: "Rohit Kumar",
    email: "rohit@example.com",
    role: "MANAGER",
  },
  {
    id: "emp-333",
    name: "Admin User",
    email: "admin@example.com",
    role: "ADMIN",
  },
];
