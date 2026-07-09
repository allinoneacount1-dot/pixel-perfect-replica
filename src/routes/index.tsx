import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/site-header";
import heroSpread from "@/assets/hero-spread.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-commerce/70 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 pb-28 pt-24">
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-6 inline-flex items-center gap-2 border border-border bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
              build&nbsp;0.1 · closed alpha · q3&nbsp;2026
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Two engines.
              <br />
              One <span className="text-commerce">operating&nbsp;system</span>
              <br />
              for a <span className="text-biofi">longer&nbsp;economy</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Agentverse is an OS for autonomous capital. Agents that transact on your
              behalf, and a finance layer that routes the yield toward biotech,
              longevity research, and the humans running the trials.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/agents"
                className="group inline-flex items-center gap-2 border border-commerce bg-commerce px-5 py-3 font-mono text-sm font-medium text-commerce-foreground transition-transform hover:-translate-y-0.5"
              >
                → deploy an agent
              </Link>
              <Link
                to="/biofi"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-biofi hover:text-biofi"
              >
                explore biofi vaults
              </Link>
            </div>
          </div>

          {/* Terminal-style live signal panel */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="scanline border border-border bg-card p-5 font-mono text-[11px] leading-relaxed">
              <div className="mb-3 flex items-center justify-between text-muted-foreground">
                <span className="uppercase tracking-widest">live · mesh</span>
                <span className="text-signal">● 04:22:11 UTC</span>
              </div>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">agent.0x7a…</span>
                  <span className="text-commerce">-0.42 ETH · buy(gpu.h100×2)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">agent.0xf1…</span>
                  <span className="text-commerce">+128 USDC · negotiate ok</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">vault.retrobio</span>
                  <span className="text-biofi">+ $18,204 · trial-042 tranche</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">dataset.oura</span>
                  <span className="text-biofi">licensed × 12 (48h)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">gov.dao-14</span>
                  <span className="text-signal">proposal open · 3d</span>
                </li>
              </ul>
              <div className="mt-4 border-t border-border pt-3 text-muted-foreground">
                mesh_health: <span className="text-commerce">nominal</span> ·
                nodes: 2,431
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* MODULES */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <figure className="mb-16 border border-border bg-card">
            <img
              src={heroSpread}
              alt="Agentverse system spread — agent mesh on the left, anatomical capital vault system on the right, joined at the OS.0.1 seam."
              width={1920}
              height={1088}
              loading="lazy"
              className="block w-full"
            />
            <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span>fig.01 · agentverse system spread</span>
              <span>
                <span className="text-commerce">mesh</span> · seam ·{" "}
                <span className="text-biofi">vaults</span>
              </span>
            </figcaption>
          </figure>
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Two modules. Same substrate.
            </h2>
            <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
              Shared identity, wallet, and policy engine. Different missions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ModuleCard
              tag="module a · commerce"
              accent="commerce"
              title="Agent Commerce"
              copy="Deploy agents with a budget, a mandate, and a spine. They browse, negotiate, transact, and settle in native currencies — with a policy engine you actually control."
              rows={[
                ["mandate", "buy compute under $0.42/hr"],
                ["policy", "no vendors flagged tier-c"],
                ["settlement", "usdc · eth · fiat rails"],
                ["audit", "signed trace per action"],
              ]}
              cta={{ to: "/agents", label: "deploy an agent →" }}
            />
            <ModuleCard
              tag="module b · biofi"
              accent="biofi"
              title="Longevity / BioFi"
              copy="A capital layer for the labs, cohorts, and datasets extending healthspan. Fund trials, license anonymized health data, and vote in cohort DAOs — with yield that routes back to research."
              rows={[
                ["vault", "retrobio · trial-042"],
                ["cohort", "n=1,244 · rapamycin arm"],
                ["dataset", "cgm · sleep · vo2max"],
                ["governance", "quadratic · onchain"],
              ]}
              cta={{ to: "/biofi", label: "open biofi →" }}
            />
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 py-24">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              // manifesto.txt
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Software should
              <br />
              <span className="text-commerce">act,</span> not just render.
            </h2>
          </div>
          <div className="col-span-12 space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-8">
            <p>
              Dashboards are the fax machines of AI. We're not building another
              gradient landing for a chatbot. We're building the connective tissue
              between agents that transact and capital that funds the science of
              living longer.
            </p>
            <p>
              Every action is signed. Every policy is legible. Every yield is
              addressable — to a lab, a cohort, or a hypothesis. No mysterious
              orbs, no infinite carousels, no{" "}
              <span className="text-foreground">"revolutionize your workflow."</span>
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 border-t border-border pt-6 font-mono text-sm sm:grid-cols-3">
              {[
                ["no", "purple gradients"],
                ["no", "glass cards"],
                ["no", "stock 3d orbs"],
                ["yes", "signed actions"],
                ["yes", "legible policy"],
                ["yes", "routed capital"],
              ].map(([k, v]) => (
                <div key={v} className="flex items-baseline gap-3">
                  <span
                    className={
                      k === "yes"
                        ? "text-commerce"
                        : "text-muted-foreground/60 line-through"
                    }
                  >
                    {k}
                  </span>
                  <span className="text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-muted-foreground">
          <div>
            <span className="text-foreground">agentverse</span> · stockholm · 2026
          </div>
          <div className="flex items-center gap-4">
            <span>build 0.1.0</span>
            <span className="h-3 w-px bg-border" />
            <span>
              status: <span className="text-commerce">nominal</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ModuleCard({
  tag,
  accent,
  title,
  copy,
  rows,
  cta,
}: {
  tag: string;
  accent: "commerce" | "biofi";
  title: string;
  copy: string;
  rows: [string, string][];
  cta: { to: "/agents" | "/biofi"; label: string };
}) {
  const accentClass = accent === "commerce" ? "text-commerce" : "text-biofi";
  const borderHover =
    accent === "commerce" ? "hover:border-commerce" : "hover:border-biofi";
  return (
    <article
      className={`group relative border border-border bg-card p-8 transition-colors ${borderHover}`}
    >
      <div
        className={`mb-6 font-mono text-[11px] uppercase tracking-widest ${accentClass}`}
      >
        {tag}
      </div>
      <h3 className="font-display text-3xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
        {copy}
      </p>
      <dl className="mt-8 space-y-2 border-t border-border pt-6 font-mono text-xs">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4">
            <dt className="text-muted-foreground">{k}</dt>
            <dd className={accentClass}>{v}</dd>
          </div>
        ))}
      </dl>
      <Link
        to={cta.to}
        className={`mt-8 inline-flex font-mono text-sm ${accentClass} transition-transform group-hover:translate-x-1`}
      >
        {cta.label}
      </Link>
    </article>
  );
}
