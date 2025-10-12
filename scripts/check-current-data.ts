import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function checkCurrentData() {
  try {
    console.log("📊 Mevcut Veritabanı Durumu:");
    console.log("================================");

    // Tüm kullanıcıları listele
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        _count: {
          select: {
            likes: true,
            posts: true,
          },
        },
      },
      orderBy: {
        email: "asc",
      },
    });

    console.log("\n👥 Kullanıcılar:");
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} (${user.email})`);
      console.log(`   ID: ${user.id}`);
      console.log(
        `   Beğeni: ${user._count.likes}, Post: ${user._count.posts}`
      );
      console.log(`   Avatar: ${user.image?.substring(0, 50)}...`);
      console.log("");
    });

    // Tüm beğenileri listele
    const likes = await prisma.like.findMany({
      include: {
        user: {
          select: {
            email: true,
            name: true,
            image: true,
          },
        },
        post: {
          select: {
            id: true,
            caption: true,
          },
        },
      },
    });

    console.log("\n❤️ Beğeniler:");
    likes.forEach((like, index) => {
      console.log(`${index + 1}. ${like.user.name} (${like.user.email})`);
      console.log(`   Post: ${like.post.caption?.substring(0, 30)}...`);
      console.log("");
    });

    // Gerçek kullanıcıları belirle (gerçek email formatına sahip olanlar)
    const realUsers = users.filter(
      (user) =>
        user.email &&
        user.email.includes("@") &&
        !user.email.includes("example.com") &&
        !["Ahmet", "Mehmet", "Selin", "Kullanıcı"].includes(user.name)
    );

    console.log("\n✅ Gerçek Kullanıcılar:");
    realUsers.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} (${user.email})`);
    });

    // Test kullanıcılarını belirle
    const testUsers = users.filter(
      (user) =>
        !user.email ||
        user.email.includes("example.com") ||
        ["Ahmet", "Mehmet", "Selin", "Kullanıcı"].includes(user.name) ||
        user.name === "Anonim"
    );

    console.log("\n❌ Test/Sahte Kullanıcılar:");
    testUsers.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} (${user.email})`);
    });

    console.log("\n📈 Özet:");
    console.log(`Toplam Kullanıcı: ${users.length}`);
    console.log(`Gerçek Kullanıcı: ${realUsers.length}`);
    console.log(`Test/Sahte Kullanıcı: ${testUsers.length}`);
    console.log(`Toplam Beğeni: ${likes.length}`);
  } catch (error) {
    console.error("❌ Hata:", error);
  } finally {
    await prisma.$disconnect();
  }
}

checkCurrentData();
