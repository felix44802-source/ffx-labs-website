# Where we left off — 2026-08-19 (updated same day)

Status snapshot for picking this back up cleanly. Not a spec — see `CONTEXT.md`
for domain vocabulary and `docs/adr/` for decisions with lasting rationale.

## Done

- **Product plan agreed** via a grilling session: Fx Labs sells two services
  (Website, WhatsApp Bot) + a Bundle to non-technical small business owners.
  See `CONTEXT.md` for the Service/Bundle/Illustrative Example/Lead/Client
  vocabulary, and `docs/adr/0001-usefxlabs-com-domain.md` for the domain
  decision.
- **Next.js + TypeScript + Tailwind** scaffolded, deploy target Vercel.
- **Landing page layout**: prototyped 3 structurally different variants,
  chose **Variant A** (vertical stack, horizontal-scroll service cards).
  The full 3-variant set + switcher is preserved on the
  `prototype/landing-layout` branch if you ever want to revisit B or C.
- **Visual direction — pivoted and applied to the real homepage** (not just
  the prototype): black base + vibrant purple/violet aurora effect, gradient
  text/buttons, light cards with purple icon tiles. Bold sans-serif
  headline (Schibsted Grotesk) instead of the original Newsreader serif —
  flagged and agreed as part of the pivot.
- **Language — pivoted and applied to the real homepage**: English is now
  primary/default (`<html lang="en">`, all copy in English), with a
  "Se habla español · We speak Spanish too" line near the hero and contact
  form. Real `/es` routing itself is not built yet — see Pending.
- **Real pricing wired in**: Website $500 one-time, WhatsApp Bot $300/mo,
  Bundle $500 setup + $250/mo (discounted monthly rate). Not placeholders.
- **Contact form built test-first (TDD)**: `app/lib/contact.ts` validates
  name, contact method, and business type as required, message optional;
  records a `Lead` through an injected `recordLead` boundary
  (`app/lib/recordLead.ts`, currently just logs server-side — swap for
  email/DB later, deliberately deferred). Wired end-to-end through a real
  Server Action (`app/actions/contact.ts`) into the `ContactForm` component.
  7 tests passing (Vitest + React Testing Library, set up this session).
- **Real logo integrated**: `public/logo.png` (source in `Logo/`), placed at
  the top of the Hero. This revealed the real brand palette is **black +
  amber/orange** (not purple/violet) — `app/globals.css` was recolored to
  match: `--accent` amber, `--accent-2` red, `--accent-3` gold,
  `--accent-4` rust, buttons/gradients updated to a warm "ember" look. This
  supersedes the "purple/violet AI-agency" direction mentioned in ADR-era
  notes above.
- **Real WhatsApp number wired in**: `https://wa.me/16197452934` in
  `app/lib/content.ts`, no longer a placeholder.

## Still pending

- **Your photo** for the About section — `app/components/About.tsx` still
  has a placeholder circle.
- **Domain registration** — still in progress (see below), not purchased yet.
- **Bilingual `/en` `/es` routing** with first-visit auto-detect — not
  started. Right now the site is English-only; no `/es` route exists yet.
  This was next up when we stopped.
- **Illustrative Example visuals** — the Results section is text/metric
  only right now; no mockup screenshots or video yet.
- **Analytics** — Vercel Analytics + WhatsApp/form click tracking, agreed
  during grilling, not implemented.
- **Privacy page** — agreed during grilling, not created.
- **SEO** — only a basic `<title>`/description in `app/layout.tsx`; no
  sitemap, OG tags, or keyword-aware copy yet.

## Suggested starting point next session

**Bilingual `/en`/`/es` routing with first-visit auto-detect.** It's already
queued, it's real testable logic (detect preferred language, decide whether
to redirect, don't redirect again on later visits), and it fits the same
TDD workflow used for the contact form.

## Where to find things

- Full 3-variant prototype + switcher: `git checkout prototype/landing-layout`
- Domain vocabulary: `CONTEXT.md`
- Decision records: `docs/adr/`
- Run tests: `npm test`
- Run dev server: `npm run dev`
