"use client";
import Image from "next/image";
import React, { useState } from "react";
import ArrowUp from "../icons/arrow-up";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="px-8">
      <h2 className="font-serif text-xl text-black/50 dark:text-white/40 mb-2">
        Professional Experience
      </h2>
      <div
        className={cn(
          "mt-4 group hover:border-black/5 dark:hover:border-white/5 rounded-2xl transition-all duration-300"
        )}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-full w-12 h-12 sm:w-14 sm:h-14 overflow-hidden border border-black/10 dark:border-white/10 shrink-0">
              <Image
                src="/angrio.jpeg"
                alt="Angrio Technologies"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base truncate text-black dark:text-white">
                  Angrio Technologies
                </h3>
                <ArrowUp
                  className={cn(
                    "size-3.5 sm:size-4 text-black/50 dark:text-white/50 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 shrink-0",
                    isOpen
                      ? "rotate-180 opacity-100 translate-x-1"
                      : "rotate-90"
                  )}
                />
              </div>
              <p className="text-xs sm:text-sm text-black/50 dark:text-white/40 font-medium whitespace-nowrap">
                Full-Stack Developer
              </p>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 text-start sm:text-end sm:ml-auto">
            <p className="font-medium text-black/50 dark:text-white/50 text-[10px] sm:text-sm inline-flex items-center gap-2 sm:justify-end">
              <span className="hidden sm:block w-12 md:w-20 h-px bg-linear-to-l dark:from-white/10 from-black/10 to-transparent"></span>
              Jan 2025 - Dec 2025
            </p>
            <p className="text-black/30 dark:text-white/30 text-[10px] sm:text-xs tracking-tight normal-case">
              India, Remote
            </p>
          </div>
        </div>

        {/* Accordion Content */}
        <div
          className={cn(
            "grid transition-all duration-500 ease-in-out",
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-6"
              : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-black/70 dark:text-white/70">
              <p>
                Started as an <span className="font-semibold">Intern</span> on
                January 18, 2025, focused on crafting responsive and
                high-converting landing pages. Due to strong performance and
                technical growth, I was promoted to{" "}
                <span className="font-semibold">Full-Stack Developer</span> in
                April 2025. in April 2025.
              </p>

              <ul className="space-y-3 pl-1">
                {[
                  "Developed high-performance landing pages and complex interactive dashboards with a focus on UX.",
                  "Implemented robust headless CMS architectures using Sanity for flexible content management.",
                  "Built scalable full-stack features with Supabase for real-time data persistence and authentication.",
                  "Engineered a core browser extension for 'Trakkar.in' (Company SaaS) to handle automated time tracking and cross-browser screenshot capture.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center">
                    <span className="size-1.5 rounded-full bg-black/40 dark:bg-white/40  shrink-0" />
                    <p className="text-black/50 dark:text-white/50 text-base">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
