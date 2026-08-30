import type { Lead, RecordLead } from "./contact";

export interface LeadEmail {
  subject: string;
  text: string;
  replyTo?: string;
}

export type SendLeadEmail = (email: LeadEmail) => Promise<void>;

/**
 * The Lead as Felix reads it in his inbox. Plain text on purpose — this is a
 * notification to one person, not a marketing email, and plain text is what
 * survives every client and every forward to WhatsApp.
 */
export function formatLeadEmail(lead: Lead, receivedAt: Date): LeadEmail {
  const message = lead.message.trim();
  const email: LeadEmail = {
    subject: `New lead: ${lead.name} — ${lead.businessType}`,
    text: [
      `Name:          ${lead.name}`,
      `Contact:       ${lead.contact}`,
      `Business type: ${lead.businessType}`,
      `Received:      ${receivedAt.toISOString()}`,
      "",
      "Message:",
      message || "(none)",
    ].join("\n"),
  };
  // Only an email address can be replied to; a phone number would bounce.
  if (looksLikeEmail(lead.contact)) {
    email.replyTo = lead.contact.trim();
  }
  return email;
}

function looksLikeEmail(contact: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.trim());
}

/**
 * Builds the `recordLead` boundary out of an injected sender, so the delivery
 * mechanism stays swappable and the wiring stays testable without a network.
 */
export function createEmailRecordLead(
  sendLeadEmail: SendLeadEmail,
  now: () => Date = () => new Date(),
): RecordLead {
  return async (lead: Lead) => {
    const receivedAt = now();
    await sendLeadEmail(formatLeadEmail(lead, receivedAt));
    return { id: `lead_${receivedAt.getTime()}` };
  };
}
