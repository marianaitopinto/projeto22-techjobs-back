/*
  Warnings:

  - You are about to drop the column `isCompany` on the `users` table. All the data in the column will be lost.
  - Added the required column `description` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "isCompany",
ADD COLUMN     "type" INTEGER NOT NULL;
