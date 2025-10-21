import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function cleanTestLikes() {
  try {
    console.log("🧹 Test like'ları temizleniyor...");

    // Test kullanıcılarının email'leri
    const testEmails = [
      "ahmet@example.com",
      "ayse@example.com",
      "mehmet@example.com",
      "fatma@example.com",
      "can@example.com",
      "zeynep@example.com",
    ];

    // Test kullanıcılarını bul
    const testUsers = await prisma.user.findMany({
      where: {
        email: {
          in: testEmails,
        },
      },
      select: { id: true, email: true, name: true },
    });

    console.log("Bulunan test kullanıcıları:", testUsers);

    if (testUsers.length > 0) {
      const testUserIds = testUsers.map((user) => user.id);

      // Test kullanıcılarının like'larını sil
      const deletedLikes = await prisma.like.deleteMany({
        where: {
          userId: {
            in: testUserIds,
          },
        },
      });

      console.log(`✅ ${deletedLikes.count} test like silindi`);

      // Test kullanıcılarını da sil (isteğe bağlı)
      const deletedUsers = await prisma.user.deleteMany({
        where: {
          id: {
            in: testUserIds,
          },
        },
      });

      console.log(`✅ ${deletedUsers.count} test kullanıcı silindi`);
    } else {
      console.log("❌ Test kullanıcısı bulunamadı");
    }

    // Kalan kullanıcıları göster
    const remainingUsers = await prisma.user.findMany({
      select: { id: true, email: true, name: true },
    });

    console.log("Kalan kullanıcılar:", remainingUsers);

    // Kalan like'ları göster
    const remainingLikes = await prisma.like.findMany({
      include: {
        user: {
          select: { email: true, name: true },
        },
        post: {
          select: { id: true },
        },
      },
    });

    console.log("Kalan like'lar:", remainingLikes);
  } catch (error) {
    console.error("❌ Hata:", error);
  } finally {
    await prisma.$disconnect();
  }
}

cleanTestLikes();
