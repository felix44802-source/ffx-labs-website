"use client";

import { motion } from "motion/react";
import type { SiteContent } from "@/app/lib/content";
import { whatsappHref } from "@/app/lib/content";

export function ServicesBento({ copy }: { copy: SiteContent }) {
  const [website, bot, leads, tech, sync, consulting] = copy.bentoServices;

  return (
    <section id="services" className="relative py-28 px-6 md:px-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-96 w-[650px] rounded-full bg-accent/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-[#091216] px-3.5 py-1.5 font-mono text-xs font-bold text-accent">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            {copy.servicesBento.badge}
          </div>
          <motion.h2
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-3xl font-extrabold text-foreground md:text-5xl"
          >
            {copy.servicesHeading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl mx-auto text-sm text-foreground-muted leading-relaxed"
          >
            {copy.servicesSubheading}
          </motion.p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* ============================================================== */}
          {/* 1. HERO CARD: Website Design & Assembly (Spans 2 Columns)     */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0.5, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-[rgba(34,211,238,0.12)] bg-[#05090b] p-8 backdrop-blur-lg transition-all hover:border-accent hover:shadow-[0_15px_45px_-10px_rgba(6,182,212,0.3)] md:col-span-2"
          >
            <div>
              {/* Header Icon + Pill */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#05090b] border border-accent/40 text-accent group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-accent/15 border border-accent/30 px-3 py-1 font-mono text-[11px] font-bold text-accent-2">
                    {copy.servicesBento.flagshipBadge}
                  </span>
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                {website.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground-muted">
                {website.description}
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent hover:underline"
              >
                {copy.bentoServicesCta}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Visual Demo Widget: Real-time Lighthouse 99 Performance */}
            <div className="mt-8 rounded-2xl border border-border-subtle bg-[#05090b]/90 p-5 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Circular Score Gauge */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-accent/10 font-mono text-lg font-black text-accent shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    99
                  </div>
                  <div>
                    <p className="font-mono text-xs font-bold text-foreground">{copy.servicesBento.lighthouseScore}</p>
                    <p className="font-mono text-[11px] text-accent">{copy.servicesBento.subSecondLoad}</p>
                  </div>
                </div>

                {/* Score Chips */}
                <div className="flex gap-2 font-mono text-[10px]">
                  <span className="rounded-lg border border-accent/30 bg-accent/10 px-2.5 py-1 text-accent-2">Perf: 100</span>
                  <span className="rounded-lg border border-border-subtle bg-[#091216] px-2.5 py-1 text-foreground-muted">SEO: 100</span>
                  <span className="rounded-lg border border-border-subtle bg-[#091216] px-2.5 py-1 text-foreground-muted">A11y: 100</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* 2. CUSTOM WHATSAPP BOTS: Animated Chat Simulator Card          */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0.5, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-[rgba(34,211,238,0.12)] bg-[#05090b] p-8 backdrop-blur-lg transition-all hover:border-[#25D366] hover:shadow-[0_15px_45px_-10px_rgba(37,211,102,0.25)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#05090b] border border-[#25D366]/40 text-[#25D366] group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2z" />
                  </svg>
                </div>
                <span className="rounded-full bg-[#25D366]/15 border border-[#25D366]/30 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#25D366]">
                  {copy.servicesBento.activeBadge}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-foreground group-hover:text-[#25D366] transition-colors">
                {bot.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                {bot.description}
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#25D366] hover:underline"
              >
                {copy.bentoServicesCta}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Visual Demo: WhatsApp Live Conversation Simulation */}
            <div className="mt-6 space-y-2.5 rounded-2xl border border-border-subtle bg-[#05090b] p-3.5 text-xs font-sans">
              {/* Customer Bubble */}
              <div className="rounded-xl rounded-tl-none bg-[#0e2730] p-2.5 text-foreground-muted">
                <p className="text-[11px] leading-tight">{copy.servicesBento.chatCustomerMsg}</p>
                <span className="mt-1 block text-right text-[9px] text-foreground-muted/60">10:42 AM</span>
              </div>
              {/* AI Bot Instant Reply */}
              <div className="rounded-xl rounded-tr-none border border-[#25D366]/30 bg-[#072418] p-2.5 text-foreground">
                <p className="text-[11px] leading-tight font-medium">{copy.servicesBento.chatBotReply}</p>
                <div className="mt-1 flex items-center justify-between text-[9px] text-[#25D366]">
                  <span className="font-mono">{copy.servicesBento.autoBookLabel}</span>
                  <span>✓✓ 10:42 AM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* 3. TARGETED LEAD GENERATION                                    */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0.5, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-[rgba(34,211,238,0.12)] bg-[#05090b] p-7 backdrop-blur-lg transition-all hover:border-accent hover:shadow-[0_12px_35px_-10px_rgba(6,182,212,0.25)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#05090b] border border-border-subtle text-accent group-hover:border-accent/50 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] font-bold text-accent-2">{copy.servicesBento.convBadge}</span>
              </div>

              <h3 className="mt-6 text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                {leads.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                {leads.description}
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-accent hover:underline"
              >
                {copy.bentoServicesCta}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Mini Stat Bar */}
            <div className="mt-6 rounded-xl border border-border-subtle bg-[#05090b] p-3">
              <div className="flex justify-between text-[10px] font-mono text-foreground-muted">
                <span>{copy.servicesBento.inboundFlowLabel}</span>
                <span className="text-accent font-bold">{copy.servicesBento.prequalifiedLabel}</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full rounded-full bg-border-subtle overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: "85%" }} />
              </div>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* 4. TECHNOLOGY & AI INNOVATION                                  */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0.5, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-[rgba(34,211,238,0.12)] bg-[#05090b] p-7 backdrop-blur-lg transition-all hover:border-accent hover:shadow-[0_12px_35px_-10px_rgba(6,182,212,0.25)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#05090b] border border-border-subtle text-accent group-hover:border-accent/50 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] font-bold text-[#00F0FF]">{copy.servicesBento.engineBadge}</span>
              </div>

              <h3 className="mt-6 text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                {tech.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                {tech.description}
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-accent hover:underline"
              >
                {copy.bentoServicesCta}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Neural Pulse Pill */}
            <div className="mt-6 flex items-center justify-between rounded-xl border border-border-subtle bg-[#05090b] px-3.5 py-2.5 font-mono text-[11px]">
              <span className="text-foreground-muted">{copy.servicesBento.modelLatencyLabel}</span>
              <span className="font-bold text-[#00F0FF] flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF] animate-ping" />
                ~450ms
              </span>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* 5. AUTOMATED CRM & SYNC                                        */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0.5, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-[rgba(34,211,238,0.12)] bg-[#05090b] p-7 backdrop-blur-lg transition-all hover:border-accent hover:shadow-[0_12px_35px_-10px_rgba(6,182,212,0.25)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#05090b] border border-border-subtle text-accent group-hover:border-accent/50 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M3 10h18M8 15h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] font-bold text-[#FF7A59]">{copy.servicesBento.autoPipelineBadge}</span>
              </div>

              <h3 className="mt-6 text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                {sync.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                {sync.description}
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-accent hover:underline"
              >
                {copy.bentoServicesCta}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Sync Flow Chain */}
            <div className="mt-6 flex items-center justify-between rounded-xl border border-border-subtle bg-[#05090b] px-3 py-2 font-mono text-[10px] text-foreground-muted">
              <span>{copy.servicesBento.waLeadLabel}</span>
              <span className="text-accent">➔</span>
              <span>CRM</span>
              <span className="text-accent">➔</span>
              <span>{copy.servicesBento.calendarLabel}</span>
            </div>
          </motion.div>

          {/* ============================================================== */}
          {/* 6. STRATEGIC GROWTH CONSULTING (Full-width Bottom Banner)      */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0.5, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-[rgba(34,211,238,0.12)] bg-[#05090b] p-7 backdrop-blur-lg transition-all hover:border-accent hover:shadow-[0_12px_35px_-10px_rgba(6,182,212,0.25)] md:col-span-2 lg:col-span-3 sm:flex-row sm:items-center sm:gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#05090b] border border-accent/40 text-accent group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" />
                  <path d="M18.5 8.5l-5 5-3-3L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {consulting.title}
                  </h3>
                  <span className="rounded-full bg-accent/15 border border-accent/30 px-2.5 py-0.5 font-mono text-[10px] font-bold text-accent-2">
                    {copy.servicesBento.oneOnOneBadge}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-foreground-muted max-w-2xl">
                  {consulting.description}
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 shrink-0">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold group-hover:border-accent group-hover:text-accent transition-all"
              >
                {copy.servicesBento.talkToFounder}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">➔</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
