import type { Lead, RecordLead } from "./contact";

// MVP stub — logs the Lead server-side. Swap for email/DB once that's decided.
let leadCount = 0;

export const recordLead: RecordLead = async (lead: Lead) => {
  const id = `lead_${++leadCount}`;
  console.log("[Lead]", { id, ...lead });
  return { id };
};
