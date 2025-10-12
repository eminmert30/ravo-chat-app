import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function cleanFakeUsers() {
  try {
    console.log("🧹 Sahte kullanıcıları temizliyorum...");

    // Sahte kullanıcıları belirle
    const fakeUserEmails = [
      "selin@example.com",
      "test@example.com",
      "user@example.com",
      "yusuf@example.com",
      "default@user.com", // Bu da test kullanıcısı gibi görünüyor
    ];

    const fakeUserNames = [
      "Kullanıcı",
      "Test Kullanıcı",
      "Selin",
      "Yusuf Baba",
      "Default User",
    ];

    // Sahte kullanıcıları bul
    const fakeUsers = await prisma.user.findMany({
      where: {
        OR: [
          {
            email: {
              in: fakeUserEmails,
            },
          },
          {
            name: {
              in: fakeUserNames,
            },
          },
          {
            email: {
              contains: "example.com",
            },
          },
        ],
      },
      include: {
        likes: true,
        posts: true,
        comments: true,
      },
    });

    console.log(
      `\n❌ Silinecek sahte kullanıcılar (${fakeUsers.length} adet):`
    );
    fakeUsers.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} (${user.email})`);
      console.log(
        `   Beğeni: ${user.likes.length}, Post: ${user.posts.length}, Yorum: ${user.comments.length}`
      );
    });

    if (fakeUsers.length === 0) {
      console.log("✅ Silinecek sahte kullanıcı bulunamadı.");
      return;
    }

    // İlk olarak sahte kullanıcıların beğenilerini sil
    console.log("\n🗑️ Sahte kullanıcıların beğenilerini siliyorum...");
    const deletedLikes = await prisma.like.deleteMany({
      where: {
        userId: {
          in: fakeUsers.map((user) => user.id),
        },
      },
    });
    console.log(`✅ ${deletedLikes.count} beğeni silindi.`);

    // Sahte kullanıcıların yorumlarını sil
    console.log("\n🗑️ Sahte kullanıcıların yorumlarını siliyorum...");
    const deletedComments = await prisma.comment.deleteMany({
      where: {
        userId: {
          in: fakeUsers.map((user) => user.id),
        },
      },
    });
    console.log(`✅ ${deletedComments.count} yorum silindi.`);

    // Sahte kullanıcıların postlarını sil
    console.log("\n🗑️ Sahte kullanıcıların postlarını siliyorum...");
    const deletedPosts = await prisma.post.deleteMany({
      where: {
        userId: {
          in: fakeUsers.map((user) => user.id),
        },
      },
    });
    console.log(`✅ ${deletedPosts.count} post silindi.`);

    // Son olarak sahte kullanıcıları sil
    console.log("\n🗑️ Sahte kullanıcıları siliyorum...");
    const deletedUsers = await prisma.user.deleteMany({
      where: {
        id: {
          in: fakeUsers.map((user) => user.id),
        },
      },
    });
    console.log(`✅ ${deletedUsers.count} sahte kullanıcı silindi.`);

    // Temizlik sonrası durum
    console.log("\n📊 Temizlik Sonrası Durum:");
    const remainingUsers = await prisma.user.count();
    const remainingLikes = await prisma.like.count();
    const remainingPosts = await prisma.post.count();
    const remainingComments = await prisma.comment.count();

    console.log(`👥 Kalan kullanıcı: ${remainingUsers}`);
    console.log(`❤️ Kalan beğeni: ${remainingLikes}`);
    console.log(`📝 Kalan post: ${remainingPosts}`);
    console.log(`💬 Kalan yorum: ${remainingComments}`);

    console.log("\n✅ Sahte kullanıcı temizliği tamamlandı!");
  } catch (error) {
    console.error("❌ Hata:", error);
  } finally {
    await prisma.$disconnect();
  }
}

cleanFakeUsers();
