export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getInitialLocale(
  savedLocale: string | undefined,
  acceptLanguage: string | null,
): Locale {
  if (savedLocale && isLocale(savedLocale)) {
    return savedLocale;
  }

  return acceptLanguage?.toLowerCase().startsWith("es") ? "es" : "en";
}