import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { StatsStrip } from "@/app/components/StatsStrip";
import { ServicesBento } from "@/app/components/ServicesBento";
import { BenefitsDashboard } from "@/app/components/BenefitsDashboard";
import { PricingBento } from "@/app/components/PricingBento";
import { IntegrationsOrbital } from "@/app/components/IntegrationsOrbital";
import { About } from "@/app/components/About";
import { ContactForm } from "@/app/components/ContactForm";
import { Footer } from "@/app/components/Footer";
import { businessPhone, getContent, siteOrigin } from "@/app/lib/content";
import { isLocale } from "@/app/lib/locale";

const PAGE_TITLES = {
  en: "Fx Lab — AI Websites & WhatsApp Bots for Local Businesses | San Diego",
  es: "Fx Lab — Sitios Web con IA y Bots de WhatsApp para Negocios Locales | San Diego",
};

const PAGE_DESCRIPTIONS = {
  en: "AI-powered websites and 24/7 WhatsApp bots for San Diego local businesses. Automate bookings, capture leads, and never miss a customer message again.",
  es: "Sitios web con IA y bots de WhatsApp 24/7 para negocios locales de San Diego. Automatiza citas, capta leads y nunca pierdas un mensaje de cliente.",
};

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const title = PAGE_TITLES[locale];
  const description = PAGE_DESCRIPTIONS[locale];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: "Fx Lab",
      locale: locale === "es" ? "es_US" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
  };
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getContent(locale);
  const description = PAGE_DESCRIPTIONS[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: copy.brand.name,
    description,
    areaServed: {
      "@type": "City",
      name: "San Diego, CA",
    },
    telephone: businessPhone,
    url: `${siteOrigin}/${locale}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${copy.brand.name} Services`,
      itemListElement: copy.bentoServices.slice(0, 4).map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar copy={copy} locale={locale} />
      <main className="flex-1">
        <Hero copy={copy} />
        <ServicesBento copy={copy} />
        <BenefitsDashboard copy={copy} />
        <StatsStrip copy={copy} />
        <PricingBento copy={copy} />
        <IntegrationsOrbital copy={copy} />
        <About copy={copy} />
        <ContactForm copy={copy} />
      </main>
      <Footer copy={copy} locale={locale} />
    </div>
  );
}
