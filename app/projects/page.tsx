import Divider from "@/components/divider";
import Navbar from "./_components/navbar";
import ProjectsSection from "./_components/projects";
import Footer from "@/components/sections/footer";

const ProjectsPage = () => {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <Divider />
      <ProjectsSection />
      <Divider />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
