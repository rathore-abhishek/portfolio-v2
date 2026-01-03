"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const quotes = [
  {
    quote: `A man who is master of patience is master of everything else.`,
    author: "George Savile",
  },
  {
    quote: `You have a right to perform your prescribed duty, but you are not entitled to the fruits of actions.`,
    author: "Bhagavad Gita",
  },
  {
    quote: `Man is made by his belief. As he believes, so he is.`,
    author: "Bhagavad Gita",
  },
  {
    quote: `Arise, awake, and stop not till the goal is reached.`,
    author: "Katha Upanishad",
  },
  {
    quote: `If the pain doesn't kill me, it will only make me stronger.`,
    author: "Sung Jin-Woo, Solo Leveling",
  },
  {
    quote: `I’ll take a potato chip… AND EAT IT!`,
    author: "Light Yagami, Death Note",
  },
];

const quote = quotes[Math.floor(Math.random() * quotes.length)];

export const QuoteSection = () => {
  return (
    <section className="px-8 relative">
      {/* Background Quote Mark */}
      <div className="absolute left-4 top-4 md:left-8 md:top-12 opacity-[0.05] dark:opacity-[0.05] pointer-events-none">
        <svg
          width="60"
          height="40"
          viewBox="0 0 120 100"
          fill="currentColor"
          className="text-black dark:text-white"
        >
          <path d="M0 100V50c0-27.614 22.386-50 50-50h10v20H50c-16.569 0-30 13.431-30 30v10h30v40H0zm60 0V50c0-27.614 22.386-50 50-50h10v20h-10c-16.569 0-30 13.431-30 30v10h30v40H60z" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col justify-center">
        <div className="flex flex-col">
          <p className="font-serif text-lg text-black/40 dark:text-white/40 italic leading-relaxed">
            &quot;{quote.quote}&quot;
          </p>
          <div className="mt-4 self-end flex items-center gap-3">
            <div className="h-px w-8 bg-black/20 dark:bg-white/10" />
            <span className="text-sm font-medium text-black dark:text-white italic">
              {quote.author}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
