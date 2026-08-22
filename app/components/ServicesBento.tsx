"use client";

import { motion } from "motion/react";
import type { SiteContent } from "@/app/lib/content";
import { whatsappHref } from "@/app/lib/content";

const serviceIcons = [
  // Website / Production
  <svg key="1" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-foreground">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  // Custom Bots / Custom Manufacturing
  <svg key="2" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-foreground">
    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="1.8" />
  </svg>,
  // Quality / Lead Gen
  <svg key="3" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-foreground">
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>,
  // Technology & Innovation
  <svg key="4" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-foreground">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" />
  </svg>,
  // Sync / Logistics
  <svg key="5" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-foreground">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 10h18M8 15h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  // Consulting
  <svg key="6" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-foreground">
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.8" />
    <path d="M18.5 8.5l-5 5-3-3L6 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
];

export function ServicesBento({ copy }: { copy: SiteContent }) {
  return (
    <section id="services" className="relative border-b border-border bg-[#091b15] py-28 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-foreground md:text-5xl"
          >
            {copy.servicesHeading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl mx-auto text-sm text-foreground-muted"
          >
            {copy.servicesSubheading}
          </motion.p>
        </div>

        {/* 6 Bento Grid Cards with Staggered Scroll Animation */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.bentoServices.map((service, index) => (
            <motion.a
              key={service.id}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-[#0d241c] p-8 transition-all hover:border-accent hover:shadow-[0_10px_35px_-10px_rgba(16,185,129,0.25)]"
            >
              <div>
                {/* Icon & Arrow */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#091b15] border border-border-subtle text-accent group-hover:border-accent/40 transition-colors">
                    {serviceIcons[index % serviceIcons.length]}
                  </div>
                  {/* Top-Right Arrow Icon from Video */}
                  <span className="text-foreground-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  {service.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
