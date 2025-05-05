-- CreateEnum
CREATE TYPE "BusinessType" AS ENUM ('E_commerce', 'Portfolio', 'Service_based', 'Blog', 'Other');

-- CreateEnum
CREATE TYPE "PageRange" AS ENUM ('OneToThree', 'FourToSix', 'SevenPlus');

-- CreateTable
CREATE TABLE "inquiries" (
    "inquiryId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "inquiries_pkey" PRIMARY KEY ("inquiryId")
);

-- CreateTable
CREATE TABLE "projects" (
    "projectId" SERIAL NOT NULL,
    "businessName" TEXT NOT NULL,
    "businessType" "BusinessType" NOT NULL,
    "logo" TEXT NOT NULL,
    "sketch" TEXT NOT NULL,
    "pageRange" "PageRange" NOT NULL,
    "features" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("projectId")
);

-- CreateIndex
CREATE UNIQUE INDEX "inquiries_email_key" ON "inquiries"("email");
