// PROTOTYPE — Variant C: sticky split-screen, accordion services, comparison table.

"use client";

import { useState } from "react";
import { Aurora } from "./Aurora";
import { about, brand, examples, services, spanishWelcome, whatsappHref } from "./content";

const rows: { feature: string; website: boolean; bot: boolean; bundle: boolean }[] = [
  { feature: "Professional website", website: true, bot: false, bundle: true },
  { feature: "AI WhatsApp bot", website: false, bot: true, bundle: true },
  { feature: "24/7 response", website: false, bot: true, bundle: true },
  { feature: "Basic SEO", website: true, bot: false, bundle: true },
  { feature: "Discount on the monthly rate", website: false, bot: false, bundle: true },
];

export function VariantC() {
  const [open, setOpen] = useState<"website" | "bot" | "bundle">("website");

  return (
    <div className="md:grid md:grid-cols-[360px_1fr]">
      {/* Sticky left panel */}
      <aside className="relative overflow-hidden border-b border-border px-6 py-10 md:sticky md:top-0 md:h-screen md:border-b-0 md:border-r md:px-10">
        <Aurora className="opacity-60" />
        <div className="relative z-10">
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
            {brand.name}
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-foreground">
            A digital presence <span className="text-gradient">that answers</span>{" "}
            for itself.
          </h1>
          <a
            href={whatsappHref}
            className="btn-gradient mt-8 block rounded-full px-5 py-3 text-center font-semibold text-accent-foreground"
          >
            Message me on WhatsApp
          </a>
          <p className="mt-3 text-xs text-foreground-muted">{spanishWelcome}</p>
          <div className="mt-10 border-t border-border pt-6">
            <div className="aspect-square w-16 rounded-full bg-background-elevated" />
            <p className="mt-3 text-sm text-foreground-muted">
              <span className="text-foreground">{about.name}</span> — {about.bio}
            </p>
          </div>
        </div>
      </aside>

      {/* Scrolling right panel */}
      <main>
        {/* Services — accordion rows */}
        <section className="border-b border-border">
          {(["website", "bot", "bundle"] as const).map((key) => {
            const s = services[key];
            const isOpen = open === key;
            return (
              <div key={key} className="border-b border-border">
                <button
                  onClick={() => setOpen(key)}
                  className="flex w-full items-center justify-between px-6 py-6 text-left md:px-10"
                >
                  <span className="text-2xl font-extrabold text-foreground">
                    {s.label}
                    {key === "bundle" && (
                      <span className="btn-gradient ml-3 rounded-full px-3 py-1 align-middle font-sans text-xs font-semibold text-accent-foreground">
                        {services.bundle.badge}
                      </span>
                    )}
                  </span>
                  <span className="font-mono text-sm text-accent">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 md:px-10">
                    <p className="max-w-lg text-foreground-muted">{s.blurb}</p>
                    <p className="mt-4 font-mono text-sm text-accent">
                      {s.price} {s.priceDetail}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* Illustrative Examples — mono readout panel */}
        <section className="border-b border-border px-6 py-16 md:px-10">
          <h2 className="mb-6 text-2xl font-extrabold text-foreground">Results</h2>
          <div className="rounded-lg border border-border bg-background-elevated p-6 font-mono text-sm">
            {examples.map((ex) => (
              <div
                key={ex.id}
                className="flex flex-col gap-1 border-b border-border/60 py-3 last:border-b-0 md:flex-row md:items-center md:justify-between"
              >
                <span className="text-foreground-muted">
                  [{ex.label}] {ex.business} · {ex.service}
                </span>
                <span className="text-gradient font-semibold">
                  {ex.metric} — {ex.metricDetail}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing — comparison table */}
        <section className="border-b border-border px-6 py-16 md:px-10">
          <h2 className="mb-6 text-2xl font-extrabold text-foreground">Pricing</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left text-foreground-muted">
                  <th className="py-3 font-normal">Includes</th>
                  <th className="py-3 font-normal">Website</th>
                  <th className="py-3 font-normal">Bot</th>
                  <th className="py-3 font-normal text-accent">Bundle</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.feature} className="border-b border-border/60">
                    <td className="py-3 text-foreground">{r.feature}</td>
                    <td className="py-3 font-mono">{r.website ? "✓" : "—"}</td>
                    <td className="py-3 font-mono">{r.bot ? "✓" : "—"}</td>
                    <td className="py-3 font-mono text-accent">
                      {r.bundle ? "✓" : "—"}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="py-4 text-foreground-muted">Price</td>
                  <td className="py-4 font-mono text-xs">{services.website.price}</td>
                  <td className="py-4 font-mono text-xs">{services.bot.price}</td>
                  <td className="py-4 font-mono text-xs text-accent">
                    {services.bundle.price}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Contact */}
        <section className="px-6 py-16 md:px-10">
          <h2 className="mb-2 text-2xl font-extrabold text-foreground">Contact</h2>
          <p className="mb-6 text-sm text-foreground-muted">{spanishWelcome}</p>
          <form className="flex max-w-md flex-col gap-3">
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
      </main>
    </div>
  );
}
