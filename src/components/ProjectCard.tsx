"use client";

import { motion } from "framer-motion";
import { Lock, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tags: string[];
  isPrivate: boolean;
  category: string;
  highlights: string[];
  githubUrl?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="glass-card rounded-xl p-6 border border-[#1f1f1f] hover:border-emerald-500/30 transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles size={18} className="text-emerald-400" />
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            {project.isPrivate ? (
              <span className="flex items-center gap-1 text-xs text-zinc-500 border border-zinc-700 rounded-full px-2 py-0.5">
                <Lock size={10} />
                Private
              </span>
            ) : (
              project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-emerald-400 border border-emerald-500/30 rounded-full px-2 py-0.5 hover:bg-emerald-500/10 transition-colors"
                >
                  <ExternalLink size={10} />
                  Source
                </Link>
              )
            )}
          </div>

          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            {project.category}
          </span>

          <p className="text-sm text-zinc-400 mt-3 mb-4">
            {project.description}
          </p>

          <ul className="space-y-2 mb-5">
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
        </div>
      </div>
    </motion.div>
  );
}
