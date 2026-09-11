import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { checkRateLimit, resetRateLimit } from "./rateLimit";

describe("checkRateLimit", () => {
  beforeEach(() => {
    resetRateLimit();
  });

  afterEach(() => {
    resetRateLimit();
  });

  it("allows requests under the limit for a given key", () => {
    for (let i = 0; i < 5; i++) {
      expect(checkRateLimit("1.2.3.4", 5, 60_000)).toBe(true);
    }
  });

  it("blocks the request that exceeds the limit for a key", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit("1.2.3.4", 5, 60_000);
    }
    expect(checkRateLimit("1.2.3.4", 5, 60_000)).toBe(false);
  });

  it("tracks each key independently", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit("1.2.3.4", 5, 60_000);
    }
    // A different IP has its own budget and is not affected.
    expect(checkRateLimit("5.6.7.8", 5, 60_000)).toBe(true);
  });

  it("resets the window for a key once it expires", async () => {
    const windowMs = 10;
    for (let i = 0; i < 5; i++) {
      checkRateLimit("1.2.3.4", 5, windowMs);
    }
    expect(checkRateLimit("1.2.3.4", 5, windowMs)).toBe(false);

    await new Promise((resolve) => setTimeout(resolve, windowMs + 5));

    expect(checkRateLimit("1.2.3.4", 5, windowMs)).toBe(true);
  });
});
