/*
  Warnings:

  - You are about to drop the column `app_uuid` on the `provision_status` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "provision_status" DROP CONSTRAINT "provision_status_app_uuid_fkey";

-- DropIndex
DROP INDEX "provision_status_app_uuid_idx";

-- AlterTable
ALTER TABLE "provision_status" DROP COLUMN "app_uuid";
