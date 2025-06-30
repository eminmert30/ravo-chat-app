export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="h-12 w-48 mx-auto bg-gray-800/50 animate-pulse rounded-lg" />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/10 py-8 px-4 shadow-xl backdrop-blur-sm sm:rounded-2xl sm:px-10">
          <div className="space-y-6">
            <div>
              <div className="h-4 w-20 bg-gray-800/50 animate-pulse rounded mb-2" />
              <div className="h-10 bg-gray-800/50 animate-pulse rounded-xl" />
            </div>

            <div>
              <div className="h-4 w-20 bg-gray-800/50 animate-pulse rounded mb-2" />
              <div className="h-10 bg-gray-800/50 animate-pulse rounded-xl" />
            </div>

            <div>
              <div className="h-4 w-20 bg-gray-800/50 animate-pulse rounded mb-2" />
              <div className="h-10 bg-gray-800/50 animate-pulse rounded-xl" />
            </div>

            <div>
              <div className="h-10 bg-gray-800/50 animate-pulse rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
