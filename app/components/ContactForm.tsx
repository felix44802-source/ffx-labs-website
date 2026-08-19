"use client";

import { useActionState } from "react";
import { submitContactFormAction } from "@/app/actions/contact";
import type { ContactFormResult } from "@/app/lib/contact";
import { spanishWelcome } from "@/app/lib/content";

type FormState = ContactFormResult | { ok: null };

const initialState: FormState = { ok: null };

async function action(_prevState: FormState, formData: FormData) {
  return submitContactFormAction({
    name: String(formData.get("name") ?? ""),
    contact: String(formData.get("contact") ?? ""),
    businessType: String(formData.get("businessType") ?? ""),
    message: String(formData.get("message") ?? ""),
  });
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(action, initialState);
  const errors = state.ok === false ? state.errors : undefined;

  return (
    <section className="px-6 py-24 text-center">
      <h2 className="mb-2 text-3xl font-extrabold text-foreground">Contact</h2>
      <p className="mb-8 text-sm text-foreground-muted">{spanishWelcome}</p>

      {state.ok === true ? (
        <p role="status" className="text-foreground">
          Thanks — I&apos;ll get back to you soon.
        </p>
      ) : (
        <form
          action={formAction}
          className="mx-auto flex max-w-md flex-col gap-4 text-left"
        >
          <div>
            <input
              name="name"
              placeholder="Name"
              aria-describedby={errors?.name ? "name-error" : undefined}
              className="w-full rounded-lg border border-border bg-background-elevated px-4 py-3 text-foreground"
            />
            {errors?.name && (
              <p id="name-error" className="mt-1 text-sm text-accent-2">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <input
              name="contact"
              placeholder="Phone, WhatsApp, or email"
              aria-describedby={errors?.contact ? "contact-error" : undefined}
              className="w-full rounded-lg border border-border bg-background-elevated px-4 py-3 text-foreground"
            />
            {errors?.contact && (
              <p id="contact-error" className="mt-1 text-sm text-accent-2">
                {errors.contact}
              </p>
            )}
          </div>

          <div>
            <select
              name="businessType"
              defaultValue=""
              aria-describedby={
                errors?.businessType ? "business-type-error" : undefined
              }
              className="w-full rounded-lg border border-border bg-background-elevated px-4 py-3 text-foreground"
            >
              <option value="" disabled>
                Business type
              </option>
              <option value="Restaurant">Restaurant</option>
              <option value="Shop">Shop</option>
              <option value="Contractor">Contractor</option>
              <option value="Other">Other</option>
            </select>
            {errors?.businessType && (
              <p id="business-type-error" className="mt-1 text-sm text-accent-2">
                {errors.businessType}
              </p>
            )}
          </div>

          <textarea
            name="message"
            placeholder="Message (optional)"
            className="rounded-lg border border-border bg-background-elevated px-4 py-3 text-foreground"
          />

          <button
            type="submit"
            disabled={pending}
            className="btn-gradient rounded-full px-6 py-3 font-semibold text-accent-foreground disabled:opacity-60"
          >
            {pending ? "Sending…" : "Send"}
          </button>
        </form>
      )}
    </section>
  );
}
