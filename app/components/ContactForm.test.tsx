import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "./ContactForm";
import type { ContactFormInput } from "@/app/lib/contact";

// Swap only the delivery boundary. Validation and orchestration stay real, so
// these tests still exercise the code path the browser actually runs.
const recordLead = vi.hoisted(() => vi.fn(async () => ({ id: "lead_1" })));

vi.mock("@/app/actions/contact", async () => {
  const { submitContactForm } =
    await vi.importActual<typeof import("@/app/lib/contact")>("@/app/lib/contact");
  return {
    submitContactFormAction: (input: ContactFormInput) =>
      submitContactForm(input, recordLead),
  };
});

async function fillInValidLead(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByPlaceholderText("Name"), "Jordan Lee");
  await user.type(
    screen.getByPlaceholderText("Phone, WhatsApp, or email"),
    "jordan@example.com",
  );
  await user.selectOptions(screen.getByRole("combobox"), "Restaurant");
  await user.click(screen.getByRole("button", { name: /send/i }));
}

describe("ContactForm", () => {
  beforeEach(() => {
    recordLead.mockReset();
    recordLead.mockResolvedValue({ id: "lead_1" });
  });

  it("shows a validation error when submitted without a name", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /send/i }));

    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(recordLead).not.toHaveBeenCalled();
  });

  it("shows a success message after a valid submission", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillInValidLead(user);

    expect(
      await screen.findByText("Thanks — I'll get back to you soon."),
    ).toBeInTheDocument();
  });

  it("keeps the form up and points to WhatsApp when delivery fails", async () => {
    recordLead.mockRejectedValue(new Error("Resend is down"));
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillInValidLead(user);

    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent(/didn't go through/i);
    expect(alert.querySelector("a")).toHaveAttribute(
      "href",
      expect.stringContaining("wa.me"),
    );
    // The prospect must not be told it worked, and must be able to retry.
    expect(
      screen.queryByText("Thanks — I'll get back to you soon."),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });
});
