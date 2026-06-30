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
            Applied AI systems builder and Production Support Engineer with 6+
            years of experience solving complex operational problems through
            investigation, workflow design, automation, and cross-functional
            collaboration.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            I specialize in designing AI-assisted operational platforms that
            connect teams, systems, and workflows across the incident lifecycle.
            I identify organizational bottlenecks, translate business needs into
            technical solutions, and leverage AI to improve operational
            efficiency, investigation quality, and decision-making.
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
