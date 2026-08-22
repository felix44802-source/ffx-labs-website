"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { SiteContent } from "@/app/lib/content";

export function About({ copy }: { copy: SiteContent }) {
  return (
    <section id="about" className="relative border-b border-border bg-[#091b15] py-28 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[360px_1fr] lg:items-center lg:gap-16">
          {/* Founder Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border-2 border-accent/40 bg-[#0d241c] shadow-[0_0_50px_-15px_rgba(16,185,129,0.25)] lg:mx-0"
          >
            <Image
              src="/felix-profile.png"
              alt="Felix, founder of Fx Labs"
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
              sizes="(min-width: 1024px) 360px, 90vw"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#091b15]/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-accent/30 bg-[#091b15]/80 px-4 py-2.5 backdrop-blur-md">
              <p className="font-mono text-xs font-bold text-foreground">Felix</p>
              <p className="font-mono text-[10px] text-accent uppercase tracking-wider">{copy.about.role}</p>
            </div>
          </motion.div>

          {/* Bio & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              Behind the Systems
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
              {copy.about.heading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground-muted md:text-lg">
              {copy.about.bio}
            </p>

            <div className="mt-8 flex items-center gap-6 border-t border-border-subtle pt-6">
              <div>
                <p className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">Direct Access</p>
                <p className="text-xs text-foreground-muted">Work directly with the builder, zero account manager middleman.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


