import { useState, useEffect } from "react";
import io from "socket.io-client";

interface Friend {
  id: string;
  name: string;
  lastMessage?: {
    content: string;
    timestamp: string;
  };
  isOnline: boolean;
}

interface FriendsListProps {
  onSelectFriend: (friendId: string) => void;
  selectedFriendId?: string;
}

export default function FriendsList({
  onSelectFriend,
  selectedFriendId,
}: FriendsListProps) {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [typingFriends, setTypingFriends] = useState<{
    [friendId: string]: boolean;
  }>({});
  const [onlineFriends, setOnlineFriends] = useState<{
    [friendId: string]: boolean;
  }>({});

  console.log("[FRIENDSLIST] FriendsList component rendered");

  useEffect(() => {
    console.log("[FRIENDSLIST] useEffect mount, friends:", friends);
    loadFriends();
    const interval = setInterval(loadFriends, 30000); // Her 30 saniyede bir arkadaş listesini güncelle

    // Socket.io bağlantısını al ve typing/online eventlerini dinle
    const socket = io(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
      {
        path: "/api/socket",
      }
    );

    const handleUserTyping = (data: { userId: string }) => {
      setTypingFriends((prev) => ({ ...prev, [data.userId]: true }));
      setTimeout(() => {
        setTypingFriends((prev) => ({ ...prev, [data.userId]: false }));
      }, 3000);
    };
    const handleUserStopTyping = (data: { userId: string }) => {
      setTypingFriends((prev) => ({ ...prev, [data.userId]: false }));
    };
    const handleUserOnline = (data: { userId: string }) => {
      console.log("[FRIENDSLIST] userOnline event:", data);
      setOnlineFriends((prev) => {
        const updated = { ...prev, [data.userId]: true };
        console.log(
          "[FRIENDSLIST] onlineFriends state after userOnline:",
          updated
        );
        return updated;
      });
    };
    const handleUserOffline = (data: { userId: string }) => {
      console.log("[FRIENDSLIST] userOffline event:", data);
      setOnlineFriends((prev) => {
        const updated = { ...prev, [data.userId]: false };
        console.log(
          "[FRIENDSLIST] onlineFriends state after userOffline:",
          updated
        );
        return updated;
      });
    };
    socket.on("userTyping", handleUserTyping);
    socket.on("userStopTyping", handleUserStopTyping);
    socket.on("userOnline", handleUserOnline);
    socket.on("userOffline", handleUserOffline);

    return () => {
      clearInterval(interval);
      socket.off("userTyping", handleUserTyping);
      socket.off("userStopTyping", handleUserStopTyping);
      socket.off("userOnline", handleUserOnline);
      socket.off("userOffline", handleUserOffline);
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log("[FRIENDSLIST] friends array:", friends);
  }, [friends]);

  useEffect(() => {
    console.log("[FRIENDSLIST] onlineFriends state:", onlineFriends);
  }, [onlineFriends]);

  const loadFriends = async () => {
    try {
      const response = await fetch("/api/friends");
      const data = await response.json();
      setFriends(data);
    } catch (error) {
      console.error("Arkadaş listesi yükleme hatası:", error);
    }
  };

  return (
    <div className="w-full max-w-md border-r">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Arkadaşlar</h2>
      </div>
      <div className="overflow-y-auto">
        {friends?.map((friend) => (
          <div
            key={friend.id}
            onClick={() => onSelectFriend(friend.id)}
            className={`p-4 cursor-pointer hover:bg-gray-50 ${
              selectedFriendId === friend.id ? "bg-blue-50" : ""
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xl">{friend.name[0]}</span>
                </div>
                {friend.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{friend.name}</h3>
                {onlineFriends[friend.id] ? (
                  <span className="text-green-600 font-semibold">
                    çevrimiçi
                  </span>
                ) : typingFriends[friend.id] ? (
                  <span className="text-green-600 font-semibold">
                    yazıyor...
                  </span>
                ) : friend.lastMessage ? (
                  <p className="text-sm text-gray-500 truncate">
                    {friend.lastMessage.content}
                  </p>
                ) : null}
              </div>
              {friend.lastMessage && (
                <span className="text-xs text-gray-400">
                  {new Date(friend.lastMessage.timestamp).toLocaleTimeString()}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
