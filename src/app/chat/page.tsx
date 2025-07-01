"use client";

import { useState, useEffect, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
import {
  PaperAirplaneIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
  EllipsisHorizontalIcon,
  UserPlusIcon,
  PhotoIcon,
  PaperClipIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  VideoCameraIcon,
  FaceSmileIcon,
  MicrophoneIcon,
  StopIcon,
} from "@heroicons/react/24/outline";
import EmojiPicker from "emoji-picker-react";
import { io, Socket } from "socket.io-client";
import UserSearch from "../components/UserSearch";

const ALLOWED_FILE_TYPES = [
  // Resimler
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  // PDF
  "application/pdf",
  // Video
  "video/mp4",
  "video/webm",
  // Metin
  "text/plain",
  "text/csv",
  "application/json",
  // Ofis Dosyaları
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  // Arşiv Dosyaları
  "application/zip",
  "application/x-zip",
  "application/x-zip-compressed",
  "application/octet-stream",
  "application/x-rar-compressed",
];

interface Message {
  id: string;
  content: string;
  senderId: string;
  sender: {
    id: string;
    name: string;
    email: string;
    image?: string;
  };
  createdAt: string;
  fileUrl?: string;
  fileType?: string;
  fileName?: string;
  isAudio?: boolean;
  chatId: string;
  isDeleted?: boolean;
}

export default function ChatPage() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typingUser, setTypingUser] = useState<string | null>(null);
  const [showUserSearch, setShowUserSearch] = useState(false);
  const [friendRequests, setFriendRequests] = useState<any[]>([]);
  const [requestStatus, setRequestStatus] = useState<{ [key: string]: string }>(
    {}
  );
  const [friends, setFriends] = useState<any[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout>();
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const [selectedFriendId, setSelectedFriendId] = useState<string | null>(null);
  const [currentChatInfo, setCurrentChatInfo] = useState<{
    chatId: string;
    friendId: string;
  } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (session?.user) {
      const socketInstance = io(
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        {
          path: "/api/socket",
        }
      );

      socketInstance.on("connect", () => {
        console.log("Socket bağlantısı başarılı");
        socketInstance.emit("userConnected", session.user.email);
      });

      socketInstance.on("connect_error", (error) => {
        console.error("Socket bağlantı hatası:", error);
      });

      // Yeni mesaj event handler'ı
      socketInstance.on(
        "newMessage",
        (data: { chatId: string; message: Message }) => {
          console.log("Yeni mesaj alındı:", data);
          if (
            data.chatId === selectedChat &&
            data.message.senderId !== currentUserId
          ) {
            setMessages((prev) => [...prev, data.message]);
            scrollToBottom();
          }
        }
      );

      // Mesaj silme event handler'ı
      socketInstance.on("messageDeleted", (data) => {
        console.log("Socket event - messageDeleted alındı:", data);
        if (data.chatId === selectedChat) {
          const message = messages.find((m) => m.id === data.messageId);
          const isAudioMessage = message?.isAudio || data.isAudio;

          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === data.messageId
                ? {
                    ...msg,
                    isDeleted: true,
                    content: data.content,
                    fileUrl: isAudioMessage ? undefined : msg.fileUrl,
                  }
                : msg
            )
          );
        }
      });

      setSocket(socketInstance);

      return () => {
        socketInstance.disconnect();
      };
    }
  }, [session, selectedChat, currentUserId]);

  // Mesajları yükleme fonksiyonu
  const fetchMessages = async (chatId: string) => {
    try {
      const response = await fetch(`/api/chat/messages?chatId=${chatId}`);
      if (!response.ok) {
        throw new Error("Mesajlar yüklenemedi");
      }
      const data = await response.json();
      setMessages(data);
      scrollToBottom();
    } catch (error) {
      console.error("Mesajları yükleme hatası:", error);
    }
  };

  // Kendi user ID'mizi al
  const getCurrentUserId = async () => {
    console.log("=== GET CURRENT USER ID BAŞLADI ===");
    console.log("Session?.user?.email:", session?.user?.email);
    console.log("Session?.user?.id:", session?.user?.id);

    // Önce session'dan ID'yi kontrol et
    if (session?.user?.id) {
      console.log("Session'dan ID alındı:", session.user.id);
      setCurrentUserId(session.user.id);
      return;
    }

    // Session'da ID yoksa email ile veritabanından al
    if (session?.user?.email) {
      try {
        console.log("API çağrısı yapılıyor...");
        const response = await fetch(
          `/api/users/search?q=${session.user.email}`
        );
        console.log("API response status:", response.status);

        if (response.ok) {
          const users = await response.json();
          console.log("API response users:", users);

          if (users.length > 0) {
            const currentUser = users.find(
              (user: any) => user.email === session.user.email
            );
            console.log("Bulunan currentUser:", currentUser);

            if (currentUser) {
              console.log("CurrentUserId set ediliyor:", currentUser.id);
              setCurrentUserId(currentUser.id);
              console.log("Current user ID set to:", currentUser.id);
            } else {
              console.log("Email eşleşen kullanıcı bulunamadı");
            }
          } else {
            console.log("API'den hiç kullanıcı dönmedi");
          }
        } else {
          console.log("API çağrısı başarısız:", response.status);
        }
      } catch (error) {
        console.error("User ID alma hatası:", error);
      }
    } else {
      console.log("Session?.user?.email yok");
    }
    console.log("=== GET CURRENT USER ID BİTTİ ===");
  };

  useEffect(() => {
    console.log("=== GET CURRENT USER ID USE EFFECT ===");
    console.log("Session?.user?.email değişti:", session?.user?.email);
    getCurrentUserId();
  }, [session?.user?.email]);

  // Mesajları ve user ID'yi birlikte yükle
  const loadChatData = async (chatId: string) => {
    console.log("=== LOAD CHAT DATA BAŞLADI ===");
    console.log("ChatId:", chatId);

    try {
      // Önce user ID'yi al
      console.log("User ID alınıyor...");
      await getCurrentUserId();
      console.log("User ID alındı, mesajlar yükleniyor...");

      // Sonra mesajları yükle
      await fetchMessages(chatId);
      console.log("Mesajlar yüklendi");
    } catch (error) {
      console.error("Chat data yükleme hatası:", error);
    }
    console.log("=== LOAD CHAT DATA BİTTİ ===");
  };

  const handleTyping = () => {
    if (socket && selectedChat) {
      socket.emit("typing", {
        chatId: selectedChat,
        user: session?.user?.email,
      });

      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }

      typingTimeoutRef.current = setTimeout(() => {
        socket.emit("stopTyping", { chatId: selectedChat });
      }, 2000);
    }
  };

  // Seçili sohbet değiştiğinde mesajları yükle
  useEffect(() => {
    if (selectedChat) {
      loadChatData(selectedChat);
    }
  }, [selectedChat]);

  const sendMessage = async () => {
    if (!newMessage.trim() && !selectedFile && !audioBlob) return;

    try {
      setIsUploading(true);
      let fileUrl = "",
        fileType = "",
        fileName = "";

      if (selectedFile) {
        const formData = new FormData();
        formData.append("file", selectedFile);

        // Dosya yükleme işlemi
        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadResponse.ok) {
          const errorData = await uploadResponse.json();
          throw new Error(errorData.error || "Dosya yükleme hatası");
        }

        const uploadData = await uploadResponse.json();
        console.log("Upload response:", uploadData); // Debug için

        if (!uploadData.success) {
          throw new Error(uploadData.error || "Dosya yükleme başarısız");
        }

        fileUrl = uploadData.url;
        fileType = selectedFile.type;
        fileName = selectedFile.name;

        console.log("Dosya bilgileri:", { fileUrl, fileType, fileName }); // Debug için
      }

      const messageData = {
        chatId: selectedChat,
        content: newMessage,
        fileUrl,
        fileType,
        fileName,
      };

      console.log("Gönderilecek mesaj:", messageData); // Debug için

      const response = await fetch("/api/chat/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Mesaj gönderme hatası");
      }

      const message = await response.json();
      console.log("Mesaj gönderildi, socket emit yapılıyor:", message);

      // Socket üzerinden diğer kullanıcılara bildir
      if (socket) {
        socket.emit("sendMessage", {
          chatId: selectedChat,
          message,
        });
      }

      // Kendi mesajımızı hemen göster
      setMessages((prev) => [...prev, message]);
      setNewMessage("");
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      scrollToBottom();
    } catch (error: any) {
      console.error("Mesaj gönderme hatası detayı:", {
        error: error.message,
        file: selectedFile
          ? {
              name: selectedFile.name,
              type: selectedFile.type,
              size: selectedFile.size,
            }
          : null,
      });
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const handleVoiceCall = () => {
    setIsCalling(true);
    setIsVideoCall(false);
    // Sesli arama başlatma mantığı buraya gelecek
    setTimeout(() => setIsCalling(false), 2000); // Demo için
  };

  const handleVideoCall = () => {
    setIsCalling(true);
    setIsVideoCall(true);
    // Görüntülü arama başlatma mantığı buraya gelecek
    setTimeout(() => setIsCalling(false), 2000); // Demo için
  };

  // Arkadaş listesini getir
  const fetchFriends = async () => {
    try {
      const response = await fetch("/api/friends");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFriends(data);
      }
    } catch (error) {
      console.error("Arkadaş listesi getirme hatası:", error);
    }
  };

  useEffect(() => {
    if (session?.user) {
      fetchFriends();
    }
  }, [session]);

  // Socket.io arkadaş listesi yenileme eventi
  useEffect(() => {
    if (socket) {
      socket.on("refreshFriendsList", () => {
        console.log("Arkadaş listesi yenileniyor");
        fetchFriends();
      });
    }
  }, [socket]);

  // Arkadaşlık isteklerini getir
  const fetchFriendRequests = async () => {
    try {
      const response = await fetch("/api/friends/requests");
      if (response.ok) {
        const data = await response.json();
        setFriendRequests(data);
      }
    } catch (error) {
      console.error("Arkadaşlık istekleri alınamadı:", error);
    }
  };

  // Arkadaşlık isteğini kabul et
  const handleFriendRequest = async (
    requestId: string,
    action: "accept" | "reject"
  ) => {
    try {
      const response = await fetch("/api/friends/respond", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ requestId, action }),
      });

      if (!response.ok) {
        throw new Error("İstek işlenirken bir hata oluştu");
      }

      // İsteği geçici olarak işaretleyelim
      setRequestStatus((prev) => ({
        ...prev,
        [requestId]: action === "accept" ? "accepted" : "rejected",
      }));

      // İsteği listeden kaldır
      setFriendRequests((prev) => prev.filter((req) => req.id !== requestId));

      // Arkadaşlık isteği kabul edildiyse arkadaş listesini yenile
      if (action === "accept") {
        // FriendsList komponentini yenilemek için bir event yayınla
        if (socket) {
          socket.emit("refreshFriendsList");
        }
      }
    } catch (error) {
      console.error("Arkadaşlık isteği yanıtlama hatası:", error);
      // Hata durumunda durumu sıfırla
      setRequestStatus((prev) => ({ ...prev, [requestId]: "error" }));
    }
  };

  useEffect(() => {
    if (session?.user) {
      fetchFriendRequests();
    }
  }, [session, selectedChat]);

  const startChat = async (friendId: string) => {
    try {
      const selectedFriend = friends.find((f) => f.id === friendId);

      const response = await fetch("/api/chats/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ friendId }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Sohbet başlatılırken bir hata oluştu");
      }

      const chat = await response.json();
      setSelectedChat(chat.id);
      setSelectedFriendId(friendId);
      setCurrentChatInfo({ chatId: chat.id, friendId: friendId });
      setShowUserSearch(false);
      setSearchQuery("");
      loadChatData(chat.id);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const onEmojiClick = (emojiData: any) => {
    setNewMessage((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const filteredFriends = friends.filter(
    (friend) =>
      friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (friend.lastMessage?.content || "")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/mpeg", // MP3 formatını kullanıyoruz
        });
        setAudioBlob(audioBlob);
        console.log("Ses kaydı tamamlandı:", {
          size: audioBlob.size,
          type: audioBlob.type,
          duration: audioChunksRef.current.length,
        });

        // Ses kaydını hemen gönder
        await sendAudioMessage(audioBlob);

        // Stream'i kapat
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start(1000); // Her 1 saniyede bir veri topla
      setIsRecording(true);
    } catch (error) {
      console.error("Ses kaydı başlatılamadı:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const sendAudioMessage = async (audioBlob: Blob) => {
    try {
      console.log("Ses mesajı gönderiliyor:", {
        blobSize: audioBlob.size,
        blobType: audioBlob.type,
      });

      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", audioBlob, "audio-message.mp3");

      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        console.error("Yükleme hatası:", errorData);
        throw new Error(errorData.error || "Dosya yükleme hatası");
      }

      const { url, type } = await uploadResponse.json();
      console.log("Ses dosyası yüklendi:", { url, type });

      const response = await fetch("/api/chat/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatId: selectedChat,
          content: "🎤 Sesli mesaj",
          fileUrl: url,
          fileType: type || "audio/mpeg",
          fileName: "audio-message.mp3",
          isAudio: true,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Mesaj kaydetme hatası:", errorData);
        throw new Error(errorData.error || "Mesaj kaydetme hatası");
      }

      const newMessage = await response.json();
      console.log("Ses mesajı başarıyla kaydedildi:", newMessage);
      // Sesli mesajı socket üzerinden gönder
      socket?.emit("sendMessage", {
        chatId: selectedChat,
        message: newMessage,
      });
      // Kendi sesli mesajımızı hemen göster
      setMessages((prev) => [...prev, newMessage]);
      scrollToBottom();
    } catch (error) {
      console.error("Sesli mesaj gönderme hatası:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const deleteMessage = async (messageId: string) => {
    try {
      const deletedMessage = messages.find((m) => m.id === messageId);
      const isAudio = deletedMessage?.isAudio || false;

      const response = await fetch("/api/messages/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageId, isAudio }), // isAudio'yu backend'e de gönderelim
      });

      if (response.ok) {
        console.log("Mesaj silindi, bildirimi gönderiliyor:", {
          messageId,
          isAudio,
        });

        // Yerel state'i güncelle
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId
              ? {
                  ...msg,
                  isDeleted: true,
                  content: isAudio
                    ? "🎤 Bu sesli mesaj silindi"
                    : "Bu mesaj silindi",
                  fileUrl: isAudio ? undefined : msg.fileUrl,
                }
              : msg
          )
        );

        // Socket üzerinden bildirim gönder
        /*   if (socket && selectedChat) {
          socket.emit('messageDeleted', {
            chatId: selectedChat,
            messageId: messageId,
            isAudio: isAudio,
            messageType: isAudio ? 'audio' : 'text'
          });
        } */
      }
    } catch (error) {
      console.error("Mesaj silme hatası:", error);
    }
  };

  // FileViewer bileşenini mesaj alanının üstüne ekleyelim
  const FileViewer = ({
    fileUrl,
    fileType,
    fileName,
  }: {
    fileUrl: string;
    fileType: string;
    fileName: string;
  }) => {
    if (fileType.startsWith("image/")) {
      return (
        <img
          src={fileUrl}
          alt={fileName}
          className="max-w-full rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
          onClick={() => window.open(fileUrl, "_blank")}
        />
      );
    }

    if (fileType === "application/pdf") {
      return (
        <div className="max-w-full">
          <div className="bg-gray-800 p-3 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <svg
                className="w-8 h-8 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16v-6h2v6h-2zm0-8V8h2v2h-2z" />
              </svg>
              <span className="text-gray-200">{fileName}</span>
            </div>
            <div className="flex space-x-2">
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
              >
                Görüntüle
              </a>
              <a
                href={fileUrl}
                download={fileName}
                className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors"
              >
                İndir
              </a>
            </div>
          </div>
        </div>
      );
    }

    if (fileType.startsWith("video/")) {
      return (
        <div className="max-w-full">
          <video
            controls
            className="rounded-lg max-w-full"
            style={{ maxHeight: "400px" }}
          >
            <source src={fileUrl} type={fileType} />
            Tarayıcınız video oynatmayı desteklemiyor.
          </video>
        </div>
      );
    }

    if (fileType.startsWith("text/") || fileType === "application/json") {
      return (
        <div className="max-w-full">
          <div className="bg-gray-800 p-3 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-gray-200">{fileName}</span>
            </div>
            <div className="flex space-x-2">
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
              >
                Görüntüle
              </a>
              <a
                href={fileUrl}
                download={fileName}
                className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors"
              >
                İndir
              </a>
            </div>
          </div>
        </div>
      );
    }

    // Diğer dosya türleri için genel görünüm
    return (
      <div className="max-w-full">
        <div className="bg-gray-800 p-3 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-gray-200 truncate max-w-[200px]">
              {fileName}
            </span>
            <span className="text-gray-400 text-sm">
              ({fileType || "bilinmeyen tür"})
            </span>
          </div>
          <a
            href={fileUrl}
            download={fileName}
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
          >
            İndir
          </a>
        </div>
      </div>
    );
  };

  // Sürükle-bırak göstergesinin stilini güncelle
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--drag-opacity",
      isDragging ? "1" : "0"
    );
  }, [isDragging]);

  // Add console log to debug showUserSearch state
  console.log("showUserSearch state:", showUserSearch);

  const renderItem = ({ item }: { item: Message }) => {
    console.log("=== RENDER ITEM BAŞLADI ===");
    console.log("Item:", item);
    console.log("CurrentUserId state:", currentUserId);
    console.log("Session?.user?.id:", session?.user?.id);
    console.log("Session?.user?.email:", session?.user?.email);

    // Mesajın sender ID'si
    const messageSenderId = item.senderId;
    console.log("Message senderId:", messageSenderId);

    // Kendi ID'miz (öncelik sırası: currentUserId > session?.user?.id)
    const myId = currentUserId || session?.user?.id;
    console.log("My ID (currentUserId || session?.user?.id):", myId);

    // Mesajın bizim mi olduğunu kontrol et
    const isMe = messageSenderId === myId;
    console.log("IsMe calculation (messageSenderId === myId):", isMe);
    console.log(
      "MessageSenderId:",
      messageSenderId,
      "MyId:",
      myId,
      "Equal:",
      messageSenderId === myId
    );

    // Bubble rengi ve stili
    const bubbleColor = isMe ? "#4F46E5" : "#F3F4F6";
    const bubbleStyle = isMe ? "bubbleMe" : "bubbleOther";

    console.log("Final isMe:", isMe);
    console.log("Bubble color:", bubbleColor);
    console.log("Bubble style:", bubbleStyle);
    console.log("=== RENDER ITEM BİTTİ ===");

    return (
      <div
        key={item.id}
        className={`flex ${isMe ? "justify-end" : "justify-start"} mb-4`}
      >
        <div
          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
            isMe
              ? "bg-indigo-600 text-white rounded-br-none"
              : "bg-gray-200 text-gray-800 rounded-bl-none"
          }`}
        >
          <p className="text-sm">{item.content}</p>
          <p
            className={`text-xs mt-1 ${
              isMe ? "text-indigo-200" : "text-gray-500"
            }`}
          >
            {new Date(item.createdAt).toLocaleTimeString()}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="flex h-screen">
        {/* Sol Sidebar */}
        <div className="w-1/4 bg-white/10 backdrop-blur-sm border-r border-gray-700 flex flex-col">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <UserCircleIcon className="h-8 w-8 text-gray-300" />
                <div>
                  <span className="text-gray-200 font-medium">
                    {session?.user?.name}
                  </span>
                  <p className="text-xs text-gray-400">
                    {session?.user?.email}
                  </p>
                </div>
              </div>
              <button
                onClick={() => signOut()}
                className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
              >
                <ArrowLeftOnRectangleIcon className="h-5 w-5 text-gray-300" />
              </button>
            </div>
          </div>

          {/* Arkadaşlık İstekleri */}
          {friendRequests.length > 0 && (
            <div className="px-4 py-2 border-y border-gray-700 bg-white/5">
              <h3 className="text-sm font-medium text-gray-300 mb-2">
                Arkadaşlık İstekleri
              </h3>
              <div className="space-y-2">
                {friendRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between p-2 rounded-lg bg-white/5"
                  >
                    <div>
                      <p className="text-gray-200 font-medium">
                        {request.sender.name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {request.sender.email}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() =>
                          handleFriendRequest(request.id, "accept")
                        }
                        disabled={requestStatus[request.id] === "accepted"}
                        className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 text-sm"
                      >
                        Kabul Et
                      </button>
                      <button
                        onClick={() =>
                          handleFriendRequest(request.id, "reject")
                        }
                        disabled={requestStatus[request.id] === "rejected"}
                        className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 text-sm"
                      >
                        Reddet
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex-1 flex flex-col min-h-0">
            {showUserSearch ? (
              <div className="flex-1 overflow-y-auto">
                <div className="sticky top-0 z-10 px-4 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-b border-gray-700">
                  <h2 className="text-lg font-semibold text-gray-100">
                    Kullanıcı Ara
                  </h2>
                  <p className="text-sm text-gray-400">
                    Arkadaş eklemek için kullanıcı arayın
                  </p>
                </div>
                <div className="p-4">
                  <UserSearch query={searchQuery} onSelectUser={startChat} />
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto">
                {/* Arkadaşlar Başlığı */}
                <div className="sticky top-0 z-10 px-4 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-100">
                        Arkadaşlarım
                      </h2>
                      <p className="text-sm text-gray-400">
                        {filteredFriends.length} arkadaş
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Sohbet ara..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Arkadaşlar Listesi */}
                <div className="flex-1 flex flex-col items-center overflow-y-auto scrollbar-hide">
                  {filteredFriends.map((friend) => (
                    <div
                      key={friend.id}
                      onClick={() => startChat(friend.id)}
                      className={`w-full p-4 hover:bg-gray-700/50 cursor-pointer transition-colors ${
                        selectedChat === friend.id ? "bg-gray-700/50" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {friend.name[0]}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-200">
                              {friend.name}
                            </h3>
                            <p className="text-xs text-gray-400 truncate max-w-[150px]">
                              {friend.lastMessage?.content || "Henüz mesaj yok"}
                            </p>
                          </div>
                        </div>
                        {friend.isOnline && (
                          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        )}
                      </div>
                    </div>
                  ))}
                  {filteredFriends.length === 0 && (
                    <div className="p-4 text-center text-gray-400">
                      <p>Sonuç bulunamadı</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Yeni Sohbet Butonu */}
          <div className="p-4 border-t border-gray-700">
            <button
              onClick={() => {
                setShowUserSearch(!showUserSearch);
                setSearchQuery("");
                console.log("Setting showUserSearch to:", !showUserSearch);
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              {showUserSearch ? (
                <>
                  <XMarkIcon className="h-5 w-5" />
                  <span>Sohbetlere Dön</span>
                </>
              ) : (
                <>
                  <UserPlusIcon className="h-5 w-5" />
                  <span>Yeni Sohbet</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Ana Sohbet Alanı */}
        <div className="flex-1 flex flex-col bg-gradient-to-b from-gray-800 to-gray-900">
          {selectedFriendId && (
            <div className="border-b p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="h-8 w-8 text-gray-300" />
                <div>
                  <h2 className="text-gray-200 font-medium">
                    {friends.find((f) => f.id === selectedFriendId)?.name}
                  </h2>
                  <p className="text-sm text-gray-400">Çevrimiçi</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-700/50 rounded-full transition-colors">
                  <PhoneIcon className="h-5 w-5 text-gray-300" />
                </button>
                <button className="p-2 hover:bg-gray-700/50 rounded-full transition-colors">
                  <VideoCameraIcon className="h-5 w-5 text-gray-300" />
                </button>
                <button className="p-2 hover:bg-gray-700/50 rounded-full transition-colors">
                  <EllipsisHorizontalIcon className="h-5 w-5 text-gray-300" />
                </button>
              </div>
            </div>
          )}
          {selectedChat ? (
            <>
              {/* Mesaj Alanı */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => renderItem({ item: message }))}
                {isTyping && (
                  <div className="text-sm text-gray-400 italic">
                    {typingUser} yazıyor...
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Mesaj Gönderme Alanı */}
              <div
                className="relative px-6 py-4 bg-white/10 backdrop-blur-sm border-t border-gray-700 transition-colors duration-200"
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDragging(true);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDragging(false);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDragging(false);

                  const files = Array.from(e.dataTransfer.files);
                  if (files.length > 0) {
                    const file = files[0];
                    if (ALLOWED_FILE_TYPES.includes(file.type)) {
                      setSelectedFile(file);
                    } else {
                      alert(
                        `Bu dosya türü desteklenmiyor (${file.type}). Lütfen geçerli bir dosya türü seçin.`
                      );
                    }
                  }
                }}
              >
                {/* Sürükle-bırak göstergesi */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-blue-500/20 pointer-events-none opacity-0 transition-opacity duration-200"
                  style={{ opacity: "var(--drag-opacity, 0)" }}
                >
                  <div className="text-white text-center">
                    <PaperClipIcon className="h-8 w-8 mx-auto mb-2" />
                    <p>Dosyayı buraya bırakın</p>
                  </div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage();
                  }}
                  className="flex items-center space-x-4"
                >
                  <button
                    type="button"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
                  >
                    <FaceSmileIcon className="h-5 w-5 text-gray-300" />
                  </button>

                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => {
                        setNewMessage(e.target.value);
                        handleTyping();
                      }}
                      placeholder="Mesajınızı yazın..."
                      className="w-full px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {showEmojiPicker && (
                      <div className="absolute bottom-full mb-2">
                        <EmojiPicker onEmojiClick={onEmojiClick} />
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`p-2 hover:bg-gray-700/50 rounded-full transition-colors ${
                      isRecording ? "text-red-500" : "text-gray-300"
                    }`}
                  >
                    {isRecording ? (
                      <StopIcon className="h-5 w-5" />
                    ) : (
                      <MicrophoneIcon className="h-5 w-5" />
                    )}
                  </button>

                  <label className="p-2 hover:bg-gray-700/50 rounded-full transition-colors cursor-pointer">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                      accept="image/*,video/*,application/pdf,text/*,application/json"
                      className="hidden"
                    />
                    <PaperClipIcon className="h-5 w-5 text-gray-300" />
                  </label>

                  <button
                    type="submit"
                    disabled={
                      isUploading ||
                      (!newMessage.trim() && !selectedFile && !audioBlob)
                    }
                    className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors disabled:opacity-50"
                  >
                    <PaperAirplaneIcon className="h-5 w-5 text-white" />
                  </button>
                </form>

                {selectedFile && (
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-sm text-gray-300">
                      {selectedFile.name}
                    </span>
                    <button
                      onClick={() => setSelectedFile(null)}
                      className="p-1 hover:bg-gray-700/50 rounded-full transition-colors"
                    >
                      <XMarkIcon className="h-4 w-4 text-gray-300" />
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-200 mb-2">
                  Hoş Geldiniz!
                </h2>
                <p className="text-gray-400">
                  Sohbete başlamak için bir kullanıcı seçin veya arayın.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
