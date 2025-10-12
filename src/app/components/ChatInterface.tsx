"use client";

import { useState, useEffect, useRef } from "react";
import {
  Send,
  Image,
  Paperclip,
  Check,
  CheckCheck,
  Smile,
  Mic,
  Square,
  Trash2,
} from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import { useSocket } from "@/hooks/useSocket";
import { useSession } from "next-auth/react";

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  fileUrl?: string;
  fileType?: string;
  fileName?: string;
}

interface ChatInterfaceProps {
  friendId: string;
  currentUserId: string;
}

export default function ChatInterface({
  friendId,
  currentUserId,
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const emojiButtonRef = useRef<HTMLButtonElement>(null);
  const [isFriendTyping, setIsFriendTyping] = useState(false);
  const socket = useSocket();
  const { data: session } = useSession();
  const [friendLastSeen, setFriendLastSeen] = useState<string | null>(null);
  const [isFriendOnline, setIsFriendOnline] = useState(false);

  // Son görülme bilgisini güncelle (her 30 sn ve sayfa kapanırken)
  useEffect(() => {
    const updateLastSeen = async () => {
      await fetch("/api/users/last-seen", { method: "POST" });
    };
    updateLastSeen();
    const interval = setInterval(updateLastSeen, 30000);
    window.addEventListener("beforeunload", updateLastSeen);
    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", updateLastSeen);
    };
  }, []);

  // Arkadaşın online/offline bilgisini gerçek zamanlı socket ile dinle
  useEffect(() => {
    if (!socket || !friendId) return;
    const handleOnline = (data: { userId: string }) => {
      if (data.userId === friendId) setIsFriendOnline(true);
    };
    const handleOffline = (data: { userId: string }) => {
      if (data.userId === friendId) setIsFriendOnline(false);
    };
    socket.on("userOnline", handleOnline);
    socket.on("userOffline", handleOffline);
    return () => {
      socket.off("userOnline", handleOnline);
      socket.off("userOffline", handleOffline);
    };
  }, [socket, friendId]);

  // Kendi online durumunu sunucuya bildir
  useEffect(() => {
    if (!socket || !session?.user?.id) return;
    socket.emit("userOnline", { userId: session.user.id });
    const handleBeforeUnload = () => {
      socket.emit("userOffline", { userId: session.user.id });
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      socket.emit("userOffline", { userId: session.user.id });
    };
  }, [socket, session?.user?.id]);

  // Arkadaşın son görülme bilgisini çek
  useEffect(() => {
    const fetchLastSeen = async () => {
      try {
        const res = await fetch(`/api/users/last-seen?friendId=${friendId}`);
        const data = await res.json();
        if (data.lastSeen) {
          setFriendLastSeen(data.lastSeen);
        } else {
          setFriendLastSeen(null);
          setIsFriendOnline(false);
        }
      } catch {
        setFriendLastSeen(null);
        setIsFriendOnline(false);
      }
    };
    fetchLastSeen();
    const interval = setInterval(fetchLastSeen, 30000);
    return () => clearInterval(interval);
  }, [friendId]);

  // Typing eventlerini gönder ve dinle
  useEffect(() => {
    if (!socket) return;
    let typingTimeout: ReturnType<typeof setTimeout>;
    // Karşıdan gelen typing eventini dinle
    const handleUserTyping = (data: { userId: string }) => {
      if (data.userId === friendId) {
        setIsFriendTyping(true);
        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(() => setIsFriendTyping(false), 3000);
      }
    };
    const handleUserStopTyping = (data: { userId: string }) => {
      if (data.userId === friendId) setIsFriendTyping(false);
    };
    socket.on("userTyping", handleUserTyping);
    socket.on("userStopTyping", handleUserStopTyping);
    return () => {
      socket.off("userTyping", handleUserTyping);
      socket.off("userStopTyping", handleUserStopTyping);
      clearTimeout(typingTimeout);
    };
  }, [socket, friendId]);

  useEffect(() => {
    loadMessages();
    const interval = setInterval(loadMessages, 3000);
    return () => clearInterval(interval);
  }, [friendId]);

  useEffect(() => {
    // Mesajları okundu olarak işaretle
    markMessagesAsRead();
  }, [messages]);

  const markMessagesAsRead = async () => {
    const unreadMessages = messages.filter(
      (msg) => !msg.isRead && msg.senderId === friendId
    );

    if (unreadMessages.length > 0) {
      try {
        await fetch("/api/messages/mark-read", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messageIds: unreadMessages.map((msg) => msg.id),
          }),
        });
      } catch (error) {
        console.error("Mesajları okundu olarak işaretleme hatası:", error);
      }
    }
  };

  const loadMessages = async () => {
    try {
      const response = await fetch(`/api/messages/${friendId}`);
      const data = await response.json();
      setMessages(data);
      scrollToBottom();
    } catch (error) {
      console.error("Mesajları yükleme hatası:", error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error("Dosya yükleme hatası:", error);
      throw error;
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() && !selectedFile) return;

    setIsUploading(true);
    try {
      let fileData = null;
      if (selectedFile) {
        const fileUrl = await uploadFile(selectedFile);
        fileData = {
          url: fileUrl,
          type: selectedFile.type,
          name: selectedFile.name,
        };
      }

      const response = await fetch("/api/messages/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: newMessage,
          receiverId: friendId,
          fileUrl: fileData?.url,
          fileType: fileData?.type,
          fileName: fileData?.name,
        }),
      });

      if (response.ok) {
        setNewMessage("");
        setSelectedFile(null);
        loadMessages();
      }
    } catch (error) {
      console.error("Mesaj gönderme hatası:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const onEmojiClick = (emojiData: any) => {
    setNewMessage((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const chunks: BlobPart[] = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        setAudioBlob(blob);
        setSelectedFile(
          new File([blob], "audio-message.webm", { type: "audio/webm" })
        );
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Ses kaydı başlatma hatası:", error);
      alert(
        "Ses kaydı başlatılamadı. Lütfen mikrofon izinlerini kontrol edin."
      );
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const deleteMessage = async (messageId: string) => {
    if (!confirm("Bu mesajı silmek istediğinizden emin misiniz?")) {
      return;
    }

    try {
      const response = await fetch("/api/messages/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageId }),
      });

      if (response.ok) {
        // Mesajı yerel state'den kaldır
        setMessages((prevMessages) =>
          prevMessages.filter((msg) => msg.id !== messageId)
        );
      } else {
        const error = await response.json();
        alert(error.error || "Mesaj silinirken bir hata oluştu");
      }
    } catch (error) {
      console.error("Mesaj silme hatası:", error);
      alert("Mesaj silinirken bir hata oluştu");
    }
  };

  // Mesaj inputunda typing eventlerini gönder
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
    if (socket && session?.user?.id) {
      socket.emit("typing", { chatId: friendId, userId: currentUserId });
      if ((window as any).typingTimeout)
        clearTimeout((window as any).typingTimeout);
      (window as any).typingTimeout = setTimeout(() => {
        socket.emit("stopTyping", { chatId: friendId, userId: currentUserId });
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-2 pb-1 text-xs text-gray-500">
        {isFriendOnline ? (
          <span>çevrimiçi</span>
        ) : friendLastSeen ? (
          <span>son görülme {friendLastSeen}</span>
        ) : null}
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.senderId === currentUserId
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 relative group ${
                message.senderId === currentUserId
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {message.senderId === currentUserId && (
                <button
                  onClick={() => deleteMessage(message.id)}
                  className="absolute -right-8 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Mesajı sil"
                >
                  <Trash2 size={16} />
                </button>
              )}
              {message.fileUrl && (
                <div className="mb-2">
                  {message.fileType?.startsWith("image/") ? (
                    <img
                      src={message.fileUrl}
                      alt={message.fileName || "Yüklenen görsel"}
                      className="max-w-full rounded-lg"
                    />
                  ) : message.fileType?.startsWith("audio/") ? (
                    <audio
                      controls
                      className="max-w-full"
                      controlsList="nodownload"
                    >
                      <source src={message.fileUrl} type="audio/mp3" />
                      Tarayıcınız ses oynatmayı desteklemiyor.
                    </audio>
                  ) : (
                    <a
                      href={message.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:underline"
                    >
                      <Paperclip className="w-4 h-4 mr-1" />
                      {message.fileName || "Dosyayı indir"}
                    </a>
                  )}
                </div>
              )}
              <p>{message.content}</p>
              <div className="flex items-center justify-end mt-1 space-x-1 text-xs opacity-70">
                <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
                {message.senderId === currentUserId &&
                  (message.isRead ? (
                    <CheckCheck className="w-4 h-4" />
                  ) : (
                    <Check className="w-4 h-4" />
                  ))}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t border-gray-200">
        {isFriendTyping && (
          <div className="flex items-center mb-2">
            <span className="text-green-600 font-semibold animate-pulse">
              Yazıyor...
            </span>
            <span className="ml-2 text-2xl text-green-600 animate-bounce">
              ...
            </span>
          </div>
        )}
        <div className="flex items-center space-x-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden"
            accept="image/*,.pdf,.doc,.docx,.txt"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Image className="w-6 h-6" />
          </button>
          <button
            type="button"
            ref={emojiButtonRef}
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Smile className="w-6 h-6" />
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-20 left-0">
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}
          <button
            type="button"
            onClick={isRecording ? stopRecording : startRecording}
            className={`p-2 hover:bg-gray-100 rounded-full ${
              isRecording ? "text-red-500" : "text-gray-500"
            }`}
          >
            {isRecording ? (
              <Square className="w-5 h-5" />
            ) : (
              <Mic className="w-5 h-5" />
            )}
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={handleInputChange}
            placeholder="Mesajınızı yazın..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            disabled={isUploading || (!newMessage.trim() && !selectedFile)}
            className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {isUploading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="w-6 h-6" />
            )}
          </button>
        </div>
        {selectedFile && (
          <div className="mt-2 flex items-center bg-gray-100 rounded-lg px-3 py-2 text-sm font-medium text-gray-800">
            {selectedFile.name.toLowerCase().includes("screenshot") ||
            selectedFile.name.toLowerCase().includes("ekran") ? (
              <>
                <span className="mr-2">🖼️</span>
                <span>Ekran görüntüsü…</span>
              </>
            ) : (
              <>
                <Paperclip className="w-4 h-4 mr-2" />
                <span>{selectedFile.name}</span>
              </>
            )}
            <button
              type="button"
              onClick={() => setSelectedFile(null)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
