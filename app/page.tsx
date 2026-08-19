import { About } from "@/app/components/About";
import { ContactForm } from "@/app/components/ContactForm";
import { Hero } from "@/app/components/Hero";
import { Results } from "@/app/components/Results";
import { Services } from "@/app/components/Services";
import { WhatsAppButton } from "@/app/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Services />
      <Results />
      <About />
      <ContactForm />
      <WhatsAppButton className="fixed bottom-6 right-6 z-40" />
    </div>
  );
}
