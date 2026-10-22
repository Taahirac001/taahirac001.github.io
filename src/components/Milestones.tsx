"use client";

import { AnimatedSection } from "./AnimatedSection";

const milestones = [
  {
    year: "2026",
    title: "Senior Production Support Engineer",
    org: "ConnectiveRx",
    description:
      "Promoted in July 2026. Expanded ownership of team training, SOPs and runbooks, and internal tooling built with Kiro.",
  },
  {
    year: "July 2026",
    title: "NamiFlow.ai",
    org: "Personal Project",
    description:
      "Deployed NamiFlow to production on July 3–4, 2026 — domain, App Runner, and marketing site. Built the architecture, agentic workflows, and governance model independently.",
  },
  {
    year: "2019–2026",
    title: "Production Support Engineer",
    org: "ConnectiveRx",
    description:
      "Investigated and resolved complex production issues. Built PSA, an internal AI-assisted support application, and presented it to a 35-person C-suite audience.",
  },
  {
    year: "2017–2019",
    title: "Web Developer",
    org: "Ufeis",
    description:
      "Built production-ready web interfaces, multi-role auth systems, and managed full SDLC.",
  },
];

export function Milestones() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="gradient-text">Milestones</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent" />

          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-emerald-500 rounded-full -translate-x-1/2 mt-2 ring-4 ring-emerald-500/20" />

                  {/* Content */}
                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <span className="text-emerald-400 font-mono text-xs tracking-wider">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-0.5">
                      {milestone.org}
                    </p>
                    <p className="text-sm text-zinc-400 mt-2">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
