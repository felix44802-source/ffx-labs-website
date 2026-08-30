import { Resend } from "resend";
import type { Lead, RecordLead } from "./contact";
import { createEmailRecordLead, type SendLeadEmail } from "./leadEmail";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set — the lead email cannot be sent`);
  }
  return value;
}

const sendLeadEmail: SendLeadEmail = async (email) => {
  const resend = new Resend(requireEnv("RESEND_API_KEY"));
  const { error } = await resend.emails.send({
    from: requireEnv("LEAD_EMAIL_FROM"),
    to: [requireEnv("LEAD_EMAIL_TO")],
    subject: email.subject,
    text: email.text,
    ...(email.replyTo ? { replyTo: email.replyTo } : {}),
  });
  // Resend reports rejections in the body, not by throwing.
  if (error) {
    throw new Error(`Resend rejected the lead email: ${error.message}`);
  }
};

const deliver = createEmailRecordLead(sendLeadEmail);

export const recordLead: RecordLead = async (lead: Lead) => {
  try {
    return await deliver(lead);
  } catch (error) {
    // Last resort. Delivery already failed, so this log line is the only
    // remaining copy of the Lead — keep the fields, not just the error.
    console.error("[Lead] delivery failed", { lead, error });
    throw error;
  }
};
