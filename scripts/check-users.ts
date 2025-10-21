import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🔍 Database'deki kullanıcılar kontrol ediliyor...");

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      createdAt: true,
    },
  });

  console.log("📊 Bulunan kullanıcılar:");
  users.forEach((user, index) => {
    console.log(`${index + 1}. ID: ${user.id}`);
    console.log(`   Name: ${user.name}`);
    console.log(`   Email: ${user.email}`);
    console.log(`   Image: ${user.image}`);
    console.log(`   Created: ${user.createdAt}`);
    console.log("---");
  });

  console.log(`\n✅ Toplam ${users.length} kullanıcı bulundu.`);
}

main()
  .catch((e) => {
    console.error("❌ Hata:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
