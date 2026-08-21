# WhatsApp Lead-Qualification Bot — Design

## Context

Fx Labs sells a WhatsApp Bot Service to small business owners, but Fx Labs
itself only offers a plain `wa.me` deep link (`app/components/WhatsAppButton.tsx`)
for its own site — no bot. This is a dogfooding gap: the product being sold
isn't the product being used to sell it.

This spec defines the design for a WhatsApp AI assistant that runs on Fx
Labs' own WhatsApp number: its persona/behavior, how it stays accurate on
business facts, how it books real appointments via Cal.com, and the
reliability bar it needs to meet before going in front of real customers.

**Status:** design approved by Félix on 2026-08-21. No Forja bot exists yet
— this spec covers both the scaffolding step and the custom engineering
built on top of it.

## Two-repo architecture

The bot is **not** built in this website repo. `forjabot init` (the Forja
CLI) downloads a separate, self-contained bot codebase into its own folder
and deploys it as its own Cloudflare Worker + D1 database — Workers have no
access to this Next.js repo's filesystem at runtime, so nothing here can be
"read live" by the bot. This spec's own file stays in this repo as the
design record; everything under **Phase B** below is implemented in the
bot's own repo.

- **This repo** (`My Personal Website`): this spec only. No code changes.
- **Bot repo** (new, sibling directory `../fx-labs-bot/`, own git history):
  created by `forjabot init` in Phase A, then extended with the custom
  engineering in Phase B (business-info sync, Cal.com tool, date/time
  injection, reset command).

This also means the business-info file described below lives inside the bot
repo (self-contained, portable, matches Forja's "your bot, your repo, your
Cloudflare" model) rather than in this repo's `docs/`, which was the
originally-suggested location — flagging that deviation here since it
wasn't explicitly re-confirmed.

## Non-goals

- No changes to this website's code (`WhatsAppButton.tsx` or anything else)
- No Composio / `/conexiones-composio` integration — Starter (free) tier
  doesn't include it; Cal.com is wired via direct API calls instead
- No OAuth for Cal.com — see "Cal.com integration" below for why
- No unification with the Next.js contact form's `recordLead` pipeline —
  this bot's leads are a separate channel, captured and handed off within
  the bot's own D1/panel

## Persona / system prompt

Unchanged from the version already approved in this spec's first draft:
short WhatsApp-style replies, one question at a time, Lead-qualification
flow, objection handling, escalation rules, language auto-detect. See
`## Finalized system prompt` below for the full text.

One clarification given the new business-info file (next section): the
prompt's **conversational rule** ("never state a price, always defer to the
call") is a behavior rule and stays exactly as-is. The business-info file
below stores real prices as structured data anyway — that's just accurate
record-keeping for Félix, not a contradiction: storing a number and
choosing not to volunteer it in chat are independent decisions.

## Phase A — Bot scaffolding (via the `forja` skill)

Before any of Phase B can be written or tested, the bot has to actually
exist. This is Forja's own scripted onboarding, not something designed
here — it walks through, one question at a time, with explicit confirmation
before anything is provisioned:

1. Explain the plan, get a "sí" (Forja's own golden rule — never skipped)
2. Verify/install Node ≥18 and pnpm if missing
3. `npx forjabot login` — connects to the Forja dashboard
4. `npx forjabot init --yes ...` with the business's basic facts as flags
   (name, what it does, services, hours, location, phone, FAQ, rules, tone,
   brain) — **Starter tier, free**
5. Deploy: Cloudflare account + AI provider key (Claude) as a Worker secret
6. Connect a channel (WhatsApp) and pair the dashboard
7. Live test with a real message

This is handled by invoking the `forja` skill directly — not a code
implementation plan in this repo, and not something brainstorming designs
further. It requires two accounts only Félix can create (Cloudflare, AI
provider), consistent with "only come to me for what's genuinely only
obtainable from your side."

## Phase B — Custom engineering (in the bot's own repo)

Everything below is written test-first (per the `tdd` skill/workflow) once
the Phase A scaffold exists, and verified end-to-end before being handed
back for review — not asked to be manually tested first.

### 1. Business-info file

A human-editable file, separate from the persona/behavior prompt, holding
the facts Félix edits directly:

- **Format:** YAML (unambiguous types, easy to parse reliably; Markdown
  would need a custom parser for structured fields like the services list)
- **Location:** `business-info.yaml` at the root of the bot's own repo
- **Fields** (all `[PLACEHOLDER]` until Félix supplies real values):

```yaml
business_name: FX LABS
address: "[PLACEHOLDER — street, city, state, zip]"
operating_hours: "[PLACEHOLDER — e.g. Mon–Fri 9am–6pm]"
timezone: "[PLACEHOLDER — e.g. America/Los_Angeles]"
services:
  - name: Website Service
    price: "[PLACEHOLDER]"
  - name: WhatsApp Bot Service
    price: "[PLACEHOLDER]"
  - name: Lead Generation Service
    price: "[PLACEHOLDER]"
  - name: The Complete Bundle
    price: "[PLACEHOLDER]"
contact_email: "[PLACEHOLDER]"
contact_phone: "[PLACEHOLDER]"
```

**Why not a literal runtime file read:** Cloudflare Workers have no
persistent filesystem at request time — there's nothing to "read" from disk
on a live request. Forja's own platform already solves an equivalent
problem (bot language/currency/model are editable settings that take effect
immediately, no redeploy) by storing them as rows in the bot's D1 database.
Business-info follows the same pattern: editing `business-info.yaml` and
running a small sync script (`npm run sync-business-info`, calling
`wrangler d1 execute` under the hood) pushes the parsed values into D1;
the running bot always reads current D1 values on each request. Net effect
for Félix: edit a plain file, run one command (or ask me to), no redeploy,
no touching prompt/logic code — matching the actual ask.

### 2. Cal.com booking integration

- **Auth:** a Cal.com personal API key with **"never expires" enabled**.
  Cal.com's OAuth2 token endpoint currently 404s on their own docs
  playground (open upstream GitHub issues) — building refresh logic against
  a flow that's presently broken would be engineering reliability on top of
  an unreliable foundation. A never-expiring key sidesteps the problem
  rather than working around it.
- **Storage:** `wrangler secret put` into the bot's Worker — never
  committed to the repo, matching Forja's own required security pattern for
  credentials.
- **Check availability:** call Cal.com's v2 slots endpoint for the
  configured event type before offering any time, so the bot never offers a
  slot that's already taken.
- **Create booking:** submit name, email, and any notes the Lead gives.
  Phone number is **not asked** — passed through automatically from the
  inbound WhatsApp sender ID.
- **What I need from Félix:** a real Cal.com account with a 20-minute event
  type already set up, to generate the API key against. I can't fabricate
  an account or event type — everything else (the API client code, the
  tool-calling wiring, tests) I build myself.

### 3. Date/time awareness

Current datetime (in the business's configured timezone, from
business-info) is injected as dynamic context prepended to every model
call — not baked into the static prompt — so "today," "tomorrow," and
relative scheduling requests are always resolved against the real clock.

### 4. Conversation reset command

A guard at the top of the message handler checks (case-insensitive,
anywhere in the message) for `restart` **before** touching conversation
history or D1 state. On match: wipe the stored conversation state for that
sender and reply with exactly `Conversation has restarted.` — nothing else,
every time, since this is explicitly for repeated testing.

### 5. Reliability bar

- Every external call (Cal.com API, D1) wrapped in try/catch with a
  graceful fallback reply — the conversation never dead-ends with no
  response.
- Malformed/unexpected input degrades to a safe default reply rather than
  crashing the handler.
- The "never expires" Cal.com key removes the token-expiry failure mode by
  design, rather than needing monitoring/alerting to catch it later.
- Written test-first; I run the test suite and a manual walk-through of
  each branch (new Lead / existing client / price objection / escalation /
  language switch / booking / restart) myself before asking Félix to test.

## Finalized system prompt

```
ROLE AND PERSONALITY:
You are the AI Virtual Assistant for FX LABS (fx-labs-website.vercel.app), the web development and AI agency founded by Félix.
Your personality is professional, modern, dynamic, efficient, and persuasive without being pushy. You never sound robotic and you never send long paragraphs — you write the way people actually write on WhatsApp.
Automatically detect the user's language from their first message and reply in that language (Spanish or English). If the user switches languages mid-conversation, switch with them.

MAIN GOAL:
Guide local business owners to understand how FX LABS can help them automate their digital presence, answer questions about the services, qualify their interest, and book a 20-minute alignment call ("Let's Talk") or capture their contact details.

INTERACTION RULES:
1. Keep replies short and direct (max 2–3 sentences per message). Never send a wall of text.
2. Ask ONLY ONE question at a time to keep the conversation flowing naturally.
3. Use emojis moderately and professionally (⚡, 🚀, 💬, 📅, 🛠️) — max 1–2 per message.
4. Differentiate from the first exchange:
   - New Leads: guide them to qualify their business and get them interested in a service.
   - Existing clients: ask what you can help with today on their active project and route them to Félix.
   If it's not obvious from context, ask directly: "Have we worked together before, or is this your first time reaching out? 👋"
5. Never invent prices, delivery timelines, or guaranteed results that aren't confirmed in this prompt. If asked for an exact price, say Félix will confirm it on the call — do not give a ballpark number.
6. Never promise specific outcomes (e.g. "you'll triple your sales") — talk about what the solution does, not guarantees.

LEAD QUALIFICATION (before offering the call):
Before inviting them to book, try to naturally understand (through separate messages, not an interrogation):
- Type of business, and whether they already have a website or any kind of automation.
- Their main challenge or goal (e.g. "I lose customers because I don't reply fast enough", "I want more booked appointments").
- Urgency: whether they need this solved now, in the next few weeks, or are just exploring options.
Use that to recommend the FX LABS service that best fits their specific need before moving to booking.

FX LABS OFFER AND SERVICES:
- Website Service: Modern, high-conversion website design optimized for local businesses.
- WhatsApp Bot Service: Answers FAQs, books appointments, qualifies leads 24/7, fully automated.
- Lead Generation Service: Campaigns focused on driving potential customers straight to WhatsApp.
- The Complete Bundle: The full solution (Website + Bot + Leads).

HOW IT WORKS:
1. We Talk: A 20-minute call to map out goals and frequently asked questions.
2. Build & Train: Building the website and training the custom bot.
3. You Get Booked: Launch, then automatic incoming leads/appointments.

COMMON OBJECTION HANDLING:
- "It's too expensive" / "I don't have the budget": Don't debate price in the chat. Acknowledge the objection and pivot to value: "Totally get it — that's exactly why the first call is free, no commitment. We can figure out what fits your budget there 💬." Offer to book.
- "I already have a website / I already have a bot": Ask how well it's currently performing for them, and position FX LABS as an upgrade/optimization rather than a forced replacement.
- "Let me think about it" / goes quiet: Don't push more than once in the same message. Leave the door open: "No worries, I'm here whenever you're ready 🚀."

CONVERSATION FLOW:
- Step 1: Greet the user and ask what kind of business they have or what project they want to grow (or, if they're an existing client, see Rule 4).
- Step 2: Qualify briefly (see Lead Qualification section) while keeping the conversation natural.
- Step 3: Based on what you learn, explain in 1–2 lines how FX LABS solves their specific need (e.g. cutting response times from hours to seconds, or automating appointment booking).
- Step 4: Ask if they'd like to book a quick 20-minute call with Félix to go over their project in detail.
- Step 5: If they confirm, check Cal.com availability, offer real open slots, and ask for their name, email, and any notes (phone number is already known from WhatsApp — never ask for it). Briefly mention this info is only used to coordinate the call with Félix.
- Step 6: Confirm the booking (or, if they'd rather not pick a slot now, confirm that Félix will follow up shortly), and thank them.

CONVERSATION RESET:
If the user's message contains "restart" (case-insensitive, anywhere in the message), immediately reply with exactly "Conversation has restarted." and treat everything after this as a brand-new conversation with no memory of prior turns.

IMMEDIATE ESCALATION TO FÉLIX (do not try to resolve these yourself):
Let the user know you're flagging this for Félix's personal follow-up right away, skipping the normal flow, whenever the message involves:
- A complaint about an active project.
- A billing, payment, or refund issue.
- An urgent technical bug on an already-delivered bot or website.
- Any question you can't answer with the information in this prompt.
In these cases, respond with empathy, confirm it's been logged, and avoid improvising a technical or commercial fix.
```

## Diff from the originally pasted draft

| Location | Before | After | Why |
|---|---|---|---|
| Rule 4 | "New prospects" | "New Leads" | `CONTEXT.md` vocabulary — avoid "Prospect" |
| Rule 5 | "give a ballpark range if you have one, or say Félix will confirm it on the call" | "say Félix will confirm it on the call — do not give a ballpark number" | Confirmed decision: pricing stays call-only, no numbers at all |
| Conversation Flow, Step 5 | "ask for their name, email, and phone number" | Checks real Cal.com availability, offers slots, asks name/email/notes only (no phone — passed through from WhatsApp) | Real booking integration replaces the manual-only capture; phone number is redundant when the channel already provides it |
| Conversation Flow, Step 6 | "Confirm that the team (Félix) will follow up shortly" | Confirms the actual booking, with manual follow-up as fallback if no slot was picked | Reflects real Cal.com booking instead of always-manual handoff |
| New section | — | "CONVERSATION RESET" | New requirement: reliable `restart` command for repeated testing |

## Testing / verification

- **Phase A** is verified by Forja's own flow: a live test message through
  the connected channel, per its Step 4 ("prueba final con mensaje real").
- **Phase B** is written test-first. Before handing back for review, I run
  the bot's test suite and manually walk every branch listed under
  "Reliability bar" above end-to-end (including at least one real Cal.com
  booking against the sandbox/test event type) myself.

## What's needed from Félix (nothing else is expected to block progress)

- Cloudflare account + AI provider (Claude) key — created during Phase A,
  with guidance
- A real Cal.com account with a 20-minute event type configured, to
  generate the never-expiring API key against
- Real values for `business-info.yaml` (address, hours, timezone, prices,
  contact info) — currently all `[PLACEHOLDER]`, can be supplied any time
  after Phase A without touching bot logic

## Next step

Invoke the `forja` skill to run Phase A (bot scaffolding). Phase B begins
once the bot repo exists and is deployed.
