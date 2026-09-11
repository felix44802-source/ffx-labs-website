import Image from "next/image";
import type { SiteContent } from "@/app/lib/content";
import { businessEmail, businessPhone, whatsappHref } from "@/app/lib/content";
import type { Locale } from "@/app/lib/locale";

export function Footer({ copy, locale }: { copy: SiteContent; locale: Locale }) {
  return (
    <footer className="relative py-20 px-6 text-foreground-muted md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#091216] border border-accent/30 shadow-md">
                <Image src="/logo.png" alt="Fx Labs" width={36} height={36} className="h-8 w-8 object-contain" />
              </div>
              <span className="font-mono text-base font-bold tracking-[0.2em] text-foreground uppercase">
                {copy.brand.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-foreground-muted">
              {copy.footer.tagline}
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              {copy.footer.companyTitle}
            </p>
            <ul className="mt-4 space-y-2.5 text-xs">
              {copy.footer.companyLinks.map((item, i) => (
                <li key={i}>
                  <a href="#about" className="hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              {copy.footer.servicesTitle}
            </p>
            <ul className="mt-4 space-y-2.5 text-xs">
              {copy.footer.servicesLinks.map((item, i) => (
                <li key={i}>
                  <a href="#services" className="hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              {copy.footer.getInTouchTitle}
            </p>
            <p className="mt-4 text-xs">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Direct WhatsApp
              </a>
            </p>
            <p className="mt-2 text-xs">
              <a href={`tel:${businessPhone}`} className="hover:text-accent transition-colors">
                {businessPhone}
              </a>
            </p>
            <p className="mt-2 text-xs">
              <a href={`mailto:${businessEmail}`} className="hover:text-accent transition-colors">
                {businessEmail}
              </a>
            </p>
            <p className="mt-3 text-xs text-foreground-muted">{copy.footer.serviceArea}</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#091216] border border-border-subtle hover:border-accent text-accent transition-colors"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2z" />
                </svg>
              </a>
              <a
                href={`tel:${businessPhone}`}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#091216] border border-border-subtle hover:border-accent text-accent transition-colors"
                title="Call"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M6.5 3h3l1.5 4.5-2.25 1.5a11 11 0 0 0 5.25 5.25l1.5-2.25L20 13.5v3a2 2 0 0 1-2.18 2A17 17 0 0 1 4.5 5.18 2 2 0 0 1 6.5 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={`mailto:${businessEmail}`}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#091216] border border-border-subtle hover:border-accent text-accent transition-colors"
                title="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-8 text-xs font-mono sm:flex-row">
          <div>{copy.footer.copyright}</div>
          <div className="flex gap-6">
            <a href={`/${locale}/terms`} className="hover:text-accent transition-colors">{copy.footer.terms}</a>
            <a href={`/${locale}/privacy`} className="hover:text-accent transition-colors">{copy.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

