"use client";

import { useEffect, useRef } from "react";

interface DarkGradientBackgroundProps {
  className?: string;
  showDots?: boolean;
}

export function DarkGradientBackground({
  className = "",
  showDots = true,
}: DarkGradientBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let rafId: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Relative offset from center (-1 to 1)
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 60;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (rayRef.current) {
        rayRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(-28deg)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-[#05090b] ${className}`}
      aria-hidden="true"
    >
      {/* 1. Deep Obsidian Base Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,#091519_0%,#030607_100%)]" />

      {/* 2. Diagonal Cyan/Teal Ray Beam (matching your reference image) */}
      <div
        ref={rayRef}
        className="pointer-events-none absolute -left-[20%] -top-[30%] h-[750px] w-[140%] origin-center opacity-85 blur-[90px] will-change-transform"
        style={{
          transform: "rotate(-28deg)",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(6, 44, 48, 0.4) 20%, rgba(8, 145, 178, 0.55) 45%, rgba(20, 184, 166, 0.45) 55%, rgba(4, 25, 28, 0.3) 75%, transparent 100%)",
        }}
      />

      {/* 3. Secondary Atmospheric Cyan Bloom */}
      <div
        className="pointer-events-none absolute left-[15%] top-[-10%] h-[500px] w-[650px] rounded-full opacity-40 blur-[130px]"
        style={{
          background: "radial-gradient(circle, #0891b2 0%, #0e7490 40%, transparent 70%)",
        }}
      />

      {/* 4. Subtle Micro-Dot Texture Overlay */}
      {showDots && (
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0",
            maskImage:
              "radial-gradient(ellipse 90% 80% at 50% 40%, black 40%, transparent 95%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 80% at 50% 40%, black 40%, transparent 95%)",
          }}
        />
      )}

      {/* 5. Edge vignette shadows to guarantee perfect text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05090b] via-transparent to-[#05090b]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05090b]/80 via-transparent to-[#05090b]/80" />
    </div>
  );
}
