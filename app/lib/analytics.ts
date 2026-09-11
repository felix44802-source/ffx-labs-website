import { track } from "@vercel/analytics/react";

/**
 * Thin wrapper around Vercel Web Analytics event tracking. Centralized so the
 * event names stay consistent and the site can swap the analytics backend
 * without touching every call site.
 */

/** A visitor clicked a WhatsApp link. `context` describes which CTA it was. */
export function trackWhatsAppClick(context: string): void {
  track("WhatsApp Click", { context });
}

/** The contact form recorded a successful lead delivery. */
export function trackLeadSubmitted(): void {
  track("Lead Submitted");
}
