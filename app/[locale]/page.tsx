import { notFound } from "next/navigation";
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { ServicesBento } from "@/app/components/ServicesBento";
import { BenefitsDashboard } from "@/app/components/BenefitsDashboard";
import { PricingBento } from "@/app/components/PricingBento";
import { IntegrationsOrbital } from "@/app/components/IntegrationsOrbital";
import { About } from "@/app/components/About";
import { CtaBanner } from "@/app/components/CtaBanner";
import { ContactForm } from "@/app/components/ContactForm";
import { Footer } from "@/app/components/Footer";
import { getContent } from "@/app/lib/content";
import { isLocale } from "@/app/lib/locale";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const copy = getContent(locale);

  return (
    <div className="relative flex min-h-screen flex-col bg-[#091b15]">
      <Navbar copy={copy} locale={locale} />
      <main className="flex-1">
        <Hero copy={copy} />
        <ServicesBento copy={copy} />
        <BenefitsDashboard copy={copy} />
        <PricingBento copy={copy} />
        <IntegrationsOrbital copy={copy} />
        <About copy={copy} />
        <CtaBanner copy={copy} />
        <ContactForm copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}
