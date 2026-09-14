"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { SiteContent } from "@/app/lib/content";

export function PricingBento({ copy }: { copy: SiteContent }) {
  // Configurator state: selected module IDs
  const [selectedModules, setSelectedModules] = useState<string[]>(["web", "whatsapp", "crm"]);

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Build dynamic WhatsApp link with pre-filled text
  const selectedNames = copy.pricing.configurator.modules
    .filter((m) => selectedModules.includes(m.id))
    .map((m) => m.name)
    .join(", ");

  const whatsappMessage = encodeURIComponent(
    `${copy.pricing.customWhatsappGreetingPrefix}${selectedNames || copy.pricing.defaultPackageLabel}${copy.pricing.customWhatsappGreetingSuffix}`
  );
  const customWhatsAppHref = `https://wa.me/16197452934?text=${whatsappMessage}`;

  return (
    <section id="pricing" className="relative py-28 px-6 md:px-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-accent/5 blur-[140px]" />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-[#091216] px-3.5 py-1.5 font-mono text-xs font-bold text-accent">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            {copy.pricing.badge}
          </div>
          <motion.h2
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-3xl font-extrabold text-foreground md:text-5xl"
          >
            {copy.pricing.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-sm text-foreground-muted max-w-2xl mx-auto leading-relaxed"
          >
            {copy.pricing.subheading}
          </motion.p>
        </div>

        {/* 2 Main Strategic Plans */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* 1. Standalone Custom Website ($500) */}
          <motion.div
            initial={{ opacity: 0.5, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-3xl border border-[rgba(34,211,238,0.12)] bg-[#05090b] p-8 backdrop-blur-lg transition-all hover:border-white/30"
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground">
                  {copy.pricing.starter.name}
                </h3>
                <span className="font-mono text-xs text-foreground-muted">{copy.pricing.standaloneLabel}</span>
              </div>
              <p className="mt-2 text-xs text-foreground-muted leading-relaxed">
                {copy.pricing.starter.desc}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {copy.pricing.starter.price}
                </span>
                <span className="font-mono text-[11px] text-foreground-muted">
                  {copy.pricing.starter.priceDetail}
                </span>
              </div>

              <a
                href={`https://wa.me/16197452934?text=${encodeURIComponent(copy.pricing.starterWhatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark mt-6 block w-full rounded-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider"
              >
                {copy.pricing.starter.cta}
              </a>

              <div className="mt-8 border-t border-border-subtle pt-6">
                <p className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">{copy.pricing.includedLabel}</p>
                <ul className="mt-4 space-y-3">
                  {copy.pricing.starter.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-foreground-muted">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent font-bold text-[10px]">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 2. WhatsApp AI Bot (monthly, custom quote) */}
          <motion.div
            initial={{ opacity: 0.5, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative flex flex-col justify-between rounded-3xl border-2 border-accent bg-[#05090b] p-8 shadow-[0_0_50px_-10px_rgba(6,182,212,0.35)] backdrop-blur-lg"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-foreground">
                {copy.pricing.bot.name}
              </h3>
              <p className="mt-2 text-xs text-foreground-muted leading-relaxed">
                {copy.pricing.bot.desc}
              </p>

              <div className="mt-6 flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold tracking-tight text-foreground">
                    {copy.pricing.bot.price}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-accent font-semibold">
                  {copy.pricing.bot.priceDetail}
                </span>
              </div>

              <a
                href={`https://wa.me/16197452934?text=${encodeURIComponent(copy.pricing.botWhatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mint mt-6 block w-full rounded-full py-3.5 text-center text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                {copy.pricing.bot.cta}
              </a>

              <div className="mt-8 border-t border-accent/20 pt-6">
                <p className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">{copy.pricing.botBenefitsLabel}</p>
                <ul className="mt-4 space-y-3">
                  {copy.pricing.bot.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-foreground">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent text-[#021117] font-black text-[10px]">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* 3. INTERACTIVE PACKAGE CONFIGURATOR ("Build Your Custom Stack") */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0.5, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-3xl border border-border-subtle bg-gradient-to-r from-[#091216] via-[#0b171c] to-[#091216] p-8 sm:p-10 shadow-[0_20px_50px_-15px_rgba(6,182,212,0.15)]"
        >
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-accent/15 border border-accent/30 px-3 py-1 font-mono text-[10px] font-bold text-accent-2 uppercase tracking-wider">
              {copy.pricing.configuratorBadge}
            </span>
            <h3 className="mt-3 text-2xl font-extrabold text-foreground sm:text-3xl">
              {copy.pricing.configurator.title}
            </h3>
            <p className="mt-2 text-xs text-foreground-muted leading-relaxed">
              {copy.pricing.configurator.subtitle}
            </p>
          </div>

          {/* Interactive Checkbox Modules */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {copy.pricing.configurator.modules.map((module) => {
              const isChecked = selectedModules.includes(module.id);
              const typeLabel =
                module.type === "one-time"
                  ? copy.pricing.standaloneLabel
                  : copy.pricing.monthlyLabel;

              return (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => toggleModule(module.id)}
                  className={`flex flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer ${
                    isChecked
                      ? "border-accent bg-accent/10 shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] scale-[1.02]"
                      : "border-border-subtle bg-[#05090b]/80 hover:border-white/20 opacity-75"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-xs text-foreground">{module.name}</span>
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs transition-colors ${
                        isChecked
                          ? "border-accent bg-accent text-[#021117] font-black"
                          : "border-border-subtle bg-[#091216]"
                      }`}
                    >
                      {isChecked ? "✓" : ""}
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] text-foreground-muted leading-snug">
                    {module.desc}
                  </p>
                  <span
                    className={`mt-3 inline-block self-start rounded-full px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${
                      module.type === "one-time"
                        ? "bg-accent/15 text-accent-2"
                        : "bg-accent/10 text-foreground-muted"
                    }`}
                  >
                    {typeLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Live Action Bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-6 sm:flex-row">
            <div className="font-mono text-xs text-foreground-muted text-center sm:text-left">
              <span className="text-foreground font-bold">{selectedModules.length}</span> {copy.pricing.modulesSelectedSuffix}
            </div>

            <a
              href={customWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mint flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2z" />
              </svg>
              {copy.pricing.configurator.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
