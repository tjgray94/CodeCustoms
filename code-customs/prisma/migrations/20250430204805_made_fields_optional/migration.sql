-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "colorScheme" TEXT,
ALTER COLUMN "logo" DROP NOT NULL,
ALTER COLUMN "sketch" DROP NOT NULL,
ALTER COLUMN "features" DROP NOT NULL;
