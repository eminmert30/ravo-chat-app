import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function resetPasaAvatar() {
  try {
    // Pasa kullanıcısının image alanını null yap
    const updatedUser = await prisma.user.update({
      where: {
        email: "pasa@gmail.com",
      },
      data: {
        image: null,
      },
    });

    console.log("Pasa kullanıcısının avatarı sıfırlandı:", updatedUser);

    // Şimdi postları da güncelleyelim ki fresh veri gelsin
    console.log("Postları kontrol ediyoruz...");

    const posts = await prisma.post.findMany({
      where: {
        userId: updatedUser.id,
      },
      include: {
        user: true,
      },
    });

    console.log("Pasa'nın postları:", posts);
  } catch (error) {
    console.error("Hata:", error);
  } finally {
    await prisma.$disconnect();
  }
}

resetPasaAvatar();
