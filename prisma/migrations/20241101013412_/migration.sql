/*
  Warnings:

  - You are about to drop the column `course` on the `Click` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Click` table. All the data in the column will be lost.
  - Added the required column `label` to the `Click` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Click" DROP COLUMN "course",
DROP COLUMN "createdAt",
ADD COLUMN     "label" TEXT NOT NULL;
