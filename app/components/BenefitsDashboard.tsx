"use client";

import { motion } from "motion/react";
import type { SiteContent } from "@/app/lib/content";

const BENEFIT_ICONS = [
  // Replies in seconds (chat bubble + lightning)
  [
    "M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z",
    "M13 3l-3 5h2.5l-1 4 3-5h-2.5l1-4z",
  ],
  // Appointments book themselves (calendar + check)
  [
    "M4 7h16M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z",
    "M8 3v3M16 3v3M9 13l2 2 4-4",
  ],
  // Less busywork, more growth (chart up)
  [
    "M4 20h16",
    "M5 16l4-4 3 3 6-7",
  ],
];

export function BenefitsDashboard({ copy }: { copy: SiteContent }) {
  return (
    <section id="benefits" className="relative py-28 px-6 text-foreground md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[460px_1fr] lg:items-center">
          {/* Left: 3 concrete benefit cards */}
          <motion.div
            initial={{ opacity: 0.5, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md space-y-5"
          >
            {copy.benefits.benefitCards.map((card, idx) => {
              const [main, accent] = BENEFIT_ICONS[idx];
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-card-border bg-card-bg p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 border border-accent/30 text-accent">
                      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                        <path d={main} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={accent} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right: Heading + 3 pillars */}
          <motion.div
            initial={{ opacity: 0.5, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-halo relative z-10"
          >
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              {copy.benefits.heading}
            </h2>
            <p className="mt-4 text-base text-foreground-muted">
              {copy.benefits.subheading}
            </p>

            <div className="mt-10 space-y-8">
              {copy.benefits.pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-xs font-bold text-accent-foreground shadow-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}