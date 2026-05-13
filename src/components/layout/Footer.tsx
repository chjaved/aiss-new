import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(0,73,215,0.1)] bg-[#F4F7FB] pt-16 pb-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-extrabold text-[#0049D7]">
              AI Software Solutions<span className="text-[#FFB400]">.</span>
            </span>
          </Link>
          <p className="mt-3 font-body text-sm text-[#5B6478]">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#5B6478]">
            Delivering AI-powered software solutions for government, enterprise, and healthcare organisations across Malaysia. From intelligent automation to secure document systems - we build what matters.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: MessageCircle, label: "WhatsApp" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-[#0B1B3D]/10 text-[#5B6478] transition hover:border-[rgba(0,73,215,0.3)] hover:text-[#0049D7]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5B6478]">
            Our Services
          </h4>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm text-[#5B6478] transition hover:text-[#0B1B3D]"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5B6478]">
            Company
          </h4>
          <ul className="mt-4 space-y-2.5">
            {[
              ["/about", "About Us"],
              ["/services", "Our Services"],
              ["/industries", "Industries"],
              ["/case-studies", "Case Studies"],
              ["/blog", "Blog & Insights"],
              ["/careers", "Careers"],
              ["/contact", "Contact Us"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-[#5B6478] transition hover:text-[#0B1B3D]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5B6478]">
            Get In Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-[#5B6478]">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0049D7]" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-[#0049D7]" />
              <a href={site.phoneHref} className="hover:text-[#0B1B3D]">{site.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-[#0049D7]" />
              <a href={`mailto:${site.email}`} className="hover:text-[#0B1B3D]">{site.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-[#0049D7]" />
              <span>{site.hours}</span>
            </li>
          </ul>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(37,211,102,0.3)] transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-[#0B1B3D]/10 px-6 pt-6 text-xs text-[#5B6478] sm:flex-row">
        <p>© {new Date().getFullYear()} AI Software Solution Sdn. Bhd. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <Link to="/privacy-policy" className="hover:text-[#0B1B3D]">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-[#0B1B3D]">Terms of Service</Link>
          <Link to="/cookie-policy" className="hover:text-[#0B1B3D]">Cookie Policy</Link>
          <Link to="/careers" className="hover:text-[#0B1B3D]">Careers</Link>
          <a href="#" className="hover:text-[#0B1B3D]">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
