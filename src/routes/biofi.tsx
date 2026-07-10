import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/site-header";
import { BlueprintFigure } from "@/components/site/blueprint-figure";
import biofiAnatomy from "@/assets/biofi-anatomy.webp";
import cohortDao from "@/assets/cohort-dao.webp";

export const Route = createFileRoute("/biofi")({
  head: () => ({
    meta: [
      { title: "BioFi — Longevity Finance on Agentverse" },
      {
        name: "description",
        content:
          "Fund longevity trials, license anonymized health data, and govern cohort DAOs.",
      },
      { property: "og:title", content: "BioFi — Longevity Finance on Agentverse" },
      {
        property: "og:description",
        content:
          "A capital layer for the labs and cohorts extending healthspan.",
      },
    ],
  }),
  component: BioFiPage,
});

function BioFiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20">
          <div className="mb-6 font-mono text-[11px] uppercase tracking-widest text-biofi">
            module b
          </div>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
            Capital, routed to <span className="text-biofi">longer&nbsp;lives</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            BioFi is the finance layer under Agentverse. Yield from agent
            commerce, staked datasets, and cohort vaults flows to the labs
            running the trials that matter.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                k: "vaults",
                t: "Trial-backed",
                d: "Each vault is tied to a registered trial, with milestone-gated tranches and onchain proofs of enrolment.",
              },
              {
                k: "datasets",
                t: "Licensed, not sold",
                d: "Anonymized CGM, sleep, VO2max streams. You keep custody; researchers rent time-boxed access.",
              },
              {
                k: "governance",
                t: "Cohort DAOs",
                d: "Quadratic voting scoped to participants. The people in the trial steer the trial.",
              },
            ].map((c) => (
              <div
                key={c.k}
                className="border border-border bg-card p-6 transition-colors hover:border-biofi"
              >
                <div className="font-mono text-[11px] uppercase tracking-widest text-biofi">
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
              src={biofiAnatomy}
              width={1600}
              height={1200}
              figNumber="fig.03"
              title="longevity biotech capital flow"
              meta="diagram lbcf-7a"
              accent="biofi"
              eager
              alt="Anatomical plate titled Longevity Biotech Capital Flow. An amber circulatory-style heart on the left branches through arterial vessels into three vault chambers on the right — Trial-042, Cohort.Rapa, and Vault.Retrobio — each rendered as a labeled scientific cutaway. Side annotations describe arterial deployment, program vaults, and venous return of returns plus data."
            />
            <BlueprintFigure
              src={cohortDao}
              width={1600}
              height={1200}
              figNumber="fig.06"
              title="cohort dao governance"
              meta="plate dao-23a"
              accent="biofi"
              alt="Top-down orthographic diagram of a cohort DAO. A ring of 1,244 small human silhouettes surrounds a central hexagonal treasury vault, with amber quadratic-weight bars radiating outward toward three active proposal cards (Core Dev Funding, Research Grants Pool, DAO Tooling Upgrade) on the right, each showing total weight, quorum, and support percentage."
            />
          </div>

          <div className="mt-16 flex flex-wrap gap-3">
            <Link
              to="/"
              className="border border-biofi bg-biofi px-5 py-3 font-mono text-sm font-medium text-biofi-foreground"
            >
              → apply as a lab
            </Link>
            <Link
              to="/agents"
              className="border border-border px-5 py-3 font-mono text-sm hover:border-commerce hover:text-commerce"
            >
              see agent commerce
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}