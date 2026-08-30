export interface ContactFormInput {
  name: string;
  contact: string;
  businessType: string;
  message: string;
}

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

export async function submitContactForm(
  input: ContactFormInput,
  recordLead: RecordLead,
): Promise<ContactFormResult> {
  const errors: ContactFormErrors = {};
  if (!input.name.trim()) {
    errors.name = "Name is required";
  }
  if (!input.contact.trim()) {
    errors.contact = "A way to reach you is required";
  }
  if (!input.businessType.trim()) {
    errors.businessType = "Business type is required";
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
