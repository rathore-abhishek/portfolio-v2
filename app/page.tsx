import { Banner } from "@/components/banner";
import { CloudBackground } from "@/components/cloud-background";
import { ProfileHeader } from "@/components/profile-header";
import { CTA } from "@/components/sections/cta";
import ExperienceSection from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Projects from "@/components/sections/projects";
import { QuoteSection } from "@/components/sections/qoute";
import { SkillsSection } from "@/components/sections/skills";
import { Text } from "@/components/sections/txt";
import { Blogs } from "../components/sections/blogs";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="border-border relative z-10 mx-auto min-h-screen w-full max-w-3xl border-x pb-4">
        <Banner />
        <ProfileHeader />
        <div className="bg-border my-4 h-px" />
        <ExperienceSection />
        <div className="bg-border my-4 h-px" />
        <Projects />
        <div className="bg-border my-4 h-px" />
        <SkillsSection />
        {/*<div className="bg-border my-4 h-px" />*/}
        {/*<Blogs />*/}

        <div className="bg-border my-4 h-px" />
        <CTA />

        {/*<div className="bg-border my-4 h-px" />*/}
        <Text />

        <QuoteSection />
        <div className="bg-border my-4 h-px" />
        <Footer />
      </div>
      <CloudBackground />
    </div>
  );
}
