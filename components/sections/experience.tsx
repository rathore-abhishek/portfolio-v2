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
import Bun from "../icons/bun";
import Payload from "../icons/payload";
import Figma from "../icons/figma";
import { cn } from "@/lib/utils";
import Container from "../container";

const CloudflareIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 117"
    className={cn("size-4 shrink-0", className)}
    style={{ opacity: 1 }}
  >
    <path
      fill="#FBAD41"
      d="M205.52 50.813c-.858 0-1.705.03-2.551.058q-.207.012-.398.094a1.42 1.42 0 0 0-.92.994l-3.628 12.672c-1.565 5.449-.983 10.48 1.646 14.174c2.41 3.416 6.42 5.421 11.289 5.655l19.679 1.194c.585.03 1.092.312 1.4.776a1.92 1.92 0 0 1 .2 1.692a2.5 2.5 0 0 1-2.134 1.662l-20.448 1.193c-11.11.515-23.062 9.58-27.255 20.633l-1.474 3.9a1.092 1.092 0 0 0 .967 1.49h70.425a1.87 1.87 0 0 0 1.81-1.365A51.2 51.2 0 0 0 256 101.828c0-28.16-22.582-50.984-50.449-50.984"
    />
    <path
      fill="#F6821F"
      d="m174.782 115.362l1.303-4.583c1.568-5.449.987-10.48-1.639-14.173c-2.418-3.417-6.424-5.422-11.296-5.656l-92.312-1.193a1.82 1.82 0 0 1-1.459-.776a1.92 1.92 0 0 1-.203-1.693a2.5 2.5 0 0 1 2.154-1.662l93.173-1.193c11.063-.511 23.015-9.58 27.208-20.633l5.313-14.04c.214-.596.27-1.238.156-1.86C191.126 20.51 166.91 0 137.96 0C111.269 0 88.626 17.403 80.5 41.596a27 27 0 0 0-19.156-5.359C48.549 37.524 38.25 47.946 36.979 60.88a27.9 27.9 0 0 0 .702 9.642C16.773 71.145 0 88.454 0 109.726c0 1.923.137 3.818.413 5.667c.115.897.879 1.57 1.783 1.568h170.48a2.22 2.22 0 0 0 2.106-1.63"
    />
  </svg>
);

const BuildingIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={cn("size-6 shrink-0", className)}
  >
    <path
      d="M6.70001 18H4.15002C2.72002 18 2 17.28 2 15.85V4.15002C2 2.72002 2.72002 2 4.15002 2H8.45001C9.88001 2 10.6 2.72002 10.6 4.15002V6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.3699 8.41998V19.58C17.3699 21.19 16.57 22 14.96 22H9.11993C7.50993 22 6.69995 21.19 6.69995 19.58V8.41998C6.69995 6.80998 7.50993 6 9.11993 6H14.96C16.57 6 17.3699 6.80998 17.3699 8.41998Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M13.3999 6V4.15002C13.3999 2.72002 14.1199 2 15.5499 2H19.8499C21.2799 2 21.9999 2.72002 21.9999 4.15002V15.85C21.9999 17.28 21.2799 18 19.8499 18H17.3699"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10 11H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10 14H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 22V19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

const TurborepoIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 318"
    className={cn("size-4 shrink-0", className)}
    style={{ opacity: 1 }}
  >
    <defs>
      <linearGradient
        id="turbo-a"
        x1="123.779%"
        x2="123.779%"
        y1="0%"
        y2="698.962%"
      >
        <stop offset="0%" stopColor="#1E90FF" />
        <stop offset="100%" stopColor="#FF1E56" />
      </linearGradient>
      <linearGradient
        id="turbo-b"
        x1="11.486%"
        x2="11.486%"
        y1="-2.194%"
        y2="512.398%"
      >
        <stop offset="0%" stopColor="#1E90FF" />
        <stop offset="100%" stopColor="#FF1E56" />
      </linearGradient>
      <linearGradient
        id="turbo-c"
        x1="-153.743%"
        x2="-153.743%"
        y1="-62.263%"
        y2="278.479%"
      >
        <stop offset="0%" stopColor="#1E90FF" />
        <stop offset="100%" stopColor="#FF1E56" />
      </linearGradient>
      <linearGradient
        id="turbo-d"
        x1="-153.743%"
        x2="-153.743%"
        y1="-178.48%"
        y2="162.264%"
      >
        <stop offset="0%" stopColor="#1E90FF" />
        <stop offset="100%" stopColor="#FF1E56" />
      </linearGradient>
      <linearGradient
        id="turbo-e"
        x1="11.486%"
        x2="11.486%"
        y1="-412.397%"
        y2="102.194%"
      >
        <stop offset="0%" stopColor="#1E90FF" />
        <stop offset="100%" stopColor="#FF1E56" />
      </linearGradient>
      <linearGradient
        id="turbo-f"
        x1="123.779%"
        x2="123.779%"
        y1="-598.961%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#1E90FF" />
        <stop offset="100%" stopColor="#FF1E56" />
      </linearGradient>
    </defs>
    <path
      fill="url(#turbo-a)"
      d="M103.41.095C66.837-1.166 30.268 10.183 0 34.144l20.177 11.35c23.962-17.656 54.226-25.222 83.233-23.961z"
    />
    <path
      fill="url(#turbo-b)"
      d="M210.6 48.016c-25.222-26.483-58.01-42.877-93.319-46.66v21.438c30.268 5.044 56.75 18.916 78.188 40.355z"
    />
    <path
      fill="url(#turbo-c)"
      d="M256 151.424c-1.26-32.788-13.871-65.576-35.309-93.32l-15.136 15.133c17.657 23.96 27.747 50.444 29.008 78.187z"
    />
    <path
      fill="url(#turbo-d)"
      d="M220.691 259.877c21.438-27.744 34.049-60.532 35.309-93.32h-21.437c-1.26 27.744-11.351 54.227-29.008 78.187z"
    />
    <path
      fill="url(#turbo-e)"
      d="M117.281 316.626c34.049-3.783 68.097-20.178 93.32-46.66l-15.132-15.133c-21.437 22.7-49.185 36.571-78.188 40.354z"
    />
    <path
      fill="url(#turbo-f)"
      d="M0 283.838c30.268 23.96 66.837 35.31 103.41 34.049v-21.439c-29.007 1.262-58.01-6.305-83.233-23.96z"
    />
    <path d="M97.651 71.344q20.218 0 37.321 6.886q17.103 6.664 29.324 18.66q12.438 11.997 19.326 28.214q6.888 15.994 6.887 34.655q.001 18.66-6.887 34.877q-6.888 15.994-19.326 27.99q-12.22 11.997-29.324 18.883q-17.103 6.665-37.32 6.665q-20.44 0-37.544-6.665c-11.257-4.591-20.954-10.885-29.101-18.882q-12.219-11.997-19.105-27.991q-6.887-16.217-6.887-34.877t6.887-34.655q6.886-16.218 19.105-28.213c8.147-7.998 17.844-14.218 29.101-18.66c11.402-4.592 23.92-6.887 37.543-6.887m0 42.208q-9.553 0-18.216 3.554c-5.626 2.222-10.59 5.406-14.884 9.553q-6.442 6.22-10.219 14.661q-3.775 8.442-3.776 18.439q.001 9.996 3.776 18.438q3.777 8.442 10.22 14.662c4.293 4.147 9.257 7.404 14.883 9.774q8.663 3.333 18.216 3.332q9.555 0 17.994-3.332q8.665-3.554 15.106-9.774q6.666-6.22 10.441-14.662t3.777-18.438q0-9.997-3.777-18.439q-3.775-8.441-10.44-14.661q-6.442-6.22-15.107-9.553q-8.439-3.554-17.994-3.554" />
  </svg>
);

// Angrio tools
const angrioTools: { id: string; label: string; icon: ReactNode }[] = [
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

// Stealth tools
const stealthTools: { id: string; label: string; icon: ReactNode }[] = [
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
    id: "react-native",
    label: "React Native",
    icon: <ReactIcon className="size-4 shrink-0" />,
  },
  {
    id: "typescript",
    label: "TypeScript",
    icon: <TypeScript className="size-4 shrink-0" />,
  },
  {
    id: "payload",
    label: "Payload CMS",
    icon: <Payload className="size-4 shrink-0" />,
  },
  { id: "cloudflare", label: "Cloudflare", icon: <CloudflareIcon /> },
  { id: "bun", label: "Bun", icon: <Bun /> },
  { id: "turborepo", label: "Turborepo", icon: <TurborepoIcon /> },
  { id: "figma", label: "Figma", icon: <Figma className="size-4 shrink-0" /> },
];

const ToolPills = ({
  tools,
  hoveredTool,
  setHoveredTool,
}: {
  tools: typeof stealthTools;
  hoveredTool: string | null;
  setHoveredTool: (id: string | null) => void;
}) => (
  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
    {tools.map((tool) => {
      const isHovered = hoveredTool === tool.id;
      return (
        <motion.div
          key={tool.id}
          className="flex h-7 cursor-pointer items-center rounded-full border border-black/5 bg-white shadow-sm dark:border-white/5 dark:bg-white/5"
          animate={{ width: isHovered ? "auto" : "28px" }}
          onMouseEnter={() => setHoveredTool(tool.id)}
          onMouseLeave={() => setHoveredTool(null)}
          layout
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
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
                initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                animate={{ width: "auto", opacity: 1, marginLeft: "4px" }}
                exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="whitespace-nowrap">{tool.label}</span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      );
    })}
  </div>
);

const ExperienceSection = () => {
  const [isStealthOpen, setIsStealthOpen] = useState(false);
  const [isAngrioOpen, setIsAngrioOpen] = useState(false);
  const [hoveredStealthTool, setHoveredStealthTool] = useState<string | null>(
    null,
  );
  const [hoveredAngrioTool, setHoveredAngrioTool] = useState<string | null>(
    null,
  );

  return (
    <Container className="px-8">
      <h2 className="mb-2 font-serif text-xl text-black/50 dark:text-white/40">
        Professional Experience
      </h2>

      {/* Stealth Startup - Founding Engineer */}
      <div
        className={cn(
          "group mt-4 rounded-2xl transition-all duration-300 hover:border-black/5 dark:hover:border-white/5",
        )}
      >
        <div
          onClick={() => setIsStealthOpen(!isStealthOpen)}
          className="flex cursor-pointer flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white sm:h-14 sm:w-14 dark:border-white/10 dark:bg-zinc-900">
              <BuildingIcon className="size-6 text-black/50 dark:text-white/50" />
            </div>
            <div className="flex min-w-0 flex-col">
              <div className="flex items-center gap-2">
                <h3
                  className="truncate text-sm font-bold text-black blur-[3px] select-none sm:text-base dark:text-white"
                  onCopy={(e) => {
                    e.preventDefault();
                    e.clipboardData.setData("text/plain", "Hahaha");
                  }}
                  title="Hahaha"
                >
                  Hahaha
                </h3>

                <ArrowUp
                  className={cn(
                    "size-3.5 shrink-0 text-black/50 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:size-4 dark:text-white/50",
                    isStealthOpen
                      ? "translate-x-1 rotate-180 opacity-100"
                      : "rotate-90",
                  )}
                />
              </div>
              <p className="text-xs font-medium whitespace-nowrap text-black/50 sm:text-sm dark:text-white/40">
                Founding Engineer
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-1 text-start sm:ml-auto sm:flex-col sm:items-end sm:justify-center sm:text-end">
            <p className="inline-flex items-center gap-2 text-[10px] font-medium text-black/50 sm:justify-end sm:text-sm dark:text-white/50">
              <span className="hidden h-px w-12 bg-linear-to-l from-black/10 to-transparent sm:block md:w-20 dark:from-white/10"></span>
              May 2026 - Present
            </p>
            <p className="text-[10px] tracking-tight text-black/30 normal-case sm:text-xs dark:text-white/30">
              Mumbai, Remote
            </p>
          </div>
        </div>

        <div
          className={cn(
            "grid transition-all duration-500 ease-in-out",
            isStealthOpen
              ? "mt-6 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-4 text-sm leading-relaxed text-black/70 md:text-base dark:text-white/70">
              <p>
                Sole <span className="font-semibold">Founding Engineer</span>{" "}
                for a stealth consumer social app, owning 0→1 product,
                architecture and execution end-to-end.
              </p>
              <ul className="space-y-3 pl-1">
                {[
                  "Leading 0→1 product as sole Founding Engineer for a stealth consumer social app — owning architecture, product and execution from Figma to production.",
                  "Building cross-platform experience with Next.js (web) and React Native + Expo (mobile) in a shared TypeScript codebase — auth, feed, profiles and core community flows.",
                  "Architecting internal ops tooling with Payload CMS and Cloudflare R2 for scalable file/media storage and content management.",
                  "Shipping fast with a performant DX — Bun, Turborepo, strict TypeScript, and a Figma-driven design system for consistent UI across web and mobile.",
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
                  Tools & Technologies
                </p>
                <ToolPills
                  tools={stealthTools}
                  hoveredTool={hoveredStealthTool}
                  setHoveredTool={setHoveredStealthTool}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-black/5 dark:bg-white/5" />

      {/* Angrio Technologies */}
      <div
        className={cn(
          "group rounded-2xl transition-all duration-300 hover:border-black/5 dark:hover:border-white/5",
        )}
      >
        <div
          onClick={() => setIsAngrioOpen(!isAngrioOpen)}
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
                    isAngrioOpen
                      ? "translate-x-1 rotate-180 opacity-100"
                      : "rotate-90",
                  )}
                />
              </div>
              <p className="text-xs font-medium whitespace-nowrap text-black/50 sm:text-sm dark:text-white/40">
                SDE (Full Stack)
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

        <div
          className={cn(
            "grid transition-all duration-500 ease-in-out",
            isAngrioOpen
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
                  Tools & Technologies
                </p>
                <ToolPills
                  tools={angrioTools}
                  hoveredTool={hoveredAngrioTool}
                  setHoveredTool={setHoveredAngrioTool}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ExperienceSection;
