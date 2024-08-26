export default function Skeleton() {
  return (
    <div className="relative h-screen w-full flex flex-col sm:flex-row overflow-hidden">
      <div className="animate-pulse flex flex-col w-1/4 p-4 space-y-4">
        <div className="h-10 bg-gray-700 rounded"></div>
        <div className="h-6 bg-gray-700 rounded"></div>
        <div className="h-6 bg-gray-700 rounded"></div>
        <div className="h-6 bg-gray-700 rounded"></div>
      </div>
      <div className="animate-pulse flex flex-col w-3/4 p-4 space-y-4">
        <div className="h-10 bg-gray-700 rounded"></div>
        <div className="h-40 bg-gray-700 rounded"></div>
        <div className="h-10 bg-gray-700 rounded"></div>
        <div className="h-10 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}
