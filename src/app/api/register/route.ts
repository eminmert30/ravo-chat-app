import { NextResponse } from 'next/server';
import { hash } from 'argon2';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const userSchema = z.object({
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır'),
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır')
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = userSchema.parse(body);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Bu e-posta adresi zaten kullanımda' },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword
      }
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      }
    });
  } catch (error) {
    console.error('Kayıt hatası:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Kayıt işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
