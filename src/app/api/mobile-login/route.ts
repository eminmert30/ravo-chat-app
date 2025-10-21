import { NextResponse } from "next/server";
import { verify } from "argon2";
import prisma from "@/lib/prismadb";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(req: Request) {
  try {
    console.log("🔐 [MOBILE-LOGIN] Request başladı");

    const body = await req.json();
    console.log("📦 [MOBILE-LOGIN] Request body:", body);

    const { email, password } = body;

    if (!email || !password) {
      console.log("❌ [MOBILE-LOGIN] Email veya şifre eksik");
      return NextResponse.json(
        { error: "E-posta ve şifre zorunlu." },
        { status: 400 }
      );
    }

    console.log("🔍 [MOBILE-LOGIN] Kullanıcı aranıyor:", email);

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.password) {
      console.log("❌ [MOBILE-LOGIN] Kullanıcı bulunamadı veya şifre yok");
      return NextResponse.json(
        { error: "Kullanıcı bulunamadı veya şifre ayarlanmamış." },
        { status: 401 }
      );
    }

    console.log("✅ [MOBILE-LOGIN] Kullanıcı bulundu:", user.id);

    const valid = await verify(user.password, password);

    if (!valid) {
      console.log("❌ [MOBILE-LOGIN] Şifre hatalı");
      return NextResponse.json({ error: "Şifre hatalı." }, { status: 401 });
    }

    console.log("✅ [MOBILE-LOGIN] Şifre doğru, JWT oluşturuluyor");

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

    const response = {
      token,
      name: user.name,
      email: user.email,
      id: user.id,
      image: user.image || null,
    };

    console.log("🎉 [MOBILE-LOGIN] Başarılı login response hazırlanıyor:");
    console.log("🎉 [MOBILE-LOGIN] - token length:", token.length);
    console.log("🎉 [MOBILE-LOGIN] - name:", user.name);
    console.log("🎉 [MOBILE-LOGIN] - email:", user.email);
    console.log("🎉 [MOBILE-LOGIN] - id:", user.id);
    console.log("🎉 [MOBILE-LOGIN] - image:", user.image);
    console.log(
      "🎉 [MOBILE-LOGIN] - response objesi:",
      JSON.stringify(response, null, 2)
    );

    console.log("🎉 [MOBILE-LOGIN] Başarılı login:", {
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("💥 [MOBILE-LOGIN] Unexpected error:", error);
    console.error(
      "💥 [MOBILE-LOGIN] Error stack:",
      error instanceof Error ? error.stack : "No stack"
    );
    return NextResponse.json(
      { error: "Giriş sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}
