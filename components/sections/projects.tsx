"use client";
import React from "react";
import ProjectCard from "../project-card";
import NextJS from "../icons/nextjs";
import TailwindCSS from "../icons/tailwind";
import Supabase from "../icons/supabase";
import TanstackQuery from "../icons/tanstack-query";
import Drizzle from "../icons/drizzle";
import Sanity from "../icons/sanity";
import Container from "../container";

const ProjectsSection = () => {
  const projects = [
    {
      id: "divine-canvas",
      title: "Divine Canvas",
      description:
        "A place for developers to share their side projects and get feedback from peers.",
      image: "/divine-canvas.png", // Placeholder image
      techStack: [
        { id: "nextjs", label: "Next.js", icon: <NextJS /> },
        { id: "tailwind", label: "Tailwind", icon: <TailwindCSS /> },
        { id: "motion", label: "Motion", image: "/skills/motion.png" },
        { id: "drizzle", label: "Drizzle", icon: <Drizzle /> },
        {
          id: "tanstack-query",
          label: "TanStack Query",
          icon: <TanstackQuery />,
        },
        { id: "zod", label: "Zod" },
        { id: "tanstack-forms", label: "TanStack Forms" },
      ],
      link: "https://rvyu.vercel.app/",
    },
    {
      id: "rvyu",
      title: "rvyu.",
      description:
        "A place for developers to share their side projects and get feedback from peers.",
      image: "/rvyu.png", // Placeholder image
      techStack: [
        { id: "nextjs", label: "Next.js", icon: <NextJS /> },
        { id: "tailwind", label: "Tailwind", icon: <TailwindCSS /> },
        { id: "motion", label: "Motion", image: "/skills/motion.png" },
        { id: "drizzle", label: "Drizzle", icon: <Drizzle /> },
        {
          id: "tanstack-query",
          label: "TanStack Query",
          icon: <TanstackQuery />,
        },
        { id: "zod", label: "Zod" },
        { id: "tanstack-forms", label: "TanStack Forms" },
      ],
      link: "https://rvyu.vercel.app/",
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
        { id: "motion", label: "Motion", image: "/skills/motion.png" },
        { id: "sanity", label: "Sanity", icon: <Sanity /> },
        {
          id: "tanstack-query",
          label: "TanStack Query",
          icon: <TanstackQuery />,
        },
        { id: "zod", label: "Zod" },
        { id: "tanstack-forms", label: "TanStack Forms" },
      ],
      link: "https://theleansuite.com/",
    },
    // {
    //   id: "spf-logistics",
    //   title: "SPF Logistics",
    //   description:
    //     "Public website and internal dashboard built for an Australian logistics firm.",
    //   image: "/spf-logistics.png", // Placeholder image
    //   techStack: [
    //     { id: "nextjs", label: "Next.js", icon: <NextJS /> },
    //     { id: "supabase", label: "Supabase", icon: <Supabase /> },
    //     { id: "tailwind", label: "Tailwind", icon: <TailwindCSS /> },
    //     { id: "motion", label: "Motion", image: "/skills/motion.png" },
    //     {
    //       id: "tanstack-query",
    //       label: "TanStack Query",
    //       icon: <TanstackQuery />,
    //     },
    //     { id: "zod", label: "Zod" },
    //     { id: "tanstack-forms", label: "TanStack Forms" },
    //   ],
    //   link: "https://spflogistics.com.au",
    // },
  ];

  return (
    <Container className="px-8">
      <h2 className="mb-4 font-serif text-xl text-black/50 dark:text-white/40">
        Proof of work
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            techStack={project.techStack}
            link={project.link}
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
