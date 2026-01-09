import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import TypeScript from "@/components/icons/typescript";
import NextJS from "@/components/icons/nextjs";
import TailwindCSS from "@/components/icons/tailwind";
import PostgreSQL from "@/components/icons/postgresql";
import Supabase from "@/components/icons/supabase";
import Git from "../icons/git";
import Docker from "../icons/docker";
import Figma from "../icons/figma";
import Drizzle from "../icons/drizzle";
import Prisma from "../icons/prisma";
import Sanity from "../icons/sanity";

interface Skill {
  name: string;
  icon?: React.ComponentType<React.ComponentProps<"svg">>;
  image?: string;
}

const skills: Skill[] = [
  { name: "Next.js", icon: NextJS },
  { name: "TypeScript", icon: TypeScript },
  { name: "Tailwind CSS", icon: TailwindCSS },
  { name: "PostgreSQL", icon: PostgreSQL },
  { name: "Supabase", icon: Supabase },
  { name: "Drizzle", icon: Drizzle },
  { name: "Prisma", icon: Prisma },
  { name: "Sanity", icon: Sanity },
  { name: "Framer Motion", image: "/skills/motion.png" },
  { name: "Docker", icon: Docker },
  { name: "Git", icon: Git },
  { name: "Figma", icon: Figma },
];

export const SkillsSection = () => {
  return (
    <section className="px-8">
      <h2 className="mb-6 font-serif text-xl text-black/50 dark:text-white/40">
        Stack I use
      </h2>
      <TooltipProvider>
        <div className="grid grid-cols-4 justify-items-center gap-8 sm:grid-cols-6 md:grid-cols-8 md:justify-items-start lg:grid-cols-12">
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <div className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110">
                  {skill.icon ? (
                    <skill.icon className="h-8 w-8 text-black md:h-10 md:w-10 dark:text-white" />
                  ) : skill.image ? (
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="h-8 w-8 object-contain md:h-10 md:w-10"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 text-[10px] font-bold md:h-10 md:w-10 dark:border-white/10">
                      {skill.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="font-medium">
                {skill.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </section>
  );
};
