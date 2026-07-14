import { story, storyStats } from "@/lib/content";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

export function Story() {
  return (
    <section id="story" className="section-pad border-y border-border bg-surface/40">
      <div className="container-p">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">// the story</p>
            </Reveal>
            <div className="mt-6 border-l border-border pl-4 sm:pl-6">
              {story.map((para, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  {/* 18px runs to ~30 characters a line on a phone; drop to 16 */}
                  <p className="mb-6 text-base leading-relaxed text-text/85 last:mb-0 sm:text-lg">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} className="lg:pt-16">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
              {storyStats.map((s) => (
                <div key={s.label} className="bg-surface p-4 sm:p-6">
                  <p className="font-display text-xl font-semibold text-accent sm:text-2xl">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-1 font-mono text-[0.7rem] leading-snug text-muted sm:text-xs">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
