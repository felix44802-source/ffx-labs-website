import type { SiteContent } from "@/app/lib/content";

export function Results({ copy }: { copy: SiteContent }) {
  return (
    <section id="results" className="relative border-b border-border py-28 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Proven Concepts
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-5xl">
            {copy.resultsHeading}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-foreground-muted">
            {copy.resultsSubheading}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {copy.examples.map((ex) => (
            <div
              key={ex.id}
              className="relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-card-bg p-8 transition-all hover:border-accent/30"
            >
              <div>
                <span className="inline-block rounded-full border border-accent/20 bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                  {ex.label}
                </span>
                <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                  {ex.business}
                </p>
                <p className="text-gradient-gold mt-3 text-3xl font-black tracking-tight">
                  {ex.metric}
                </p>
              </div>

              <div className="mt-6 border-t border-border-subtle pt-4">
                <p className="font-mono text-xs text-card-muted leading-relaxed">
                  {ex.metricDetail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

