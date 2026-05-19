"use client";

import ProjectCard from "../project-card";
import NextJS from "../icons/nextjs";
import TailwindCSS from "../icons/tailwind";
import TanstackQuery from "../icons/tanstack-query";
import Drizzle from "../icons/drizzle";
import Sanity from "../icons/sanity";
import Container from "../container";
import Payload from "../icons/payload";
import Supabase from "../icons/supabase";
import Link from "next/link";
import { projectCardData, techMeta } from "@/data/projects";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  nextjs: <NextJS />,
  tailwind: <TailwindCSS />,
  "tanstack-query": <TanstackQuery />,
  drizzle: <Drizzle />,
  sanity: <Sanity />,
  payload: <Payload />,
  supabase: <Supabase />,
};

const ProjectsSection = () => {
  return (
    <Container className="px-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-xl text-black/50 dark:text-white/40">
          Proof of work
        </h2>
        <Link
          href={"/projects"}
          className="inline-flex items-center gap-1 text-xs font-medium text-black/30 transition-colors duration-200 hover:text-black/90 dark:text-white/30 dark:hover:text-white/90"
        >
          ALL
          <svg
            height="1em"
            width="1em"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>share all right</title>
            <g fill="currentColor">
              <path
                d="m2.5,15s.974-3.5,5.5-3.5v3.5s4.5-5,4.5-5l-4.5-5v3.5c-5.5,0-5.5,6.5-5.5,6.5Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                d="m13,15l4.5-5-4.5-5"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </g>
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectCardData.slice(0, 3).map((p) => (
          <ProjectCard
            key={p.id}
            slug={p.id}
            title={p.title}
            description={p.description}
            image={p.image}
            techStack={p.techIds.map((id) => {
              const meta = techMeta[id];
              return {
                id,
                label: meta?.label ?? id,
                icon: iconMap[id],
                image: meta?.image,
              };
            })}
          />
        ))}
      </div>
      <h5 className="font-neu mt-4 bg-linear-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text py-1 text-center text-3xl font-extrabold whitespace-nowrap text-transparent opacity-30 md:text-6xl">
        Shipping More Soon
      </h5>
    </Container>
  );
};

export default ProjectsSection;
