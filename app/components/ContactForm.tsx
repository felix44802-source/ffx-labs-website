"use client";

import { motion } from "motion/react";
import { useActionState } from "react";
import { submitContactFormAction } from "@/app/actions/contact";
import type { ContactFormResult } from "@/app/lib/contact";
import { getContent, type SiteContent, whatsappHref } from "@/app/lib/content";

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

export function ContactForm({ copy = getContent("en") }: { copy?: SiteContent }) {
  const [state, formAction, pending] = useActionState(action, initialState);
  const errors = state.ok === false ? state.errors : undefined;

  return (
    <section id="contact" className="relative border-b border-border bg-[#091b15] py-28 px-6 md:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            Start Your Journey
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-5xl">
            {copy.contact.heading}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-foreground-muted">
            {copy.contact.subheading}
          </p>
          <div className="mt-4 inline-block rounded-full border border-border-subtle bg-[#0d241c] px-4 py-1.5 font-mono text-xs text-foreground-muted">
            {copy.contact.welcome}
          </div>
        </motion.div>

        {state.ok === true ? (
          <div role="status" className="rounded-3xl border border-accent/40 bg-[#0d241c] p-8 text-center shadow-lg">
            <p className="font-mono text-lg font-bold text-accent">
              {copy.contact.success}
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid gap-8 md:grid-cols-[1fr_280px]"
          >
            {/* Form */}
            <form action={formAction} className="flex flex-col gap-4">
              <div>
                <input
                  name="name"
                  placeholder={copy.contact.name}
                  aria-describedby={errors?.name ? "name-error" : undefined}
                  className="w-full rounded-2xl border border-border-subtle bg-[#0d241c] px-4 py-3.5 text-sm text-foreground placeholder-foreground-muted/60 focus:border-accent focus:outline-none transition-colors"
                />
                {errors?.name && (
                  <p id="name-error" className="mt-1 text-xs text-amber-400">
                    {copy.contact.errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="contact"
                  placeholder={copy.contact.contact}
                  aria-describedby={errors?.contact ? "contact-error" : undefined}
                  className="w-full rounded-2xl border border-border-subtle bg-[#0d241c] px-4 py-3.5 text-sm text-foreground placeholder-foreground-muted/60 focus:border-accent focus:outline-none transition-colors"
                />
                {errors?.contact && (
                  <p id="contact-error" className="mt-1 text-xs text-amber-400">
                    {copy.contact.errors.contact}
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
                  className="w-full rounded-2xl border border-border-subtle bg-[#0d241c] px-4 py-3.5 text-sm text-foreground placeholder-foreground-muted/60 focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="" disabled className="bg-[#0d241c] text-foreground-muted">
                    {copy.contact.businessType}
                  </option>
                  {copy.contact.options.map((option) => (
                    <option key={option} value={option} className="bg-[#0d241c] text-foreground">
                      {option}
                    </option>
                  ))}
                </select>
                {errors?.businessType && (
                  <p id="business-type-error" className="mt-1 text-xs text-amber-400">
                    {copy.contact.errors.businessType}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={copy.contact.message}
                  className="w-full rounded-2xl border border-border-subtle bg-[#0d241c] px-4 py-3.5 text-sm text-foreground placeholder-foreground-muted/60 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={pending}
                className="btn-mint rounded-2xl py-4 font-mono text-sm font-bold uppercase tracking-wider disabled:opacity-60"
              >
                {pending ? copy.contact.sending : copy.contact.send}
              </button>
            </form>

            {/* Direct WhatsApp Callout Box */}
            <div className="flex flex-col justify-between rounded-3xl border border-border-subtle bg-[#0d241c] p-6 text-left">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                  Direct Line
                </span>
                <h3 className="mt-2 text-lg font-bold text-foreground">
                  Prefer instant chat?
                </h3>
                <p className="mt-2 text-xs text-foreground-muted leading-relaxed">
                  Skip the form and message Felix directly on WhatsApp for an immediate response.
                </p>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6 flex items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-semibold uppercase tracking-wider"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-accent">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2z" />
                </svg>
                Open WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}


