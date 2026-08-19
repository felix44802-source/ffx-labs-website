"use client";

// PROTOTYPE ONLY — never render in production. Gated by NODE_ENV below.

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const VARIANTS = [
  { key: "A", name: "Cinematográfico vertical" },
  { key: "B", name: "Editorial asimétrico" },
  { key: "C", name: "Split-screen sticky" },
] as const;

export function PrototypeSwitcher({ current }: { current: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentIndex = VARIANTS.findIndex((v) => v.key === current);
  const index = currentIndex === -1 ? 0 : currentIndex;

  const goTo = (nextIndex: number) => {
    const wrapped = (nextIndex + VARIANTS.length) % VARIANTS.length;
    const params = new URLSearchParams(searchParams.toString());
    params.set("variant", VARIANTS[wrapped].key);
    router.replace(`?${params.toString()}`);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-[999] -translate-x-1/2 flex items-center gap-3 rounded-full border border-white/20 bg-black/90 px-4 py-2 text-sm text-white shadow-2xl backdrop-blur">
      <button
        onClick={() => goTo(index - 1)}
        aria-label="Variante anterior"
        className="rounded-full px-2 py-1 hover:bg-white/10"
      >
        ←
      </button>
      <span className="font-mono">
        {VARIANTS[index].key} — {VARIANTS[index].name}
      </span>
      <button
        onClick={() => goTo(index + 1)}
        aria-label="Siguiente variante"
        className="rounded-full px-2 py-1 hover:bg-white/10"
      >
        →
      </button>
    </div>
  );
}
