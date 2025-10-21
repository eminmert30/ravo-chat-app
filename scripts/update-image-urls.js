const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function updateImageUrls() {
  try {
    console.log("🔄 Eski IP adreslerini güncelleme başlıyor...");

    // Eski IP adreslerini yeni IP adresi ile değiştir
    const oldIps = ["192.168.1.179", "192.168.1.173", "192.168.1.160"];
    const newIp = "192.168.1.189";

    // Tüm eski IP'li postları bul
    let allPosts = [];

    for (const oldIp of oldIps) {
      const posts = await prisma.post.findMany({
        where: {
          imageUrl: {
            contains: oldIp,
          },
        },
      });
      allPosts = allPosts.concat(posts);
    }

    console.log(`🔍 ${allPosts.length} adet eski IP'li post bulundu`);

    // Her post'u güncelle
    for (const post of allPosts) {
      let newImageUrl = post.imageUrl;

      // Tüm eski IP'leri yeni IP ile değiştir
      for (const oldIp of oldIps) {
        newImageUrl = newImageUrl.replace(oldIp, newIp);
      }

      await prisma.post.update({
        where: { id: post.id },
        data: { imageUrl: newImageUrl },
      });

      console.log(
        `✅ Post ${post.id} güncellendi: ${post.imageUrl} → ${newImageUrl}`
      );
    }

    console.log("🎉 Tüm imageUrl'ler başarıyla güncellendi!");
  } catch (error) {
    console.error("❌ Hata:", error);
  } finally {
    await prisma.$disconnect();
  }
}

updateImageUrls();
