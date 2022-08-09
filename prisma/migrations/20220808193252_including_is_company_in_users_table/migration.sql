/*
  Warnings:

  - You are about to drop the column `type` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "type",
ADD COLUMN     "isCompany" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "linkedin" DROP NOT NULL;
