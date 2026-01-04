"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Share from "../icons/share";

const BLOG_POSTS = [
  {
    id: 1,
    title: "What is taste and how can you develop it?",
    image: "/test.gif",
    date: "Jan 2, 2024",
  },
  {
    id: 2,
    title: "The art of minimalism in web design",
    image: "/test2.webp",
    date: "Dec 28, 2023",
  },
  {
    id: 3,
    title: "Building bridges between design and code",
    image: "/banner.webp",
    date: "Dec 15, 2023",
  },
];

const BlogCard = ({ post }: { post: (typeof BLOG_POSTS)[0] }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="group relative cursor-pointer"
    >
      {/* Date floating in the background / Vertical alignment */}
      <div className="flex items-start gap-4 h-full">
        <div className="flex-1 space-y-4 py-2">
          {/* Main Content Container */}
          <div className="relative perspective-[2000px]">
            {/* The "Intentional" 3D Frame */}
            <motion.div
              variants={{
                initial: { rotateY: -12, rotateX: 5, x: 8, y: -4 },
                hover: { rotateY: 0, rotateX: 0, x: 0, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-muted/30"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-100 scale-105 rounded-sm"
              />

              {/* Intentional Glass Overlay on hover */}
              {/* <motion.div
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                className="absolute inset-0 bg-white/5 dark:bg-white/5 backdrop-blur-[1px] pointer-events-none"
              /> */}
            </motion.div>

            {/* "Shadow" / Ghost Layer behind - creating structural thickness */}
            <motion.div
              variants={{
                initial: { opacity: 1, x: -8, y: 8 },
                hover: { opacity: 0, x: 0, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 -z-10 border-x border-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed rounded-sm pointer-events-none"
            />
          </div>

          {/* Typography */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-black/40 dark:text-white/30">
                {post.date}
              </span>
            </div>

            <h3 className="font- italic text-sm font-medium leading-tight text-black/60 dark:text-white/50 group-hover:text-black dark:group-hover:text-white transition-colors duration-400 max-w-[90%]">
              {post.title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Blogs = () => {
  return (
    <section className="px-8">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="font-serif text-xl text-black/50 dark:text-white/40 italic">
          My Thoughts
        </h2>

        <a className="text-white/30 text-xs font-semibold inline-flex gap-1 items-center hover:text-white transition-colors duration-200 cursor-pointer">
          ALL <Share />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
