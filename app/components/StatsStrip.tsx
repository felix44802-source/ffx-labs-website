"use client";

import { motion } from "motion/react";
import type { SiteContent } from "@/app/lib/content";

export function StatsStrip({ copy }: { copy: SiteContent }) {
  return (
    <section className="relative border-b border-border bg-background px-6 py-16 md:px-12">
      <motion.div
        initial={{ opacity: 0.5, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5 text-left"
      >
        {/* Card 1: AI Pipeline */}
        <div className="relative aspect-[4/3] sm:aspect-auto overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-br from-accent/20 to-card-bg p-6 flex flex-col justify-between">
          <div className="h-8 w-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-mono text-xs text-accent-2 font-semibold uppercase tracking-wider">
            AI Powered Core
          </p>
        </div>

        {/* Card 2: Clients */}
        <div className="rounded-2xl border border-border-subtle bg-card-bg p-6 flex flex-col justify-between">
          <div className="font-mono text-3xl font-extrabold text-foreground">
            {copy.hero.bento.clientsCount}
          </div>
          <p className="mt-4 text-xs font-medium text-foreground-muted leading-snug">
            {copy.hero.bento.clientsLabel}
          </p>
        </div>

        {/* Card 3: Total Inquiries */}
        <div className="rounded-2xl border border-border-subtle bg-card-bg p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/20 text-accent font-bold text-xs">
              ✓
            </span>
            <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[10px] font-bold text-accent-2">
              {copy.hero.bento.projectsPill}
            </span>
          </div>
          <div className="mt-4">
            <div className="font-mono text-3xl font-extrabold text-foreground">
              {copy.hero.bento.projectsCount}
            </div>
            <p className="mt-1 text-xs font-semibold text-foreground-muted">
              {copy.hero.bento.projectsLabel}
            </p>
          </div>
        </div>

        {/* Card 4: Years Experience */}
        <div className="rounded-2xl border border-border-subtle bg-card-bg p-6 flex flex-col justify-between">
          <div className="font-mono text-3xl font-extrabold text-foreground">
            {copy.hero.bento.yearsCount}
          </div>
          <p className="mt-4 text-xs font-semibold text-foreground-muted leading-snug">
            {copy.hero.bento.yearsLabel}
          </p>
        </div>

        {/* Card 5: Efficiency */}
        <div className="rounded-2xl border border-border-subtle bg-card-bg p-6 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="mt-4 text-xs font-medium text-foreground leading-snug">
            {copy.hero.bento.efficiencyTitle}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
