"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin accent bar pinned to the very top, tracking page scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, originX: 0 }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-accent"
      aria-hidden
    />
  );
}
