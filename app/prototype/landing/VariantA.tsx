// PROTOTYPE — Variant A: vertical stack, hero with aurora, services as
// horizontal-scroll light cards with purple icon tiles.

import { Aurora } from "./Aurora";
import { about, brand, examples, services, spanishWelcome, whatsappHref } from "./content";

const icons: Record<string, React.ReactNode> = {
  website: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="1.6" />
      <path d="M3 9h18" stroke="white" strokeWidth="1.6" />
    </svg>
  ),
  bot: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="4" y="6" width="16" height="12" rx="3" stroke="white" strokeWidth="1.6" />
      <path d="M9 12h.01M15 12h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 6V3" stroke="white" strokeWidth="1.6" />
    </svg>
  ),
  bundle: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M12 3l8 4-8 4-8-4 8-4Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 11l8 4 8-4M4 15l8 4 8-4" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
};

function IconTile({ variant }: { variant: keyof typeof icons }) {
  return (
    <div className="btn-gradient flex h-11 w-11 items-center justify-center rounded-xl">
      {icons[variant]}
    </div>
  );
}

export function VariantA() {
  const cards = [
    { key: "website", ...services.website },
    { key: "bot", ...services.bot },
  ];

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden border-b border-border px-6 text-center">
        <Aurora />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
            {brand.name}
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] text-foreground md:text-7xl">
            A digital presence <span className="text-gradient">that answers</span>{" "}
            for itself.
          </h1>
          <p className="max-w-xl text-foreground-muted">
            AI-built websites and WhatsApp bots for businesses that don&apos;t
            have time to manage a digital presence.
          </p>
          <a
            href={whatsappHref}
            className="btn-gradient mt-4 rounded-full px-7 py-3 font-semibold text-accent-foreground"
          >
            Message me on WhatsApp
          </a>
          <p className="mt-2 text-xs text-foreground-muted">{spanishWelcome}</p>
        </div>
      </section>

      {/* Services — horizontal scroll, light cards */}
      <section className="border-b border-border py-24">
        <h2 className="mb-10 px-6 text-center text-3xl font-extrabold text-foreground md:px-16">
          Services
        </h2>
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:px-16">
          {cards.map((s) => (
            <div
              key={s.key}
              className="w-[320px] shrink-0 snap-start rounded-2xl bg-card-bg p-8 text-card-fg"
            >
              <IconTile variant={s.key as keyof typeof icons} />
              <h3 className="mt-6 text-xl font-bold">{s.label}</h3>
              <p className="mt-2 text-sm text-card-muted">{s.blurb}</p>
              <p className="mt-6 font-mono text-sm font-semibold text-accent">
                {s.price} {s.priceDetail}
              </p>
            </div>
          ))}
          <div className="relative w-[320px] shrink-0 snap-start rounded-2xl bg-card-bg p-8 text-card-fg ring-2 ring-accent">
            <span className="btn-gradient absolute -top-3 left-8 rounded-full px-3 py-1 text-xs font-semibold text-accent-foreground">
              {services.bundle.badge}
            </span>
            <IconTile variant="bundle" />
            <h3 className="mt-6 text-xl font-bold">{services.bundle.label}</h3>
            <p className="mt-2 text-sm text-card-muted">{services.bundle.blurb}</p>
            <p className="mt-6 font-mono text-sm font-semibold text-accent">
              {services.bundle.price} {services.bundle.priceDetail}
            </p>
          </div>
        </div>
      </section>

      {/* Illustrative Examples */}
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
              <p className="mb-2 text-2xl font-bold text-gradient">{ex.metric}</p>
              <p className="font-mono text-xs text-foreground-muted">
                {ex.metricDetail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="grid gap-10 border-b border-border px-6 py-24 md:grid-cols-2 md:items-center md:px-16">
        <div className="mx-auto aspect-square w-48 rounded-full bg-background-elevated md:mx-0" />
        <div>
          <h2 className="mb-4 text-3xl font-extrabold text-foreground">
            About {about.name}
          </h2>
          <p className="max-w-md text-foreground-muted">{about.bio}</p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-24 text-center">
        <h2 className="mb-2 text-3xl font-extrabold text-foreground">Contact</h2>
        <p className="mb-8 text-sm text-foreground-muted">{spanishWelcome}</p>
        <form className="mx-auto flex max-w-md flex-col gap-4 text-left">
          <input
            placeholder="Name"
            className="rounded-lg border border-border bg-background-elevated px-4 py-3 text-foreground"
          />
          <select className="rounded-lg border border-border bg-background-elevated px-4 py-3 text-foreground">
            <option>Business type</option>
          </select>
          <textarea
            placeholder="Message"
            className="rounded-lg border border-border bg-background-elevated px-4 py-3 text-foreground"
          />
          <button className="btn-gradient rounded-full px-6 py-3 font-semibold text-accent-foreground">
            Send
          </button>
        </form>
      </section>

      <a
        href={whatsappHref}
        className="btn-gradient fixed bottom-6 right-6 z-40 rounded-full px-5 py-3 font-semibold text-accent-foreground"
      >
        WhatsApp
      </a>
    </div>
  );
}
