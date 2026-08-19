import { whatsappHref } from "@/app/lib/content";

export function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={whatsappHref}
      className={`btn-gradient rounded-full px-5 py-3 font-semibold text-accent-foreground ${className}`}
    >
      WhatsApp
    </a>
  );
}
