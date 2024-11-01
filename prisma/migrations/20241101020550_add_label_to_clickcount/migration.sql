/*
  Warnings:

  - Added the required column `label` to the `ClickCount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClickCount" ADD COLUMN     "label" TEXT NOT NULL;
