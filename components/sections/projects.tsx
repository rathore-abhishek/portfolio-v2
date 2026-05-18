"use client";
import ProjectCard from "../project-card";
import NextJS from "../icons/nextjs";
import TailwindCSS from "../icons/tailwind";
import TanstackQuery from "../icons/tanstack-query";
import Drizzle from "../icons/drizzle";
import Sanity from "../icons/sanity";
import Container from "../container";
import Payload from "../icons/payload";
import Link from "next/link";

const ProjectsSection = () => {
  const projects = [
    {
      id: "divine-canvas",
      title: "Divine Canvas",
      description:
        "An e-commerce platform offering premium, sacred vector paintings.",
      image: "/divine-canvas.png", // Placeholder image
      techStack: [
        { id: "nextjs", label: "Next.js", icon: <NextJS /> },
        { id: "tailwind", label: "Tailwind", icon: <TailwindCSS /> },
        { id: "motion", label: "Motion", image: "/skills/motion.png" },
        { id: "payload", label: "Payload", icon: <Payload /> },
        {
          id: "tanstack-query",
          label: "TanStack Query",
          icon: <TanstackQuery />,
        },
        { id: "zod", label: "Zod" },
        { id: "tanstack-forms", label: "TanStack Forms" },
      ],
      link: "https://divinecanvas.art/",
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
              ></path>
              <path
                d="m13,15l4.5-5-4.5-5"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </g>
          </svg>
        </Link>
      </div>
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
