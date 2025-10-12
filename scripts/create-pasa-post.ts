import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createPasaPost() {
  try {
    // Pasa kullanıcısını bulalım
    const pasaUser = await prisma.user.findFirst({
      where: {
        OR: [{ name: "Pasa" }, { email: "pasa@gmail.com" }],
      },
    });

    if (!pasaUser) {
      console.log("Pasa kullanıcısı bulunamadı!");
      // Kullanıcıları listeleyelim
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      });
      console.log("Mevcut kullanıcılar:", users);
      return;
    }

    console.log("Pasa kullanıcısı bulundu:", pasaUser);

    // Pasa için test fotoğraf paylaşımı oluştur
    const post = await prisma.post.create({
      data: {
        imageUrl: "https://picsum.photos/400/400",
        caption: "Pasa'nın test paylaşımı! Baş harfi görünecek mi? 📸",
        userId: pasaUser.id,
        visibility: "public",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });

    console.log("Pasa'nın test fotoğraf paylaşımı oluşturuldu:", post);
  } catch (error) {
    console.error("Hata:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createPasaPost();
