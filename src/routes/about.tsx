import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Heart, Building2, Users, Award, Lightbulb, Target } from "lucide-react";
import { GlassCard } from "@/components/brand/GlassCard";
import { PrimaryButton, SecondaryButton } from "@/components/brand/Buttons";
import { SectionTag } from "@/components/brand/SectionTag";
import { ScrollReveal } from "@/components/brand/ScrollReveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AI Software Solutions | Malaysian AI Software Company in Petaling Jaya" },
      { name: "description", content: "AI Software Solutions is a Petaling Jaya-based AI software company building intelligent systems for Malaysian government, enterprise & healthcare since 2019." },
      { property: "og:title", content: "About AI Software Solution" },
      { property: "og:description", content: "We build AI that serves Malaysia. Local team. Real expertise." },
    ],
  }),
  component: About,
});

function About() {
  const milestones = [
    ["2019", "Company founded; first government project delivered"],
    ["2021", "Launched SmartForce DMS; first hospital deployment"],
    ["2023", "Expanded into healthcare and defence sectors"],
    ["2025", "50+ projects delivered across 10+ industries"],
  ];
  const values = [
    { Icon: Award, t: "Integrity", d: "We do what we say. Transparent pricing, honest timelines, no surprises." },
    { Icon: Lightbulb, t: "Innovation", d: "We pair proven engineering with the latest AI capabilities - without hype." },
    { Icon: Target, t: "Impact", d: "Software that moves real metrics for real Malaysian organisations." },
  ];
  return (
    <>
      <section className="bg-mesh px-6 pt-16 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTag>About AI Software Solutions</SectionTag>
          <h1 className="mt-5 font-display text-4xl font-extrabold sm:text-5xl">
            We Build AI That <span className="text-gradient-cg">Serves Malaysia</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[#5B6478]">
            AI Software Solutions is a Petaling Jaya-based technology company delivering AI-powered software solutions for government, enterprise, and healthcare. We combine deep technical expertise with local market understanding to build systems that actually work - and keep working.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <ScrollReveal><GlassCard className="h-full">
            <h2 className="font-display text-2xl font-bold text-[#0049D7]">Our Mission</h2>
            <p className="mt-3 text-[#5B6478]">To make AI-driven software accessible and practical for every Malaysian organisation, regardless of size or sector.</p>
          </GlassCard></ScrollReveal>
          <ScrollReveal delay={0.1}><GlassCard className="h-full">
            <h2 className="font-display text-2xl font-bold text-[#FFB400]">Our Vision</h2>
            <p className="mt-3 text-[#5B6478]">To be the most trusted AI software partner for public and private sector digital transformation in Southeast Asia.</p>
          </GlassCard></ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F4F7FB] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <SectionTag>Our Story</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">From a Small Studio to a Trusted Partner</h2>
          </div>

          {/* Timeline Infographic */}
          <div className="relative mt-16">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#0049D7] via-[#FFB400] to-[#0049D7]" />

            {/* Timeline Items */}
            <div className="relative space-y-12">
              {[
                { year: "2019", title: "The Beginning", desc: "Company founded in Petaling Jaya. First government project delivered - a document digitization system for a federal agency.", icon: Building2, color: "#0049D7", position: "left" },
                { year: "2021", title: "SmartForce Launch", desc: "Launched SmartForce DMS, our proprietary AI document management system. First hospital deployment at a major KL healthcare facility.", icon: Lightbulb, color: "#FFB400", position: "right" },
                { year: "2023", title: "Sector Expansion", desc: "Expanded into healthcare and defence sectors. Team grew to 25+ engineers. Opened dedicated AI research division.", icon: Users, color: "#0049D7", position: "left" },
                { year: "2025", title: "Trusted Partner", desc: "50+ projects delivered across 10+ industries. Recognized as a leading AI software provider for Malaysian government and enterprise.", icon: Award, color: "#FFB400", position: "right" },
              ].map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.15}>
                  <div className={`relative flex items-center ${item.position === "left" ? "flex-row" : "flex-row-reverse"} gap-8`}>
                    {/* Content Card */}
                    <div className={`w-[45%] ${item.position === "left" ? "text-right" : "text-left"}`}>
                      <div className={`rounded-2xl border border-[rgba(0,73,215,0.15)] bg-white p-6 shadow-lg transition hover:shadow-xl ${item.position === "left" ? "ml-auto" : "mr-auto"}`}>
                        <span className="inline-block rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                          {item.year}
                        </span>
                        <h3 className="mt-3 font-display text-xl font-bold text-[#0B1B3D]">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#5B6478]">{item.desc}</p>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="absolute left-1/2 z-10 -translate-x-1/2">
                      <div className="relative">
                        <div className="grid h-14 w-14 place-items-center rounded-full border-4 border-white shadow-lg" style={{ backgroundColor: item.color }}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 -z-10 animate-ping rounded-full opacity-20" style={{ backgroundColor: item.color }} />
                      </div>
                    </div>

                    {/* Empty Space for opposite side */}
                    <div className="w-[45%]" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Milestone Stats */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "6+", label: "Years of Excellence" },
              { value: "50+", label: "Projects Delivered" },
              { value: "25+", label: "Team Members" },
              { value: "10+", label: "Industries Served" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="rounded-xl bg-white p-5 text-center shadow-md">
                  <div className="font-display text-3xl font-extrabold text-[#0049D7]">{stat.value}</div>
                  <div className="mt-1 text-xs text-[#5B6478]">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionTag>Core Values</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">What Guides Our Work</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <ScrollReveal key={v.t} delay={i * 0.08}><GlassCard className="h-full">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[rgba(0,73,215,0.1)] text-[#0049D7]"><v.Icon className="h-5 w-5" /></span>
                <h3 className="mt-4 font-heading text-lg font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-[#5B6478]">{v.d}</p>
              </GlassCard></ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FB] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionTag>Leadership</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">The People Behind AI Software Solutions</h2>
            <p className="mt-3 text-xs uppercase tracking-widest text-[#5B6478]">Placeholder - replace with real team photos</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {["Leadership","Engineering","Operations"].map((r, i) => (
              <GlassCard key={r} className="text-center">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[#0049D7] to-[#FFB400] font-display text-xl font-bold text-[#FFFFFF]">TM{i+1}</div>
                <h3 className="mt-4 font-heading font-semibold">Team Member</h3>
                <p className="text-sm text-[#5B6478]">{r}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Want to know more?</h2>
        <p className="mx-auto mt-3 max-w-md text-[#5B6478]">Book a discovery call and meet the team.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <PrimaryButton to="/contact" size="lg">Book a Free Demo</PrimaryButton>
          <SecondaryButton to="/services">View Our Services</SecondaryButton>
        </div>
      </section>
    </>
  );
}
