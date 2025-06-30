import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import AuthProvider from '@/providers/auth-provider';
import SocketProvider from '@/providers/socket-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RavoChat',
  description: 'Modern ve güvenli mesajlaşma uygulaması',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <AuthProvider>
          <SocketProvider>
            {children}
          </SocketProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
