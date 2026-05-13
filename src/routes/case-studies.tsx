import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, TrendingUp, Clock, Users } from "lucide-react";
import { PrimaryButton } from "@/components/brand/Buttons";
import { SectionTag } from "@/components/brand/SectionTag";
import { ScrollReveal } from "@/components/brand/ScrollReveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | AI Software Solution Malaysia" },
      { name: "description", content: "Real AI software projects delivered by AI Software Solutions for Malaysian government, healthcare, and enterprise clients. Measurable results." },
      { property: "og:title", content: "AI Software Solutions Case Studies - Real Results" },
      { property: "og:description", content: "See how Malaysian organisations transformed with AI Software Solutions." },
    ],
  }),
  component: CaseStudies,
});

const UNSPLASH = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

const cases = [
  {
    slug: "federal-document-modernisation",
    industry: "Government",
    title: "Federal Document Modernisation",
    client: "Ministry of Home Affairs",
    summary: "Transformed 2.5M paper records into a searchable AI-powered digital archive with 60% storage savings.",
    result: "60% storage cut · 95% faster retrieval",
    metric: "60%",
    metricLabel: "Storage Saved",
    duration: "8 months",
    team: "6 engineers",
    image: UNSPLASH("photo-1450101499163-c8848c66ca85"),
  },
  {
    slug: "healthcare-operations",
    industry: "Healthcare",
    title: "Hospital Operations Platform",
    client: "Private Hospital KL",
    summary: "Unified 7 disconnected hospital systems into a single HIS, cutting patient processing time by 40%.",
    result: "40% faster patient processing",
    metric: "40%",
    metricLabel: "Time Reduction",
    duration: "12 months",
    team: "8 engineers",
    image: UNSPLASH("photo-1538108149393-fbbd81895907"),
  },
  {
    slug: "logistics-fleet",
    industry: "Logistics",
    title: "Real-Time Fleet Visibility",
    client: "National Logistics Provider",
    summary: "Connected 200+ vehicles with IoT sensors and predictive maintenance ML, slashing downtime.",
    result: "35% less downtime, 22% fuel savings",
    metric: "35%",
    metricLabel: "Less Downtime",
    duration: "6 months",
    team: "5 engineers",
    image: UNSPLASH("photo-1601584115197-04ecc0da31d7"),
  },
  {
    slug: "manufacturing-automation",
    industry: "Manufacturing",
    title: "Smart Factory Automation",
    client: "Penang Electronics Manufacturer",
    summary: "Deployed computer vision AI for automated quality control, catching defects in real-time.",
    result: "85% defect reduction, 3x faster QC",
    metric: "85%",
    metricLabel: "Defect Reduction",
    duration: "10 months",
    team: "7 engineers",
    image: UNSPLASH("photo-1565793298595-6a879b1d9492"),
  },
  {
    slug: "government-citizen-portal",
    industry: "Government",
    title: "Citizen Service Portal",
    client: "State Government Agency",
    summary: "Brought 50+ government services online for 500K+ citizens via MyDigital ID integration.",
    result: "70% of services now online",
    metric: "70%",
    metricLabel: "Online Services",
    duration: "14 months",
    team: "9 engineers",
    image: UNSPLASH("photo-1486406146926-c627a92ad1ab"),
  },
  {
    slug: "fintech-kyc-automation",
    industry: "Finance",
    title: "AI-Powered KYC Automation",
    client: "Regional Digital Bank",
    summary: "Built an AI identity verification system that processes customer onboarding in minutes, not days.",
    result: "92% onboarding completion rate",
    metric: "92%",
    metricLabel: "Completion Rate",
    duration: "9 months",
    team: "6 engineers",
    image: UNSPLASH("photo-1563013544-824ae1b704d3"),
  },
];

function CaseStudies() {
  // Featured (first) + rest
  const featured = cases[0];
  const rest = cases.slice(1);

  return (
    <>
      <section className="bg-mesh px-6 pt-16 pb-16 text-center">
        <SectionTag>Case Studies</SectionTag>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold sm:text-5xl">
          Real Projects. <span className="text-gradient-cg">Measurable Results.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[#5B6478]">
          See how we've helped Malaysian organisations transform with AI-powered software solutions.
        </p>
      </section>

      {/* Featured large card */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Link
              to="/case-studies/$slug"
              params={{ slug: featured.slug }}
              className="group block overflow-hidden rounded-3xl border border-[rgba(0,73,215,0.12)] bg-white shadow-md transition hover:shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[280px] overflow-hidden lg:h-auto lg:min-h-[400px]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/30 lg:to-white/0" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0049D7]">
                    Featured · {featured.industry}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <h2 className="font-display text-2xl font-extrabold text-[#0B1B3D] sm:text-3xl group-hover:text-[#0049D7] transition">
                    {featured.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-[#5B6478]">{featured.client}</p>
                  <p className="mt-5 text-[#0B1B3D]/80">{featured.summary}</p>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-[#F4F7FB] p-3 text-center">
                      <div className="font-display text-2xl font-extrabold text-[#FFB400]">{featured.metric}</div>
                      <div className="text-[10px] uppercase tracking-wide text-[#5B6478]">{featured.metricLabel}</div>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-xl bg-[#F4F7FB] p-3 text-center">
                      <Clock className="h-4 w-4 text-[#0049D7]" />
                      <div className="mt-1 text-xs font-semibold text-[#0B1B3D]">{featured.duration}</div>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-xl bg-[#F4F7FB] p-3 text-center">
                      <Users className="h-4 w-4 text-[#0049D7]" />
                      <div className="mt-1 text-xs font-semibold text-[#0B1B3D]">{featured.team}</div>
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0049D7] transition group-hover:gap-3">
                    Read full case study <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Rest of case studies grid */}
      <section className="px-6 pb-24 pt-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((c, i) => (
            <ScrollReveal key={c.slug} delay={(i % 3) * 0.08}>
              <Link
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white shadow-sm transition hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/60 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0049D7]">
                    {c.industry}
                  </span>
                  <div className="absolute right-3 top-3 rounded-xl border border-white/40 bg-[#FFB400] px-3 py-1.5 shadow-lg">
                    <div className="font-display text-lg font-extrabold text-white">{c.metric}</div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-display text-lg font-bold text-[#0B1B3D] group-hover:text-[#0049D7] transition">
                    {c.title}
                  </h2>
                  <p className="mt-1 text-xs text-[#5B6478]">{c.client}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#0B1B3D]/80 line-clamp-3">{c.summary}</p>

                  <div className="mt-4 flex items-start gap-2 rounded-lg bg-[rgba(0,73,215,0.05)] p-2.5">
                    <TrendingUp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0049D7]" />
                    <span className="text-xs font-medium text-[#0B1B3D]">{c.result}</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#0B1B3D]/10 pt-3">
                    <div className="flex gap-3 text-[10px] text-[#5B6478]">
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {c.duration}</span>
                      <span className="inline-flex items-center gap-1"><Users className="h-3 w-3" /> {c.team}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0049D7] group-hover:gap-2 transition-all">
                      Read <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0049D7]/5 via-white to-[#FFB400]/5 p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-[#0B1B3D] sm:text-3xl">Have a similar challenge?</h2>
          <p className="mt-2 text-[#5B6478]">Let's discuss how AI Software Solutions can help transform your organisation.</p>
          <div className="mt-6">
            <PrimaryButton to="/contact" size="lg">
              Book Your Free Demo <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
