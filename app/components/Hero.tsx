import type { SiteContent } from "@/app/lib/content";
import { whatsappHref } from "@/app/lib/content";
import { Aurora } from "./Aurora";

export function Hero({ copy }: { copy: SiteContent }) {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center gap-8 overflow-hidden border-b border-border px-6 pt-20 pb-16 text-center md:pt-28 md:pb-24">
      <Aurora />
      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-7">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-card-bg/60 px-4 py-1.5 backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(212,175,55,0.25)]">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Independent AI Studio
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {copy.hero.headline.split(".")[0]}
          <span className="block text-gradient mt-1 font-extrabold">
            {copy.hero.headline.split(".")[1] ? `${copy.hero.headline.split(".")[1]}.` : ""}
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
          {copy.hero.description}
        </p>

        {/* CTAs */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wider shadow-lg"
          >
            {copy.hero.cta}
          </a>
          <a
            href="#process"
            className="btn-secondary rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide"
          >
            {copy.hero.secondaryCta}
          </a>
        </div>

        {/* Bilingual Note */}
        <p className="mt-3 font-mono text-xs text-foreground-muted/80">
          {copy.hero.welcome}
        </p>
      </div>
    </section>
  );
}

