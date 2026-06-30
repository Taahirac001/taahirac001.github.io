import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import Link from "next/link";

export const metadata = {
  title: "Contact | Taahira Carter",
  description: "Get in touch with Taahira Carter.",
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "taahirac001@gmail.com",
    href: "mailto:taahirac001@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/taahira-carter",
    href: "https://www.linkedin.com/in/taahira-carter/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Taahirac001",
    href: "https://github.com/Taahirac001",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Butler, NJ",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-zinc-400 mb-12">
            Interested in AI-powered operational platforms, production support
            optimization, or just want to connect? I&apos;d love to hear from
            you.
          </p>
        </AnimatedSection>

        <div className="grid gap-4">
          {contactLinks.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <div className="glass-card rounded-xl p-5 flex items-center gap-4 border border-[#1f1f1f] hover:border-emerald-500/30 transition-colors duration-200 group">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Icon
                    size={18}
                    className="text-emerald-400 group-hover:text-emerald-300 transition-colors"
                  />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm text-zinc-200 group-hover:text-emerald-300 transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                {item.href ? (
                  <Link
                    href={item.href}
                    target={
                      item.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                  >
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-16 glass-card rounded-xl p-8 text-center border border-[#1f1f1f]">
            <h2 className="text-xl font-semibold text-white mb-3">
              Live Demo Available
            </h2>
            <p className="text-sm text-zinc-400 max-w-md mx-auto">
              Want to see my AI-powered operational platform in action? I offer
              live demonstrations of NamiFlow&apos;s investigation workflows, reasoning
              engine, and governance controls.
            </p>
            <Link
              href="mailto:taahirac001@gmail.com?subject=NamiFlow Demo Request"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors duration-200 text-sm font-medium"
            >
              <Mail size={16} />
              Request a Demo
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
