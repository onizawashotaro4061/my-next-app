/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `ClickCount` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ClickCount_label_key" ON "ClickCount"("label");
