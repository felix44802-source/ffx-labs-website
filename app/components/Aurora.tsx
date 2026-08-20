export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Dark Forest Emerald Ambient Blob */}
      <div
        className="aurora-blob left-[15%] top-[10%] h-[500px] w-[500px] bg-[#0c2e1c]"
        style={{ animation: "aurora-drift-1 22s ease-in-out infinite" }}
      />
      {/* Deep Gold / Amber Ambient Blob */}
      <div
        className="aurora-blob right-[15%] top-[5%] h-[450px] w-[450px] bg-[#2a200a]"
        style={{ animation: "aurora-drift-2 26s ease-in-out infinite" }}
      />
      {/* Subtle overlay for deep dark integration */}
      <div className="absolute inset-0 bg-[#060907]/60" />
    </div>
  );
}

