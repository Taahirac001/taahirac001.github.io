"use client";

import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Applied AI & Agentic Systems",
    skills: [
      "AI Workflow Orchestration",
      "Agentic Workflows",
      "Operational Intelligence",
      "Human-in-the-Loop Systems",
      "Confidence Modeling",
      "Kiro",
      "Cursor",
    ],
  },
  {
    title: "Operations & Investigation",
    skills: [
      "Root Cause Analysis",
      "Incident Investigation",
      "SQL",
      "API Debugging",
      "Cross-Functional Collaboration",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS CloudWatch",
      "DynamoDB",
      "Lambda",
      "S3",
      "App Runner",
      "Bedrock",
      "RDS / Postgres",
      "Redis",
      "OAuth",
      "Microsoft SSO",
    ],
  },
  {
    title: "Development & Tools",
    skills: [
      "PHP",
      "HTML / CSS",
      "Bootstrap",
      "MySQL",
      "Git",
      "GitHub",
      "Jira",
      "Platform Design",
      "Operational Automation",
    ],
  },
];

export function TechStack() {
  return (
    <section className="mt-20">
      <AnimatedSection>
        <h2 className="text-2xl font-bold mb-10">
          My <span className="gradient-text">Tech Stack</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 h-full">
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-zinc-800/60 text-zinc-300 border border-zinc-700/50 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
