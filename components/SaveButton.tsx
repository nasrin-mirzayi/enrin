"use client";

import {
  Bookmark,
  BookmarkCheck,
} from "lucide-react";

import { useOpportunities } from "@/context/OpportunityContext";

export default function SaveButton({
  id,
}: {
  id: string;
}) {
  const {
    saved,
    toggleSave,
  } = useOpportunities();

  const active = saved.includes(id);

  return (
    <button
      onClick={() => toggleSave(id)}
      aria-label={
        active
          ? "Remove from saved"
          : "Save opportunity"
      }
      title={
        active
          ? "Remove from saved"
          : "Save opportunity"
      }
      className={`flex h-10 w-10 items-center justify-center rounded-xl border transition
        ${active
          ? `
      border-[#67E8F9] bg-[#A5F3FC]/30 text-[#0891B2] dark:text-[#67E8F9]
`            : `
      border-[#67E8F9]/70 bg-white/30 text-[#0891B2] hover:bg-[#A5F3FC]/30 dark:bg-zinc-900/40 dark:text-[#67E8F9]
`         }
      `}
    >
      {active ? (<BookmarkCheck className="h-5 w-5" />
      ) : (<Bookmark className="h-5 w-5" />
      )} </button>
  );
}
