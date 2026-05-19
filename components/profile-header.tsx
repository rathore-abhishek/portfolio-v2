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
import Container from "./container";

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
  age = "16",
  profileImage = "/me.png",
  socialLinks = {
    twitter: "https://x.com/abhiishekz",
    github: "https://github.com/rathore-abhishek",
    linkedin: "https://www.linkedin.com/in/rathore-abhishekk/",
    resume: "https://www.instagram.com/rathore.abhishekk",
  },
}: ProfileHeaderProps) {
  const hourDiff = calculateTimeZoneDifferenceInHours();

  return (
    <Container className="pt-0">
      <div className="-mt-10 flex-col">
        <div className="mr-4 mb-4 ml-4 flex items-center justify-between sm:mr-8 sm:ml-8">
          <div className="relative">
            <Image
              src={"/decorations/cyber-katana.png"}
              width={500}
              height={500}
              alt="decoration katana"
              className="absolute z-10"
              unoptimized
            />
            <div
              className="relative z-0 h-24 w-24 shrink-0 overflow-hidden rounded-full border bg-white bg-cover bg-center sm:h-28 sm:w-28"
              role="img"
              aria-label={name}
              style={{ backgroundImage: `url("${profileImage}")` }}
            />
          </div>
          <div className="mt-1 flex shrink-0 flex-col items-end gap-1">
            <p className="flex items-center gap-1.5 font-mono text-[10px] font-medium whitespace-nowrap text-black/70 sm:text-xs dark:text-white/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Available for work
            </p>
            <div className="flex flex-col items-end font-mono text-[10px] text-black/40 sm:text-xs dark:text-white/40">
              <span className="font-medium">
                <Clock />
              </span>
              {hourDiff !== 0 && (
                <span className="text-[9px] text-black/20 sm:text-[10px] dark:text-white/20">
                  {hourDiff > 0
                    ? `// ${Math.abs(hourDiff)}h ahead`
                    : `// ${Math.abs(hourDiff)}h behind`}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex-col px-4 text-left sm:flex sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div className="px-0">
            <h1 className="mb-0 font-serif text-2xl font-medium tracking-[0.01em] italic sm:text-4xl">
              {name}
            </h1>
            <div className="font-manrope flex flex-wrap items-center gap-1 text-xs font-medium text-black/40 sm:text-sm dark:text-white/40">
              <p>Full-Stack developer — I can</p>
              <div className="ml-1 inline-block items-center text-black dark:text-white">
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
          <div className="mt-3 flex justify-start gap-1 px-0 sm:mt-0 sm:gap-2">
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
        <div className="mt-4 px-4 text-base leading-loose tracking-wider text-black/50 sm:px-8 dark:text-white/50">
          <span className="text-black/50 dark:text-white/50">
            I&apos;m a{" "}
            <span className="font-medium text-black dark:text-white">
              {age} y/o
            </span>{" "}
            developer{" "}
            <span className="font-medium text-black dark:text-white">
              building from zero.{" "}
            </span>{" "}
          </span>
          <span>
            Including frontend, backend, full-stack applications, and AI-powered
            experiences using{" "}
          </span>
          <a
            target="_blank"
            className="skill-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 align-middle text-sm text-black dark:border-white/30 dark:bg-white/5 dark:text-white"
            href="https://www.typescriptlang.org/"
          >
            <TypeScript className="size-4 shrink-0" />
            <p className="ml-1 text-sm font-bold">Typescript</p>
          </a>
          <span>, </span>
          <a
            target="_blank"
            className="skill-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 align-middle text-sm text-black dark:border-white/30 dark:bg-white/5 dark:text-white"
            href="https://react.dev/"
          >
            <ReactIcon />
            <p className="ml-1 text-sm font-bold">React</p>
          </a>
          <span>, </span>
          <a
            target="_blank"
            className="skill-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 align-middle text-sm text-black dark:border-white/30 dark:bg-white/5 dark:text-white"
            href="https://nextjs.org/"
          >
            <NextJS />
            <p className="ml-1 text-sm font-bold">Next.js</p>
          </a>
          <span>, </span>
          <a
            target="_blank"
            className="skill-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 align-middle text-sm text-black dark:border-white/30 dark:bg-white/5 dark:text-white"
            href="https://bun.sh/"
          >
            <Bun />
            <p className="ml-1 text-sm font-bold">Bun</p>
          </a>
          <span>, and </span>
          <a
            target="_blank"
            className="skill-inner-shadow inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 align-middle text-sm text-black dark:border-white/30 dark:bg-white/5 dark:text-white"
            href="https://www.postgresql.org/"
          >
            <PostgreSQL />
            <p className="ml-1 text-sm font-bold">PostgreSQL</p>
          </a>
          <span>
            , and I turn concepts into clean, efficient, and user-friendly
            digital experiences with a keen eye for design.
          </span>
        </div>
        <div className="mt-4 flex items-center px-4 sm:px-8">
          <Button variant="outline" className="" size={"sm"} asChild>
            <a
              href="https://x.com/messages/compose?recipient_id=1828108311901966337"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DM className="opacity-40" /> Twitter DM
            </a>
          </Button>
          <span className="mx-1 text-xs font-medium text-black/20 dark:text-white/20">
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
    </Container>
  );
}
