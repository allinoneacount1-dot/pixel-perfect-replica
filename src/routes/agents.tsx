import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/site-header";
import { BlueprintFigure } from "@/components/site/blueprint-figure";
import agentsSchematic from "@/assets/agents-schematic.webp";
import settlementRails from "@/assets/settlement-rails.webp";

export const Route = createFileRoute("/agents")({
  head: () => ({
    meta: [
      { title: "Agent Commerce — Agentverse" },
      {
        name: "description",
        content:
          "Deploy autonomous agents that browse, negotiate, and settle transactions under a policy you control.",
      },
      { property: "og:title", content: "Agent Commerce — Agentverse" },
      {
        property: "og:description",
        content:
          "Autonomous agents with mandates, budgets, and signed audit trails.",
      },
    ],
  }),
  component: AgentsPage,
});

function AgentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20">
          <div className="mb-6 font-mono text-[11px] uppercase tracking-widest text-commerce">
            module a
          </div>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
            Agents that <span className="text-commerce">transact</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Give an agent a mandate and a wallet. It shops the open market,
            negotiates in your voice, and settles in the rail you specify —
            with every step signed and auditable.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                k: "01 · mandate",
                t: "Plain-english jobs",
                d: "\"Buy 2 H100 hours under $0.42/hr, avoid tier-c vendors.\" Compile once, run forever.",
              },
              {
                k: "02 · negotiate",
                t: "Multi-vendor",
                d: "Agents query several markets in parallel and settle on price, terms, and SLAs.",
              },
              {
                k: "03 · settle",
                t: "Native rails",
                d: "USDC, ETH, or fiat via provider. Every action produces a signed receipt.",
              },
            ].map((c) => (
              <div
                key={c.k}
                className="border border-border bg-card p-6 transition-colors hover:border-commerce"
              >
                <div className="font-mono text-[11px] uppercase tracking-widest text-commerce">
                  {c.k}
                </div>
                <div className="mt-4 font-display text-xl font-semibold">
                  {c.t}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-2">
            <BlueprintFigure
              src={agentsSchematic}
              width={1600}
              height={1200}
              figNumber="fig.02"
              title="agent network · cluster.7"
              meta="schema ancl.7.3"
              accent="commerce"
              alt="Isometric technical schematic titled Agent Network Cluster 7. Five hexagonal agent nodes (Orchestrator, Analyzer, Executor, Risk, Settler) sit on a grid connected by lime data pathways carrying labelled transactions such as MANDATE POLICY.UPDATE and SETTLE STATE.COMMIT. A distributed-ledger stack anchors the base; side panels list the transaction ledger, legend, mandate types, and node specifications."
            />
            <BlueprintFigure
              src={settlementRails}
              width={1600}
              height={1200}
              figNumber="fig.05"
              title="settlement rails routing"
              meta="plate srp-3r-001"
              accent="commerce"
              alt="Settlement-rails routing plate. A single origin agent on the left branches into three parallel horizontal rails — USDC on Solana, ETH on Ethereum L1 (highlighted lime as the active rail), and Fiat Wire — feeding a signed receipt block on the right with amount, status, and signature. Bottom tables list rail performance latencies, capacity limits, and system metrics."
            />
          </div>

          <div className="mt-16 flex flex-wrap gap-3">
            <Link
              to="/"
              className="border border-commerce bg-commerce px-5 py-3 font-mono text-sm font-medium text-commerce-foreground"
            >
              → request alpha access
            </Link>
            <Link
              to="/biofi"
              className="border border-border px-5 py-3 font-mono text-sm hover:border-biofi hover:text-biofi"
            >
              see biofi module
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}