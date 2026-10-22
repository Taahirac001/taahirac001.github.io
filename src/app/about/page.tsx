import { AnimatedSection } from "@/components/AnimatedSection";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";

export const metadata = {
  title: "About | Taahira Carter",
  description: "Background, skills, and experience of Taahira Carter.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed mb-4">
            Applied AI systems builder with 6+ years in production support at
            ConnectiveRx. I joined as a Production Support Engineer in 2019 and
            was promoted to Senior Production Support Engineer in July 2026,
            with expanded ownership of team training and internal tooling.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            I train teammates through incident walkthroughs, shadowing, and
            runbooks, and I design AI-assisted tools that support investigation,
            reporting, and ticket resolution. I translate operational gaps into
            technical solutions that improve investigation quality and how the
            team works.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            I combine deep production-support expertise with hands-on experience
            building AI-powered workflow orchestration and investigation
            platforms using tools like Kiro and Cursor — designing the
            underlying architecture, prompts, and reasoning logic personally.
          </p>
        </AnimatedSection>

        <TechStack />
        <Experience />
      </div>
    </div>
  );
}
