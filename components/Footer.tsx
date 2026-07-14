import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container-p flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="font-mono text-sm text-muted">
            Built from scratch by Ramshri. No template was harmed in the making of this site.
          </p>
          <p className="font-mono text-xs text-muted/70">
            P.S. High latency, 100% uptime. I always reply.
          </p>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs text-muted">
          <a href="#top" className="-my-2 py-2 transition-colors hover:text-accent">
            back to top ↑
          </a>
          <span className="text-muted/50">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
