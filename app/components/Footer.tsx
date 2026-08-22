import Image from "next/image";
import type { SiteContent } from "@/app/lib/content";
import { whatsappHref } from "@/app/lib/content";

export function Footer({ copy }: { copy: SiteContent }) {
  return (
    <footer className="relative border-t border-border bg-[#06140f] py-20 px-6 text-foreground-muted md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d241c] border border-accent/30 shadow-md">
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
            <div className="mt-4 flex items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d241c] border border-border-subtle hover:border-accent text-accent transition-colors"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-8 text-xs font-mono sm:flex-row">
          <div>{copy.footer.copyright}</div>
          <div className="flex gap-6">
            <span className="hover:text-accent cursor-pointer">{copy.footer.terms}</span>
            <span className="hover:text-accent cursor-pointer">{copy.footer.privacy}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

