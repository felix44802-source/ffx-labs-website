// PROTOTYPE — throwaway route to sanity-check the landing page layout.
// Three variants of the Fx Labs landing page, switchable via ?variant=A|B|C.

"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PrototypeSwitcher } from "./PrototypeSwitcher";
import { VariantA } from "./VariantA";
import { VariantB } from "./VariantB";
import { VariantC } from "./VariantC";

function PrototypeContent() {
  const searchParams = useSearchParams();
  const variant = searchParams.get("variant") ?? "A";

  return (
    <>
      {variant === "A" && <VariantA />}
      {variant === "B" && <VariantB />}
      {variant === "C" && <VariantC />}
      <PrototypeSwitcher current={variant} />
    </>
  );
}

export default function PrototypeLandingPage() {
  return (
    <Suspense fallback={null}>
      <PrototypeContent />
    </Suspense>
  );
}
