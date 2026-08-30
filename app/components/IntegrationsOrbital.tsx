"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { SiteContent } from "@/app/lib/content";
import { whatsappHref } from "@/app/lib/content";

const integrationsList = [
  { name: "WhatsApp", color: "#25D366", label: "WA" },
  { name: "OpenAI", color: "#10a37f", label: "AI" },
  { name: "Stripe", color: "#635BFF", label: "Pay" },
  { name: "Calendar", color: "#4285F4", label: "Cal" },
  { name: "Meta", color: "#0081FB", label: "Ads" },
  { name: "CRM", color: "#FF7A59", label: "CRM" },
];

export function IntegrationsOrbital({ copy }: { copy: SiteContent }) {
  return (
    <section className="relative border-b border-border bg-background py-28 px-6 text-foreground md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Text & CTA */}
          <motion.div
            initial={{ opacity: 0.5, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              {copy.integrations.heading}
            </h2>
            <p className="mt-6 text-base text-foreground-muted leading-relaxed">
              {copy.integrations.subheading}
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mint mt-8 inline-block rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-wider"
            >
              {copy.integrations.cta}
            </a>
          </motion.div>

          {/* Right: Orbital Diagram Card (from video) */}
          <motion.div
            initial={{ opacity: 0.5, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex items-center justify-center rounded-3xl border border-card-border bg-gradient-to-br from-card-bg to-background-elevated p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] min-h-[380px]"
          >
            {/* Orbital Rings Background */}
            <div className="absolute h-64 w-64 rounded-full border border-dashed border-border-subtle opacity-70" />
            <div className="absolute h-80 w-80 rounded-full border border-border-subtle opacity-50" />

            {/* Center Logo Badge */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-background border-2 border-accent shadow-xl"
            >
              <Image src="/logo.png" alt="Fx Labs" width={36} height={36} className="h-9 w-9 object-contain" />
            </motion.div>

            {/* Orbiting Tool Badges */}
            {integrationsList.map((app, i) => {
              const angle = (i / integrationsList.length) * 2 * Math.PI;
              const radius = 115;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0.5, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  style={{ x, y }}
                  className="absolute flex h-11 w-11 items-center justify-center rounded-xl bg-card-bg border border-card-border font-mono text-[10px] font-bold text-foreground shadow-md hover:scale-110 transition-transform"
                >
                  <span style={{ color: app.color }}>{app.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
