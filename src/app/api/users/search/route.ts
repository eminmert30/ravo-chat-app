import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
      return NextResponse.json({ error: 'Arama sorgusu gerekli' }, { status: 400 });
    }

    const searchTerm = query.toLowerCase();

    const users = await db.user.findMany({
      where: {
        OR: [
          { name: { contains: searchTerm } },
          { email: { contains: searchTerm } },
        ],
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
      take: 10,
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error('Kullanıcı arama hatası:', error);
    return NextResponse.json(
      { error: 'Kullanıcılar aranırken bir hata oluştu' },
      { status: 500 }
    );
  }
}
