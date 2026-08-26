"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import type { ReactNode } from "react";
import ArrowUp from "../icons/arrow-up";
import ReactIcon from "../icons/react";
import NextJS from "../icons/nextjs";
import TypeScript from "../icons/typescript";
import TailwindCSS from "../icons/tailwind";
import Sanity from "../icons/sanity";
import Supabase from "../icons/supabase";
import Motion from "../icons/motion";
import Plasmo from "../icons/plasmo";
import Git from "../icons/git";
import { cn } from "@/lib/utils";
import Container from "../container";

const tools: { id: string; label: string; icon: ReactNode }[] = [
  {
    id: "react",
    label: "React",
    icon: <ReactIcon className="size-4 shrink-0" />,
  },
  {
    id: "nextjs",
    label: "Next.js",
    icon: <NextJS className="size-4 shrink-0" />,
  },
  {
    id: "typescript",
    label: "TypeScript",
    icon: <TypeScript className="size-4 shrink-0" />,
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    icon: <TailwindCSS className="size-4 shrink-0" />,
  },
  {
    id: "sanity",
    label: "Sanity",
    icon: <Sanity className="size-4 shrink-0" />,
  },
  {
    id: "supabase",
    label: "Supabase",
    icon: <Supabase className="size-4 shrink-0" />,
  },
  {
    id: "motion",
    label: "Motion",
    icon: <Motion className="size-4 shrink-0" />,
  },
  {
    id: "plasmo",
    label: "Plasmo",
    icon: <Plasmo className="size-4 shrink-0" />,
  },
  { id: "git", label: "Git", icon: <Git className="size-4 shrink-0" /> },
];

const ExperienceSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <Container className="px-8">
      <h2 className="mb-2 font-serif text-xl text-black/50 dark:text-white/40">
        Professional Experience
      </h2>
      <div
        className={cn(
          "group mt-4 rounded-2xl transition-all duration-300 hover:border-black/5 dark:hover:border-white/5",
        )}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex cursor-pointer flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-black/10 sm:h-14 sm:w-14 dark:border-white/10">
              <Image
                src="/angrio.jpeg"
                alt="Angrio Technologies"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-col">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-sm font-bold text-black sm:text-base dark:text-white">
                  Angrio Technologies
                </h3>
                <ArrowUp
                  className={cn(
                    "size-3.5 shrink-0 text-black/50 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:size-4 dark:text-white/50",
                    isOpen
                      ? "translate-x-1 rotate-180 opacity-100"
                      : "rotate-90",
                  )}
                />
              </div>
              <p className="text-xs font-medium whitespace-nowrap text-black/50 sm:text-sm dark:text-white/40">
                SDE-L1 (Full Stack)
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-1 text-start sm:ml-auto sm:flex-col sm:items-end sm:justify-center sm:text-end">
            <p className="inline-flex items-center gap-2 text-[10px] font-medium text-black/50 sm:justify-end sm:text-sm dark:text-white/50">
              <span className="hidden h-px w-12 bg-linear-to-l from-black/10 to-transparent sm:block md:w-20 dark:from-white/10"></span>
              Jan 2025 - Dec 2025
            </p>
            <p className="text-[10px] tracking-tight text-black/30 normal-case sm:text-xs dark:text-white/30">
              India, Remote
            </p>
          </div>
        </div>

        {/* Accordion Content */}
        <div
          className={cn(
            "grid transition-all duration-500 ease-in-out",
            isOpen
              ? "mt-6 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-4 text-sm leading-relaxed text-black/70 md:text-base dark:text-white/70">
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
                  <li key={i} className="flex items-center gap-3">
                    <span className="size-1.5 shrink-0 rounded-full bg-black/40 dark:bg-white/40" />
                    <p className="text-base text-black/50 dark:text-white/50">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <div>
                <p className="mb-2 text-xs font-medium text-black/40 dark:text-white/40">
                  Tools &amp; Technologies
                </p>
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
                  {tools.map((tool) => {
                    const isHovered = hoveredTool === tool.id;
                    return (
                      <motion.div
                        key={tool.id}
                        className="flex h-7 cursor-pointer items-center rounded-full border border-black/5 bg-white shadow-sm dark:border-white/5 dark:bg-white/5"
                        animate={{
                          width: isHovered ? "auto" : "28px",
                        }}
                        onMouseEnter={() => setHoveredTool(tool.id)}
                        onMouseLeave={() => setHoveredTool(null)}
                        layout
                        transition={{
                          duration: 0.25,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                          <div className="flex h-4 w-4 items-center justify-center">
                            {tool.icon}
                          </div>
                        </div>

                        <AnimatePresence>
                          {isHovered && (
                            <motion.span
                              className="overflow-hidden pr-2 text-xs font-medium"
                              initial={{
                                width: 0,
                                opacity: 0,
                                marginLeft: 0,
                              }}
                              animate={{
                                width: "auto",
                                opacity: 1,
                                marginLeft: "4px",
                              }}
                              exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                              transition={{
                                duration: 0.2,
                                ease: [0.4, 0, 0.2, 1],
                              }}
                            >
                              <span className="whitespace-nowrap">
                                {tool.label}
                              </span>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ExperienceSection;
