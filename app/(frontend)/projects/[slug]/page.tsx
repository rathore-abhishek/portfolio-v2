import type { Metadata } from "next";
import Divider from "@/components/divider";
import Navbar from "./_components/navbar";
import ProjectDetails from "./_components/project-details";
import Pagination from "./_components/pagination";
import Footer from "@/components/sections/footer";
import { projectsData, projectSlugs } from "@/data/projects";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - Abhishek Rathore`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Abhishek Rathore`,
      description: project.description,
      images: project.images[0]?.src ? [{ url: project.images[0].src }] : [],
    },
  };
}

async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) notFound();

  const idx = projectSlugs.indexOf(slug);
  const prev =
    idx > 0
      ? {
          title: projectsData[projectSlugs[idx - 1]].title,
          slug: projectSlugs[idx - 1],
        }
      : null;
  const next =
    idx < projectSlugs.length - 1
      ? {
          title: projectsData[projectSlugs[idx + 1]].title,
          slug: projectSlugs[idx + 1],
        }
      : null;

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <Divider />
      <ProjectDetails project={project} />
      <Divider />
      <Pagination prev={prev} next={next} />
      <Divider />
      <Footer />
    </div>
  );
}

export default ProjectDetailsPage;
