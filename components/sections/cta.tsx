"use client";

import Image from "next/image";
import { ShinyButton } from "../ui/shiny-button";

export default function CTA() {
  return (
    <>
      <div className="mt-6 w-full flex-col px-6 sm:flex sm:items-center sm:justify-between sm:px-12">
        <p className="mb-4 text-center font-serif italic text-base opacity-50 sm:mb-3 md:text-xl">
          If you&apos;ve read this far, you might be interested in what I do.
        </p>
        <div className="mt-4 flex w-full justify-center sm:mt-0 sm:w-auto sm:justify-end">
          <a
            href="https://cal.com/abhishek-rathore-oiio7l/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyButton className="group bg-background text-foreground border-border py-2 px-3 h-auto">
              <div className="relative z-20 flex items-center gap-2 transition-all duration-300 group-hover:gap-8">
                <div className="h-5 w-5 shrink-0 overflow-hidden rounded-full">
                  <Image
                    alt={"Abhishek Rathore"}
                    width={20}
                    height={20}
                    className="h-full w-full object-cover"
                    src={"/me.jpg"}
                  />
                </div>
                <div className="absolute left-[24px] flex -translate-x-full transform items-center gap-0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <div className="mr-2 ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-[8px] dark:bg-white/10">
                    You
                  </div>
                </div>
                <span className="relative ml-0 block text-sm font-bold whitespace-nowrap transition-all duration-300 group-hover:ml-4 normal-case">
                  Book a call
                </span>
              </div>
            </ShinyButton>
          </a>
        </div>
      </div>
    </>
  );
}
