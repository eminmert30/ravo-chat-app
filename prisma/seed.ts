import { PrismaClient } from '@prisma/client';
import { hash } from 'argon2';

const prisma = new PrismaClient();

async function main() {
  // Test kullanıcısı oluştur
  const hashedPassword = await hash('test123');
  
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test Kullanıcı',
      password: hashedPassword,
    },
  });

  console.log('Seed tamamlandı. Test kullanıcısı oluşturuldu:', user);
}

main()
  .catch((e) => {
    console.error('Seed hatası:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
