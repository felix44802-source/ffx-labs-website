# Where we left off — 2026-08-22

Status snapshot for picking this back up cleanly. Not a spec — see `CONTEXT.md`
for domain vocabulary and `docs/adr/` for decisions with lasting rationale.

## Done

- **Product plan agreed**: Fx Labs sells the Website Service, the WhatsApp Bot
  Service and a Lead Generation Service, plus the Bundle. See `CONTEXT.md` for
  the Service/Bundle/Illustrative Example/Lead/Client vocabulary, and
  `docs/adr/0001-usefxlabs-com-domain.md` for the domain decision.
- **Next.js + TypeScript + Tailwind**, deployed on Vercel
  (`fx-labs-website`, project `prj_z3Neimvhj…`, team `felix-s-team1`).
  Production URL: https://fx-labs-website-git-main-felix-s-team1.vercel.app
- **Visual direction — emerald bento** (`9f40901`). The homepage is a dark
  emerald bento grid (`#091b15` base, `#0d241c` cards) animated with
  `motion/react`. Sections are `Hero`, `ServicesBento`, `BenefitsDashboard`,
  `PricingBento`, `IntegrationsOrbital`, `About`, `CtaBanner`, `ContactForm`,
  `Footer`. The old `Services`/`Process`/`Results`/`Stats` components are gone.

  **This supersedes both earlier palettes.** The site went purple → amber →
  emerald; any note mentioning amber or purple predates 2026-08-22.
- **Bilingual `/en` `/es` routing is built** — `app/[locale]/`, `proxy.ts` for
  detection/redirect, `app/lib/locale.ts` with tests. Both languages are fully
  translated in `app/lib/content.ts`.
- **Real founder photo** at `public/felix-profile.png`, rendered in `About`.
- **New logo**: `public/logo.png` is now the 3D "FX" ribbon icon (cropped from
  `Logo/fxlab_3d_ribbon.jpg`, background keyed transparent). Old wordmark
  backed up at `Logo/logo-old-backup.png`.
- **Real WhatsApp number**: `https://wa.me/16197452934` in `app/lib/content.ts`.
- **Prices are back on the page** (`b019a84`): Starter $500 one-time,
  Professional · The Complete Bundle $500 setup + $250/mo, Enterprise
  quote-based ("Custom / let's talk"). Commit `fc73893` had moved everything to
  quote-only CTAs on 2026-08-20; that was reversed on 2026-08-22 for the two
  tiers with known numbers. Enterprise stays quote-based because no fixed price
  for it exists yet.
- **Contact form built test-first (TDD)**: `app/lib/contact.ts` validates and
  records a `Lead` through an injected `recordLead` boundary. Wired end-to-end
  through a Server Action (`app/actions/contact.ts`). 19 tests passing across
  the form, the lead email and locale routing.
- **WhatsApp bot shipped** — it lives in its own sibling repo (Forja), not
  here. Live on Telegram with Cal.com booking, FAQ knowledge base, escalation
  tickets, business hours and a `restart` command. Design spec:
  `docs/superpowers/specs/2026-08-21-whatsapp-lead-bot-design.md`.

## Still pending

Roughly in order of what it costs you to leave undone.

- **Lead email is built and provisioned.** `app/lib/recordLead.ts` is no
  longer a stub: it formats the Lead (`app/lib/leadEmail.ts`) and sends it
  through Resend, and the form now shows a retry + WhatsApp fallback instead
  of a false success when delivery fails. Tests, typecheck and build all
  pass. `RESEND_API_KEY`, `LEAD_EMAIL_FROM` and `LEAD_EMAIL_TO` are set in the
  Vercel project. Email was chosen over a database on purpose: the inbox is a
  record Felix actually reads.
- **The contact form is a public endpoint with no rate limit.** A Server Action
  compiles to a POST anyone can call. That was harmless when it only wrote a
  log line; now each hit costs a real email send. Wants BotID or a rate limit
  before the site sees real traffic.
- **"Try Demo" is a dead CTA** — it links to `#services`. The Telegram bot is
  live and would be a real demo to point it at.
- **Hero metrics are fabricated and deliberately left in place** (decided
  2026-08-22): "100+ clients", "1951+ inquiries handled", "5.0 from 80+
  reviews", "6+ years". `CONTEXT.md` says no Client exists yet and that
  fabricated results must be visibly labeled as Illustrative. These are not
  labeled. Revisit before the site gets real traffic.
- **Analytics** — Vercel Analytics + WhatsApp/form click tracking, agreed
  during grilling, not implemented.
- **Privacy page** — agreed during grilling, not created.
- **SEO** — only a basic `<title>`/description in `app/layout.tsx`; no sitemap,
  OG tags, or per-locale metadata.
- **Illustrative Example visuals** — no mockup screenshots or video yet.
- **Domain** — `usefxlabs.com` still not purchased. This also blocks the
  **WhatsApp Business integration**, which is stuck on Meta's business/domain
  verification: a Vercel subdomain does not pass it. That is an admin problem,
  not an engineering one.

## Where to find things

- Full 3-variant layout prototype + switcher: `git checkout prototype/landing-layout`
- Domain vocabulary: `CONTEXT.md`
- Decision records: `docs/adr/`
- Run tests: `npm test` · Dev server: `npm run dev` · Build: `npm run build`
