import { examples } from "@/app/lib/content";

export function Results() {
  return (
    <section className="border-b border-border px-6 py-24 md:px-16">
      <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground">
        Results
      </h2>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {examples.map((ex) => (
          <div
            key={ex.id}
            className="rounded-2xl border border-border bg-background-elevated p-8"
          >
            <span className="mb-4 inline-block rounded-full border border-foreground-muted/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground-muted">
              {ex.label}
            </span>
            <p className="mb-1 text-sm text-foreground-muted">{ex.business}</p>
            <p className="text-gradient mb-2 text-2xl font-bold">{ex.metric}</p>
            <p className="font-mono text-xs text-foreground-muted">
              {ex.metricDetail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
