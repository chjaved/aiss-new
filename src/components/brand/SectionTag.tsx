import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionTag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]",
        "bg-[rgba(0,73,215,0.08)] text-[#0049D7] border border-[rgba(0,73,215,0.3)]",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#0049D7] shadow-[0_0_8px_rgba(0,73,215,0.8)]" />
      {children}
    </span>
  );
}
