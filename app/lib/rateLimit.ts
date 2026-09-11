/**
 * In-memory sliding-window rate limiter for the contact Server Action.
 *
 * Deliberately stateless across processes: Vercel serverless instances do not
 * share memory, so this is a per-process best-effort guard. It stops the
 * obvious single-IP hammering that costs a real Resend email per hit, without
 * adding a Redis dependency. When the site sees real (or distributed) traffic,
 * lift this to Vercel KV / Upstash so counters survive cold starts.
 */

interface WindowEntry {
  startedAt: number;
  count: number;
}

const windows = new Map<string, WindowEntry>();

/**
 * Returns true when the request is allowed and records the attempt; false when
 * the key has exceeded `limit` attempts inside `windowMs`.
 */
export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number,
  now: number = Date.now(),
): boolean {
  const entry = windows.get(key);

  if (!entry || now - entry.startedAt >= windowMs) {
    windows.set(key, { startedAt: now, count: 1 });
    return true;
  }

  if (entry.count >= limit) {
    return false;
  }

  entry.count += 1;
  return true;
}

/** Clears every tracked window. Exposed for tests only. */
export function resetRateLimit(): void {
  windows.clear();
}
