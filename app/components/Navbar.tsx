import Image from "next/image";
import type { SiteContent } from "@/app/lib/content";
import type { Locale } from "@/app/lib/locale";

export function Navbar({ copy, locale }: { copy: SiteContent; locale: Locale }) {
  const otherLocale = locale === "en" ? "es" : "en";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-[#060907]/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Brand Logo & Name */}
        <a href={`/${locale}`} className="flex items-center gap-3.5 group" aria-label={copy.brand.name}>
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-card-bg border border-accent/30 shadow-[0_0_20px_-5px_rgba(212,175,55,0.3)] transition-transform group-hover:scale-105">
            <Image src="/logo.png" alt="Fx Labs Logo" width={48} height={48} priority className="h-10 w-10 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-base font-bold tracking-[0.2em] text-foreground uppercase md:text-lg">
              {copy.brand.name}
            </span>
            <span className="text-[10px] font-mono tracking-wider text-accent uppercase hidden sm:block">
              Digital Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent">
            {copy.nav.services}
          </a>
          <a href="#results" className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent">
            {copy.nav.results}
          </a>
          <a href="#process" className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent">
            {copy.nav.process}
          </a>
          <a href="#about" className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent">
            {copy.nav.about}
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent">
            {copy.nav.contact}
          </a>
        </nav>

        {/* Right Actions: Language Switcher & Let's Talk CTA */}
        <div className="flex items-center gap-4">
          <a
            href={`/${otherLocale}`}
            className="rounded-lg border border-border-subtle bg-background-elevated px-3 py-1.5 font-mono text-xs font-semibold text-foreground-muted transition-colors hover:border-accent hover:text-foreground"
            title="Switch Language"
          >
            {copy.language}
          </a>
          <a
            href="#contact"
            className="btn-primary rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider md:px-6 md:py-2.5 md:text-sm"
          >
            {copy.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
