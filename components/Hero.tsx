"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";
import { ArrowDown, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import { Terminal } from "./Terminal";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    // pt on small screens clears the fixed nav: below lg the content is taller
    // than the min-height, so `items-center` gives it no offset of its own.
    <section id="top" className="hero-min-h relative flex items-center pb-20 pt-28 lg:py-0">
      <div className="container-p grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* left: intro */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.5rem,6vw,4.6rem)] font-semibold leading-[1.03] tracking-tight"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 font-mono text-sm text-accent sm:text-base"
          >
            {site.role} · {site.location}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-text/85 sm:text-xl"
          >
            {site.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-sm leading-relaxed text-muted"
          >
            {site.heroMicro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              See the work <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-text transition-colors hover:border-accent/50 hover:text-accent active:scale-[0.98]"
            >
              Download CV
            </a>

            <div className="flex items-center gap-1 sm:ml-1">
              <IconLink href={site.github} label="GitHub"><GitHubIcon className="h-5 w-5" /></IconLink>
              <IconLink href={site.linkedin} label="LinkedIn"><LinkedInIcon className="h-5 w-5" /></IconLink>
              <IconLink href={`mailto:${site.email}`} label="Email"><MailIcon className="h-5 w-5" /></IconLink>
            </div>
          </motion.div>
        </motion.div>

        {/* right: terminal window */}
        <div className="lg:pl-4">
          <Terminal />
        </div>
      </div>

      {/* scroll hint — hidden below lg, where it would sit on top of the terminal */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center lg:flex">
        <span className="font-mono text-xs text-muted/60">scroll ↓</span>
      </div>
    </section>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex h-11 w-11 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-accent"
    >
      {children}
    </a>
  );
}
