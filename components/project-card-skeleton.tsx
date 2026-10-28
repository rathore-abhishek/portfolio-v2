const ProjectCardSkeleton = () => {
  return (
    <div
      aria-hidden="true"
      className="hidden flex-col gap-4 rounded-lg pb-4 lg:flex"
    >
      <div className="aspect-60/40 w-full rounded-lg bg-black/5 dark:bg-white/5" />
      <div className="flex flex-col gap-2">
        <div className="h-4 w-1/3 rounded-md bg-black/5 dark:bg-white/5" />
        <div className="h-3 w-full rounded-md bg-black/5 dark:bg-white/5" />
        <div className="h-3 w-4/5 rounded-md bg-black/5 dark:bg-white/5" />
        <div className="mt-1 flex items-center gap-1.5">
          <div className="size-7 rounded-full bg-black/5 dark:bg-white/5" />
          <div className="size-7 rounded-full bg-black/5 dark:bg-white/5" />
          <div className="size-7 rounded-full bg-black/5 dark:bg-white/5" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
