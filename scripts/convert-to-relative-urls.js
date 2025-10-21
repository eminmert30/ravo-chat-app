const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function convertToRelativeUrls() {
  try {
    console.log("🔄 URL'leri relative path'e çevirme başlıyor...");

    // Tüm postları al
    const posts = await prisma.post.findMany({
      where: {
        imageUrl: {
          contains: "http"
        }
      }
    });

    console.log(`🔍 ${posts.length} adet HTTP URL'li post bulundu`);

    // Her post'u güncelle
    for (const post of posts) {
      let relativeUrl = post.imageUrl;
      
      // HTTP URL'leri relative path'e çevir
      if (relativeUrl.includes("http://192.168.1.")) {
        // http://192.168.1.xxx:3000/uploads/... -> /uploads/...
        relativeUrl = relativeUrl.replace(/^https?:\/\/192\.168\.1\.\d+:3000/, "");
        console.log(`✅ Post ${post.id} güncellendi: ${post.imageUrl} → ${relativeUrl}`);
        
        await prisma.post.update({
          where: { id: post.id },
          data: { imageUrl: relativeUrl },
        });
      } else if (relativeUrl.startsWith("https://")) {
        // External URL'leri olduğu gibi bırak (picsum.photos gibi)
        console.log(`⏭️ External URL korundu: ${post.id} - ${relativeUrl}`);
      }
    }

    console.log("🎉 Tüm URL'ler relative path'e çevrildi!");
  } catch (error) {
    console.error("❌ Hata:", error);
  } finally {
    await prisma.$disconnect();
  }
}

convertToRelativeUrls(); 