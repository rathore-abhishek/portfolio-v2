"use client";
import Typewriter from "typewriter-effect";

import { calculateTimeZoneDifferenceInHours } from "@/lib/utils";
import { Clock } from "./clock";
import Github from "./icons/github";
import { Button } from "./ui/button";
import X from "./icons/x";
import Image from "next/image";
import LinkedIn from "./icons/linkedin";
import TypeScript from "./icons/typescript";
import ReactIcon from "./icons/react";
import NextJS from "./icons/nextjs";
import Bun from "./icons/bun";
import PostgreSQL from "./icons/postgresql";
import DM from "./icons/dm";
import Mail from "./icons/mail";
import ThemeToggle from "./theme-toggle";

interface ProfileHeaderProps {
  name?: string;
  age?: string;
  title?: string;
  profileImage?: string;
  socialLinks?: {
    twitter?: string;
    resume?: string;
    github?: string;
    linkedin?: string;
  };
}

export function ProfileHeader({
  name = "Abhishek Rathore",
  profileImage = "/me.jpg",
  socialLinks = {
    twitter: "https://x.com/abhiishekz",
    github: "https://github.com/rathore-abhishek",
    linkedin: "https://www.linkedin.com/in/rathore-abhishekk/",
    resume: "https://www.instagram.com/rathore.abhishekk",
  },
}: ProfileHeaderProps) {
  const hourDiff = calculateTimeZoneDifferenceInHours();

  return (
    <div className="flex-col -mt-10">
      <div className="flex items-center justify-between mb-4 sm:ml-8 ml-4 sm:mr-8 mr-4">
        <div
          className="w-24 h-24 sm:w-28 sm:h-28 relative z-10 rounded-full overflow-hidden bg-cover bg-center shrink-0"
          role="img"
          aria-label={name}
          style={{ backgroundImage: `url("${profileImage}")` }}
        />
        <div className="flex flex-col gap-1 items-end shrink-0">
          <p className="flex items-center gap-1.5 text-[10px] sm:text-xs font-medium font-mono text-black/70 dark:text-white/70 whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for work
          </p>
          <div className="text-black/40 dark:text-white/40 text-[10px] sm:text-xs flex flex-col items-end font-mono">
            <span className="font-medium">
              <Clock />
            </span>
            {hourDiff !== 0 && (
              <span className="text-black/20 dark:text-white/20 text-[9px] sm:text-[10px]">
                {hourDiff > 0
                  ? `// ${Math.abs(hourDiff)}h ahead`
                  : `// ${Math.abs(hourDiff)}h behind`}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="text-left sm:flex sm:justify-between sm:items-end w-full sm:px-8 px-4 flex-col sm:flex-row">
        <div className="px-0">
          <h1 className="font-serif italic text-2xl sm:text-4xl tracking-[0.01em] font-medium mb-0">
            {name}
          </h1>
          <div className="text-black/40 dark:text-white/40 font-medium text-xs sm:text-sm font-manrope flex flex-wrap items-center gap-1">
            <p>15 • Full-Stack developer — I can</p>
            <div className="text-black dark:text-white items-center inline-block ml-1">
              <Typewriter
                options={{
                  strings: [
                    "Design accessible components",
                    "Ship modern frontend experience",
                    "Animate with precision",
                    "Craft pixel-perfect interfaces",
                    "Develop interactive dashboards",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50, // typing speed (ms per character)
                  deleteSpeed: 30, // deleting speed (ms per character)
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-1 sm:gap-2 mt-3 sm:mt-0 px-0">
          {socialLinks.github && (
            <Button
              size={"icon-sm"}
              variant={"secondary"}
              className="rounded-full"
              asChild
            >
              <a
                className="touch-manipulation active:opacity-75"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              >
                <Github />
              </a>
            </Button>
          )}
          {socialLinks.twitter && (
            <Button
              size={"icon-sm"}
              variant={"secondary"}
              className="rounded-full"
              asChild
            >
              <a
                className="touch-manipulation active:opacity-75"
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              >
                <X />
              </a>
            </Button>
          )}
          {socialLinks.resume && (
            <Button
              size={"icon-sm"}
              variant={"secondary"}
              className="rounded-full"
              asChild
            >
              <a
                className="touch-manipulation active:opacity-75"
                href={socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="h-4 w-4"
                />
              </a>
            </Button>
          )}
          {socialLinks.linkedin && (
            <Button
              size={"icon-sm"}
              variant={"secondary"}
              className="rounded-full"
              asChild
            >
              <a
                className="touch-manipulation active:opacity-75"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              >
                <LinkedIn />
              </a>
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
      <div className="mt-4 text-base text-black/50 dark:text-white/50 sm:px-8 px-4 leading-loose tracking-wider">
        <span className="text-black dark:text-white">I build from zero. </span>
        <span>
          Including frontend, backend, full-stack applications, and AI-powered
          experiences using{" "}
        </span>
        <a
          target="_blank"
          className="inline-flex items-center text-sm bg-black/5 dark:bg-white/5 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow text-black dark:text-white align-middle"
          href="https://www.typescriptlang.org/"
        >
          <TypeScript className="size-4 shrink-0" />
          <p className="ml-1 text-sm font-bold">Typescript</p>
        </a>
        <span>, </span>
        <a
          target="_blank"
          className="inline-flex items-center text-sm bg-black/5 dark:bg-white/5 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow text-black dark:text-white align-middle"
          href="https://react.dev/"
        >
          <ReactIcon />
          <p className="ml-1 text-sm font-bold">React</p>
        </a>
        <span>, </span>
        <a
          target="_blank"
          className="inline-flex items-center text-sm bg-black/5 dark:bg-white/5 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow text-black dark:text-white align-middle"
          href="https://nextjs.org/"
        >
          <NextJS />
          <p className="ml-1 text-sm font-bold">Next.js</p>
        </a>
        <span>, </span>
        <a
          target="_blank"
          className="inline-flex items-center text-sm bg-black/5 dark:bg-white/5 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow text-black dark:text-white align-middle"
          href="https://bun.sh/"
        >
          <Bun />
          <p className="ml-1 text-sm font-bold">Bun</p>
        </a>
        <span>, and </span>
        <a
          target="_blank"
          className="inline-flex items-center text-sm bg-black/5 dark:bg-white/5 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow text-black dark:text-white align-middle"
          href="https://www.postgresql.org/"
        >
          <PostgreSQL />
          <p className="ml-1 text-sm font-bold">PostgreSQL</p>
        </a>
        <span>
          , and I turn concepts into clean, efficient, and user-friendly digital
          experiences with a keen eye for design.
        </span>
      </div>
      <div className=" flex items-center px-4 sm:px-8 mt-4">
        <Button variant="outline" className="" size={"sm"} asChild>
          <a
            href="https://x.com/messages/compose?recipient_id=1828108311901966337"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DM className="opacity-40" /> Twitter DM
          </a>
        </Button>
        <span className="mx-1 text-xs text-black/20 dark:text-white/20 font-medium">
          OR
        </span>
        <Button variant="outline" size={"sm"} asChild>
          <a
            href="mailto:rathore.abhiishekk@gmail.com"
            rel="noopener noreferrer"
          >
            <Mail className="opacity-40" /> Email
          </a>
        </Button>
      </div>
    </div>
  );
}
