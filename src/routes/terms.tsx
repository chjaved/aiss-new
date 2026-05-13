import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | AI Software Solution Malaysia" },
      { name: "description", content: "Terms governing your use of AI Software Solutions' website and services." },
    ],
  }),
  component: Terms,
});

const sections = [
  ["Acceptance of Terms", "By accessing this site or engaging AI Software Solutions for services, you agree to these Terms of Service."],
  ["Services", "AI Software Solutions provides software design, development, integration, and support services as described in individual engagement agreements."],
  ["Intellectual Property", "Site content is owned by AI Software Solutions. Project deliverables IP transfers per the signed contract for that engagement."],
  ["Confidentiality", "Both parties agree to keep non-public information confidential, subject to standard exceptions."],
  ["Liability", "Liability is limited to fees paid for the relevant engagement; no liability for indirect or consequential losses."],
  ["Governing Law", "These terms are governed by the laws of Malaysia. Disputes are subject to Malaysian courts."],
  ["Changes to Terms", "We may update these terms; continued use constitutes acceptance."],
  ["Contact", "Questions? Email info@aiss.com.my"],
];

function Terms() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="font-heading text-xs uppercase tracking-widest text-[#5B6478]">Template - have reviewed by a Malaysian solicitor</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold">Terms of Service</h1>
        <div className="mt-10 space-y-8">
          {sections.map(([t, b], i) => (
            <div key={t}>
              <h2 className="font-heading text-lg font-semibold text-[#0049D7]">{i + 1}. {t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5B6478]">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
