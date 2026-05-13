import { useEffect, useState } from "react";
import { ChevronUp, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-[100] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.5)] animate-pulse-ring"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-[#FFFFFF] px-3 py-1.5 text-xs font-medium text-[#0B1B3D] opacity-0 shadow-lg transition group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}

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
