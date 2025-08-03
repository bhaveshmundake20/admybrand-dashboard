'use client';

export default function LoadingSkeleton() {
  return (
    <div className="mt-10 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg animate-pulse">
      <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-4 w-1/5 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-1/6 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-1/5 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-1/6 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
