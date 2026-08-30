import { describe, expect, it, vi } from "vitest";
import { submitContactForm } from "./contact";

describe("submitContactForm", () => {
  it("succeeds and records the lead when all required fields are filled", async () => {
    const recordLead = vi.fn(async () => ({ id: "lead_1" }));

    const result = await submitContactForm(
      {
        name: "Jordan Lee",
        contact: "jordan@example.com",
        businessType: "Restaurant",
        message: "",
      },
      recordLead,
    );

    expect(result).toEqual({ ok: true, leadId: "lead_1" });
    expect(recordLead).toHaveBeenCalledWith({
      name: "Jordan Lee",
      contact: "jordan@example.com",
      businessType: "Restaurant",
      message: "",
    });
  });

  it("rejects a missing name without recording a lead", async () => {
    const recordLead = vi.fn(async () => ({ id: "lead_1" }));

    const result = await submitContactForm(
      {
        name: "",
        contact: "jordan@example.com",
        businessType: "Restaurant",
        message: "",
      },
      recordLead,
    );

    expect(result).toEqual({
      ok: false,
      errors: { name: "Name is required" },
    });
    expect(recordLead).not.toHaveBeenCalled();
  });

  it("rejects a missing contact method without recording a lead", async () => {
    const recordLead = vi.fn(async () => ({ id: "lead_1" }));

    const result = await submitContactForm(
      {
        name: "Jordan Lee",
        contact: "",
        businessType: "Restaurant",
        message: "",
      },
      recordLead,
    );

    expect(result).toEqual({
      ok: false,
      errors: { contact: "A way to reach you is required" },
    });
    expect(recordLead).not.toHaveBeenCalled();
  });

  it("rejects a missing business type without recording a lead", async () => {
    const recordLead = vi.fn(async () => ({ id: "lead_1" }));

    const result = await submitContactForm(
      {
        name: "Jordan Lee",
        contact: "jordan@example.com",
        businessType: "",
        message: "",
      },
      recordLead,
    );

    expect(result).toEqual({
      ok: false,
      errors: { businessType: "Business type is required" },
    });
    expect(recordLead).not.toHaveBeenCalled();
  });

  it("reports every missing required field at once", async () => {
    const recordLead = vi.fn(async () => ({ id: "lead_1" }));

    const result = await submitContactForm(
      { name: "", contact: "", businessType: "", message: "" },
      recordLead,
    );

    expect(result).toEqual({
      ok: false,
      errors: {
        name: "Name is required",
        contact: "A way to reach you is required",
        businessType: "Business type is required",
      },
    });
    expect(recordLead).not.toHaveBeenCalled();
  });
  it("reports a delivery failure instead of a false success when recording throws", async () => {
    const recordLead = vi.fn(async () => {
      throw new Error("Resend is down");
    });

    const result = await submitContactForm(
      {
        name: "Jordan Lee",
        contact: "jordan@example.com",
        businessType: "Restaurant",
        message: "",
      },
      recordLead,
    );

    expect(result).toEqual({ ok: false, deliveryFailed: true });
    expect(recordLead).toHaveBeenCalled();
  });
});
