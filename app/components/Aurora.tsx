// CSS-only aurora/smoke effect behind the hero — no external libs.

export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="aurora-blob left-[10%] top-[10%] h-[420px] w-[420px] bg-accent-2"
        style={{ animation: "aurora-drift-1 18s ease-in-out infinite" }}
      />
      <div
        className="aurora-blob right-[10%] top-[5%] h-[480px] w-[480px] bg-accent"
        style={{ animation: "aurora-drift-2 22s ease-in-out infinite" }}
      />
      <div
        className="aurora-blob bottom-[0%] left-[30%] h-[400px] w-[400px] bg-accent-3"
        style={{ animation: "aurora-drift-3 26s ease-in-out infinite" }}
      />
      <div
        className="aurora-blob bottom-[10%] right-[20%] h-[300px] w-[300px] bg-accent-4 opacity-30"
        style={{ animation: "aurora-drift-1 20s ease-in-out infinite reverse" }}
      />
      <div className="absolute inset-0 bg-background/40" />
    </div>
  );
}
