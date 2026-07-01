"use client";

import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { ExternalLink, Lock, Sparkles } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "NamiFlow",
    description:
      "AI-assisted operational investigation and workflow orchestration platform designed to guide work across Operations, Production Support, and Development teams. Launching at NamiFlow.ai.",
    tags: [
      "AI Workflow Orchestration",
      "AWS Bedrock",
      "App Runner",
      "Postgres",
      "Redis",
      "OAuth",
      "Cursor",
      "Kiro",
    ],
    isPrivate: false,
    link: "https://namiflow.ai/landing",
    highlights: [
      "Reasoning-driven investigation workflows",
      "Human-in-the-loop governance controls",
      "Escalation management & decision support",
      "Deploying to production — live at NamiFlow.ai",
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
    ],
    isPrivate: true,
    highlights: [
      "AI-assisted decision support",
      "Tool discovery & escalation management",
      "Enterprise troubleshooting workflows",
      "Presented to 35-person C-suite audience",
    ],
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              AI-powered platforms I&apos;ve designed and built — architecture,
              workflows, prompts, and governance all crafted by me.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl p-6 h-full flex flex-col border border-[#1f1f1f] hover:border-emerald-500/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} className="text-emerald-400" />
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  {project.isPrivate ? (
                    <span className="flex items-center gap-1 text-xs text-zinc-500 border border-zinc-700 rounded-full px-2 py-0.5">
                      <Lock size={10} />
                      Private
                    </span>
                  ) : project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-emerald-400 border border-emerald-500/30 rounded-full px-2 py-0.5 hover:bg-emerald-500/10 transition-colors"
                    >
                      <ExternalLink size={10} />
                      Live
                    </a>
                  ) : null}
                </div>

                <p className="text-sm text-zinc-400 mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-zinc-300 flex items-start gap-2"
                    >
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
            >
              View all projects <ExternalLink size={14} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
