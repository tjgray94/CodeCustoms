import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import type { Inquiry } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const inquiryData = await request.json();

  const newInquiry: Inquiry = await prisma.inquiry.create({
    data: {
      name: inquiryData.name,
      email: inquiryData.email,
      phoneNo: inquiryData.phoneNo,
      description: inquiryData.description
    }
  })

  return NextResponse.json({ inquiry: newInquiry }, { status: 201 });
}