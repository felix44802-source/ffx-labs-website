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
                      <rect x="2.5" y="4" width="19" height="13.5" rx="2" stroke="currentColor" strokeWidth="1.7" />
                      <path d="M8 21h8M12 17.5V21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      <path d="M6.5 8l2 2-2 2M11 12h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
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
            className="group relative flex flex-col justify-between rounded-3xl border border-[rgba(34,211,238,0.12)] bg-[#05090b] p-8 backdrop-blur-lg transition-all hover:border-accent hover:shadow-[0_15px_45px_-10px_rgba(6,182,212,0.25)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
                <span className="rounded-full bg-accent/15 border border-accent/30 px-2.5 py-0.5 font-mono text-[10px] font-bold text-accent-2">
                  {copy.servicesBento.activeBadge}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                {bot.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                {bot.description}
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent hover:underline"
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
              <div className="rounded-xl rounded-tr-none border border-accent/30 bg-[#0d2833] p-2.5 text-foreground">
                <p className="text-[11px] leading-tight font-medium">{copy.servicesBento.chatBotReply}</p>
                <div className="mt-1 flex items-center justify-between text-[9px] text-accent">
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
                    <path d="M3 4h18l-7 8.5V19a2 2 0 0 1-4 0v-6.5L3 4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                    <circle cx="12" cy="21" r="1" fill="currentColor" />
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
                    <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
                    <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" />
                    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] font-bold text-accent-2">{copy.servicesBento.engineBadge}</span>
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
              <span className="font-bold text-accent-2 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-ping" />
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
                    <path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v4h-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12a8 8 0 0 1 2.34-5.66" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeDasharray="2 2.5" />
                    <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] font-bold text-accent-2">{copy.servicesBento.autoPipelineBadge}</span>
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
                  <path d="M3 17l6-6 4 4 7-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 7h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
