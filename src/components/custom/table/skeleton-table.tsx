import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils";
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

export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const LoadingSpinner = ({
  size = 24,
  className,
  ...props
}: ISVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};