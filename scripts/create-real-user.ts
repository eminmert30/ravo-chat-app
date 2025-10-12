import { PrismaClient } from "@prisma/client";
import { hash } from "argon2";

const prisma = new PrismaClient();

async function createRealUser() {
  try {
    // Önce mevcut kullanıcıları kontrol et
    const existingUsers = await prisma.user.findMany();
    console.log(
      "Mevcut kullanıcılar:",
      existingUsers.map((u) => ({ id: u.id, name: u.name, email: u.email }))
    );

    // Gerçek kullanıcı bilgileri
    const userData = {
      name: "Yusuf Baba", // Kendi adınızı buraya yazın
      email: "yusuf@example.com", // Kendi email'inizi buraya yazın
      password: await hash("123456"), // Şifre
      image: "/uploads/profile.jpg", // Profil fotoğrafı yolu
    };

    // Kullanıcıyı oluştur veya güncelle
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {
        name: userData.name,
        image: userData.image,
      },
      create: userData,
    });

    console.log("Kullanıcı oluşturuldu/güncellendi:", user);

    // Test post'u oluştur
    const post = await prisma.post.create({
      data: {
        imageUrl: "/uploads/test-image.jpg",
        caption: "Merhaba! Bu benim ilk paylaşımım.",
        visibility: "public",
        userId: user.id,
      },
    });

    console.log("Test post oluşturuldu:", post);
  } catch (error) {
    console.error("Hata:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createRealUser();
