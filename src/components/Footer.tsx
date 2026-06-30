import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold gradient-text">TAAHIRA</span>
          <span className="text-xs text-zinc-500">
            Building intelligent systems that solve real problems.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="mailto:taahirac001@gmail.com"
            className="text-zinc-500 hover:text-emerald-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/taahira-carter/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </Link>
          <Link
            href="https://github.com/Taahirac001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-emerald-400 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </Link>
        </div>

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Taahira Carter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
