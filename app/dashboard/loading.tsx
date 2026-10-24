export default function DashboardLoading() {
  return (
    <div className="animate-pulse space-y-8">
      {/* Skeleton Header */}
      <div className="space-y-3">
        <div className="h-8 bg-white/10 rounded-2xl w-1/4"></div>
        <div className="h-4 bg-white/5 rounded-xl w-1/3"></div>
      </div>

      {/* Skeleton Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="liquid-bento-card p-6 border border-white/10">
            <div className="flex justify-between items-center">
              <div className="space-y-2 w-full">
                <div className="h-3 bg-white/10 rounded w-1/2"></div>
                <div className="h-6 bg-white/20 rounded w-3/4"></div>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex-shrink-0 ml-4"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Skeleton Table / Big Card */}
      <div className="liquid-bento-card p-6 h-64 border border-white/10">
        <div className="h-5 bg-white/10 rounded w-1/5 mb-6"></div>
        <div className="space-y-3">
          <div className="h-10 bg-white/5 rounded-xl w-full"></div>
          <div className="h-10 bg-white/5 rounded-xl w-full"></div>
          <div className="h-10 bg-white/5 rounded-xl w-full"></div>
        </div>
      </div>
    </div>
  );
}
