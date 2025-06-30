'use client';

import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export const useSocket = () => {
  const { data: session } = useSession();
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!session?.user?.email) return;

    // Socket bağlantısını kur
    socketRef.current = io(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000', {
      path: '/api/socket',
    });

    // Bağlantı kurulduğunda
    socketRef.current.on('connect', () => {
      console.log('Socket.io bağlantısı kuruldu');
      socketRef.current?.emit('userConnected', session.user.email);
    });

    // Arkadaşlık isteği alındığında
    socketRef.current.on('friendRequest', (data) => {
      if (data.data.receiver.email === session.user.email) {
        toast.success(`${data.data.sender.name} size arkadaşlık isteği gönderdi!`, {
          duration: 5000,
          position: 'top-right',
        });
      }
    });

    // Cleanup
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [session]);

  return socketRef.current;
};
