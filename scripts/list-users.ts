import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function listUsers() {
  try {
    const users = await prisma.user.findMany();

    console.log('\nKayıtlı Kullanıcılar:');
    console.log('==================');
    users.forEach(user => {
      console.log(`\nID: ${user.id}`);
      console.log(`İsim: ${user.name || 'Belirtilmemiş'}`);
      console.log(`Email: ${user.email}`);
      console.log(`Email Doğrulandı: ${user.emailVerified ? 'Evet' : 'Hayır'}`);
      console.log(`Profil Resmi: ${user.image || 'Yok'}`);
      console.log('------------------');
    });
  } catch (error) {
    console.error('Hata:', error);
  } finally {
    await prisma.$disconnect();
  }
}

listUsers();
