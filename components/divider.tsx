import React from "react";
import { cn } from "@/lib/utils";

const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("bg-border relative my-4 h-px overflow-visible", className)}
    >
      <span className="ring-foreground/10 absolute -top-0.5 -left-1 size-1.5 rounded-full bg-[#f9f9f9] ring-1 dark:bg-zinc-800"></span>
      <span className="ring-foreground/10 absolute -top-0.5 -right-1 size-1.5 rounded-full bg-[#f9f9f9] ring-1 dark:bg-zinc-800"></span>
    </div>
  );
};

export default Divider;
