import React from "react";
import Github from "../icons/github";
import Instagram from "../icons/instagram";
import X from "../icons/x";
import LinkedIn from "../icons/linkedin";
import Mail from "../icons/mail";
import Image from "next/image";

const SocialSections = () => {
  return (
    <section className="px-8">
      <div className="w-full items-center justify-center">
        <div className="group flex items-center justify-center">
          <div
            className="p-2 rounded-lg border w-13 -rotate-20 -mr-1 group-hover:rotate-0 transition-all duration-300 group-hover:mr-2 bg-background cursor-pointer border-black/20 flex items-center gap-1 flex-col dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)]
 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          >
            <Github className="size-5" />
            <p className="text-black/50 dark:text-white/50 font-bold text-[8px] ">
              Github
            </p>
          </div>

          <div
            className="p-2 rounded-lg border w-13 -rotate-10 -mr-1 group-hover:rotate-0 transition-all duration-300 group-hover:mr-2 bg-background cursor-pointer border-black/20 flex items-center gap-0.5 flex-col dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)]
 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          >
            <div className="size-5">
              <Image
                src={"/instagram.png"}
                width={20}
                height={20}
                alt="Instagram"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-black/50 dark:text-white/50 font-bold text-[8px] ">
              Instagram
            </p>
          </div>
          <div
            className="p-2 rounded-lg border w-13 -rotate-2 z-5 -mr-1 group-hover:rotate-0 transition-all duration-300 group-hover:mr-2 bg-background cursor-pointer border-black/20 flex items-center gap-0.5 flex-col dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)]
 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          >
            <X className="size-5" />
            <p className="text-black/50 dark:text-white/50 font-bold text-[8px] ">
              Twitter
            </p>
          </div>
          <div
            className="p-2 rounded-lg border w-13 -mr-1 z-2 group-hover:rotate-0 transition-all duration-300 group-hover:mr-2 bg-background cursor-pointer rotate-10 border-black/20 flex items-center gap-0.5 flex-col dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)]
 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          >
            <LinkedIn className="size-5" />
            <p className="text-black/50 dark:text-white/50 font-bold text-[8px] ">
              LinkedIn
            </p>
          </div>
          <div
            className="p-2 rounded-lg border w-13 -mr-1 z-1 group-hover:rotate-0 transition-all duration-300 group-hover:mr-2 bg-background cursor-pointer rotate-20 border-black/20 flex items-center gap-0.5 flex-col dark:shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.06),0px_1px_0px_0px_rgba(255,255,255,0.04),0px_0px_0px_1px_rgba(255,255,255,0.08)]
 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          >
            <Mail className="size-5 opacity-40" />
            <p className="text-black/50 dark:text-white/50 font-bold text-[8px]">
              Mail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSections;
