-- CreateEnum
CREATE TYPE "AttendanceEventType" AS ENUM ('FULL_LEAVE', 'HALF_LEAVE_AM', 'HALF_LEAVE_PM', 'WFH', 'VOLUNTARY_WORK');

-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('ACTIVE', 'CANCELLED');

-- CreateEnum
CREATE TYPE "AttendanceOverrideAction" AS ENUM ('CANCEL', 'MODIFY');

-- CreateTable
CREATE TABLE "AttendanceEvent" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "eventType" "AttendanceEventType" NOT NULL,
    "status" "AttendanceStatus" NOT NULL DEFAULT 'ACTIVE',
    "reason" TEXT,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AttendanceEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttendanceEventOverride" (
    "id" TEXT NOT NULL,
    "originalEventId" TEXT NOT NULL,
    "action" "AttendanceOverrideAction" NOT NULL,
    "newEventId" TEXT,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AttendanceEventOverride_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttendanceMonthLock" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "lockedBy" TEXT NOT NULL,
    "lockedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AttendanceMonthLock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttendanceAuditLog" (
    "id" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AttendanceAuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AttendanceEventOverride_originalEventId_idx" ON "AttendanceEventOverride"("originalEventId");

-- CreateIndex
CREATE INDEX "AttendanceEventOverride_newEventId_idx" ON "AttendanceEventOverride"("newEventId");

-- CreateIndex
CREATE UNIQUE INDEX "AttendanceMonthLock_employeeId_month_key" ON "AttendanceMonthLock"("employeeId", "month");

-- CreateIndex
CREATE INDEX "AttendanceAuditLog_entityId_idx" ON "AttendanceAuditLog"("entityId");

-- AddForeignKey
ALTER TABLE "AttendanceEventOverride" ADD CONSTRAINT "AttendanceEventOverride_originalEventId_fkey" FOREIGN KEY ("originalEventId") REFERENCES "AttendanceEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceEventOverride" ADD CONSTRAINT "AttendanceEventOverride_newEventId_fkey" FOREIGN KEY ("newEventId") REFERENCES "AttendanceEvent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
