import type { SiteContent } from "@/app/lib/content";

export function Process({ copy }: { copy: SiteContent }) {
  return (
    <section id="process" className="relative border-b border-border py-28 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Simple & Transparent
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-5xl">
            {copy.processHeading}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-foreground-muted">
            {copy.processSubheading}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {copy.processSteps.map((step, idx) => (
            <div
              key={step.number}
              className={`group relative rounded-2xl border p-8 transition-all duration-300 ${
                idx === 1
                  ? "border-accent/40 bg-card-bg shadow-[0_10px_40px_-15px_rgba(212,175,55,0.2)]"
                  : "border-border-subtle bg-background-elevated hover:border-accent/30"
              }`}
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-black text-accent">
                  {step.number}
                </span>
                <span className="h-2 w-2 rounded-full bg-accent/60 group-hover:scale-125 transition-transform" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-card-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
