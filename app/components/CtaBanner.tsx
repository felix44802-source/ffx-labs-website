"use client";

import { motion } from "motion/react";
import type { SiteContent } from "@/app/lib/content";
import { whatsappHref } from "@/app/lib/content";

export function CtaBanner({ copy }: { copy: SiteContent }) {
  return (
    <section className="border-b border-border bg-[#091b15] py-24 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-accent/30 bg-gradient-to-br from-[#0d241c] to-[#081a13] p-12 text-center shadow-[0_20px_60px_-15px_rgba(16,185,129,0.2)] md:p-16"
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            {copy.ctaBanner.heading}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-foreground-muted leading-relaxed">
            {copy.ctaBanner.subheading}
          </p>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mint mt-8 inline-block rounded-full px-10 py-3.5 font-mono text-xs font-bold uppercase tracking-wider shadow-lg"
          >
            {copy.ctaBanner.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
