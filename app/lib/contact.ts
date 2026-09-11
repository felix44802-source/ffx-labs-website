export interface ContactFormInput {
  name: string;
  contact: string;
  businessType: string;
  message: string;
  /**
   * Honeypot field hidden from humans. Bots that fill every field will set
   * this; genuine visitors never will. Non-empty === automated spam.
   */
  website?: string;
}

/** Name of the invisible honeypot field. Shared with the form. */
export const HONEYPOT_FIELD = "website";

export interface Lead {
  name: string;
  contact: string;
  businessType: string;
  message: string;
}

export type RecordLead = (lead: Lead) => Promise<{ id: string }>;

export type ContactFormErrors = Partial<Record<keyof ContactFormInput, string>>;

export type ContactFormResult =
  | { ok: true; leadId: string }
  | { ok: false; errors: ContactFormErrors }
  | { ok: false; deliveryFailed: true };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9]{7,15}$/;

function isValidContact(raw: string): boolean {
  const value = raw.trim();
  if (EMAIL_PATTERN.test(value)) {
    return true;
  }
  const digitsOnly = value.replace(/[\s().-]/g, "");
  return PHONE_PATTERN.test(digitsOnly);
}

export async function submitContactForm(
  input: ContactFormInput,
  recordLead: RecordLead,
): Promise<ContactFormResult> {
  // Honeypot first: a filled hidden field is automated spam. Pretend success
  // so the bot learns nothing, and never spend an email on it.
  if (input.website?.trim()) {
    return { ok: true, leadId: "honeypot" };
  }

  const errors: ContactFormErrors = {};
  if (!input.name.trim()) {
    errors.name = "Name is required";
  }
  if (!input.contact.trim()) {
    errors.contact = "A way to reach you is required";
  } else if (!isValidContact(input.contact)) {
    errors.contact = "Enter a valid phone number or email";
  }
  if (!input.businessType.trim()) {
    errors.businessType = "Business type is required";
  }
  if (!input.message.trim()) {
    errors.message = "A message is required";
  }
  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  // A Lead is only "submitted" once it has actually been delivered somewhere.
  // Recording can fail on the network, so never report success on a throw.
  try {
    const { id } = await recordLead({
      name: input.name,
      contact: input.contact,
      businessType: input.businessType,
      message: input.message,
    });
    return { ok: true, leadId: id };
  } catch {
    return { ok: false, deliveryFailed: true };
  }
}
