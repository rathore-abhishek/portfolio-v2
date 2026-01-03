"use client";
import React from "react";
import ProjectCard from "../project-card";
import NextJS from "../icons/nextjs";
import TailwindCSS from "../icons/tailwind";
import Supabase from "../icons/supabase";
import TanstackQuery from "../icons/tanstack-query";

const ProjectsSection = () => {
  const projects = [
    {
      id: "rvyu",
      title: "rvyu.",
      description:
        "A place for developers to share their side projects and get feedback from peers.",
      image: "/rvyu.png", // Placeholder image
      techStack: [
        { id: "nextjs", label: "Next.js", icon: <NextJS /> },
        { id: "tailwind", label: "Tailwind", icon: <TailwindCSS /> },
        { id: "framer", label: "Motion", image: "/skills/motion.png" },
        { id: "sanity", label: "Sanity", image: "/skills/sanity.png" },
        {
          id: "tanstack-query",
          label: "TanStack Query",
          icon: <TanstackQuery />,
        },
        { id: "zod", label: "Zod" },
        { id: "tanstack-forms", label: "TanStack Forms" },
      ],
    },
    {
      id: "theleansuite",
      title: "The Leansuite",
      description:
        "SaaS website and dashboard with a custom CMS to manage blogs and pages.",
      image: "/theleansuite.png",
      techStack: [
        { id: "nextjs", label: "Next.js", icon: <NextJS /> },
        { id: "tailwind", label: "Tailwind", icon: <TailwindCSS /> },
        { id: "framer", label: "Motion", image: "/skills/motion.png" },
        { id: "sanity", label: "Sanity", image: "/skills/sanity.png" },
        {
          id: "tanstack-query",
          label: "TanStack Query",
          icon: <TanstackQuery />,
        },
        { id: "zod", label: "Zod" },
        { id: "tanstack-forms", label: "TanStack Forms" },
      ],
    },
    {
      id: "spf-logistics",
      title: "SPF Logistics",
      description:
        "Public website and internal dashboard built for an Australian logistics firm.",
      image: "/spf-logistics.png", // Placeholder image
      techStack: [
        { id: "nextjs", label: "Next.js", icon: <NextJS /> },
        { id: "supabase", label: "Supabase", icon: <Supabase /> },
        { id: "tailwind", label: "Tailwind", icon: <TailwindCSS /> },
        { id: "framer", label: "Motion", image: "/skills/motion.png" },
        {
          id: "tanstack-query",
          label: "TanStack Query",
          icon: <TanstackQuery />,
        },
        { id: "zod", label: "Zod" },
        { id: "tanstack-forms", label: "TanStack Forms" },
      ],
    },
  ];

  return (
    <section className="px-8">
      <h2 className="font-serif text-xl text-black/50 dark:text-white/40 mb-4">
        Proof of work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            techStack={project.techStack}
          />
        ))}
      </div>
      <h5 className="mt-4 bg-linear-to-r py-1 from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-center font-neu text-4xl font-extrabold text-transparent opacity-30 md:text-6xl">
        Shipping More Soon
      </h5>
    </section>
  );
};

export default ProjectsSection;
