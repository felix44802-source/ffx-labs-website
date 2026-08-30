import { describe, expect, it, vi } from "vitest";
import { createEmailRecordLead, formatLeadEmail } from "./leadEmail";
import type { Lead } from "./contact";

const lead: Lead = {
  name: "Jordan Lee",
  contact: "jordan@example.com",
  businessType: "Restaurant",
  message: "Necesito un bot para reservas.",
};

const receivedAt = new Date("2026-08-22T18:30:00.000Z");

describe("formatLeadEmail", () => {
  it("puts the name and business type in the subject", () => {
    expect(formatLeadEmail(lead, receivedAt).subject).toBe(
      "New lead: Jordan Lee — Restaurant",
    );
  });

  it("includes every field the prospect filled in", () => {
    const { text } = formatLeadEmail(lead, receivedAt);

    expect(text).toContain("Jordan Lee");
    expect(text).toContain("jordan@example.com");
    expect(text).toContain("Restaurant");
    expect(text).toContain("Necesito un bot para reservas.");
    expect(text).toContain("2026-08-22T18:30:00.000Z");
  });

  it("marks an empty optional message rather than leaving a blank gap", () => {
    const { text } = formatLeadEmail({ ...lead, message: "   " }, receivedAt);

    expect(text).toContain("(none)");
  });

  it("sets reply-to when the prospect left an email address", () => {
    expect(formatLeadEmail(lead, receivedAt).replyTo).toBe("jordan@example.com");
  });

  it("omits reply-to when the prospect left a phone number", () => {
    const phoneLead = { ...lead, contact: "+1 619 745 2934" };

    expect(formatLeadEmail(phoneLead, receivedAt).replyTo).toBeUndefined();
  });
});

describe("createEmailRecordLead", () => {
  it("sends the formatted email and returns a lead id", async () => {
    const sendLeadEmail = vi.fn(async () => {});
    const recordLead = createEmailRecordLead(sendLeadEmail, () => receivedAt);

    const result = await recordLead(lead);

    expect(sendLeadEmail).toHaveBeenCalledWith(formatLeadEmail(lead, receivedAt));
    expect(result).toEqual({ id: `lead_${receivedAt.getTime()}` });
  });

  it("propagates a send failure instead of reporting a recorded lead", async () => {
    const sendLeadEmail = vi.fn(async () => {
      throw new Error("Resend is down");
    });
    const recordLead = createEmailRecordLead(sendLeadEmail, () => receivedAt);

    await expect(recordLead(lead)).rejects.toThrow("Resend is down");
  });
});
