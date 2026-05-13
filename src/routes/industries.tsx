import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { industries } from "@/lib/site";
import { PrimaryButton } from "@/components/brand/Buttons";
import { SectionTag } from "@/components/brand/SectionTag";
import { ScrollReveal } from "@/components/brand/ScrollReveal";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | AI Software Solution Malaysia" },
      { name: "description", content: "AI Software Solutions builds software for government, healthcare, manufacturing, logistics, finance, education, legal, and defence sectors in Malaysia." },
      { property: "og:title", content: "Industries Served | AI Software Solutions" },
      { property: "og:description", content: "Software built for your industry - by a Malaysian team." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <section className="bg-mesh px-6 pt-16 pb-16 text-center">
        <SectionTag>Who We Serve</SectionTag>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold sm:text-5xl">
          Software Built for <span className="text-gradient-cg">Your Industry</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[#5B6478]">
          Eight sectors. One Malaysian team. Each solution shaped to the regulations, workflows, and language of your industry.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const Ico = (Icons[ind.icon as keyof typeof Icons] ?? Icons.Box) as Icons.LucideIcon;
            return (
              <ScrollReveal key={ind.slug} delay={(i % 4) * 0.06}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: ind.slug }}
                  className="group block h-full overflow-hidden rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white shadow-sm transition hover:shadow-xl"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/75 via-[#0B1B3D]/20 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-[#0049D7] shadow-lg">
                      <Ico className="h-5 w-5" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FFB400]">{ind.tagline}</span>
                      <h2 className="mt-0.5 font-display text-xl font-bold text-white">{ind.name}</h2>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-[#5B6478]">{ind.short}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0049D7] transition group-hover:gap-2">
                      Explore solutions <Icons.ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <PrimaryButton to="/contact" size="lg">Discuss Your Industry</PrimaryButton>
        </div>
      </section>
    </>
  );
}
