"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export function Text() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const updatePosition = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const padding = 14;

    setPos({
      x: clientX - rect.left + padding,
      y: clientY - rect.top + padding,
    });
  };

  return (
    <div className="relative z-10 mt-10 flex w-full flex-col items-center select-none">
      {/* Top divider */}
      <div className="relative h-8 w-full overflow-hidden border-t border-neutral-300 dark:border-neutral-700">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)",
          }}
        />
      </div>

      {/* Text + Tooltip */}
      <div
        ref={containerRef}
        className="relative inline-block cursor-help py-8"
        onPointerEnter={(e) => {
          setVisible(true);
          updatePosition(e.clientX, e.clientY);
        }}
        onPointerMove={(e) => {
          if (!visible) return;
          updatePosition(e.clientX, e.clientY);
        }}
        onPointerLeave={() => setVisible(false)}
      >
        <span className="text-inner-shadow text-center text-9xl font-bold whitespace-nowrap text-black/10 italic transition-colors duration-300 hover:text-black dark:text-white/5 dark:hover:text-white">
          改善
        </span>

        <AnimatePresence>
          {visible && (
            <motion.div
              ref={tooltipRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={cn(
                "pointer-events-none absolute z-[9999] w-[260px]",
                "bg-background border-border rounded-xl border shadow-lg",
              )}
              style={{
                left: pos.x,
                top: pos.y,
              }}
            >
              {/* Tooltip content — inline, not reusable */}
              <div className="space-y-2 p-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-black dark:text-white">
                    改善
                  </span>
                  <span className="text-xs font-medium text-black/60 italic dark:text-white/60">
                    /kaizen/
                  </span>
                </div>

                <div className="bg-border h-px w-full" />
                <div className="">
                  <div className="text-xs font-medium tracking-wide text-black uppercase dark:text-white">
                    noun
                  </div>

                  <p className="text-xs leading-relaxed font-medium text-black/50 dark:text-white/50">
                    Continuous improvement; changing for the better.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom divider */}
      <div className="relative h-8 w-full overflow-hidden border-b border-neutral-300 dark:border-neutral-700">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)",
          }}
        />
      </div>
    </div>
  );
}
