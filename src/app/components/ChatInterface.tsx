'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, Image, Paperclip, Check, CheckCheck, Smile, Mic, Square, Trash2 } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';

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

export default function ChatInterface({ friendId, currentUserId }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const emojiButtonRef = useRef<HTMLButtonElement>(null);

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
      msg => !msg.isRead && msg.senderId === friendId
    );

    if (unreadMessages.length > 0) {
      try {
        await fetch('/api/messages/mark-read', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messageIds: unreadMessages.map(msg => msg.id)
          })
        });
      } catch (error) {
        console.error('Mesajları okundu olarak işaretleme hatası:', error);
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
      console.error('Mesajları yükleme hatası:', error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Dosya yükleme hatası:', error);
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
          name: selectedFile.name
        };
      }

      const response = await fetch('/api/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: newMessage,
          receiverId: friendId,
          fileUrl: fileData?.url,
          fileType: fileData?.type,
          fileName: fileData?.name
        }),
      });

      if (response.ok) {
        setNewMessage('');
        setSelectedFile(null);
        loadMessages();
      }
    } catch (error) {
      console.error('Mesaj gönderme hatası:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const onEmojiClick = (emojiData: any) => {
    setNewMessage(prev => prev + emojiData.emoji);
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
        const blob = new Blob(chunks, { type: 'audio/webm' });
        setAudioBlob(blob);
        setSelectedFile(new File([blob], 'audio-message.webm', { type: 'audio/webm' }));
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Ses kaydı başlatma hatası:', error);
      alert('Ses kaydı başlatılamadı. Lütfen mikrofon izinlerini kontrol edin.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const deleteMessage = async (messageId: string) => {
    if (!confirm('Bu mesajı silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      const response = await fetch('/api/messages/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messageId }),
      });

      if (response.ok) {
        // Mesajı yerel state'den kaldır
        setMessages(prevMessages => prevMessages.filter(msg => msg.id !== messageId));
      } else {
        const error = await response.json();
        alert(error.error || 'Mesaj silinirken bir hata oluştu');
      }
    } catch (error) {
      console.error('Mesaj silme hatası:', error);
      alert('Mesaj silinirken bir hata oluştu');
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.senderId === currentUserId ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 relative group ${
                message.senderId === currentUserId
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-900'
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
                  {message.fileType?.startsWith('image/') ? (
                    <img
                      src={message.fileUrl}
                      alt={message.fileName || 'Yüklenen görsel'}
                      className="max-w-full rounded-lg"
                    />
                  ) : message.fileType?.startsWith('audio/') ? (
                    <audio controls className="max-w-full" controlsList="nodownload">
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
                      {message.fileName || 'Dosyayı indir'}
                    </a>
                  )}
                </div>
              )}
              <p>{message.content}</p>
              <div className="flex items-center justify-end mt-1 space-x-1 text-xs opacity-70">
                <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
                {message.senderId === currentUserId && (
                  message.isRead ? (
                    <CheckCheck className="w-4 h-4" />
                  ) : (
                    <Check className="w-4 h-4" />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t border-gray-200">
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
            className={`p-2 hover:bg-gray-100 rounded-full ${isRecording ? 'text-red-500' : 'text-gray-500'}`}
          >
            {isRecording ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
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
          <div className="mt-2 text-sm text-gray-600 flex items-center">
            <Paperclip className="w-4 h-4 mr-1" />
            {selectedFile.name}
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
