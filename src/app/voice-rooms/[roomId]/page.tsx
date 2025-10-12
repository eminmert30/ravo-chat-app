"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import VoiceRoomInterface from "@/components/voice-rooms/VoiceRoomInterface";

interface Participant {
  id: string;
  name: string;
  avatar: string;
  isSpeaking: boolean;
  isMuted: boolean;
  isHost: boolean;
  isDeafened: boolean;
  volume: number;
}

export default function VoiceRoomPage() {
  const params = useParams();
  const router = useRouter();
  const roomId = params.roomId as string;

  const [participants, setParticipants] = useState<Participant[]>([
    {
      id: "1",
      name: "Ahmet Yılmaz",
      avatar: "/api/placeholder/40/40",
      isSpeaking: true,
      isMuted: false,
      isHost: true,
      isDeafened: false,
      volume: 85,
    },
    {
      id: "2",
      name: "Ayşe Demir",
      avatar: "/api/placeholder/40/40",
      isSpeaking: false,
      isMuted: true,
      isHost: false,
      isDeafened: false,
      volume: 70,
    },
    {
      id: "3",
      name: "Mehmet Kaya",
      avatar: "/api/placeholder/40/40",
      isSpeaking: true,
      isMuted: false,
      isHost: false,
      isDeafened: false,
      volume: 90,
    },
    {
      id: "4",
      name: "Zeynep Özkan",
      avatar: "/api/placeholder/40/40",
      isSpeaking: false,
      isMuted: false,
      isHost: false,
      isDeafened: true,
      volume: 0,
    },
    {
      id: "5",
      name: "Can Arslan",
      avatar: "/api/placeholder/40/40",
      isSpeaking: false,
      isMuted: false,
      isHost: false,
      isDeafened: false,
      volume: 60,
    },
  ]);

  const handleLeave = () => {
    // Handle room leave logic here
    router.push("/voice-rooms");
  };

  // Simulate speaking patterns
  useEffect(() => {
    const interval = setInterval(() => {
      setParticipants((prev) =>
        prev.map((p) => ({
          ...p,
          isSpeaking: Math.random() > 0.7,
          volume: p.isSpeaking ? Math.floor(Math.random() * 40) + 60 : p.volume,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <VoiceRoomInterface
      roomId={roomId}
      roomName="🎵 Müzik & Sohbet"
      participants={participants}
      onLeave={handleLeave}
    />
  );
}
