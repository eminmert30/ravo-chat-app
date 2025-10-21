import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(request: Request) {
  try {
    const { query } = await request.json();
    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Arama sorgusu gerekli" },
        { status: 400 }
      );
    }
    const users = await prisma.user.findMany({
      where: {
        OR: [{ name: { contains: query } }, { email: { contains: query } }],
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
      take: 10,
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Arama sırasında hata oluştu" },
      { status: 500 }
    );
  }
}
