# Hermes Telegram Bot (`fxbot`) — Handoff

**Date:** 2026-08-22
**Status:** live. Credentials are in place and the Telegram gateway is running;
remaining step is a multi-turn conversation test by Felix.

## What this is

The Fx Labs assistant bot, rebuilt on **Hermes Desktop** (Nous Research,
v0.20.3) instead of Forja. It answers prospect messages on Telegram using the
website as its source of truth. Supersedes the Forja/Cloudflare approach in
`2026-08-21-whatsapp-lead-bot-design.md` — that spec's **persona** survives and
is the basis for this bot's `SOUL.md`; its Cloudflare Worker + D1 + Cal.com
architecture does not.

Hermes lives at `C:\Users\felix\AppData\Local\hermes` (`~/.hermes`). The bot is
a **profile**, which in Hermes is a fully isolated agent: own config, own
credentials, own memory, own sessions.

## Where everything lives

| Thing | Path |
|---|---|
| Profile root | `~/.hermes/profiles/fxbot/` |
| Persona (system prompt) | `~/.hermes/profiles/fxbot/SOUL.md` |
| Model + toolset config | `~/.hermes/profiles/fxbot/config.yaml` |
| Secrets (token goes here) | `~/.hermes/profiles/fxbot/.env` |
| CLI wrapper | `C:\Users\felix\.local\bin\fxbot.bat` (not on PATH) |

`.local\bin` is not on PATH, so drive the profile with `hermes -p fxbot <cmd>`.

## Decisions already made

**Isolated profile, not the main Hermes.** The default profile ships with
`terminal`, `file`, `code_execution`, `computer_use`, and `browser` **enabled**.
A public Telegram bot running there hands command execution on Felix's PC to
anyone who messages it. Those are disabled on `fxbot` for both the `cli` and
`telegram` platforms. Remaining toolsets: `web`, `vision`, `memory`, `skills`,
`todo`, `clarify`, and `kanban` — `kanban` resisted `tools disable` and is still
enabled; it is an internal task board with no host access, so it was left.

**Persona in `SOUL.md`, not in a skill.** Hermes skills load on demand via their
description, which makes firing probabilistic. Every customer message needs the
business facts, so they are always-loaded in `SOUL.md` instead. One file to
re-sync when the site changes.

**Model pinned to `claude-sonnet-5`** (`model.provider: anthropic`). Opus is
waste on short sales replies. Credentials come from the Anthropic OAuth
credential pool, which `profile create` copied into
`~/.hermes/profiles/fxbot/auth.json`.

**The bot states published prices.** The approved WhatsApp spec said never quote
a price. The site now displays them, and refusing to name a number the customer
is looking at reads badly, so `SOUL.md` quotes Starter ($500 one-time),
Professional ($500 setup + $250/mo), and defers only on Enterprise. **This
reverses the older spec on purpose.**

**The bot never cites the homepage counters.** 100+ clients, 1951+ inquiries,
6+ years, 5.0 from 80+ reviews are illustrative, and `CONTEXT.md` records that
no Clients exist yet. `SOUL.md` routes every track-record question to Felix.

**No booking automation.** Cal.com was Phase B of the old spec and was never
built. The bot collects name + contact method and sends
`https://wa.me/16197452934`.

## Verified working

One-shot test through `hermes -p fxbot -z "..."` with a Spanish restaurant-owner
message returned: Spanish auto-detected, three sentences, correct service match
(WhatsApp bot), correct published price, exactly one follow-up question.

## Resume here

1. ~~Write the two values into `~/.hermes/profiles/fxbot/.env`.~~ **Done
   2026-08-22.** Token validated against `getMe`: the bot is
   **@fxxlabs_bot** ("Asistente FX LABS", id `8446434280`). Allowlist is
   Felix's user ID only.
2. ~~Start it.~~ **Done** — long polling, no webhook set. Also **installed for
   auto-start**: `gateway install` requested UAC to create the Scheduled Task,
   elevation was declined, so it fell back to a Startup-folder item
   (`Hermes_Gateway_fxbot.vbs`). It now survives shell and session exit and
   starts on Windows login — but not on boot without a login. To upgrade to the
   Scheduled Task, run `hermes -p fxbot gateway install --force` and accept UAC.
3. **Still open — needs Felix.** Message @fxxlabs_bot on Telegram and confirm
   the persona holds over a multi-turn conversation, not just the first reply.
   No one else can do this: the allowlist is his user ID alone. Pose as a
   customer — ask about a service, then price, then track record, and drop a
   phone number mid-conversation. Watch for: no homepage counters cited, no
   invented Enterprise price, the WhatsApp link as the close, and the
   `📇 LEAD CON CONTACTO` notification arriving.

Access stays private (allowlist = Felix only) for this round. Opening it up
needs `GATEWAY_ALLOW_ALL_USERS=true`.

## Open items

- **The bot token was pasted into a Claude session transcript** rather than
  entered through `gateway setup`, so it exists in that transcript as well as in
  `.env`. Rotate via @BotFather if that is not acceptable.
- **`usefxlabs.com` does not resolve** (curl returns 000). ADR 0001 records the
  domain as registered, but the live site is `https://fx-labs-website.vercel.app`
  and that is the URL in `SOUL.md`. DNS needs pointing at Vercel; `SOUL.md` needs
  updating when it lands.
- **Bot leads: notification built 2026-08-22, storage still thin.** A
  `pre_llm_call` shell hook (`~/.hermes/profiles/fxbot/hooks/notify_lead.py`,
  registered in the profile's `config.yaml`) fires on every inbound Telegram
  message: it appends the message to
  `~/.hermes/profiles/fxbot/leads/leads.jsonl` and pings Felix on Telegram,
  flagging `📇 LEAD CON CONTACTO` when it spots an email or a 7+ digit phone
  number. Deduped per `(session_id, message)` because `pre_llm_call` fires once
  per LLM call, several times per turn; the Telegram send is detached so it
  never delays a customer reply (detached delivery confirmed received on
  Telegram 2026-08-22), and the whole hook fails open and silent.
  Still **not** a CRM: the log is a local file on Felix's PC, there is no
  dedupe across sessions, no status tracking, and no backup. The website
  contact form remains unfixed (`recordLead` only console.logs).
- **Subscription auth.** The bot runs on Felix's Claude subscription OAuth. Fine
  while the allowlist is one person; serving real customers on a personal
  subscription is outside what it covers, so switch to an Anthropic API key with
  a spend cap before opening access.
- **`SOUL.md` has no sync mechanism.** It was hand-derived from
  `app/lib/content.ts`. Editing prices or services on the site does not update
  the bot.
