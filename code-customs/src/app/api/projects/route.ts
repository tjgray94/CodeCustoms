import { NextResponse } from "next/server";
import { BusinessType, PageRange, PrismaClient } from "@/generated/prisma";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@supabase/supabase-js";

const prisma = new PrismaClient();

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const logoFile = formData.get("logo") as Blob | null;
    const sketchFile = formData.get("sketch") as Blob | null;

    const saveFile = async (file: Blob | null): Promise<string | null> => {
      if (!file) return null;
      
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const ext = ".png";
      const fileName = `${uuidv4()}${ext}`;

      console.log("Uploading file with type:", file.type);

      const { error: uploadError, data: uploadData } = await supabase.storage.from("projects").upload(fileName, buffer, {
        contentType: file.type || "image/png",
      });

      if (uploadError) {
        console.error("Supabase upload error:", uploadError.message);
        return null;
      }

      console.log("Upload success:", uploadData);

      const { data: publicUrlData } = supabase.storage.from("projects").getPublicUrl(fileName);
      return publicUrlData?.publicUrl || null;
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