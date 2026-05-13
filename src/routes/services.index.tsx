import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { services } from "@/lib/site";
import { GlassCard } from "@/components/brand/GlassCard";
import { PrimaryButton } from "@/components/brand/Buttons";
import { SectionTag } from "@/components/brand/SectionTag";
import { ScrollReveal } from "@/components/brand/ScrollReveal";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "All Services | AI Software Solution Malaysia" },
      { name: "description", content: "Explore AI Software Solutions' end-to-end AI and software services - from automation and SmartForce DMS to government and healthcare systems." },
      { property: "og:title", content: "Our Services | AI Software Solutions Malaysia" },
      { property: "og:description", content: "10 specialised AI & software services for Malaysian government, enterprise, and healthcare." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-mesh px-6 pt-16 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-4xl text-center">
          <SectionTag>Our Services</SectionTag>
          <h1 className="mt-5 font-display text-4xl font-extrabold sm:text-5xl">
            End-to-End <span className="text-gradient-cg">AI & Software</span>
            <br /> Services for Malaysia
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[#5B6478]">
            Ten specialised services. One Malaysian team. From AI automation to mission-critical government systems - we cover the full software lifecycle.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Ico = (Icons[s.iconName as keyof typeof Icons] ?? Icons.Box) as Icons.LucideIcon;
            return (
              <ScrollReveal key={s.slug} delay={(i % 3) * 0.05}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="block h-full">
                  <GlassCard accent="gold" className="group flex h-full flex-col">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[rgba(0,73,215,0.1)] text-[#0049D7]">
                      <Ico className="h-5 w-5" />
                    </span>
                    <h2 className="mt-4 font-heading text-[17px] font-semibold text-[#0B1B3D]">{s.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5B6478]">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0049D7]">
                      Learn More <Icons.ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <PrimaryButton to="/contact" size="lg">Get a Custom Quote <Icons.ArrowRight className="h-4 w-4" /></PrimaryButton>
        </div>
      </section>
    </>
  );
}
