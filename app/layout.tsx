import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import { GlobalBackground } from "./components/GlobalBackground";
import { siteOrigin } from "./lib/content";

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
  title: "FX Labs — AI Websites & WhatsApp Bots for Local Businesses | San Diego",
  description:
    "AI-powered websites and 24/7 WhatsApp bots for San Diego local businesses. Automate bookings, capture leads, and never miss a customer message again.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${schibstedGrotesk.variable} ${martianMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}
