import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserSearchProps {
  query: string;
  onSelectUser: (userId: string) => Promise<void>;
}

export default function UserSearch({ query, onSelectUser }: UserSearchProps) {
  const { data: session } = useSession();
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  const handleSearch = async (searchQuery: string) => {
    setError(null);
    if (searchQuery.length < 3) {
      setSearchResults([]);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `/api/users/search?q=${encodeURIComponent(searchQuery)}`
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Arama sırasında bir hata oluştu");
      }
      const data = await response.json();
      setSearchResults(
        data.filter((user: User) => user.email !== session?.user?.email)
      );
    } catch (error: any) {
      console.error("Kullanıcı arama hatası:", error);
      setError(error.message || "Kullanıcı araması sırasında bir hata oluştu");
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  const handleAddFriend = async (userId: string, userName: string) => {
    try {
      if (!session?.user) {
        toast.error(
          "Arkadaşlık isteği göndermek için oturum açmanız gerekiyor"
        );
        return;
      }

      setLoading(true);
      setError(null);

      const response = await fetch("/api/friends/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ receiverId: userId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Arkadaşlık isteği gönderilirken bir hata oluştu"
        );
      }

      toast.success(`${userName} kullanıcısına arkadaşlık isteği gönderildi!`);
      setSearchResults((prev) => prev.filter((user) => user.id !== userId));

      await onSelectUser(userId);
    } catch (error: any) {
      console.error("Arkadaşlık isteği gönderme hatası:", error);
      toast.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Kullanıcı adı veya e-posta ile arayın..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {error && (
        <div className="p-3 bg-red-500/10 text-red-500 rounded-lg border border-red-500/20">
          {error}
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center space-x-2 text-gray-400 py-4">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Aranıyor...</span>
        </div>
      )}

      {query.length > 0 && query.length < 3 && (
        <div className="flex items-center justify-center space-x-2 text-gray-400 py-4">
          <Search className="h-5 w-5" />
          <span>En az 3 karakter girin</span>
        </div>
      )}

      <div className="space-y-3">
        {searchResults.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-semibold">{user.name[0]}</span>
              </div>
              <div>
                <div className="font-medium text-gray-200">{user.name}</div>
                <div className="text-sm text-gray-400">{user.email}</div>
              </div>
            </div>
            <button
              onClick={() => handleAddFriend(user.id, user.name)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
              disabled={loading}
            >
              {loading ? "Gönderiliyor..." : "Arkadaş Ekle"}
            </button>
          </div>
        ))}

        {searchResults.length === 0 && query.length >= 3 && !loading && (
          <div className="flex flex-col items-center justify-center py-8 text-gray-400">
            <Search className="h-12 w-12 mb-3" />
            <p>Kullanıcı bulunamadı</p>
            <p className="text-sm">Farklı bir arama yapmayı deneyin</p>
          </div>
        )}
      </div>
    </div>
  );
}
