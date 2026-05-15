import { Link } from "@tanstack/react-router";
import { useRef } from "react";

import { Menu, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
import { services, industries, site } from "@/lib/site";
import { PrimaryButton } from "@/components/brand/Buttons";
import * as Icons from "lucide-react";

import logoUrl from "@/assets/aiss-logo.png";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="AI Software Solutions">
      <img
        src={logoUrl}
        alt="AISS logo"
        className="h-12 w-auto sm:h-14 drop-shadow-[0_0_18px_rgba(0,73,215,0.35)] transition group-hover:drop-shadow-[0_0_22px_rgba(255,90,60,0.45)]"
      />
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-[11px] uppercase tracking-[0.22em] text-[#5B6478]">
          AI Software Solutions
        </span>
      </span>
    </Link>
  );
}

function ServicesMega() {
  return (
    <div className="rounded-2xl border border-[rgba(0,73,215,0.15)] bg-white p-6 shadow-[0_24px_60px_-12px_rgba(11,27,61,0.25)]">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-heading text-[11px] uppercase tracking-[0.18em] text-[#5B6478]">Our Services</span>
        <Link to="/services" className="inline-flex items-center gap-1 font-heading text-xs text-[#0049D7] hover:underline">
          View all <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {services.map((s) => {
          const Ico = (Icons[s.iconName as keyof typeof Icons] ?? Icons.Box) as Icons.LucideIcon;
          return (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}
              className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[rgba(0,73,215,0.06)]">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[rgba(0,73,215,0.08)] text-[#0049D7] transition-colors group-hover/item:bg-[rgba(0,73,215,0.15)]">
                <Ico className="h-4 w-4" />
              </span>
              <span className="flex flex-col">
                <span className="font-heading text-sm font-semibold text-[#0B1B3D]">{s.title}</span>
                <span className="line-clamp-1 text-xs text-[#5B6478]">{s.short}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function IndustriesMega() {
  return (
    <div className="rounded-2xl border border-[rgba(0,73,215,0.15)] bg-white p-6 shadow-[0_24px_60px_-12px_rgba(11,27,61,0.25)]">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-heading text-[11px] uppercase tracking-[0.18em] text-[#5B6478]">Industries We Serve</span>
        <Link to="/industries" className="inline-flex items-center gap-1 font-heading text-xs text-[#0049D7] hover:underline">
          View all <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {industries.map((ind) => {
          const Ico = (Icons[ind.icon as keyof typeof Icons] ?? Icons.Box) as Icons.LucideIcon;
          return (
            <Link key={ind.slug} to="/industries/$slug" params={{ slug: ind.slug }}
              className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[rgba(0,73,215,0.06)]">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[rgba(0,73,215,0.08)] text-[#0049D7] transition-colors group-hover/item:bg-[rgba(0,73,215,0.15)]">
                <Ico className="h-4 w-4" />
              </span>
              <span className="flex flex-col">
                <span className="font-heading text-sm font-semibold text-[#0B1B3D]">{ind.name}</span>
                <span className="line-clamp-1 text-xs text-[#5B6478]">{ind.short}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function Navbar() {
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  function toggle() {
    const menu = menuRef.current;
    const btn = btnRef.current;
    if (!menu) return;
    // CSS hides it by default, so if display is empty string, it's hidden
    const isOpen = menu.style.display === "block";
    menu.style.display = isOpen ? "" : "block";
    if (btn) btn.setAttribute("data-open", isOpen ? "false" : "true");
  }

  function close() {
    if (menuRef.current) menuRef.current.style.display = "";
    if (btnRef.current) btnRef.current.setAttribute("data-open", "false");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(0,73,215,0.08)] bg-white shadow-[0_4px_24px_-12px_rgba(11,27,61,0.12)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          <li>
            <Link to="/" className="rounded-md px-3 py-2 font-heading text-sm font-medium text-[#0B1B3D] transition hover:text-[#0049D7]" activeProps={{ className: "text-[#0049D7]" }} activeOptions={{ exact: true }}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="rounded-md px-3 py-2 font-heading text-sm font-medium text-[#0B1B3D] transition hover:text-[#0049D7]" activeProps={{ className: "text-[#0049D7]" }}>About</Link>
          </li>
          <li className="group relative">
            <Link to="/services" className="inline-flex items-center gap-1 rounded-md px-3 py-2 font-heading text-sm font-medium text-[#0B1B3D] transition hover:text-[#0049D7]" activeProps={{ className: "text-[#0049D7]" }}>
              Services <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </Link>
            <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-[min(760px,92vw)] -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
              <ServicesMega />
            </div>
          </li>
          <li className="group relative">
            <Link to="/industries" className="inline-flex items-center gap-1 rounded-md px-3 py-2 font-heading text-sm font-medium text-[#0B1B3D] transition hover:text-[#0049D7]" activeProps={{ className: "text-[#0049D7]" }}>
              Industries <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </Link>
            <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-[min(760px,92vw)] -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
              <IndustriesMega />
            </div>
          </li>
          <li>
            <Link to="/case-studies" className="rounded-md px-3 py-2 font-heading text-sm font-medium text-[#0B1B3D] transition hover:text-[#0049D7]" activeProps={{ className: "text-[#0049D7]" }}>Case Studies</Link>
          </li>
          <li>
            <Link to="/contact" className="rounded-md px-3 py-2 font-heading text-sm font-medium text-[#0B1B3D] transition hover:text-[#0049D7]" activeProps={{ className: "text-[#0049D7]" }}>Contact</Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <PrimaryButton to="/contact" size="sm">
              Book Free Demo <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>

          <button
            ref={btnRef}
            type="button"
            data-open="false"
            onClick={toggle}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(0,73,215,0.25)] bg-white text-[#0049D7] lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile drawer — hidden via CSS (#mobile-nav-menu), NOT a React style prop */}
      <div
        ref={menuRef}
        id="mobile-nav-menu"
      >
        <div style={{ borderTop: "1px solid rgba(0,73,215,0.1)", background: "#fff", padding: "8px 20px 24px" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/industries", label: "Industries" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to} style={{ borderBottom: "1px solid rgba(0,73,215,0.08)" }}>
                <Link
                  to={l.to}
                  onClick={close}
                  style={{ display: "block", padding: "12px 0", fontSize: "16px", fontWeight: 700, color: "#0B1B3D", textDecoration: "none" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <PrimaryButton to="/contact" size="md">Book Free Demo</PrimaryButton>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", borderRadius: "9999px", background: "#25D366", padding: "12px 24px", fontWeight: 700, color: "#fff", textDecoration: "none" }}
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
