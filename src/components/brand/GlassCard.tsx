import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  accent?: "none" | "cyan" | "gold";
}

export function GlassCard({ hover = true, accent = "none", className, children, ...rest }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 relative",
        hover && "glass-hover",
        accent === "cyan" && "border-l-2 border-l-[#0049D7]",
        accent === "gold" && "before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-[#FFB400] before:rounded-t-2xl",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
