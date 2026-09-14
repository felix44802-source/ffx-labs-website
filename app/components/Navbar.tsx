"use client";

import { useState } from "react";
import Image from "next/image";
import type { SiteContent } from "@/app/lib/content";
import type { Locale } from "@/app/lib/locale";

const NAV_LINKS = [
  { href: "#about", key: "about" },
  { href: "#services", key: "services" },
  { href: "#benefits", key: "benefits" },
  { href: "#pricing", key: "pricing" },
  { href: "#contact", key: "contact" },
] as const;

export function Navbar({ copy, locale }: { copy: SiteContent; locale: Locale }) {
  const otherLocale = locale === "en" ? "es" : "en";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Brand Logo & Name */}
        <a href={`/${locale}`} className="flex items-center gap-3 group" aria-label={copy.brand.name}>
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-card-bg border border-accent/40 shadow-[0_0_15px_-4px_rgba(20,184,166,0.3)] transition-transform group-hover:scale-105">
            <Image src="/logo.png" alt="Fx Lab Logo" width={40} height={40} priority className="h-8 w-8 object-contain" />
          </div>
          <span className="font-mono text-base font-bold tracking-[0.08em] text-foreground md:text-lg">
            {copy.brand.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
            >
              {copy.nav[link.key]}
            </a>
          ))}
        </nav>

        {/* Right Actions: Language Switcher, Get Started CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={`/${otherLocale}`}
            className="hidden rounded-lg border border-border-subtle bg-card-bg px-3 py-1.5 text-xs font-semibold text-foreground-muted transition-colors hover:border-accent hover:text-foreground sm:inline-block"
            title={copy.nav.switchLanguageTitle}
          >
            {copy.language}
          </a>
          <a
            href="#contact"
            className="btn-mint hidden rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider md:inline-block md:px-6 md:py-2.5 md:text-sm"
          >
            {copy.nav.cta}
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? copy.nav.close : copy.nav.menu}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-card-bg text-foreground transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-border/80 bg-background/95 px-6 py-4 backdrop-blur-md lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground-muted transition-colors hover:bg-card-bg hover:text-accent"
                >
                  {copy.nav[link.key]}
                </a>
              </li>
            ))}
            <li className="border-t border-border-subtle pt-3">
              <a
                href={`/${otherLocale}`}
                className="block rounded-lg px-3 py-3 text-base font-medium text-foreground-muted transition-colors hover:bg-card-bg hover:text-accent"
              >
                {copy.nav.switchLanguageTitle}
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-mint block rounded-full px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider"
              >
                {copy.nav.cta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
