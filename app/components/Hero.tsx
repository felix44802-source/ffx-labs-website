import { brand, spanishWelcome, whatsappHref } from "@/app/lib/content";
import { Aurora } from "./Aurora";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden border-b border-border px-6 text-center">
      <Aurora />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
          {brand.name}
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] text-foreground md:text-7xl">
          A digital presence <span className="text-gradient">that answers</span>{" "}
          for itself.
        </h1>
        <p className="max-w-xl text-foreground-muted">
          AI-built websites and WhatsApp bots for businesses that don&apos;t
          have time to manage a digital presence.
        </p>
        <a
          href={whatsappHref}
          className="btn-gradient mt-4 rounded-full px-7 py-3 font-semibold text-accent-foreground"
        >
          Message me on WhatsApp
        </a>
        <p className="mt-2 text-xs text-foreground-muted">{spanishWelcome}</p>
      </div>
    </section>
  );
}
