"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { SiteContent } from "@/app/lib/content";
import { whatsappHref } from "@/app/lib/content";
import { Aurora } from "./Aurora";

export function Hero({ copy }: { copy: SiteContent }) {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden border-b border-border bg-background px-6 pt-20 pb-20 text-center md:pt-28 md:pb-28">
      <Aurora />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {copy.hero.headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg"
        >
          {copy.hero.description}
        </motion.p>

        {/* Dual CTAs & Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mint rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wider"
            >
              {copy.hero.getStarted}
            </a>
            <a
              href="#services"
              className="btn-dark rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide"
            >
              {copy.hero.tryDemo}
            </a>
          </div>

          {/* Star Rating Badge */}
          <div className="flex items-center gap-2 font-mono text-xs text-foreground-muted">
            <div className="flex text-accent-2">
              {"★".repeat(5)}
            </div>
            <span className="font-bold text-foreground">{copy.hero.ratingScore}</span>
            <span>{copy.hero.ratingText}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


