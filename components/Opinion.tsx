import { opinion } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Opinion() {
  return (
    <section className="section-pad">
      <div className="container-p">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">// a thing i believe</p>
          <blockquote className="mt-6">
            <p className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-semibold leading-tight tracking-tight">
              <span className="text-accent">{opinion.lead}</span>{" "}
              <span className="text-text/80">{opinion.body}</span>
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
