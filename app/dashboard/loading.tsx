export default function DashboardLoading() {
  return (
    <div className="flex flex-col p-4 space-y-4">
      {/* Skeleton for Header */}
      <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse"></div>

      {/* Skeleton for Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow animate-pulse h-80"></div>
        <div className="bg-white p-4 rounded-lg shadow animate-pulse h-80"></div>
      </div>

      {/* Skeleton for Recent Alerts Table */}
      <div className="bg-white p-4 rounded-lg shadow animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="space-y-2">
          <div className="h-10 bg-gray-100 rounded"></div>
          <div className="h-10 bg-gray-100 rounded"></div>
          <div className="h-10 bg-gray-100 rounded"></div>
          <div className="h-10 bg-gray-100 rounded"></div>
          <div className="h-10 bg-gray-100 rounded"></div>
        </div>
      </div>
    </div>
  );
}