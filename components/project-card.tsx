"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

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
}

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
}: ProjectProps) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div
      className="flex flex-col gap-4 group dark:hover:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)]
 hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-shadow duration-300 pb-4 rounded-lg cursor-pointer"
    >
      <div className="rounded-lg overflow-hidden aspect-60/40 group-hover:scale-[1.05] transition-all duration-300">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-1 group-hover:translate-x-4 duration-300 transition-all">
        <h4 className="text-black dark:text-white text-base font-semibold">
          {title}
        </h4>
        <p className="text-black/50 dark:text-white/50 text-sm w-48">
          {description}
        </p>
        {!false && techStack && techStack.length > 0 && (
          <div className="flex items-center mt-auto">
            {techStack.slice(0, 4).map((tech) => {
              const isHovered = hoveredTech === tech.id;
              return (
                <motion.div
                  key={tech.id}
                  className="bg-black/5 dark:bg-white/5 flex h-7 cursor-pointer items-center rounded-full border border-black/5 dark:border-white/5 shadow-sm"
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
                      <div className="h-4 w-4 flex items-center justify-center">
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
                className="bg-black/5 dark:bg-white/5 text-muted-foreground hover:bg-accent flex h-7 cursor-pointer items-center rounded-full border border-black/5 dark:border-white/5 text-[10px] font-medium shadow-sm"
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
                  <span className="text-[10px] font-semibold text-black dark:text-white">
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
