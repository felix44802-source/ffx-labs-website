// PROTOTYPE — Variant B: editorial, asymmetric blocks, banner bundle, no card grids.

import { Aurora } from "./Aurora";
import { about, brand, examples, services, spanishWelcome, whatsappHref } from "./content";

export function VariantB() {
  return (
    <div className="relative">
      {/* Hero — off-center, overlapping wordmark */}
      <section className="relative min-h-screen overflow-hidden border-b border-border px-6 pt-32 md:px-16">
        <Aurora />
        <div className="relative z-10">
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
            {brand.name}
          </p>
          <h1 className="mt-6 max-w-4xl text-6xl font-extrabold leading-[0.95] text-foreground md:text-8xl">
            A digital presence{" "}
            <span className="text-gradient">that answers</span> for itself.
          </h1>
          <p className="mt-10 max-w-sm text-foreground-muted md:ml-auto md:text-right">
            AI-built websites and WhatsApp bots for businesses that don&apos;t
            have time to manage a digital presence.
          </p>
          <a
            href={whatsappHref}
            className="mt-10 inline-block border-b-2 border-accent pb-1 font-mono text-sm text-accent"
          >
            Message me on WhatsApp →
          </a>
          <p className="mt-4 text-xs text-foreground-muted">{spanishWelcome}</p>
        </div>
      </section>

      {/* Services — alternating text/blank blocks, no cards */}
      <section className="border-b border-border">
        <div className="grid border-b border-border md:grid-cols-2">
          <div className="border-b border-border px-6 py-20 md:border-b-0 md:border-r md:px-16">
            <span className="font-mono text-xs text-foreground-muted">01</span>
            <h3 className="mt-4 text-4xl font-extrabold text-foreground">
              {services.website.label}
            </h3>
            <p className="mt-4 max-w-sm text-foreground-muted">
              {services.website.blurb}
            </p>
            <p className="mt-6 font-mono text-sm text-accent">
              {services.website.price} · {services.website.priceDetail}
            </p>
          </div>
          <div className="flex items-center px-6 py-20 md:px-16">
            <div className="h-64 w-full rounded-sm bg-background-elevated" />
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="order-2 flex items-center border-b border-border px-6 py-20 md:order-1 md:border-b-0 md:border-r md:px-16">
            <div className="h-64 w-full rounded-sm bg-background-elevated" />
          </div>
          <div className="order-1 px-6 py-20 md:order-2 md:px-16">
            <span className="font-mono text-xs text-foreground-muted">02</span>
            <h3 className="mt-4 text-4xl font-extrabold text-foreground">
              {services.bot.label}
            </h3>
            <p className="mt-4 max-w-sm text-foreground-muted">
              {services.bot.blurb}
            </p>
            <p className="mt-6 font-mono text-sm text-accent">
              {services.bot.price} · {services.bot.priceDetail}
            </p>
          </div>
        </div>
      </section>

      {/* Bundle — full-width statement banner */}
      <section className="relative overflow-hidden border-b border-border px-6 py-24 text-center md:px-16">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div
            className="aurora-blob left-1/3 top-0 h-[300px] w-[300px] bg-accent"
            style={{ animation: "aurora-drift-2 20s ease-in-out infinite" }}
          />
        </div>
        <div className="relative z-10">
          <span className="btn-gradient inline-block rounded-full px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent-foreground">
            {services.bundle.badge}
          </span>
          <h3 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold text-foreground">
            {services.bundle.blurb}
          </h3>
          <p className="mt-6 font-mono text-sm text-gradient font-semibold">
            {services.bundle.price} · {services.bundle.priceDetail}
          </p>
        </div>
      </section>

      {/* Illustrative Examples — horizontal marquee-style row, huge numerals */}
      <section className="border-b border-border px-6 py-24 md:px-16">
        <h2 className="mb-12 text-3xl font-extrabold text-foreground">Results</h2>
        <div className="flex flex-col divide-y divide-border">
          {examples.map((ex) => (
            <div
              key={ex.id}
              className="flex flex-col gap-2 py-8 md:flex-row md:items-baseline md:justify-between"
            >
              <div>
                <span className="mr-3 rounded-full border border-foreground-muted/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground-muted">
                  {ex.label}
                </span>
                <span className="text-sm text-foreground-muted">{ex.business}</span>
              </div>
              <p className="text-gradient font-mono text-4xl font-bold md:text-5xl">
                {ex.metric}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About — full-bleed photo with text overlay */}
      <section className="relative flex min-h-[60vh] items-end border-b border-border bg-background-elevated px-6 py-16 md:px-16">
        <div className="max-w-md">
          <h2 className="text-3xl font-extrabold text-foreground">
            About {about.name}
          </h2>
          <p className="mt-4 text-foreground-muted">{about.bio}</p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-24 md:px-16">
        <h2 className="mb-2 text-3xl font-extrabold text-foreground">Contact</h2>
        <p className="mb-8 text-sm text-foreground-muted">{spanishWelcome}</p>
        <form className="flex max-w-md flex-col gap-4">
          <input
            placeholder="Name"
            className="border-b border-border bg-transparent px-2 py-3 text-foreground"
          />
          <select className="border-b border-border bg-transparent px-2 py-3 text-foreground">
            <option>Business type</option>
          </select>
          <textarea
            placeholder="Message"
            className="border-b border-border bg-transparent px-2 py-3 text-foreground"
          />
          <button className="mt-4 w-fit border-b-2 border-accent pb-1 font-mono text-sm text-accent">
            Send →
          </button>
        </form>
      </section>

      {/* CTA — full-width sticky bottom strip instead of a bubble */}
      <a
        href={whatsappHref}
        className="btn-gradient fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center py-3 font-mono text-sm font-semibold text-accent-foreground"
      >
        Message me on WhatsApp
      </a>
    </div>
  );
}
