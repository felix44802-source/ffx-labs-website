import { whatsappHref } from "@/app/lib/content";

export function WhatsAppButton({ label = "WhatsApp", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-mint rounded-full px-5 py-3 font-semibold text-accent-foreground ${className}`}
    >
      {label}
    </a>
  );
}
