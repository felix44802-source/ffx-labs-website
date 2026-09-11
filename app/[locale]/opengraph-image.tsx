import { ImageResponse } from "next/og";
import { isLocale } from "@/app/lib/locale";

export const alt = "Fx Labs — AI Websites & WhatsApp Bots for Local Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COPY = {
  en: {
    headline: "AI Websites & WhatsApp Bots",
    subline: "for Local Businesses",
    tag: "SAN DIEGO, CA",
  },
  es: {
    headline: "Sitios Web y Bots de WhatsApp",
    subline: "con Inteligencia Artificial",
    tag: "SAN DIEGO, CA",
  },
};

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const copy = COPY[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #05090b 0%, #0a1418 60%, #05090b 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "2px solid #22d3ee",
              alignItems: "center",
              justifyContent: "center",
              color: "#22d3ee",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            FX
          </div>
          <div style={{ display: "flex", color: "#e6f6f8", fontSize: 32, fontWeight: 700, letterSpacing: 4 }}>
            FX LABS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              color: "#22d3ee",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 6,
            }}
          >
            {copy.tag}
          </div>
          <div style={{ display: "flex", color: "#f5fbfc", fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
            {copy.headline}
          </div>
          <div style={{ display: "flex", color: "#9fb3b8", fontSize: 40, fontWeight: 600 }}>
            {copy.subline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
