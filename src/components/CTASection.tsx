"use client";

import { AnimatedSection } from "./AnimatedSection";
import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "./icons";

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Interested in AI-powered operational platforms, production support
            optimization, or just want to connect? Let&apos;s talk.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="mailto:taahirac001@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors duration-200 text-sm font-medium"
            >
              <Mail size={16} />
              Email Me
            </Link>
            <Link
              href="https://www.linkedin.com/in/taahira-carter/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1f1f1f] bg-[#111] text-zinc-300 hover:text-emerald-400 hover:border-emerald-400/30 transition-all duration-200 text-sm font-medium"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
