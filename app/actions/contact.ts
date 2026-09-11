"use server";

import { headers } from "next/headers";
import type { ContactFormInput, ContactFormResult } from "@/app/lib/contact";
import { submitContactForm } from "@/app/lib/contact";
import { checkRateLimit } from "@/app/lib/rateLimit";
import { recordLead } from "@/app/lib/recordLead";

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 5 submissions / hour / IP

function clientIp(rawHeaders: Headers): string {
  // Vercel exposes the client address via x-forwarded-for; fall back to a
  // per-request bucket when absent (never trust x-real-ip alone).
  return (
    rawHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    rawHeaders.get("x-real-ip") ||
    "unknown"
  );
}

export async function submitContactFormAction(
  input: ContactFormInput,
): Promise<ContactFormResult> {
  const ip = clientIp(await headers());

  if (!checkRateLimit(ip, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS)) {
    // Same shape as a delivery failure: the visitor can retry or use WhatsApp,
    // and the spammer learns nothing actionable.
    return { ok: false, deliveryFailed: true };
  }

  return submitContactForm(input, recordLead);
}
