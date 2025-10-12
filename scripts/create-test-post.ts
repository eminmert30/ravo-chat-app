import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTestPost() {
  try {
    // Önce bir kullanıcı bulalım
    const user = await prisma.user.findFirst();

    if (!user) {
      console.log("Kullanıcı bulunamadı. Önce bir kullanıcı oluşturun.");
      return;
    }

    // Test fotoğraf paylaşımı oluştur
    const post = await prisma.post.create({
      data: {
        imageUrl: "https://picsum.photos/400/400",
        caption: "Bu bir test fotoğraf paylaşımıdır! 📸",
        userId: user.id,
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

    console.log("Test fotoğraf paylaşımı oluşturuldu:", post);
  } catch (error) {
    console.error("Hata:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestPost();
