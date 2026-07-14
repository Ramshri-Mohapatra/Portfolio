"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/content";
import { ArrowUpRight } from "./Icons";
import { CountUp } from "./CountUp";

function frameLabel(project: Project) {
  if (project.live) {
    try {
      return new URL(project.live).host;
    } catch {
      return project.path;
    }
  }
  return `github.com/…/${project.path.replace("~/", "")}`;
}

export function ProjectEntry({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const slug = project.path.replace("~/", "");

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
      className="group border-t border-border pt-8"
    >
      {/* shell prompt "opening" the project */}
      <div className="mb-7 font-mono text-xs text-muted sm:text-sm">
        <span className="text-accent">ramshri@london</span>
        <span className="text-muted">:</span>
        <span className="text-text/60">~/projects</span>
        <span className="text-muted">$ </span>
        <span className="text-text/80">cat {slug}.md</span>
      </div>

      <div className="grid gap-6 md:grid-cols-[8.5rem_1fr] md:gap-10">
        {/* meta column */}
        <div className="flex items-baseline gap-4 md:flex-col md:items-start md:gap-2">
          <span className="font-display text-5xl font-semibold leading-none text-border transition-colors duration-300 group-hover:text-accent md:text-6xl">
            {project.index}
          </span>
          <div className="md:mt-3">
            <div className="font-mono text-xs text-muted">{project.year}</div>
            {project.recent && (
              <span className="mt-2 hidden items-center gap-1.5 font-mono text-[0.7rem] text-accent md:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                recent
              </span>
            )}
          </div>
        </div>

        {/* body column */}
        <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-[1.8rem]">
            {project.name}
          </h3>
          {project.badge && (
            <span className="rounded-full border border-accent/30 bg-accent-dim px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wide text-accent">
              {project.badge}
            </span>
          )}
        </div>

        <p className="mt-2 font-display text-lg text-text/90 sm:text-xl">{project.tagline}</p>

        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted">{project.body}</p>

        {project.stats && (
          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {project.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-semibold text-accent">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-0.5 max-w-[9rem] font-mono text-xs leading-snug text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-text/60">
          {project.stack.map((s, i) => (
            <li key={s} className="flex items-center gap-4">
              {i > 0 && <span className="text-border">·</span>}
              {s}
            </li>
          ))}
        </ul>

        {project.note && (
          <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted/80">
            <span className="text-accent">// </span>
            {project.note}
          </p>
        )}

        <div className="mt-7 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Live <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-3 font-mono text-sm text-text transition-colors hover:border-accent/50 hover:text-accent active:scale-[0.98]"
          >
            Code <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        </div>
      </div>

      {/* live screenshot, framed as a browser window */}
      {project.image && (
        <a
          href={project.live ?? project.code}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name}`}
          className="group/frame mt-8 block max-w-xl overflow-hidden rounded-xl border border-border bg-surface shadow-lg shadow-black/20 transition-colors hover:border-accent/40 md:ml-[8.5rem]"
        >
          <div className="flex items-center gap-2 border-b border-border bg-bg/50 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
            <span className="ml-2 flex items-center gap-1.5 truncate font-mono text-[0.7rem] text-muted">
              {project.live && <span className="text-accent">●</span>}
              {frameLabel(project)}
            </span>
            <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted transition-colors group-hover/frame:text-accent" />
          </div>
          <div className="relative aspect-[16/9] overflow-hidden bg-bg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`${project.name} — running app`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover/frame:scale-[1.02]"
            />
          </div>
        </a>
      )}
    </motion.article>
  );
}
