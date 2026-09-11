import type { MetadataRoute } from "next";
import { siteOrigin } from "./lib/content";
import { locales } from "./lib/locale";

const paths = ["", "/terms", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteOrigin}/${locale}${path}`,
      alternates: {
        languages: Object.fromEntries(
          locales.map((altLocale) => [altLocale, `${siteOrigin}/${altLocale}${path}`]),
        ),
      },
    })),
  );
}
