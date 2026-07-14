"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

type Theme = "dark" | "light";

/**
 * Toggles the [data-theme] attribute on <html> and persists to localStorage.
 * The initial attribute is set by a blocking script in the layout, so there
 * is no theme flash before this hydrates.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    // keep the mobile browser chrome (status bar / address bar) in step
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "light" ? "#f7f5f8" : "#0b0e14");
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={`flex h-11 w-11 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-accent md:h-10 md:w-10 ${className ?? ""}`}
    >
      {/* render nothing theme-specific until mounted to avoid mismatch */}
      {mounted && (theme === "dark" ? <SunIcon className="h-[18px] w-[18px]" /> : <MoonIcon className="h-[18px] w-[18px]" />)}
    </button>
  );
}
