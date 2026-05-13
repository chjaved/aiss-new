import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase, MapPin, Clock, ArrowRight, Sparkles, Heart, Rocket, Coffee,
  GraduationCap, Globe, Zap, Users, Trophy, Code2, Brain,
} from "lucide-react";
import { PrimaryButton } from "@/components/brand/Buttons";
import { site } from "@/lib/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at AI Software Solutions | Build the Future of Malaysian AI" },
      { name: "description", content: "Join AI Software Solutions - Malaysia's leading AI software company. We hire engineers and operators who want to build software that matters." },
      { property: "og:title", content: "Careers at AI Software Solutions" },
    ],
  }),
  component: Careers,
});

function Careers() {
  const roles = [
    { t: "Senior Software Engineer (AI/ML)", type: "Full-time", loc: "Petaling Jaya · Hybrid", dept: "Engineering", lvl: "Senior" },
    { t: "Full-Stack Engineer", type: "Full-time", loc: "Petaling Jaya · Hybrid", dept: "Engineering", lvl: "Mid-Senior" },
    { t: "Product Designer", type: "Full-time", loc: "Petaling Jaya · Hybrid", dept: "Design", lvl: "Mid-Senior" },
    { t: "DevOps Engineer", type: "Full-time", loc: "Petaling Jaya · Remote OK", dept: "Engineering", lvl: "Senior" },
    { t: "Business Development Executive", type: "Full-time", loc: "Petaling Jaya", dept: "Growth", lvl: "Mid" },
    { t: "Technical Project Manager", type: "Full-time", loc: "Petaling Jaya", dept: "Delivery", lvl: "Senior" },
  ];

  const benefits = [
    { Icon: Heart, t: "Health & Wellness", d: "Comprehensive medical, dental, and mental health coverage for you and dependents." },
    { Icon: GraduationCap, t: "Learning Budget", d: "RM 5,000 annual budget for courses, books, conferences, and certifications." },
    { Icon: Rocket, t: "Real Ownership", d: "Lead projects end-to-end. Your work ships and impacts real Malaysian organisations." },
    { Icon: Coffee, t: "Flexible Hours", d: "Hybrid by default. Async-first. We trust outcomes, not seat-time." },
    { Icon: Trophy, t: "Performance Bonus", d: "Quarterly profit sharing plus annual performance bonus. We win, you win." },
    { Icon: Globe, t: "Top Equipment", d: "MacBook Pro or equivalent + monitor + accessories. Whatever you need to ship." },
  ];

  const values = [
    { Icon: Zap, t: "Move with Urgency", d: "We ship fast and iterate. Speed without sloppiness is our edge." },
    { Icon: Brain, t: "Learn Relentlessly", d: "The AI landscape changes weekly. Curiosity is non-negotiable." },
    { Icon: Users, t: "Care Deeply", d: "About each other, our clients, and the craft. No room for ego." },
    { Icon: Code2, t: "Build for Real Impact", d: "We pick work that matters - government, healthcare, infrastructure." },
  ];

  return (
    <>
      {/* HERO — Cinematic */}
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-[#0B1B3D] px-6 pt-24 pb-20 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#0B1B3D]/85 via-[#0B1B3D]/70 to-[#0B1B3D]/95" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#0B1B3D]/95 via-[#0B1B3D]/30 to-transparent" />
        <div className="pointer-events-none absolute -left-40 top-1/4 z-10 h-96 w-96 rounded-full bg-[#0049D7] opacity-30 blur-[160px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 z-10 h-[24rem] w-[24rem] rounded-full bg-[#FFB400] opacity-15 blur-[180px]" />

        <div className="relative z-20 mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#FFB400] opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-[#FFB400]" />
            </span>
            We're hiring · 6 open roles
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,6.5vw,5rem)] font-extrabold leading-[1.02] tracking-tight">
            Build the Future of{" "}
            <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD66B] to-[#FFB400] bg-clip-text text-transparent">
              Malaysian AI
            </span>{" "}
            — With Us.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Small team. Real autonomy. Big projects that ship to government, healthcare,
            and enterprise. We hire for craft, curiosity, and the bias to ship.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#open-roles" className="group inline-flex items-center gap-2 rounded-full bg-[#FFB400] px-8 py-4 font-bold text-[#0B1B3D] shadow-[0_12px_40px_-8px_rgba(255,180,0,0.6)] transition hover:-translate-y-0.5 hover:bg-white">
              See Open Roles <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:border-white/60 hover:bg-white/10">
              Email Us Your CV
            </a>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(0,73,215,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0049D7]">
              <Sparkles className="h-3 w-3" /> Our Values
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl text-[#0B1B3D]">
              How We <span className="text-gradient-cg">Work Together</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="group relative overflow-hidden rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#FFB400]/40 hover:shadow-xl">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#0049D7] to-[#FFB400] transition-transform duration-500 group-hover:scale-x-100" />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[rgba(0,73,215,0.08)] text-[#0049D7] transition group-hover:bg-[#0049D7] group-hover:text-white">
                  <v.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-[#0B1B3D]">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B6478]">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F4F7FB] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,180,0,0.15)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B07A00]">
              <Heart className="h-3 w-3" /> Benefits
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl text-[#0B1B3D]">
              Why Join <span className="text-gradient-cg">AI Software Solutions</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#5B6478]">
              We invest in our team because great software comes from great people.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.t} className="rounded-2xl border border-[rgba(0,73,215,0.08)] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#0049D7] to-[#0066FF] text-white shadow-[0_8px_24px_-8px_rgba(0,73,215,0.5)]">
                  <b.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-[#0B1B3D]">{b.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B6478]">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="open-roles" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(0,73,215,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0049D7]">
              <Briefcase className="h-3 w-3" /> Open Roles
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl text-[#0B1B3D]">
              Currently <span className="text-gradient-cg">Hiring</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#5B6478]">
              Don't see your role? We're always interested in exceptional people.
            </p>
          </div>

          <div className="mt-14 space-y-3">
            {roles.map((r) => (
              <a
                key={r.t}
                href={`mailto:${site.email}?subject=Application: ${r.t}`}
                className="group flex flex-col items-start gap-4 rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0049D7]/40 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded-full bg-[rgba(0,73,215,0.08)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#0049D7]">{r.dept}</span>
                    <span className="inline-block rounded-full bg-[rgba(255,180,0,0.15)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#B07A00]">{r.lvl}</span>
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-[#0B1B3D] group-hover:text-[#0049D7]">{r.t}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-[#5B6478]">
                    <span className="inline-flex items-center gap-1"><Briefcase className="h-3 w-3" /> {r.type}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.loc}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> Open now</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0049D7] px-5 py-2.5 text-sm font-semibold text-white transition group-hover:gap-3 group-hover:bg-[#FFB400] group-hover:text-[#0B1B3D]">
                  Apply <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 overflow-hidden rounded-3xl border border-[rgba(0,73,215,0.15)] bg-gradient-to-br from-[#0B1B3D] to-[#0049D7] p-10 text-center text-white">
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">Not the right role — yet?</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/75">
              Send us your CV anyway. We're building a team for the next 5 years, not just today.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <PrimaryButton href={`mailto:${site.email}?subject=General Application`}>
                Email Us Your CV <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
