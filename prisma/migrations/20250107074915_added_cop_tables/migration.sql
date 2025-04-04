/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('provisioning', 'success', 'failed');

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "provision" (
    "uuid" TEXT NOT NULL,
    "workspace_uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "app_uuid" TEXT NOT NULL,
    "mau" TEXT NOT NULL,

    CONSTRAINT "provision_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "application" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "application_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "user_workspace" (
    "uuid" TEXT NOT NULL,
    "zuuid" TEXT NOT NULL,
    "workspace_uuid" TEXT NOT NULL,

    CONSTRAINT "user_workspace_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "workspace" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "workspace_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "provision_status" (
    "uuid" TEXT NOT NULL,
    "provision_uuid" TEXT NOT NULL,
    "app_uuid" TEXT NOT NULL,
    "provision_res_uuid" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "message" TEXT NOT NULL,
    "domain" TEXT NOT NULL,

    CONSTRAINT "provision_status_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "server_info" (
    "uuid" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "last_allocated_port" TEXT NOT NULL,
    "vCpu" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "ssh_access_key" TEXT NOT NULL,

    CONSTRAINT "server_info_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE INDEX "provision_workspace_uuid_idx" ON "provision"("workspace_uuid");

-- CreateIndex
CREATE INDEX "provision_app_uuid_idx" ON "provision"("app_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "provision_status_provision_uuid_key" ON "provision_status"("provision_uuid");

-- CreateIndex
CREATE INDEX "provision_status_provision_uuid_idx" ON "provision_status"("provision_uuid");

-- CreateIndex
CREATE INDEX "provision_status_app_uuid_idx" ON "provision_status"("app_uuid");

-- AddForeignKey
ALTER TABLE "provision" ADD CONSTRAINT "provision_workspace_uuid_fkey" FOREIGN KEY ("workspace_uuid") REFERENCES "workspace"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provision" ADD CONSTRAINT "provision_app_uuid_fkey" FOREIGN KEY ("app_uuid") REFERENCES "application"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_workspace" ADD CONSTRAINT "user_workspace_workspace_uuid_fkey" FOREIGN KEY ("workspace_uuid") REFERENCES "workspace"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provision_status" ADD CONSTRAINT "provision_status_provision_uuid_fkey" FOREIGN KEY ("provision_uuid") REFERENCES "provision"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provision_status" ADD CONSTRAINT "provision_status_app_uuid_fkey" FOREIGN KEY ("app_uuid") REFERENCES "application"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
