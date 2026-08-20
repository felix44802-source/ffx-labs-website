import type { SiteContent } from "@/app/lib/content";
import { whatsappHref } from "@/app/lib/content";

const icons = {
  website: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-accent">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="6.5" r="1" fill="currentColor" />
      <circle cx="9" cy="6.5" r="1" fill="currentColor" />
      <circle cx="12" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  bot: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-accent-2">
      <rect x="4" y="6" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 12h.01M15 12h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M12 6V3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 15c.8.6 3.2.6 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  leads: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-amber-400">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
};

export function Services({ copy }: { copy: SiteContent }) {
  return (
    <section id="services" className="relative border-b border-border py-28 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Core Offerings
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-5xl">
            {copy.servicesHeading}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-foreground-muted">
            {copy.servicesSubheading}
          </p>
        </div>

        {/* Services 4-Column Responsive Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
          {/* 1. Website Card */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-card-bg p-7 transition-all hover:border-accent/40">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background border border-border-subtle">
                {icons.website}
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">
                {copy.services.website.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-card-muted">
                {copy.services.website.blurb}
              </p>
            </div>
            <div className="mt-8 border-t border-border-subtle pt-5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary block w-full rounded-xl py-3.5 text-center font-mono text-xs font-semibold uppercase tracking-wider"
              >
                {copy.services.website.cta}
              </a>
            </div>
          </div>

          {/* 2. WhatsApp Bot Card */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-card-bg p-7 transition-all hover:border-accent-2/40">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background border border-border-subtle">
                {icons.bot}
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">
                {copy.services.bot.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-card-muted">
                {copy.services.bot.blurb}
              </p>
            </div>
            <div className="mt-8 border-t border-border-subtle pt-5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary block w-full rounded-xl py-3.5 text-center font-mono text-xs font-semibold uppercase tracking-wider"
              >
                {copy.services.bot.cta}
              </a>
            </div>
          </div>

          {/* 3. Lead Generation Card */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-card-bg p-7 transition-all hover:border-amber-400/40">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background border border-border-subtle">
                {icons.leads}
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">
                {copy.services.leads.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-card-muted">
                {copy.services.leads.blurb}
              </p>
            </div>
            <div className="mt-8 border-t border-border-subtle pt-5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary block w-full rounded-xl py-3.5 text-center font-mono text-xs font-semibold uppercase tracking-wider"
              >
                {copy.services.leads.cta}
              </a>
            </div>
          </div>

          {/* 4. THE COMPLETE BUNDLE (RECOMMENDED) */}
          <div className="relative flex flex-col justify-between rounded-2xl border-2 border-accent/60 bg-background-elevated p-7 shadow-[0_0_50px_-15px_rgba(212,175,55,0.25)] sm:col-span-2 lg:col-span-1 lg:-translate-y-2">
            {/* Recommended Badge */}
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-accent bg-accent px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-accent-foreground shadow-md">
              {copy.services.bundle.badge}
            </span>

            <div>
              {/* Combination Icons */}
              <div className="mt-2 flex items-center justify-center gap-2.5 rounded-xl border border-accent/20 bg-card-bg/80 px-3 py-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-background border border-accent/30">
                  {icons.website}
                </div>
                <span className="font-mono text-xs font-bold text-accent">+</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-background border border-accent-2/30">
                  {icons.bot}
                </div>
                <span className="font-mono text-xs font-bold text-accent">+</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-background border border-amber-400/30">
                  {icons.leads}
                </div>
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-foreground">
                {copy.services.bundle.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-card-muted">
                {copy.services.bundle.blurb}
              </p>
            </div>

            <div className="mt-8 border-t border-accent/20 pt-5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block w-full rounded-xl py-3.5 text-center font-mono text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                {copy.services.bundle.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


