"use client";

import { useEffect, useRef } from "react";

export function Aurora({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const goldGlowRef = useRef<HTMLDivElement>(null);
  const emeraldGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let rafId: number;
    let targetX = typeof window !== "undefined" ? window.innerWidth / 2 : 400;
    let targetY = 250;
    let currentX = targetX;
    let currentY = targetY;

    const handlePointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const animate = () => {
      // Fluid linear interpolation (lerp)
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;

      if (goldGlowRef.current) {
        goldGlowRef.current.style.transform = `translate3d(${currentX - 220}px, ${currentY - 220}px, 0)`;
      }
      if (emeraldGlowRef.current) {
        emeraldGlowRef.current.style.transform = `translate3d(${currentX - 250 + 70}px, ${currentY - 250 - 50}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Interactive Amber/Gold Radial Cursor Bloom */}
      <div
        ref={goldGlowRef}
        className="pointer-events-none absolute left-0 top-0 h-[440px] w-[440px] rounded-full bg-[#3d2e0a] opacity-35 blur-[110px] will-change-transform"
        style={{ transform: "translate3d(40vw, 180px, 0)" }}
      />

      {/* Interactive Secondary Forest Emerald Bloom */}
      <div
        ref={emeraldGlowRef}
        className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#0d331f] opacity-25 blur-[120px] will-change-transform"
        style={{ transform: "translate3d(48vw, 130px, 0)" }}
      />

      {/* Static Atmospheric Background Layers */}
      <div
        className="aurora-blob left-[10%] top-[10%] h-[500px] w-[500px] bg-[#0c2e1c]"
        style={{ animation: "aurora-drift-1 26s ease-in-out infinite" }}
      />
      <div
        className="aurora-blob right-[10%] top-[5%] h-[450px] w-[450px] bg-[#2a200a]"
        style={{ animation: "aurora-drift-2 30s ease-in-out infinite" }}
      />

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-[#060907]/50" />
    </div>
  );
}


