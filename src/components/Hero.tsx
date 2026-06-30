"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Link from "next/link";

const socials = [
  { href: "mailto:taahirac001@gmail.com", icon: Mail, label: "Email", isBrand: false },
  {
    href: "https://www.linkedin.com/in/taahira-carter/",
    icon: LinkedinIcon,
    label: "LinkedIn",
    isBrand: true,
  },
  {
    href: "https://github.com/Taahirac001",
    icon: GithubIcon,
    label: "GitHub",
    isBrand: true,
  },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-emerald-400 font-mono text-sm mb-4 tracking-wider">
            APPLIED AI · PRODUCTION SUPPORT · WORKFLOW ORCHESTRATION
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hello! I&apos;m{" "}
          <span className="gradient-text">Taahira</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Applied AI systems builder and Production Support Engineer with 6+ years
          of experience solving complex operational problems. I design AI-assisted
          platforms that connect teams, systems, and workflows across the incident
          lifecycle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {socials.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1f1f1f] bg-[#111] text-zinc-300 hover:text-emerald-400 hover:border-emerald-400/30 transition-all duration-200 text-sm"
              aria-label={label}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
          <Link
            href="/Taahira_Carter_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors duration-200 text-sm font-medium"
          >
            <FileText size={16} />
            <span>Resume</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center"
        >
          <ArrowDown
            size={20}
            className="text-zinc-600 animate-bounce"
          />
        </motion.div>
      </div>
    </section>
  );
}
