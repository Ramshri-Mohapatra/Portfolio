import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="eyebrow">// {eyebrow}</p>
      <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.8rem)] font-semibold leading-tight tracking-tight">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}
