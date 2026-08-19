"use server";

import type { ContactFormInput, ContactFormResult } from "@/app/lib/contact";
import { submitContactForm } from "@/app/lib/contact";
import { recordLead } from "@/app/lib/recordLead";

export async function submitContactFormAction(
  input: ContactFormInput,
): Promise<ContactFormResult> {
  return submitContactForm(input, recordLead);
}
