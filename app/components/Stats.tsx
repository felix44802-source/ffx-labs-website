import type { SiteContent } from "@/app/lib/content";

export function Stats({ copy }: { copy: SiteContent }) {
  return (
    <section className="relative z-10 border-y border-border bg-[#090e0b]/90 py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {copy.stats.map((stat, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center sm:items-start sm:text-left sm:border-r sm:border-border/60 sm:pr-6 last:border-r-0"
            >
              <div className="text-gradient-gold font-mono text-4xl font-extrabold tracking-tight md:text-5xl">
                {stat.figure}
              </div>
              <div className="mt-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                {stat.label}
              </div>
              <p className="mt-1 max-w-xs text-xs text-foreground-muted">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
