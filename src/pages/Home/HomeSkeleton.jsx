import { Skeleton } from "@/components/ui/skeleton";
function HomeSkeleton() {
    return (<div className="min-h-screen m-auto sm:w-xl rounded-2xl bg-white border-gray-500 border-opacity-40 sm:border p-4">
      <div className="flex justify-center mb-3">
        <span className="block sm:hidden text-center flex-1 text-4xl">
          <Skeleton className="w-12 h-12 rounded-full mx-auto" />
        </span>
      </div>
      <Skeleton className="w-full h-48 rounded-xl mb-4" />
      <div className="flex flex-col gap-4 border-b p-4">
        <div className="flex items-start gap-3">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="flex-1">
            <Skeleton className="w-full h-10 rounded-md mb-2" />
            <div className="flex gap-2">
              <Skeleton className="w-20 h-8 rounded-md" />
              <Skeleton className="w-20 h-8 rounded-md" />
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <Skeleton className="w-28 h-4 mb-2" />
            <Skeleton className="w-full h-20 rounded-md mb-2" />
            <div className="flex gap-2">
              <Skeleton className="w-16 h-8 rounded-md" />
              <Skeleton className="w-16 h-8 rounded-md" />
              <Skeleton className="w-16 h-8 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default HomeSkeleton;