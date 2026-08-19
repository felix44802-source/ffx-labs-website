import { services } from "@/app/lib/content";

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

export function Services() {
  const cards = [
    { key: "website" as const, ...services.website },
    { key: "bot" as const, ...services.bot },
  ];

  return (
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
            <IconTile variant={s.key} />
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
  );
}
