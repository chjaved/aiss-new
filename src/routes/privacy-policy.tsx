import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | AI Software Solution Malaysia" },
      { name: "description", content: "How AI Software Solutions collects, uses, and protects your personal data under Malaysia's PDPA 2010." },
    ],
  }),
  component: Privacy,
});

const sections = [
  ["Who We Are", `${site.name}, located at ${site.address.line1}, ${site.address.line2}, ${site.address.line3}. For privacy queries: ${site.email}.`],
  ["What Personal Data We Collect", "We collect contact information (name, email, phone, company), enquiry details you submit voluntarily, and limited technical data (IP, browser) needed to operate our site securely."],
  ["How We Use Your Personal Data", "To respond to enquiries, deliver requested services, send relevant resources you opt-in to, and meet legal/regulatory obligations."],
  ["Legal Basis for Processing", "Your consent (forms, opt-ins), our legitimate business interest in responding to enquiries, and compliance with Malaysia's Personal Data Protection Act 2010."],
  ["Data Retention Period", "Enquiry data: 24 months unless extended by ongoing engagement. Marketing opt-ins: until you unsubscribe. Project data: per contract terms."],
  ["Your Rights Under PDPA", "Access, correction, withdrawal of consent, and data portability. Email us to exercise any of these rights."],
  ["Data Security Measures", "Encryption at rest and in transit, role-based access, regular security audits, and incident response procedures."],
  ["Third-Party Services", "We use trusted infrastructure providers (cloud, email). All vendors are vetted for PDPA compatibility."],
  ["Changes to This Policy", "We may update this policy; material changes will be highlighted. Last updated: January 2025."],
  ["Contact for Data Queries", `Email ${site.email} for any privacy or data protection question.`],
];

function Privacy() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="font-heading text-xs uppercase tracking-widest text-[#5B6478]">Last updated: January 2025</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold">Privacy Policy</h1>
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
