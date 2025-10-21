import { Server as NetServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import { NextApiResponse } from "next";

export type NextApiResponseServerIO = NextApiResponse & {
  socket: {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};

let io: SocketIOServer;

export const initSocket = (res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    const httpServer: NetServer = res.socket.server as any;
    io = new SocketIOServer(httpServer, {
      path: "/api/socket",
      addTrailingSlash: false,
      cors: {
        origin: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
      },
    });

    io.on("connection", (socket) => {
      socket.on("userConnected", (email: string) => {
        socket.join(email);
      });

      socket.on("disconnect", () => {});
    });

    res.socket.server.io = io;
  }
  return res.socket.server.io;
};

export { io };
