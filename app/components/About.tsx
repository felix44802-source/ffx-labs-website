"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { SiteContent } from "@/app/lib/content";
import { whatsappHref } from "@/app/lib/content";

const TRUST_ICONS = [
  // You talk to me (chat bubble + person)
  "M4 5h12v8H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM17 3h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3",
  // Fast honest answers (check shield)
  "M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3zM9 12l2 2 4-4",
  // Built for your business (sparkle / custom)
  "M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3zM18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15z",
];

export function About({ copy }: { copy: SiteContent }) {
  const whatsappCta = `${whatsappHref}?text=${encodeURIComponent(copy.about.whatsappText)}`;

  return (
    <section id="about" className="relative py-28 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[360px_1fr] lg:items-center lg:gap-16">
          {/* Founder Photo Frame */}
          <motion.div
            initial={{ opacity: 0.5, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border-2 border-accent/40 bg-[#091216] shadow-[0_0_50px_-15px_rgba(6,182,212,0.25)] lg:mx-0"
          >
            <Image
              src="/felix-profile.png"
              alt="Felix, founder of Fx Lab"
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
              sizes="(min-width: 1024px) 360px, 90vw"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05090b]/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-accent/30 bg-[#05090b]/80 px-4 py-2.5 backdrop-blur-md">
              <p className="font-mono text-xs font-bold text-foreground">Felix</p>
              <p className="font-mono text-[10px] text-accent uppercase tracking-wider">{copy.about.role}</p>
            </div>
          </motion.div>

          {/* Bio & Philosophy */}
          <motion.div
            initial={{ opacity: 0.5, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="text-halo relative z-10"
          >
            <p className="font-mono text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              {copy.about.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
              {copy.about.heading}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground-muted md:text-lg">
              {copy.about.bio}
            </p>

            <div className="mt-8 space-y-5">
              {copy.about.trustPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 border border-accent/30 text-accent">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d={TRUST_ICONS[idx]} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground-muted">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappCta}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mint mt-8 inline-block rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wider"
            >
              {copy.about.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


