import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-[100] grid h-12 w-12 place-items-center rounded-full border border-[rgba(0,73,215,0.3)] bg-[rgba(0,73,215,0.1)] text-[#0049D7] backdrop-blur transition hover:bg-[rgba(0,73,215,0.2)]"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
