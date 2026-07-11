"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Counts a numeric value up from zero when it scrolls into view.
 * Values with no leading number (e.g. "per-user", "First Class") render as-is.
 * Any prefix (like the − in "−28%") and suffix (like "%") are preserved and
 * the decimal precision of the target is matched.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  // Parse once per value; stable across re-renders so the effect below
  // doesn't restart the animation on every frame.
  const parsed = useMemo(() => {
    const m = value.match(/^([^\d]*)(\d[\d,]*(?:\.\d+)?)(.*)$/);
    if (!m) return null;
    const [, prefix, numRaw, suffix] = m;
    return {
      prefix,
      suffix,
      target: parseFloat(numRaw.replace(/,/g, "")),
      decimals: numRaw.includes(".") ? numRaw.split(".")[1].length : 0,
    };
  }, [value]);

  const zero = parsed
    ? `${parsed.prefix}${(0).toFixed(parsed.decimals)}${parsed.suffix}`
    : value;

  // Start from zero so there's no flash of the final value before animating.
  const [display, setDisplay] = useState(parsed && !reduce ? zero : value);

  useEffect(() => {
    if (!parsed || reduce) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    let raf = 0;
    const duration = 1100;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const current = (parsed.target * eased).toFixed(parsed.decimals);
      setDisplay(`${parsed.prefix}${current}${parsed.suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, parsed, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
