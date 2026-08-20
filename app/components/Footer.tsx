import Image from "next/image";
import type { SiteContent } from "@/app/lib/content";
import { whatsappHref } from "@/app/lib/content";

export function Footer({ copy }: { copy: SiteContent }) {
  return (
    <footer className="relative border-t border-border bg-[#040605] py-16 px-6 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-card-bg border border-accent/30">
            <Image src="/logo.png" alt="Fx Labs" width={36} height={36} className="h-8 w-8 object-contain" />
          </div>
          <div>
            <span className="font-mono text-sm font-bold tracking-[0.2em] text-foreground uppercase">
              {copy.brand.name}
            </span>
            <p className="text-xs text-foreground-muted">
              {copy.brand.tagline}
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-foreground-muted">
          <a href="#services" className="hover:text-accent transition-colors">{copy.nav.services}</a>
          <a href="#results" className="hover:text-accent transition-colors">{copy.nav.results}</a>
          <a href="#process" className="hover:text-accent transition-colors">{copy.nav.process}</a>
          <a href="#about" className="hover:text-accent transition-colors">{copy.nav.about}</a>
          <a href="#contact" className="hover:text-accent transition-colors">{copy.nav.contact}</a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            WhatsApp
          </a>
        </div>

        {/* Copyright */}
        <div className="font-mono text-xs text-foreground-muted/60">
          © {new Date().getFullYear()} Fx Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
