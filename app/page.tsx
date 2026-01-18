import { Banner } from "@/components/banner";
import { CloudBackground } from "@/components/cloud-background";
import Divider from "@/components/divider";
import { ProfileHeader } from "@/components/profile-header";
import Scale from "@/components/scale";
import { Blogs } from "@/components/sections/blogs";
import { CTA } from "@/components/sections/cta";
import ExperienceSection from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import GithubContributions from "@/components/sections/github-contributions";
import Projects from "@/components/sections/projects";
import { QuoteSection } from "@/components/sections/qoute";
import { SkillsSection } from "@/components/sections/skills";
import { Text } from "@/components/sections/txt";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="border-border ring-0.5 ring-border relative z-10 mx-auto min-h-screen w-full max-w-3xl overflow-y-clip border-x pb-4">
        <Scale count={50} />
        {/* <div className="text-foreground/25 absolute top-0 right-full mr-1 inline-flex gap-1 text-sm font-medium">
          <p className="rotate-90">0</p>
          <p>-</p>
        </div>
        <div className="text-foreground/25 absolute top-15 right-full mr-1 inline-flex gap-1 text-sm font-medium">
          <p className="rotate-90">50</p>
          <p>-</p>
        </div> */}
        <Banner />
        <ProfileHeader />
        <Divider />
        <GithubContributions />
        <Divider />
        <ExperienceSection />
        <Divider />
        <Projects />
        <Divider />
        <SkillsSection />
        <Divider />
        {/* <Blogs /> */}
        <CTA />
        <Divider className="mb-0" />
        <Text />
        <Divider className="mt-0" />
        <QuoteSection />
        <Divider />
        <Footer />
      </div>
      {/* <CloudBackground /> */}
    </div>
  );
}
