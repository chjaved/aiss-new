import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { industries, services, type IndustryMeta, type IndustrySlug } from "@/lib/site";
import { GlassCard } from "@/components/brand/GlassCard";
import { PrimaryButton, SecondaryButton } from "@/components/brand/Buttons";
import { SectionTag } from "@/components/brand/SectionTag";
import { ScrollReveal } from "@/components/brand/ScrollReveal";

const slugs = industries.map((i) => i.slug);

export const Route = createFileRoute("/industries/$slug")({
  beforeLoad: ({ params }: { params: { slug: string } }) => {
    if (!slugs.includes(params.slug as IndustrySlug)) throw notFound();
  },
  loader: ({ params }: { params: { slug: string } }) => {
    const ind = industries.find((i) => i.slug === params.slug)!;
    return { ind };
  },
  head: ({ loaderData }: { loaderData: { ind: IndustryMeta } }) => {
    const t = loaderData?.ind.name ?? "Industry";
    return {
      meta: [
        { title: `${t} Software Malaysia | AI Software Solution` },
        { name: "description", content: `${loaderData?.ind.short ?? ""} AI Software Solutions builds software for ${t.toLowerCase()} organisations across Malaysia.` },
        { property: "og:title", content: `${t} Software | AI Software Solutions` },
        { property: "og:description", content: loaderData?.ind.short ?? "" },
      ],
    };
  },
  component: IndustryDetailPage,
});

function IndustryDetailPage() {
  const { ind } = Route.useLoaderData() as { ind: IndustryMeta };
  const relatedServices = services.filter((s) => ind.relatedServices.includes(s.slug));
  const Ico = (Icons[ind.icon as keyof typeof Icons] ?? Icons.Box) as Icons.LucideIcon;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-mesh px-6 pt-16 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="text-xs text-[#5B6478]">
            <Link to="/" className="hover:text-[#0049D7]">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/industries" className="hover:text-[#0049D7]">Industries</Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B1B3D]">{ind.name}</span>
          </nav>
          <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <SectionTag>{ind.tagline}</SectionTag>
              <h1 className="mt-5 flex items-center gap-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0049D7]/10 text-[#0049D7]">
                  <Ico className="h-6 w-6" />
                </span>
                {ind.name}
              </h1>
              <p className="mt-5 max-w-xl text-[#5B6478] sm:text-lg">{ind.long}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton to="/contact" size="lg">
                  Discuss Your Project <Icons.ArrowRight className="h-4 w-4" />
                </PrimaryButton>
                <SecondaryButton to="/case-studies" size="lg">View Case Studies</SecondaryButton>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-[rgba(0,73,215,0.15)] shadow-[0_30px_80px_-20px_rgba(0,73,215,0.3)]">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="h-[360px] w-full object-cover sm:h-[440px]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-xl border border-[rgba(0,73,215,0.2)] bg-white p-4 shadow-xl">
                <div className="font-display text-2xl font-extrabold text-[#0049D7]">{ind.stats[0].value}</div>
                <div className="text-xs text-[#5B6478]">{ind.stats[0].label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[rgba(0,73,215,0.1)] bg-white px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {ind.stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.05}>
                <div className="text-center">
                  <div className="font-display text-3xl font-extrabold text-[#0049D7]">{s.value}</div>
                  <div className="mt-1 text-xs text-[#5B6478]">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES & SOLUTIONS */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div className="flex items-center gap-2">
              <Icons.AlertTriangle className="h-5 w-5 text-[#FFB400]" />
              <h2 className="font-display text-2xl font-bold text-[#0B1B3D]">Industry Challenges</h2>
            </div>
            <p className="mt-3 text-[#5B6478]">Common pain points {ind.name.toLowerCase()} organisations bring to us:</p>
            <ul className="mt-6 space-y-3">
              {ind.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-lg border border-[rgba(255,180,0,0.2)] bg-[rgba(255,180,0,0.04)] p-3.5">
                  <Icons.AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB400]" />
                  <span className="text-sm text-[#0B1B3D]">{c}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-2">
              <Icons.CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <h2 className="font-display text-2xl font-bold text-[#0B1B3D]">How We Help</h2>
            </div>
            <p className="mt-3 text-[#5B6478]">Tailored solutions we build for {ind.name.toLowerCase()} clients:</p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ind.solutions.map((s) => (
                <GlassCard key={s.title} className="h-full">
                  <h3 className="font-heading text-sm font-semibold text-[#0B1B3D]">{s.title}</h3>
                  <p className="mt-1.5 text-xs text-[#5B6478]">{s.desc}</p>
                </GlassCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-[#F4F7FB] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionTag>Services for {ind.name}</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
              Solutions Tailored for <span className="text-[#0049D7]">{ind.name}</span>
            </h2>
            <p className="mt-4 text-[#5B6478]">
              The services we deliver most often to {ind.name.toLowerCase()} clients.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((s, i) => (
              <ScrollReveal key={s.slug} delay={(i % 4) * 0.06}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group block h-full overflow-hidden rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white shadow-sm transition hover:shadow-xl"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/60 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0049D7]">
                      {s.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-sm font-semibold text-[#0B1B3D]">{s.title}</h3>
                    <p className="mt-1.5 text-xs text-[#5B6478] line-clamp-2">{s.short}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0049D7] transition group-hover:gap-2">
                      Learn more <Icons.ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden px-6 py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,73,215,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Ready to transform your <span className="text-gradient-cg">{ind.name.toLowerCase()}</span> operations?
          </h2>
          <p className="mt-4 text-[#5B6478]">Book a free 30-minute call. We'll listen first, then advise on your specific needs.</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton to="/contact" size="lg">
              Book My Free Demo <Icons.ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton to="/industries">View All Industries</SecondaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
