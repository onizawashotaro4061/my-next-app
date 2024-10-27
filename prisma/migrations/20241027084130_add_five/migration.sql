-- AlterTable
ALTER TABLE "Click" ADD COLUMN     "course" TEXT NOT NULL DEFAULT 'default_course',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "KeywordAttempt" (
    "id" SERIAL NOT NULL,
    "course" TEXT NOT NULL DEFAULT 'default_course',
    "step" INTEGER NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "KeywordAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participation" (
    "id" SERIAL NOT NULL,
    "course" TEXT NOT NULL DEFAULT 'default_course',
    "step" INTEGER NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Participation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GenderAge" (
    "id" SERIAL NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "GenderAge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClickCounts" (
    "id" SERIAL NOT NULL,
    "course" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "correctClick" BOOLEAN NOT NULL,

    CONSTRAINT "ClickCounts_pkey" PRIMARY KEY ("id")
);
