import { NextResponse } from "next/server";
import { BusinessType, PageRange, PrismaClient } from "@/generated/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const logoFile = formData.get("logo") as Blob | null;
    const sketchFile = formData.get("sketch") as Blob | null;

    const saveFile = async (file: Blob | null): Promise<string | null> => {
      if (!file) return null;
      
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadDir = path.join(process.cwd(), "public", "uploads");
      await mkdir(uploadDir, { recursive: true });

      const ext = ".png";
      const fileName = `${uuidv4()}${ext}`;
      const filePath = path.join(uploadDir, fileName);
      
      await writeFile(filePath, buffer);
      return `/uploads/${fileName}`;
    }

    const logoPath = await saveFile(logoFile);
    const sketchPath = await saveFile(sketchFile);

    const businessName = formData.get("businessName") as string;
    const businessTypeStr = formData.get("businessType") as string;
    const colorScheme = formData.get("colorScheme") as string;
    const pageRangeStr = formData.get("pageRange") as string;
    const features = formData.get("features") as string;

    const businessType = Object.values(BusinessType).includes(businessTypeStr as BusinessType)
      ? (businessTypeStr as BusinessType)
      : null;

    if (!businessType) {
      return NextResponse.json({ error: "Invalid business type." }, { status: 400 });
    }

    const pageRange = pageRangeStr && Object.values(PageRange).includes(pageRangeStr as PageRange)
      ? (pageRangeStr as PageRange)
      : null;

    if (!pageRange) {
      return NextResponse.json({ error: "Invalid page range." }, { status: 400 });
    }

    const newProject = await prisma.project.create({
      data: {
        businessName,
        businessType,
        colorScheme,
        pageRange,
        features,
        logo: logoPath,
        sketch: sketchPath
      }
    })

    return NextResponse.json({ project: newProject }, { status: 201 });
  } catch (error) {
    console.error("Error handling POST", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}