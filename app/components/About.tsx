import { about } from "@/app/lib/content";

export function About() {
  return (
    <section className="grid gap-10 border-b border-border px-6 py-24 md:grid-cols-2 md:items-center md:px-16">
      {/* Placeholder — swap for the real professional photo */}
      <div className="mx-auto aspect-square w-48 rounded-full bg-background-elevated md:mx-0" />
      <div>
        <h2 className="mb-4 text-3xl font-extrabold text-foreground">
          About {about.name}
        </h2>
        <p className="max-w-md text-foreground-muted">{about.bio}</p>
      </div>
    </section>
  );
}
