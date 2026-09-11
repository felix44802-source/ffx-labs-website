import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { getContent } from "@/app/lib/content";
import { isLocale } from "@/app/lib/locale";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const copy = getContent(locale);
  return {
    title: copy.legal.terms.title,
    alternates: { canonical: `/${locale}/terms` },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getContent(locale);
  const { terms } = copy.legal;

  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <Navbar copy={copy} locale={locale} />
      <main className="flex-1 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold text-foreground md:text-4xl">{terms.title}</h1>
          <p className="mt-3 font-mono text-xs text-foreground-muted">{terms.updated}</p>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-foreground-muted">
            {terms.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </main>
      <Footer copy={copy} locale={locale} />
    </div>
  );
}
