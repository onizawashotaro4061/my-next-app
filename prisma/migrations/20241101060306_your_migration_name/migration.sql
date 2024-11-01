/*
  Warnings:

  - You are about to drop the column `label` on the `ClickCount` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClickCount" DROP COLUMN "label",
ADD COLUMN     "course" TEXT NOT NULL DEFAULT 'default_course',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
