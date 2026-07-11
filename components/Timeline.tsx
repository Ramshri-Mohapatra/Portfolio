"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { timeline, education } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="path" className="section-pad">
      <div className="container-p">
        <SectionHeading
          eyebrow="the path"
          title="How I got here"
          intro="Data work, a dev internship I ended up leading, a lot of explaining things to non-specialists, and a bar job that keeps me sharp under pressure."
        />

        <div ref={ref} className="relative pl-8 sm:pl-10">
          {/* rail */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-border sm:left-[11px]" />
          {!reduce && (
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute left-[7px] top-2 h-full w-px bg-accent sm:left-[11px]"
            />
          )}

          <div className="space-y-11">
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.05} className="relative">
                <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center sm:-left-10">
                  <span className="h-2.5 w-2.5 rounded-full border border-accent bg-bg" />
                </span>
                <p className="font-mono text-xs text-accent">{item.period}</p>
                <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight">
                  {item.role}
                </h3>
                <p className="font-mono text-sm text-muted">{item.org}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text/75">{item.note}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* education foundation */}
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
            <p className="eyebrow">// foundation</p>
            <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
              {education.degree}
            </h3>
            <p className="font-mono text-sm text-muted">
              {education.school} · {education.period}
            </p>
            <ul className="mt-4 space-y-2">
              {education.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed text-text/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
