"use client";

import { motion } from "motion/react";
import type { SiteContent } from "@/app/lib/content";

export function BenefitsDashboard({ copy }: { copy: SiteContent }) {
  return (
    <section id="benefits" className="relative border-b border-border bg-background py-28 px-6 text-foreground md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[480px_1fr] lg:items-center">
          {/* Left: Floating Interactive Dashboard Widget Card */}
          <motion.div
            initial={{ opacity: 0.5, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Main Widget Card */}
            <div className="rounded-3xl border border-card-border bg-card-bg p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border-subtle pb-6">
                <div>
                  <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wider">
                    {copy.benefits.stats.totalTitle}
                  </p>
                  <div className="mt-1 flex items-baseline gap-3">
                    <span className="font-mono text-3xl font-extrabold text-foreground">
                      {copy.benefits.stats.totalNumber}
                    </span>
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-xs font-bold text-accent-2">
                      ↗ {copy.benefits.stats.growth}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="h-2 w-2 rounded-full bg-accent-2" />
                  <span className="h-2 w-2 rounded-full bg-accent-2/50" />
                </div>
              </div>

              {/* Progress Bars */}
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-foreground-muted">
                    <span>{copy.benefits.stats.finished}</span>
                    <span className="font-mono font-bold text-foreground">{copy.benefits.stats.finishedVal}</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border-subtle">
                    <div className="h-full rounded-full bg-accent" style={{ width: "92%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-foreground-muted">
                    <span>{copy.benefits.stats.inProgress}</span>
                    <span className="font-mono font-bold text-foreground">{copy.benefits.stats.inProgressVal}</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border-subtle">
                    <div className="h-full rounded-full bg-accent-2" style={{ width: "13%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-foreground-muted">
                    <span>{copy.benefits.stats.reported}</span>
                    <span className="font-mono font-bold text-foreground">{copy.benefits.stats.reportedVal}</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border-subtle">
                    <div className="h-full rounded-full bg-accent-2/50" style={{ width: "5%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Leads Card (from video) */}
            <motion.div
              initial={{ opacity: 0.5, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute -bottom-8 -right-4 rounded-2xl border border-card-border bg-card-bg p-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/20 text-accent font-bold text-xs">
                  ✓
                </span>
                <span className="font-mono text-xs font-bold text-accent-2">
                  Total Inquiries ↗ 8%
                </span>
              </div>
              <div className="mt-2 font-mono text-2xl font-black text-foreground">
                {copy.benefits.stats.activeLeadsCount}
              </div>
              <p className="mt-0.5 text-[11px] font-semibold text-foreground-muted">
                {copy.benefits.stats.activeLeadsText}
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Benefits Text & 3 Pillars */}
          <motion.div
            initial={{ opacity: 0.5, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
