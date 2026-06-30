"use client";

import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const stats = [
  { value: "6+", label: "Years in Production Support" },
  { value: "35+", label: "Executives Presented To" },
  { value: "2", label: "AI Platforms Built & Deployed" },
  { value: "∞", label: "Incidents Investigated" },
];

export function AtAGlance() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-16">
            At A <span className="gradient-text">Glance</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-xl p-6 text-center hover-lift"
              >
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-zinc-400">{stat.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
