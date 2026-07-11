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
            <div className="mt-6 border-l border-border pl-6">
              {story.map((para, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="mb-5 text-lg leading-relaxed text-text/85 last:mb-0">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} className="lg:pt-16">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
              {storyStats.map((s) => (
                <div key={s.label} className="bg-surface p-6">
                  <p className="font-display text-2xl font-semibold text-accent">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-1 font-mono text-xs leading-snug text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
