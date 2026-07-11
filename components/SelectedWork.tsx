"use client";

import { motion } from "framer-motion";
import { featuredProjects } from "@/lib/content";
import { ProjectEntry } from "./ProjectEntry";
import { SectionHeading } from "./SectionHeading";

export function SelectedWork() {
  return (
    <section id="work" className="section-pad">
      <div className="container-p">
        <SectionHeading
          eyebrow="selected work"
          title="Five things I built and put in the world."
          intro="Most of this shipped in 2026. Every one is live or open, so don't take my word for it, click in and poke at it. Newest first."
        />

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-14"
        >
          {featuredProjects.map((p) => (
            <ProjectEntry key={p.id} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
