import { notFound } from "next/navigation";
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { Stats } from "@/app/components/Stats";
import { Services } from "@/app/components/Services";
import { Results } from "@/app/components/Results";
import { Process } from "@/app/components/Process";
import { About } from "@/app/components/About";
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
    <div className="relative flex min-h-screen flex-col bg-[#060907]">
      <Navbar copy={copy} locale={locale} />
      <main className="flex-1">
        <Hero copy={copy} />
        <Stats copy={copy} />
        <Services copy={copy} />
        <Results copy={copy} />
        <Process copy={copy} />
        <About copy={copy} />
        <ContactForm copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}