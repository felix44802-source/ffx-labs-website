"use client";

import { motion } from "motion/react";
import type { SiteContent } from "@/app/lib/content";
import { whatsappHref } from "@/app/lib/content";

export function PricingBento({ copy }: { copy: SiteContent }) {
  return (
    <section id="pricing" className="relative border-b border-border bg-[#091b15] py-28 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-foreground md:text-5xl"
          >
            {copy.pricing.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0.5, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-sm text-foreground-muted"
          >
            {copy.pricing.subheading}
          </motion.p>
        </div>

        {/* 2 Upper Bento Cards (Starter & Enterprise) */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* 1. Starter */}
          <motion.div
            initial={{ opacity: 0.5, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-3xl border border-border-subtle bg-[#0d241c] p-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                {copy.pricing.starter.name}
              </h3>
              <p className="mt-2 text-xs text-foreground-muted">
                {copy.pricing.starter.desc}
              </p>

              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {copy.pricing.starter.price}
                </span>
                <span className="font-mono text-xs text-foreground-muted">
                  {copy.pricing.starter.priceDetail}
                </span>
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark mt-6 block w-full rounded-full py-3 text-center text-xs font-semibold uppercase tracking-wider"
              >
                {copy.pricing.starter.cta}
              </a>

              <div className="mt-8 border-t border-border-subtle pt-6">
                <p className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">Features</p>
                <ul className="mt-4 space-y-3">
                  {copy.pricing.starter.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-foreground-muted">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/20 text-accent font-bold text-[10px]">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 2. Enterprise */}
          <motion.div
            initial={{ opacity: 0.5, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-between rounded-3xl border border-border-subtle bg-[#0d241c] p-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                {copy.pricing.enterprise.name}
              </h3>
              <p className="mt-2 text-xs text-foreground-muted">
                {copy.pricing.enterprise.desc}
              </p>

              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {copy.pricing.enterprise.price}
                </span>
                <span className="font-mono text-xs text-foreground-muted">
                  {copy.pricing.enterprise.priceDetail}
                </span>
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark mt-6 block w-full rounded-full py-3 text-center text-xs font-semibold uppercase tracking-wider"
              >
                {copy.pricing.enterprise.cta}
              </a>

              <div className="mt-8 border-t border-border-subtle pt-6">
                <p className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">Features</p>
                <ul className="mt-4 space-y-3">
                  {copy.pricing.enterprise.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-foreground-muted">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/20 text-accent font-bold text-[10px]">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wide Bottom Card (Professional / The Complete Bundle) */}
        <motion.div
          initial={{ opacity: 0.5, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-6 overflow-hidden rounded-3xl border-2 border-accent/40 bg-gradient-to-r from-[#0d241c] to-[#123328] p-8 text-center sm:p-10 shadow-[0_20px_50px_-15px_rgba(16,185,129,0.25)]"
        >
          <span className="inline-block rounded-full bg-accent/20 border border-accent/40 px-3.5 py-1 font-mono text-[10px] font-bold text-accent uppercase tracking-wider">
            {copy.pricing.professional.badge}
          </span>
          <h3 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            {copy.pricing.professional.name}
          </h3>
          <p className="mt-3 max-w-xl mx-auto text-sm text-foreground-muted leading-relaxed">
            {copy.pricing.professional.desc}
          </p>

          <p className="mt-6 flex flex-wrap items-baseline justify-center gap-2">
            <span className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {copy.pricing.professional.price}
            </span>
            <span className="font-mono text-sm text-foreground-muted">
              {copy.pricing.professional.priceDetail}
            </span>
          </p>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mint mt-8 inline-block rounded-full px-10 py-3.5 font-mono text-xs font-bold uppercase tracking-wider shadow-lg"
          >
            {copy.pricing.professional.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
