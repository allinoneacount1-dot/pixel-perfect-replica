import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/site-header";
import biofiAnatomy from "@/assets/biofi-anatomy.jpg";

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

          <figure className="mt-16 border border-border bg-card">
            <img
              src={biofiAnatomy}
              alt="Anatomical diagram of longevity biotech capital flow: an allocation heart branching into trial vaults."
              width={1600}
              height={1200}
              loading="lazy"
              className="block w-full"
            />
            <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span>fig.03 · longevity biotech capital flow</span>
              <span className="text-biofi">diagram lbcf-7a</span>
            </figcaption>
          </figure>

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