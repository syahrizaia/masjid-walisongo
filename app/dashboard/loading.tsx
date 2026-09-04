export default function DashboardLoading() {
  return (
    <div className="animate-pulse space-y-8">
      {/* Skeleton Header */}
      <div className="space-y-3">
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>

      {/* Skeleton Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center">
              <div className="space-y-2 w-full">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 ml-4"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Skeleton Table / Big Card */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 h-64 shadow-sm">
        <div className="h-6 bg-gray-200 rounded w-1/5 mb-6"></div>
        <div className="space-y-4">
          <div className="h-10 bg-gray-100 rounded w-full"></div>
          <div className="h-10 bg-gray-100 rounded w-full"></div>
          <div className="h-10 bg-gray-100 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
}
