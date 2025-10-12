import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // Pasa kullanıcısını bul
    const pasa = await prisma.user.findUnique({
      where: {
        email: "pasa@gmail.com",
      },
    });

    if (!pasa) {
      console.log("❌ Pasa kullanıcısı bulunamadı");
      return;
    }

    console.log("👤 Pasa kullanıcısı bulundu:", {
      id: pasa.id,
      name: pasa.name,
      email: pasa.email,
      image: pasa.image,
    });

    // Pasa için yeni post oluştur
    const newPost = await prisma.post.create({
      data: {
        imageUrl: "https://picsum.photos/400/401", // Farklı resim
        caption: "🔥 Pasa'nın yeni paylaşımı! Baş harfi 'P' görünecek mi? 🤔",
        userId: pasa.id,
        visibility: "public",
      },
      include: {
        user: true,
      },
    });

    console.log("✅ Pasa için yeni post oluşturuldu:", newPost);

    // Tüm postları listele
    const allPosts = await prisma.post.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log("\n📋 Tüm postlar:");
    allPosts.forEach((post, index) => {
      console.log(
        `${index + 1}. ${post.user?.name} - Image: ${
          post.user?.image || "null"
        }`
      );
    });
  } catch (error) {
    console.error("❌ Hata:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
