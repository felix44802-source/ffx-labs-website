import { describe, expect, it } from "vitest";
import { getInitialLocale } from "./locale";

describe("getInitialLocale", () => {
  it("uses Spanish for a first visit from a Spanish browser", () => {
    expect(getInitialLocale(undefined, "es-MX,es;q=0.9,en;q=0.8")).toBe("es");
  });

  it("defaults first visits to English", () => {
    expect(getInitialLocale(undefined, "fr-FR,fr;q=0.9")).toBe("en");
  });

  it("keeps the visitor's saved choice", () => {
    expect(getInitialLocale("en", "es-MX,es;q=0.9")).toBe("en");
    expect(getInitialLocale("es", "en-US,en;q=0.9")).toBe("es");
  });
});