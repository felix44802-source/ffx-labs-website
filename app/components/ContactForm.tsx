import { spanishWelcome } from "@/app/lib/content";

export function ContactForm() {
  return (
    <section className="px-6 py-24 text-center">
      <h2 className="mb-2 text-3xl font-extrabold text-foreground">Contact</h2>
      <p className="mb-8 text-sm text-foreground-muted">{spanishWelcome}</p>
      <form className="mx-auto flex max-w-md flex-col gap-4 text-left">
        <input
          placeholder="Name"
          className="rounded-lg border border-border bg-background-elevated px-4 py-3 text-foreground"
        />
        <select className="rounded-lg border border-border bg-background-elevated px-4 py-3 text-foreground">
          <option>Business type</option>
        </select>
        <textarea
          placeholder="Message"
          className="rounded-lg border border-border bg-background-elevated px-4 py-3 text-foreground"
        />
        <button className="btn-gradient rounded-full px-6 py-3 font-semibold text-accent-foreground">
          Send
        </button>
      </form>
    </section>
  );
}
