import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  href?: string;
  external?: boolean;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-7 py-3.5 text-[15px]",
  lg: "px-9 py-4 text-base",
};

function asLinkOrButton({ to, href, external, className, children, ...rest }: BtnProps & { className: string }) {
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

export function PrimaryButton({ className, size = "md", ...props }: BtnProps) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-bold font-heading bg-[#0049D7] text-white shadow-[0_10px_24px_-8px_rgba(0,73,215,0.55)]",
    "transition-all duration-300 hover:bg-[#0039AE] hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-10px_rgba(0,73,215,0.55)]",
    "active:translate-y-0",
    sizes[size],
    className,
  );
  return asLinkOrButton({ ...props, className: cls });
}

export function SecondaryButton({ className, size = "md", ...props }: BtnProps) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold font-heading bg-white text-[#0B1B3D] border-[1.5px] border-[#0B1B3D]/15",
    "transition-all duration-300 hover:border-[#0049D7] hover:text-[#0049D7]",
    sizes[size],
    className,
  );
  return asLinkOrButton({ ...props, className: cls });
}
