import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    // Eğer kullanıcı giriş yapmışsa ve login veya register sayfalarına gitmeye çalışıyorsa
    // chat sayfasına yönlendir
    if (
      req.nextauth.token &&
      (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/register')
    ) {
      return NextResponse.redirect(new URL('/chat', req.url));
    }

    // Eğer kullanıcı giriş yapmamışsa ve chat sayfasına gitmeye çalışıyorsa
    // login sayfasına yönlendir
    if (!req.nextauth.token && req.nextUrl.pathname === '/chat') {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Sadece /chat sayfası için auth kontrolü yap
        if (req.nextUrl.pathname === '/chat') {
          return !!token;
        }
        return true;
      },
    },
  }
);

// Sadece belirli sayfalar için middleware'i çalıştır
export const config = {
  matcher: ['/chat']
};
