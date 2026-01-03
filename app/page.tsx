import { Banner } from "@/components/banner";
import { ProfileHeader } from "@/components/profile-header";
import CTA from "@/components/sections/cta";
import ExperienceSection from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import { QuoteSection } from "@/components/sections/qoute";
import { SkillsSection } from "@/components/sections/skills";
import SocialSections from "@/components/sections/social-sections";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-3xl min-h-screen  w-full mx-auto border-x border-border pb-8">
        <Banner />
        <ProfileHeader />
        <div className="h-px bg-border my-4" />
        <ExperienceSection />
        <div className="h-px bg-border my-4" />
        <Projects />
        <div className="h-px bg-border my-4" />
        <SkillsSection />
        <div className="h-px bg-border my-4" />
        <CTA />
        {/* <div className="h-px  my-2" /> */}
        {/* <SocialSections /> */}
        <div className="h-px bg-border my-4" />
        <QuoteSection />
      </div>
    </div>
  );
}
