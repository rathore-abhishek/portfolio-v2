import { Banner } from "@/components/banner";
import { ProfileHeader } from "@/components/profile-header";
import CTA from "@/components/sections/cta";
import ExperienceSection from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Projects from "@/components/sections/projects";
import { QuoteSection } from "@/components/sections/qoute";
import { SkillsSection } from "@/components/sections/skills";
import { CloudBackground } from "@/components/cloud-background";
import Blogs from "@/components/sections/blogs";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="max-w-3xl min-h-screen  w-full mx-auto border-x border-border pb-4 relative z-10">
        <Banner />
        <ProfileHeader />
        <div className="h-px bg-border my-4" />
        <ExperienceSection />
        <div className="h-px bg-border my-4" />
        <Projects />
        <div className="h-px bg-border my-4" />
        <SkillsSection />
        <div className="h-px bg-border my-4" />
        <Blogs />
        <div className="h-px bg-border my-4" />
        <CTA />
        <div className="h-px bg-border my-4" />
        <QuoteSection />
        <div className="h-px bg-border my-4" />
        <Footer />
      </div>
      <CloudBackground />
    </div>
  );
}
