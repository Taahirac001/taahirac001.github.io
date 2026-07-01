import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

export const metadata = {
  title: "Projects | Taahira Carter",
  description: "AI-powered platforms and tools built by Taahira Carter.",
};

const projects = [
  {
    title: "NamiFlow",
    description:
      "AI-assisted operational investigation and workflow orchestration platform designed to guide work across Operations, Production Support, and Development teams. Personal project deploying to production at NamiFlow.ai.",
    tags: [
      "AI Workflow Orchestration",
      "AWS Bedrock",
      "App Runner",
      "Postgres/RDS",
      "Redis",
      "OAuth",
      "Cursor",
      "Kiro",
    ],
    isPrivate: false,
    category: "Applied AI",
    githubUrl: "https://namiflow.ai/landing",
    highlights: [
      "Supports issue investigation, workflow continuity, escalation management, and operational decision support",
      "Reasoning-driven workflows that surface relevant tools, recommend next actions, and maintain context throughout the issue lifecycle",
      "Human-in-the-loop workflows with governance controls, operational guardrails, and escalation pathways",
      "OAuth-based authentication and secure access controls",
      "Deployed on AWS using App Runner, Bedrock, Postgres/RDS, and Redis",
      "Architecture, agentic workflows, prompts, and governance model independently designed",
      "Live at NamiFlow.ai",
    ],
  },
  {
    title: "PSA (Production Support Assistant)",
    description:
      "Internal AI-assisted operational platform built for ConnectiveRx, focused on workflow orchestration, operational reasoning, investigation support, and enterprise troubleshooting workflows.",
    tags: [
      "Kiro",
      "Copilot",
      "Microsoft SSO",
      "AWS Bedrock",
      "DynamoDB",
      "Lambda",
      "Parameter Store",
      "DevOps",
      "Investigation Automation",
      "Confidence Modeling",
      "Tool Discovery",
    ],
    isPrivate: true,
    category: "Applied AI",
    highlights: [
      "Workflow orchestration and operational reasoning engine",
      "Investigation support and enterprise troubleshooting workflows",
      "Confidence modeling for AI-assisted decision-making",
      "Tool discovery and escalation management",
      "Microsoft SSO-based authentication",
      "Presented to 35-person C-suite audience, generating interest in broader organizational adoption",
    ],
  },
  {
    title: "MoneyRoots",
    description:
      "A financial literacy app for kids — teaching children about money, careers, and smart financial habits through interactive gameplay. Full monorepo with backend API, web dashboard for parents/teachers, and a mobile app for kids.",
    tags: [
      "FastAPI",
      "Next.js",
      "React Native / Expo",
      "PostgreSQL",
      "Stripe",
      "AWS Cognito",
      "Cursor",
      "ChatGPT",
    ],
    isPrivate: true,
    category: "Full-Stack",
    highlights: [
      "FastAPI backend with PostgreSQL, Alembic migrations, Stripe integration, and Cognito auth",
      "Next.js parent/teacher dashboard with shadcn/ui and Tailwind",
      "Expo React Native mobile app for kids",
      "Built with Cursor and ChatGPT to accelerate development",
      "On hold — prioritizing NamiFlow launch",
    ],
  },
  {
    title: "ValueEdge",
    description:
      "Real estate property analysis application with a Flask backend and Next.js frontend, designed to evaluate properties and surface comparable sales data.",
    tags: ["Flask", "Next.js", "Python", "Real Estate Analysis", "ChatGPT"],
    isPrivate: true,
    category: "Full-Stack",
    highlights: [
      "Flask API backend serving property evaluation endpoints",
      "Next.js 14 frontend with React 18 UI",
      "Mock data layer for development without external API dependencies",
      "On hold — prioritizing NamiFlow launch",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-zinc-400">
                A selection of platforms and tools I&apos;ve designed and built.
              </p>
            </div>
            <Link
              href="https://github.com/Taahirac001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 sm:mt-0 text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
            >
              <GithubIcon size={16} />
              GitHub
            </Link>
          </div>
        </AnimatedSection>

        {/* Notice */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card rounded-xl p-4 mb-10 border-l-4 border-emerald-500/50">
            <p className="text-sm text-zinc-400">
              <span className="text-emerald-400 font-medium">Note:</span>{" "}
              <strong className="text-zinc-300">NamiFlow</strong> is my personal
              AI platform launching at{" "}
              <a
                href="https://namiflow.ai/landing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                NamiFlow.ai
              </a>
              . <strong className="text-zinc-300">PSA</strong> was built for
              ConnectiveRx and its source is proprietary — I showcase architecture
              and capabilities here.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
