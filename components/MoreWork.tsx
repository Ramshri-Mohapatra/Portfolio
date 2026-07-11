import { moreProjects, funProjects } from "@/lib/content";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./Icons";

export function MoreWork() {
  return (
    <section className="section-pad pt-0">
      <div className="container-p">
        <Reveal className="mb-8">
          <p className="eyebrow">// two more, in brief</p>
        </Reveal>

        <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {moreProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <a
                href={p.live ?? p.code}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border-t border-border pt-6 transition-colors"
              >
                <div className="flex items-center justify-between font-mono text-xs text-muted">
                  <span className="flex items-center gap-3">
                    <span className="text-accent">{p.index}</span>
                    <span>{p.year}</span>
                    {p.recent && (
                      <span className="inline-flex items-center gap-1.5 text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        recent
                      </span>
                    )}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-colors group-hover:text-accent" />
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.7rem] text-text/50">
                  {p.stack.map((s, j) => (
                    <li key={s} className="flex items-center gap-3">
                      {j > 0 && <span className="text-border">·</span>}
                      {s}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>

        {/* built for fun — personality, not résumé */}
        <Reveal className="mb-6 mt-16">
          <p className="eyebrow">// built for fun</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            I make small games and odd side things when I want to build without a spec. These are exactly that: no roadmap, just play.
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {funProjects.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.04}>
              <a
                href={f.code}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-lg border border-border bg-surface/60 p-4 transition-colors hover:border-accent/40"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-mono text-sm leading-snug text-text/90">{f.name}</h3>
                  <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-accent" />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted">{f.blurb}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
