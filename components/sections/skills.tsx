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
  { name: "Framer Motion", image: "/skills/motion.png" },
  { name: "Docker", icon: Docker },
  { name: "Git", icon: Git },
  { name: "Figma", icon: Figma },
];

export const SkillsSection = () => {
  return (
    <section className="px-8">
      <h2 className="font-serif text-xl text-black/50 dark:text-white/40 mb-6">
        Stack I use
      </h2>
      <TooltipProvider>
        <div className="flex flex-wrap gap-6 items-center">
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <div className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110">
                  {skill.icon ? (
                    <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-black dark:text-white" />
                  ) : skill.image ? (
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                  ) : (
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold text-[10px] border border-black/10 dark:border-white/10 rounded-lg">
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
