-- CreateTable
CREATE TABLE "Click" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Click_pkey" PRIMARY KEY ("id")
);
