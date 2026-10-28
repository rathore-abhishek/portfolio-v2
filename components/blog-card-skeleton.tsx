import { cn } from "@/lib/utils";

interface BlogCardSkeletonProps {
  className?: string;
}

const BlogCardSkeleton = ({ className }: BlogCardSkeletonProps) => {
  return (
    <div aria-hidden="true" className={cn("flex-col gap-4 py-2", className)}>
      <div className="aspect-video w-full rounded-sm bg-black/5 dark:bg-white/5" />
      <div className="space-y-2">
        <div className="h-2.5 w-20 rounded-sm bg-black/5 dark:bg-white/5" />
        <div className="h-3.5 w-11/12 rounded-sm bg-black/5 dark:bg-white/5" />
        <div className="h-3.5 w-3/4 rounded-sm bg-black/5 dark:bg-white/5" />
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
