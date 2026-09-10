"use client";

import { useEffect, useRef } from "react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$%&*()@#?/+=<>{}[]~アイウエオカキクケコサシスセソタチツテト";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  char: string;
  fontSize: number;
  baseAlpha: number;
  glitchTimer: number;
  pulseSpeed: number;
  pulseVal: number;
}

interface Streak {
  x: number;
  y: number;
  length: number;
  speed: number;
  alpha: number;
  width: number;
}

export function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -1000, y: -1000, radius: 170, isActive: false };
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let streaks: Streak[] = [];
    let rafId: number | null = null;
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;

    const isMobile = () => width < 768;
    const mobileFactor = () => (isMobile() ? 0.6 : 1);

    const densityNodeCount = () =>
      Math.floor(
        Math.min(70, Math.max(45, (width * height) / 16250)) * mobileFactor()
      );
    const streakCount = () =>
      Math.floor(
        Math.min(45, Math.max(15, width / 40)) * 0.6 * mobileFactor()
      );

    const createNodes = () => {
      const count = densityNodeCount();
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          char: CHARS[Math.floor(Math.random() * CHARS.length)],
          fontSize: Math.floor(Math.random() * 4) + 11,
          baseAlpha: Math.random() * 0.2 + 0.15,
          glitchTimer: Math.floor(Math.random() * 200),
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseVal: Math.random() * Math.PI,
        });
      }
    };

    const createStreaks = () => {
      const count = streakCount();
      streaks = [];
      for (let i = 0; i < count; i++) {
        streaks.push({
          x: Math.random() * width,
          y: Math.random() * height,
          length: Math.random() * 50 + 25,
          speed: Math.random() * 2.2 + 1.2,
          alpha: Math.random() * 0.3 + 0.15,
          width: Math.random() * 1.2 + 0.6,
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createNodes();
      createStreaks();
    };

    const debouncedResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handlePointerLeave = () => {
      mouse.isActive = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const draw = () => {
      ctx.fillStyle = "rgba(5, 7, 8, 0.07)";
      ctx.fillRect(0, 0, width, height);
      ctx.shadowBlur = 0;

      // Falling code rain streaks
      for (const s of streaks) {
        s.y += s.speed;
        if (s.y - s.length > height) {
          s.y = -s.length;
          s.x = Math.random() * width;
          s.speed = Math.random() * 2.2 + 1.2;
          s.length = Math.random() * 50 + 25;
        }

        const grad = ctx.createLinearGradient(s.x, s.y - s.length, s.x, s.y);
        grad.addColorStop(0, "rgba(6, 182, 212, 0)");
        grad.addColorStop(0.7, "rgba(34, 211, 238, 0.16)");
        grad.addColorStop(1, "rgba(180, 255, 245, 0.55)");

        ctx.beginPath();
        ctx.moveTo(s.x, s.y - s.length);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.stroke();
      }

      // Constellation nodes + connections
      ctx.shadowBlur = 0;
      const connectionMaxDist = 150;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 10 || a.x > width - 10) a.vx *= -1;
        if (a.y < 10 || a.y > height - 10) a.vy *= -1;

        a.glitchTimer--;
        if (a.glitchTimer <= 0) {
          a.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          a.glitchTimer = Math.floor(Math.random() * 250) + 60;
        }

        const dxM = mouse.x - a.x;
        const dyM = mouse.y - a.y;
        const distM = Math.hypot(dxM, dyM);
        const isNearMouse = mouse.isActive && distM < mouse.radius;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < connectionMaxDist) {
            const normDist = 1 - dist / connectionMaxDist;
            let lineAlpha = normDist * 0.46;
            const distMB = Math.hypot(mouse.x - b.x, mouse.y - b.y);
            if (mouse.isActive && (distM < mouse.radius || distMB < mouse.radius)) {
              lineAlpha = Math.min(0.45, lineAlpha + 0.18);
            }
            ctx.strokeStyle = `rgba(34, 211, 238, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        if (isNearMouse) {
          const proximity = 1 - distM / mouse.radius;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = "rgba(34, 211, 238, 0.45)";
          ctx.lineWidth = 1.2 * proximity + 0.5;
          ctx.stroke();
        }
      }

      // Characters
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (const node of nodes) {
        const dxM = mouse.x - node.x;
        const dyM = mouse.y - node.y;
        const distM = Math.hypot(dxM, dyM);
        const isNearMouse = mouse.isActive && distM < mouse.radius;

        node.pulseVal += node.pulseSpeed;
        const pulseAlpha = Math.sin(node.pulseVal) * 0.08 + node.baseAlpha;

        ctx.font = `600 ${node.fontSize}px 'JetBrains Mono', 'Fira Code', 'Courier New', monospace`;

        if (isNearMouse) {
          const proximity = 1 - distM / mouse.radius;
          const brightAlpha = Math.min(0.9, 0.35 + proximity * 0.55);
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 12 * proximity + 4;
          ctx.fillStyle = `rgba(186, 230, 253, ${brightAlpha})`;
          ctx.fillText(node.char, node.x, node.y);
          ctx.shadowBlur = 0;
        } else {
          ctx.shadowColor = "rgba(34, 211, 238, 0.6)";
          ctx.shadowBlur = 8;
          ctx.fillStyle = `rgba(34, 211, 238, ${Math.min(0.7, pulseAlpha + 0.4)})`;
          ctx.fillText(node.char, node.x, node.y);
          ctx.shadowBlur = 0;
        }
      }

      // Cursor anchor
      if (mouse.isActive) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#38bdf8";
        ctx.shadowColor = "#22d3ee";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const animate = () => {
      draw();
      rafId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (rafId === null) rafId = requestAnimationFrame(animate);
    };
    const stopAnimation = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) stopAnimation();
      else startAnimation();
    };

    resize();
    startAnimation();

    window.addEventListener("resize", debouncedResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (resizeTimer) clearTimeout(resizeTimer);
      stopAnimation();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-[#050708]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 120% 90% at 50% 50%, rgba(5,7,8,0) 0%, rgba(5,7,8,0.35) 60%, rgba(5,7,8,0.6) 100%)",
        }}
      />
    </>
  );
}
