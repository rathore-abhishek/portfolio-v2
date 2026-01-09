"use client";

import { motion } from "motion/react";
import Image from "next/image";
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
      <div className="flex h-full items-start gap-4">
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
              className="border-border bg-muted/30 relative aspect-video w-full overflow-hidden rounded-sm border"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="scale-105 rounded-sm object-cover transition-transform duration-700 group-hover:scale-100"
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
              className="pointer-events-none absolute inset-0 -z-10 rounded-sm border-x border-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"
            />
          </div>

          {/* Typography */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-black/40 dark:text-white/30">
                {post.date}
              </span>
            </div>

            <h3 className="font- max-w-[90%] text-sm leading-tight font-medium text-black/60 italic transition-colors duration-400 group-hover:text-black dark:text-white/50 dark:group-hover:text-white">
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
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="font-serif text-xl text-black/50 italic dark:text-white/40">
          My Thoughts
        </h2>

        <a className="inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-white/30 transition-colors duration-200 hover:text-white">
          ALL <Share />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
