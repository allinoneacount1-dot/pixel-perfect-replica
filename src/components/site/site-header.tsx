import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-commerce shadow-[0_0_12px_var(--commerce)]" />
          <span className="font-display text-sm font-semibold tracking-tight">
            agentverse
            <span className="text-muted-foreground">/os</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <Link
            to="/agents"
            className="rounded-sm px-3 py-1.5 transition-colors hover:bg-secondary hover:text-foreground [&.active]:text-commerce"
            activeProps={{ className: "active" }}
          >
            agents
          </Link>
          <Link
            to="/biofi"
            className="rounded-sm px-3 py-1.5 transition-colors hover:bg-secondary hover:text-foreground [&.active]:text-biofi"
            activeProps={{ className: "active" }}
          >
            biofi
          </Link>
          <a
            href="#manifesto"
            className="rounded-sm px-3 py-1.5 transition-colors hover:bg-secondary hover:text-foreground"
          >
            manifesto
          </a>
          <span className="mx-2 h-4 w-px bg-border" />
          <Link
            to="/"
            className="rounded-sm border border-border px-3 py-1.5 text-foreground transition-colors hover:border-commerce hover:text-commerce"
          >
            request access
          </Link>
        </nav>
      </div>
    </header>
  );
}