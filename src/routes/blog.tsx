import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/brand/GlassCard";
import { SectionTag } from "@/components/brand/SectionTag";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights | AI Software Solution Malaysia" },
      { name: "description", content: "AI insights, software trends, and digital transformation guidance for Malaysian businesses - from the AI Software Solutions team." },
      { property: "og:title", content: "AI Software Solutions Blog - AI Insights for Malaysia" },
    ],
  }),
  component: Blog,
});

const posts = [
  { cat: "AI Strategy", title: "How Malaysian SMEs Can Start with AI Automation in 2025", excerpt: "A practical, low-risk roadmap for SMEs to begin their AI journey without breaking the bank.", date: "Mar 2025" },
  { cat: "Product", title: "SmartForce DMS: Solving Government Document Management", excerpt: "Why public sector agencies are switching to AI-powered DMS - and what to evaluate before you do.", date: "Feb 2025" },
  { cat: "Healthcare", title: "What to Look for in a Healthcare Software Partner in Malaysia", excerpt: "PDPA, HL7/FHIR, MOH compliance - a checklist for choosing the right MedTech vendor.", date: "Jan 2025" },
];

function Blog() {
  return (
    <>
      <section className="bg-mesh px-6 pt-16 pb-16 text-center">
        <SectionTag>Blog & Insights</SectionTag>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold sm:text-5xl">
          AI Insights for <span className="text-gradient-cg">Malaysian Businesses</span>
        </h1>
        <p className="mt-3 text-xs uppercase tracking-widest text-[#5B6478]">Sample posts - replace with CMS-backed content</p>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <GlassCard key={p.title} className="flex h-full flex-col">
              <span className="self-start rounded-full bg-[rgba(255,180,0,0.1)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#FFB400]">{p.cat}</span>
              <h2 className="mt-4 font-display text-lg font-bold leading-snug">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm text-[#5B6478]">{p.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-[#5B6478]">
                <span>{p.date}</span>
                <span className="inline-flex items-center gap-1 text-[#0049D7]">Read More <ArrowRight className="h-3 w-3" /></span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}
