import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  it("shows a validation error when submitted without a name", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /send/i }));

    expect(await screen.findByText("Name is required")).toBeInTheDocument();
  });

  it("shows a success message after a valid submission", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByPlaceholderText("Name"), "Jordan Lee");
    await user.type(
      screen.getByPlaceholderText("Phone, WhatsApp, or email"),
      "jordan@example.com",
    );
    await user.selectOptions(
      screen.getByRole("combobox"),
      "Restaurant",
    );
    await user.click(screen.getByRole("button", { name: /send/i }));

    expect(
      await screen.findByText("Thanks — I'll get back to you soon."),
    ).toBeInTheDocument();
  });
});
