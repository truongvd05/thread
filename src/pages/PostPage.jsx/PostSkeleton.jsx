import { Skeleton } from "@/components/ui/skeleton";

function PostSkeleton() {
    return (
    <div className="w-full min-h-screen max-h-screen m-auto sm:w-xl rounded-2xl bg-white border border-gray-200 p-4">
      {/* Header */}
      <div className="flex justify-center mb-4">
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>

      {/* Post + PostCard */}
      <div className="flex flex-col gap-4 border-b border-gray-200 pb-4">
        {/* Avatar + Name */}
        <div className="flex items-center gap-2">
          <Skeleton className="w-10 h-10 rounded-full" /> {/* avatar */}
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/3 rounded" /> {/* name */}
            <Skeleton className="h-3 w-1/4 rounded" /> {/* tick */}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2 mt-2">
          <Skeleton className="h-3 w-full rounded" />
          <Skeleton className="h-3 w-5/6 rounded" />
          <Skeleton className="h-3 w-2/3 rounded" />
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-3">
          <Skeleton className="h-4 w-12 rounded" />
          <Skeleton className="h-4 w-12 rounded" />
          <Skeleton className="h-4 w-12 rounded" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-4 border-t border-gray-200 pt-2">
        <Skeleton className="h-4 w-16 rounded" />
        <Skeleton className="h-4 w-24 rounded" />
      </div>
    </div>
  );
}
export default PostSkeleton;