"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { SiteContent } from "@/app/lib/content";
import { whatsappHref } from "@/app/lib/content";
import { Aurora } from "./Aurora";

export function Hero({ copy }: { copy: SiteContent }) {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden border-b border-border bg-[#091b15] px-6 pt-20 pb-20 text-center md:pt-28 md:pb-28">
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
            <div className="flex text-amber-400">
              {"★".repeat(5)}
            </div>
            <span className="font-bold text-foreground">{copy.hero.ratingScore}</span>
            <span>{copy.hero.ratingText}</span>
          </div>
        </motion.div>

        {/* 5-Card Hero Bento Grid Row */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5 text-left"
        >
          {/* Card 1: AI Pipeline / Visual Preview */}
          <div className="relative aspect-[4/3] sm:aspect-auto overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-br from-amber-600/30 to-[#0d241c] p-6 flex flex-col justify-between">
            <div className="h-8 w-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-mono text-xs text-amber-300 font-semibold uppercase tracking-wider">
              AI Powered Core
            </p>
          </div>

          {/* Card 2: 100+ Clients (Dark Forest Card) */}
          <div className="rounded-2xl border border-border-subtle bg-[#0c241c] p-6 flex flex-col justify-between">
            <div className="font-mono text-3xl font-extrabold text-foreground">
              {copy.hero.bento.clientsCount}
            </div>
            <p className="mt-4 text-xs font-medium text-foreground-muted leading-snug">
              {copy.hero.bento.clientsLabel}
            </p>
          </div>

          {/* Card 3: 1951+ Total Inquiries (White / Light Highlight Card) */}
          <div className="rounded-2xl border border-white/20 bg-[#f2f7f4] p-6 text-[#091b15] shadow-lg flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#10b981]/20 text-[#10b981] font-bold text-xs">
                ✓
              </span>
              <span className="rounded-full bg-[#10b981]/15 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#059669]">
                {copy.hero.bento.projectsPill}
              </span>
            </div>
            <div className="mt-4">
              <div className="font-mono text-3xl font-extrabold text-[#091b15]">
                {copy.hero.bento.projectsCount}
              </div>
              <p className="mt-1 text-xs font-semibold text-[#4a6358]">
                {copy.hero.bento.projectsLabel}
              </p>
            </div>
          </div>

          {/* Card 4: 6+ Years Experience (Light Mint Card) */}
          <div className="rounded-2xl border border-[#34d399]/40 bg-[#d1fae5] p-6 text-[#064e3b] flex flex-col justify-between">
            <div className="font-mono text-3xl font-extrabold text-[#064e3b]">
              {copy.hero.bento.yearsCount}
            </div>
            <p className="mt-4 text-xs font-semibold text-[#047857] leading-snug">
              {copy.hero.bento.yearsLabel}
            </p>
          </div>

          {/* Card 5: Efficiency Card (Dark Green with Circular Icon) */}
          <div className="rounded-2xl border border-border-subtle bg-[#0c241c] p-6 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-[#10b981]/10 text-accent">
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
      </div>
    </section>
  );
}


