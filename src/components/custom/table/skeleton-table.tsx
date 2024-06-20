import { Skeleton } from "@/components/ui/skeleton"
export function SkeletonTable() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-8 px-3 py-3.2 mt-3 w-80 " />
      <div className="space-y-2">
        <Skeleton className="h-8 w-full" />
      </div>
    </div>
  )
}
