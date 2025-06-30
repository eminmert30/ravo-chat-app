import { NextResponse } from "next/server";
import { verify } from "argon2";
import prisma from "@/lib/prismadb";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "E-posta ve şifre zorunlu." },
        { status: 400 }
      );
    }
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.password) {
      return NextResponse.json(
        { error: "Kullanıcı bulunamadı veya şifre ayarlanmamış." },
        { status: 401 }
      );
    }
    const valid = await verify(user.password, password);
    if (!valid) {
      return NextResponse.json({ error: "Şifre hatalı." }, { status: 401 });
    }
    // JWT üret
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        name: user.name,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );
    return NextResponse.json({
      token,
      name: user.name,
      email: user.email,
      id: user.id,
    });
  } catch (error) {
    console.error("[mobile-login] error:", error);
    return NextResponse.json(
      { error: "Giriş sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}
