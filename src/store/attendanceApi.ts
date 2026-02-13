import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// API routes are under: /api/...
const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
});

export type AttendanceEventDto = {
  id: string;
  employeeId: string;
  date: string; // ISO
  eventType:
    | "FULL_LEAVE"
    | "HALF_LEAVE_AM"
    | "HALF_LEAVE_PM"
    | "WFH"
    | "VOLUNTARY_WORK";
  status: "ACTIVE" | "CANCELLED";
  reason: string | null;
  createdBy: string;
  createdAt: string; // ISO
};

export type GetAttendanceArgs = {
  month: string; // YYYY-MM
  employeeId: string;
};

export type MarkAttendanceBody = {
  date: string; // ISO or YYYY-MM-DD (server coerces to Date)
  eventType: AttendanceEventDto["eventType"];
  reason?: string;
  employeeId: string;
  createdBy: string;
};

export type CancelAttendanceBody = {
  createdBy: string;
};

export type LockMonthBody = {
  employeeId: string;
  month: string; // YYYY-MM
  lockedBy: string;
};

export type LockMonthResponse = {
  id: string;
  employeeId: string;
  month: string;
  lockedBy: string;
  lockedAt: string;
};

export const attendanceApi = createApi({
  reducerPath: "attendanceApi",
  baseQuery,
  tagTypes: ["Attendance"],
  endpoints: (build) => ({
    getAttendance: build.query<AttendanceEventDto[], GetAttendanceArgs>({
      query: ({ month, employeeId }) => ({
        url: `/attendance`,
        params: { month, employeeId },
      }),
      providesTags: (_result, _err, arg) => [
        { type: "Attendance", id: arg.month },
      ],
    }),

    markAttendance: build.mutation<AttendanceEventDto, MarkAttendanceBody>({
      query: (body) => ({
        url: `/attendance`,
        method: "POST",
        body,
      }),
      invalidatesTags: (_result, _err, body) => [
        { type: "Attendance", id: body.date.slice(0, 7) },
      ],
    }),

    cancelAttendance: build.mutation<
      { success: true },
      { id: string; body: CancelAttendanceBody }
    >({
      query: ({ id, body }) => ({
        url: `/attendance/${id}/cancel`,
        method: "POST",
        body,
      }),
      invalidatesTags: (_result, _err, _arg) => [{ type: "Attendance" }],
    }),

    lockMonth: build.mutation<LockMonthResponse, LockMonthBody>({
      query: (body) => ({
        url: `/attendance/lock`,
        method: "POST",
        body,
      }),
      invalidatesTags: (_result, _err, arg) => [
        { type: "Attendance", id: arg.month },
      ],
    }),
  }),
});

export const {
  useGetAttendanceQuery,
  useMarkAttendanceMutation,
  useCancelAttendanceMutation,
  useLockMonthMutation,
} = attendanceApi;
