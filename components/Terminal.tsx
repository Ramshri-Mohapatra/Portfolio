"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const COMMAND = "whoami";

// The "output" of whoami — a compact profile card.
const lines: { k?: string; v: string; accent?: boolean }[] = [
  { v: "Ramshri Mohapatra", accent: true },
  { v: "Data Analyst & Engineer · London, UK" },
  { k: "status", v: "open to full-time roles" },
  { k: "shipped", v: "5 projects, all live" },
  { k: "paper", v: "1 accepted, Springer pending" },
  { k: "degree", v: "BSc Computer Science, First Class" },
];

export function Terminal() {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(reduce ? COMMAND : "");
  const [output, setOutput] = useState(reduce);
  // How many output lines have "printed" so far.
  const [printed, setPrinted] = useState(reduce ? lines.length : 0);

  // Type the command, then flip to output mode.
  useEffect(() => {
    if (reduce) return;
    let id: ReturnType<typeof setInterval>;
    const startTyping = setTimeout(() => {
      let i = 0;
      id = setInterval(() => {
        i += 1;
        setTyped(COMMAND.slice(0, i));
        if (i >= COMMAND.length) {
          clearInterval(id);
          setTimeout(() => setOutput(true), 450);
        }
      }, 105);
    }, 900);
    return () => {
      clearTimeout(startTyping);
      clearInterval(id);
    };
  }, [reduce]);

  // Once in output mode, reveal the lines one at a time.
  useEffect(() => {
    if (!output || reduce) return;
    const id = setInterval(() => {
      setPrinted((n) => {
        if (n >= lines.length) {
          clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 320);
    return () => clearInterval(id);
  }, [output, reduce]);

  const done = printed >= lines.length;

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
      className="glow-accent w-full overflow-hidden rounded-xl border border-border bg-surface"
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-bg/50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-muted/30" />
        <span className="h-3 w-3 rounded-full bg-muted/30" />
        <span className="h-3 w-3 rounded-full bg-muted/30" />
        <span className="ml-2 font-mono text-[0.72rem] text-muted">zsh — ramshri@london</span>
      </div>

      {/* body */}
      <div className="space-y-1.5 p-5 font-mono text-sm leading-relaxed sm:p-6">
        <div>
          <span className="text-accent">ramshri@london</span>
          <span className="text-muted">:</span>
          <span className="text-text/60">~</span>
          <span className="text-muted">$ </span>
          <span className="text-text">{typed}</span>
          {!output && <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent animate-blink" />}
        </div>

        {output && (
          <div className="space-y-1.5 pt-1">
            {lines.slice(0, printed).map((line, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={line.accent ? "text-base font-medium text-accent sm:text-lg" : "text-text/85"}
              >
                {line.k ? (
                  <span className="flex gap-3">
                    <span className="w-16 shrink-0 text-muted">{line.k}</span>
                    <span>{line.v}</span>
                  </span>
                ) : (
                  line.v
                )}
              </motion.div>
            ))}

            {/* trailing prompt appears once everything has printed */}
            {done && (
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="pt-1"
              >
                <span className="text-accent">ramshri@london</span>
                <span className="text-muted">:</span>
                <span className="text-text/60">~</span>
                <span className="text-muted">$ </span>
                <span className="inline-block h-4 w-2 translate-y-0.5 bg-accent animate-blink" />
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
