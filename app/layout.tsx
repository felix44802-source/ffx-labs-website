import type { Metadata } from "next";
import { headers } from "next/headers";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { GlobalBackground } from "./components/GlobalBackground";
import { siteOrigin } from "./lib/content";
import { isLocale } from "./lib/locale";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Fx Lab — AI Websites & WhatsApp Bots for Local Businesses | San Diego",
  description:
    "AI-powered websites and 24/7 WhatsApp bots for San Diego local businesses. Automate bookings, capture leads, and never miss a customer message again.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const segment = pathname.split("/")[1] ?? "";
  const lang = isLocale(segment) ? segment : "en";

  return (
    <html
      lang={lang}
      className={`${schibstedGrotesk.variable} ${martianMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GlobalBackground />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
