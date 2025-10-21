import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updatePasaImage() {
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

    console.log("Pasa'nın image alanı null yapıldı:", updatedUser);
  } catch (error) {
    console.error("Hata:", error);
  } finally {
    await prisma.$disconnect();
  }
}

updatePasaImage();
