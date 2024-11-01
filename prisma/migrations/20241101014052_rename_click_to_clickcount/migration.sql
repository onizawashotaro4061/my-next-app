/*
  Warnings:

  - You are about to drop the column `label` on the `Click` table. All the data in the column will be lost.
  - You are about to drop the `ClickCounts` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Click" DROP COLUMN "label",
ADD COLUMN     "course" TEXT NOT NULL DEFAULT 'default_course',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "ClickCounts";

-- CreateTable
CREATE TABLE "ClickCount" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ClickCount_pkey" PRIMARY KEY ("id")
);
