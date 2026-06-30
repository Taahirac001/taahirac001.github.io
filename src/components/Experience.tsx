"use client";

import { AnimatedSection } from "./AnimatedSection";

const experience = [
  {
    role: "Production Support Engineer",
    company: "ConnectiveRx",
    period: "2019 – Present",
    bullets: [
      "Investigate and resolve complex production issues through debugging, root cause analysis, SQL investigation, API troubleshooting, and cross-functional collaboration.",
      "Analyze AWS services including CloudWatch, DynamoDB, Lambda, and S3 to support operational troubleshooting and service reliability.",
      "Designed and built PSA — an internal AI-assisted operational platform focused on workflow orchestration, operational reasoning, investigation support, and enterprise troubleshooting workflows.",
      "Leveraged Kiro and Copilot to accelerate development of AI-assisted workflows, operational tooling, Microsoft SSO authentication, and investigation automation.",
      "Developed operational tooling concepts spanning investigation workflows, confidence modeling, tool discovery, escalation management, and AI-assisted decision support.",
      "Presented platform capabilities to a 35-person executive audience spanning the full C-suite (CEO, CTO, COO, CPO, CCO, CISO).",
      "Provide knowledge transfer, team training, and operational guidance to support onboarding and continuous improvement.",
    ],
  },
  {
    role: "Web Developer",
    company: "Ufeis, Yonkers, NY",
    period: "Dec 2017 – Dec 2019",
    bullets: [
      "Planned and built website features end-to-end, converting design mockups into production-ready interfaces using HTML, CSS, Bootstrap, MySQL, and PHP.",
      "Built multi-role login systems integrated with MySQL via Google Charts and DataTables APIs, and managed testing, debugging, and deployment for client sites.",
    ],
  },
];

export function Experience() {
  return (
    <section className="mt-20">
      <AnimatedSection>
        <h2 className="text-2xl font-bold mb-10">
          Work <span className="gradient-text">Experience</span>
        </h2>
      </AnimatedSection>

      <div className="space-y-10">
        {experience.map((job, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {job.role}
                  </h3>
                  <p className="text-sm text-emerald-400">{job.company}</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 mt-1 sm:mt-0">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-3">
                {job.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-sm text-zinc-400 flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500/60 rounded-full mt-1.5 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
