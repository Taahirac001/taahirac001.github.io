import { Hero } from "@/components/Hero";
import { AtAGlance } from "@/components/AtAGlance";
import { Milestones } from "@/components/Milestones";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AtAGlance />
      <Milestones />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
