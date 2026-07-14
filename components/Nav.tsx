"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav, site } from "@/lib/content";
import { ArrowDown } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container-p flex h-16 items-center justify-between">
        {/* negative margin keeps the logo visually put while giving it a real tap target */}
        <a href="#top" className="-m-2 p-2 font-mono text-sm text-text">
          <span className="text-accent">~/</span>ramshri
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 font-mono text-sm text-muted transition-colors hover:text-text"
              >
                <span className={isActive ? "text-text" : ""}>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <ThemeToggle className="ml-1" />
          <a
            href={site.cv}
            download
            className="ml-1 inline-flex items-center gap-1.5 rounded-md border border-accent/40 px-3 py-1.5 font-mono text-sm text-accent transition-colors hover:bg-accent-dim"
          >
            CV <ArrowDown className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center rounded-md text-muted"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span className={`block h-px w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-current transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden">
          <div className="container-p flex flex-col py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3.5 font-mono text-base text-muted last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.cv}
              download
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-md border border-accent/40 px-4 py-2.5 font-mono text-sm text-accent"
            >
              Download CV <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
