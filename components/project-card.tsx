"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import ArrowUpRight from "./icons/arrow-up-right";

interface TechItem {
  id: string;
  label: string;
  image?: string;
  icon?: React.ReactNode;
}

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  techStack: TechItem[];
  link?: string;
  slug: string;
}

const actionButtonClass =
  "inline-flex items-center justify-center gap-1.5 rounded-lg ring ring-black/10 bg-white text-sm font-medium text-black/70 shadow-sm backdrop-blur-md transition-colors duration-200 hover:bg-white hover:text-black dark:ring-white/10 dark:bg-background/90 dark:text-white/70 dark:hover:bg-background dark:hover:text-white";

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  slug,
  link,
}: ProjectProps) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="group flex flex-col gap-4 rounded-lg pb-4 transition-shadow duration-300 hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:hover:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)]">
      <div className="flex flex-col gap-3">
        <div className="relative aspect-60/40 rounded-lg">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="aspect-60/40 h-full w-full overflow-hidden rounded-lg object-cover object-top transition-transform duration-300 group-hover:scale-[1.05]"
          />
          <div className="pointer-events-none absolute inset-0 hidden flex-col gap-2 p-3 opacity-0 transition-opacity duration-300 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 md:flex">
            <Link
              href={`/projects/${slug}`}
              className={cn(actionButtonClass, "flex-1")}
            >
              View details
            </Link>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(actionButtonClass, "group/visit flex-1")}
              >
                Visit project
                <span className="relative block size-4 overflow-hidden">
                  <ArrowUpRight className="absolute inset-0 size-full transition-all duration-300 group-hover/visit:translate-x-full group-hover/visit:-translate-y-full group-active/visit:translate-x-full group-active/visit:-translate-y-full" />
                  <ArrowUpRight className="absolute inset-0 size-full -translate-x-full translate-y-full transition-all duration-300 group-hover/visit:translate-x-0 group-hover/visit:translate-y-0 group-active/visit:translate-x-0 group-active/visit:translate-y-0" />
                </span>
              </a>
            )}
          </div>
        </div>
        <div className="flex gap-2 md:hidden">
          <Link
            href={`/projects/${slug}`}
            className={cn(actionButtonClass, "h-11 flex-1")}
          >
            View details
          </Link>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(actionButtonClass, "group/visit h-11 flex-1")}
            >
              Visit project
              <span className="relative block size-4 overflow-hidden">
                <ArrowUpRight className="absolute inset-0 size-full transition-all duration-300 group-hover/visit:translate-x-full group-hover/visit:-translate-y-full group-active/visit:translate-x-full group-active/visit:-translate-y-full" />
                <ArrowUpRight className="absolute inset-0 size-full -translate-x-full translate-y-full transition-all duration-300 group-hover/visit:translate-x-0 group-hover/visit:translate-y-0 group-active/visit:translate-x-0 group-active/visit:translate-y-0" />
              </span>
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1 transition-all duration-300 group-hover:translate-x-4">
        <h4 className="text-base font-semibold text-black dark:text-white">
          {title}
        </h4>
        <p className="w-[calc(100%-1.5rem)] text-sm text-black/50 dark:text-white/50">
          {description}
        </p>
        {!false && techStack && techStack.length > 0 && (
          <div className="mt-auto flex items-center pt-2">
            {techStack.slice(0, 4).map((tech) => {
              const isHovered = hoveredTech === tech.id;
              return (
                <motion.div
                  key={tech.id}
                  className="flex h-7 cursor-pointer items-center rounded-full border border-black/5 bg-white shadow-sm dark:border-white/5 dark:bg-white/5"
                  style={{
                    marginLeft: "-8px",
                    zIndex: isHovered ? 10 : 1,
                  }}
                  animate={{
                    width: isHovered ? "auto" : "28px",
                  }}
                  onMouseEnter={() => setHoveredTech(tech.id)}
                  onMouseLeave={() => setHoveredTech(null)}
                  layout
                  transition={{
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                    {tech.icon ? (
                      <div className="flex h-4 w-4 items-center justify-center">
                        {tech.icon}
                      </div>
                    ) : tech.image ? (
                      <Image
                        src={tech.image}
                        alt={tech.label}
                        width={16}
                        height={16}
                        className="h-4 w-4 rounded-full object-contain"
                      />
                    ) : (
                      <span className="text-[10px] font-semibold">
                        {tech.label.charAt(0).toUpperCase()}
                      </span>
                    )}
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
                        <span className="whitespace-nowrap">{tech.label}</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
            {techStack.length > 5 && (
              <motion.div
                className="flex h-7 cursor-pointer items-center rounded-full border border-black/5 bg-white text-[10px] font-medium text-black/40 shadow-sm hover:bg-white dark:border-white/5 dark:bg-white/5 dark:text-white/40"
                style={{
                  marginLeft: "-8px",
                  zIndex: hoveredTech === "more" ? 10 : 1,
                }}
                animate={{
                  width: hoveredTech === "more" ? "auto" : "28px",
                }}
                onMouseEnter={() => setHoveredTech("more")}
                onMouseLeave={() => setHoveredTech(null)}
                layout
                transition={{
                  duration: 0.25,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                  <span className="text-[10px] font-semibold text-black/60 dark:text-white/60">
                    +{techStack.length - 5}
                  </span>
                </div>

                <AnimatePresence>
                  {hoveredTech === "more" && (
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
                      <span className="whitespace-nowrap">more</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
