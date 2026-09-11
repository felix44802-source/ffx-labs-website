"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import type { SiteContent } from "@/app/lib/content";
import { whatsappHref } from "@/app/lib/content";

interface IntegrationItem {
  id: string;
  name: string;
  role: string;
  badge: string;
  color: string;
  glowColor: string;
  bgTint: string;
  borderTint: string;
  icon: (color: string) => React.ReactNode;
}

const integrations: IntegrationItem[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    role: "24/7 AI Sales & Lead Capture",
    badge: "Official API",
    color: "#25D366",
    glowColor: "rgba(37, 211, 102, 0.6)",
    bgTint: "rgba(37, 211, 102, 0.12)",
    borderTint: "rgba(37, 211, 102, 0.35)",
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" style={{ color }}>
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2zm.01 16.67c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.83-3.05-.2-.31c-.82-1.3-1.26-2.82-1.26-4.39 0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c.01 4.54-3.68 8.25-8.21 8.25zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.13.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.2-.59.2-1.09.14-1.19-.06-.1-.22-.16-.47-.28z" />
      </svg>
    ),
  },
  {
    id: "openai",
    name: "OpenAI GPT-4o",
    role: "Intelligent Reasoning Core",
    badge: "LLM Brain",
    color: "#00F0FF",
    glowColor: "rgba(0, 240, 255, 0.65)",
    bgTint: "rgba(0, 240, 255, 0.14)",
    borderTint: "rgba(0, 240, 255, 0.4)",
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" style={{ color: "#00F0FF" }}>
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
        <path d="m12 6 4 4-4 4-4-4 4-4z" />
        <path d="M12 14v4" />
        <path d="M10 18h4" />
      </svg>
    ),
  },
  {
    id: "stripe",
    name: "Stripe Payments",
    role: "Instant Checkout & Subscriptions",
    badge: "Auto-Invoicing",
    color: "#635BFF",
    glowColor: "rgba(99, 91, 255, 0.6)",
    bgTint: "rgba(99, 91, 255, 0.12)",
    borderTint: "rgba(99, 91, 255, 0.35)",
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" style={{ color }}>
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.396.5 6.404.5 2.5 3.655 2.5 8.769c0 5.226 4.673 6.947 8.016 8.163 2.553.945 3.39 1.583 3.39 2.537 0 .976-.845 1.49-2.28 1.49-2.072 0-5.068-1.077-7.054-2.23l-.934 5.568C5.467 25.132 8.58 25.5 11.59 25.5c6.264 0 10.41-3.084 10.41-8.397 0-4.99-4.32-6.724-8.024-7.953z" />
      </svg>
    ),
  },
  {
    id: "calendar",
    name: "Google Calendar",
    role: "Automatic Meeting Booking",
    badge: "Auto-Sync",
    color: "#4285F4",
    glowColor: "rgba(66, 133, 244, 0.65)",
    bgTint: "rgba(66, 133, 244, 0.14)",
    borderTint: "rgba(66, 133, 244, 0.4)",
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        {/* Blue: Top and Left */}
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3V8h13V5a2 2 0 0 0-2-2z" fill="#4285F4" />
        {/* Yellow: Right */}
        <path d="M21 8h-5v8h5V8z" fill="#FBBC04" />
        {/* Green: Bottom */}
        <path d="M8 16h8v5H5a2 2 0 0 1-2-2v-3h5z" fill="#34A853" />
        {/* Red: Bottom-Right fold */}
        <path d="M21 16h-5v5h3a2 2 0 0 0 2-2v-3z" fill="#EA4335" />
        {/* Center White Box */}
        <rect x="8" y="8" width="8" height="8" fill="#FFFFFF" rx="0.5" />
        {/* 31 Number */}
        <text
          x="12"
          y="14.3"
          textAnchor="middle"
          fill="#4285F4"
          fontSize="6.2"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          31
        </text>
      </svg>
    ),
  },
  {
    id: "meta",
    name: "Meta & Facebook Ads",
    role: "Lead Generation Pipeline",
    badge: "Traffic Flow",
    color: "#1877F2",
    glowColor: "rgba(24, 119, 242, 0.6)",
    bgTint: "rgba(24, 119, 242, 0.12)",
    borderTint: "rgba(24, 119, 242, 0.35)",
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" style={{ color }}>
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    id: "crm",
    name: "CRM & HubSpot",
    role: "Centralized Client Database",
    badge: "Instant Sync",
    color: "#FF7A59",
    glowColor: "rgba(255, 122, 89, 0.6)",
    bgTint: "rgba(255, 122, 89, 0.12)",
    borderTint: "rgba(255, 122, 89, 0.35)",
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" style={{ color }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function IntegrationsOrbital({ copy }: { copy: SiteContent }) {
  const [activeId, setActiveId] = useState<string>("whatsapp");

  const activeItem = integrations.find((item) => item.id === activeId) ?? integrations[0];

  // Center coordinates in viewBox (400 x 400)
  const cx = 200;
  const cy = 200;
  const radius = 135;

  return (
    <section className="relative py-28 px-6 text-foreground md:px-12 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(6,182,212,0.06),transparent_80%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Text & CTA */}
          <motion.div
            initial={{ opacity: 0.5, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="text-halo relative z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-[#091216] px-3.5 py-1.5 font-mono text-xs font-bold text-accent">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              NEURAL DATA FLOW
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              {copy.integrations.heading}
            </h2>
            <p className="mt-6 text-base text-foreground-muted leading-relaxed">
              {copy.integrations.subheading}
            </p>

            {/* Active Integration Highlight Card */}
            <div
              className="mt-8 rounded-2xl border bg-[#091216]/95 p-5 backdrop-blur-md transition-all duration-300"
              style={{
                borderColor: activeItem.borderTint,
                boxShadow: `0 8px 30px -10px ${activeItem.glowColor}`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border"
                    style={{
                      backgroundColor: activeItem.bgTint,
                      borderColor: activeItem.borderTint,
                    }}
                  >
                    {activeItem.icon(activeItem.color)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground text-base">{activeItem.name}</span>
                      <span
                        className="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold"
                        style={{ backgroundColor: activeItem.bgTint, color: activeItem.color }}
                      >
                        {activeItem.badge}
                      </span>
                    </div>
                    <p className="text-xs text-foreground-muted mt-0.5 font-medium">{activeItem.role}</p>
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold" style={{ color: activeItem.color }}>
                  ● Active
                </span>
              </div>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mint mt-8 inline-block rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-wider"
            >
              {copy.integrations.cta}
            </a>
          </motion.div>

          {/* Right: Interactive Neural Hub Diagram */}
          <motion.div
            initial={{ opacity: 0.5, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto flex w-full max-w-[480px] flex-col items-center justify-center rounded-3xl border border-border-subtle bg-gradient-to-b from-[#091216] to-[#04080a] p-6 sm:p-10 shadow-[0_20px_60px_-15px_rgba(6,182,212,0.15)]"
          >
            {/* SVG Canvas with Animated Data Streams */}
            <div className="relative aspect-square w-full max-w-[380px]">
              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
                <defs>
                  {/* Glowing Radial Gradients for Data Rays */}
                  {integrations.map((item) => (
                    <linearGradient
                      key={`grad-${item.id}`}
                      id={`ray-grad-${item.id}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor={item.color} stopOpacity="0.95" />
                      <stop offset="100%" stopColor={item.color} stopOpacity="0.15" />
                    </linearGradient>
                  ))}

                  {/* Filter for Laser Glow */}
                  <filter id="laser-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Outer Orbit Guide Rings */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={radius}
                  fill="none"
                  stroke="#13333f"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  className="opacity-60"
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r={radius + 35}
                  fill="none"
                  stroke="#0e2730"
                  strokeWidth="1"
                  className="opacity-40"
                />

                {/* Animated Connecting Data Beams */}
                {integrations.map((item, idx) => {
                  const angle = (idx / integrations.length) * 2 * Math.PI - Math.PI / 2;
                  const x = cx + Math.cos(angle) * radius;
                  const y = cy + Math.sin(angle) * radius;
                  const isActive = activeId === item.id;

                  return (
                    <g key={`beam-${item.id}`}>
                      {/* Background Base Line */}
                      <line
                        x1={x}
                        y1={y}
                        x2={cx}
                        y2={cy}
                        stroke={item.color}
                        strokeWidth={isActive ? "2.5" : "1"}
                        strokeOpacity={isActive ? "0.85" : "0.22"}
                        className="transition-all duration-300"
                      />

                      {/* Traveling Laser Pulse Stream */}
                      <line
                        x1={x}
                        y1={y}
                        x2={cx}
                        y2={cy}
                        stroke={`url(#ray-grad-${item.id})`}
                        strokeWidth={isActive ? "4" : "2"}
                        strokeDasharray="14 45"
                        filter={isActive ? "url(#laser-glow)" : undefined}
                        className="animate-[dash_2.5s_linear_infinite]"
                        style={{
                          animationDuration: isActive ? "1.2s" : `${2.2 + idx * 0.3}s`,
                        }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Central Core: Fx Labs Hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                {/* Heartbeat Radar Ripple */}
                <div
                  className="pointer-events-none absolute -inset-4 rounded-full border animate-ping opacity-40"
                  style={{ borderColor: activeItem.color }}
                />
                <div
                  className="pointer-events-none absolute -inset-2 rounded-full blur-md opacity-30 transition-colors duration-500"
                  style={{ backgroundColor: activeItem.color }}
                />

                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 bg-[#05090b] cursor-pointer transition-all duration-500"
                  style={{
                    borderColor: activeItem.color,
                    boxShadow: `0 0 35px -5px ${activeItem.glowColor}`,
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="Fx Labs Hub"
                    width={48}
                    height={48}
                    className="h-11 w-11 object-contain"
                  />
                </motion.div>
              </div>

              {/* Orbiting Interactive App Nodes (Always Full Brand Colors) */}
              {integrations.map((item, idx) => {
                const angle = (idx / integrations.length) * 2 * Math.PI - Math.PI / 2;
                // Percentage placement relative to the 100% container
                const left = 50 + (Math.cos(angle) * (radius / 200)) * 50;
                const top = 50 + (Math.sin(angle) * (radius / 200)) * 50;
                const isActive = activeId === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      backgroundColor: isActive ? item.bgTint : "rgba(9, 18, 22, 0.95)",
                      borderColor: isActive ? item.color : item.borderTint,
                      boxShadow: isActive
                        ? `0 0 30px ${item.glowColor}`
                        : `0 0 14px ${item.bgTint}`,
                    }}
                    className={`absolute z-30 flex h-13 w-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border transition-all duration-300 hover:scale-125 cursor-pointer ${
                      isActive ? "scale-120 ring-2" : "hover:border-white/40 opacity-90 hover:opacity-100"
                    }`}
                  >
                    {item.icon(item.color)}
                  </button>
                );
              })}
            </div>

            {/* Micro Helper Note */}
            <p className="mt-4 text-center font-mono text-[11px] text-foreground-muted">
              Pasa el cursor sobre cada integración para ver el flujo de datos
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
