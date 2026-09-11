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
- **Contact-form abuse protection is in place** (2026-08-22, after this snapshot).
  A honeypot field (`app/lib/contact.ts`), an in-memory sliding-window rate
  limit per IP (`app/lib/rateLimit.ts`, 5/hour), and origin/method checks back
  the Server Action. **Still in-memory only** — lifts to Vercel KV/Upstash when
  the site sees real or distributed traffic, because in-memory counters reset
  on every cold start and do not stop multi-IP abuse.
- **Hero CTAs open WhatsApp with a pre-filled message** (`Hero.tsx`), "Try Demo"
  no longer dead-links to `#services`. Note the Telegram bot `@fxxlabs_bot`
  stays allowlist-only (Felix's ID), so a real public demo is still pending.
- **Fabricated metrics are now labeled "Illustrative"** in the Hero rating, the
  stats strip, and the Benefits dashboard; the Benefits percentages were also
  fixed to sum to 100% (was 110%). `ServicesBento` demo widgets (Lighthouse 99,
  "+45% CONV", "~450ms") remain unlabeled as decorative mock data — lower
  priority, revisit if the site attracts scrutiny.
- **Mobile nav menu** added to `Navbar.tsx` (hamburger + panel on small screens).
- **Vercel Analytics + conversion tracking** wired: `<Analytics />` in
  `app/layout.tsx`, `app/lib/analytics.ts` tracks WhatsApp clicks and lead
  submissions. **Action still required in the Vercel dashboard:** enable Web
  Analytics for the `fx-labs-website` project (and confirm the events show up).
  The Privacy Policy was updated to describe this cookieless, aggregate-only
  analytics instead of claiming "no trackers".
- **Footer has a broken "Customers" link** — `footer.companyLinks` includes
  "Customers" but no such page exists in the sitemap/router. Remove it or build
  the page.
- **SEO still partial** — there is a sitemap (`app/sitemap.ts`), `robots.ts`,
  per-locale metadata, OG and Twitter tags, and JSON-LD. Still missing:
  per-page OG images for subpages, and a proper `usefxlabs.com` domain.
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
