import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useState, useEffect } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header";
}

export function ScrollReveal({ children, delay = 0, y = 30, className, as = "div" }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduced = useReducedMotion();
  const MotionTag = motion[as];
  const Tag = as;

  if (!mounted) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
