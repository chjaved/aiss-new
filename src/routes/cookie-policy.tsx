import { createFileRoute, Link } from "@tanstack/react-router";
import { Cookie, ArrowLeft } from "lucide-react";
import { SectionTag } from "@/components/brand/SectionTag";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | AI Software Solutions" },
      { name: "description", content: "How AI Software Solutions uses cookies and similar technologies on our website." },
    ],
  }),
  component: CookiePolicy,
});

function CookiePolicy() {
  const sections = [
    {
      title: "1. What Are Cookies?",
      body: "Cookies are small text files placed on your device when you visit a website. They help websites function, remember your preferences, and provide aggregated analytics so we can improve our services.",
    },
    {
      title: "2. How We Use Cookies",
      body: "We use cookies for: (a) Essential site functionality, (b) Analytics (understanding how visitors use our site), (c) Performance optimisation, and (d) Marketing measurement where you have consented.",
    },
    {
      title: "3. Types of Cookies We Use",
      body: "Strictly Necessary — required for the site to function. Analytics — anonymised traffic analysis (e.g. Google Analytics). Functional — remembers preferences. Marketing — only set with your consent.",
    },
    {
      title: "4. Third-Party Cookies",
      body: "Some cookies are placed by trusted third parties (analytics, embedded video, social media). We do not control these cookies; please review the privacy policies of those providers.",
    },
    {
      title: "5. Managing Your Cookies",
      body: "You can control cookies via your browser settings — block, delete, or be notified before cookies are placed. Disabling essential cookies may affect site functionality.",
    },
    {
      title: "6. Updates to This Policy",
      body: "We may update this Cookie Policy from time to time. Material changes will be highlighted on this page with an updated effective date.",
    },
    {
      title: "7. Contact Us",
      body: "Questions about our use of cookies? Email us at hello@aiss.com.my and we'll be happy to help.",
    },
  ];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#0049D7] hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="mt-8 flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FFB400]/15 text-[#FFB400]">
            <Cookie className="h-6 w-6" />
          </span>
          <SectionTag>Legal</SectionTag>
        </div>

        <h1 className="mt-4 font-display text-4xl font-extrabold text-[#0B1B3D] sm:text-5xl">
          Cookie <span className="text-gradient-cg">Policy</span>
        </h1>
        <p className="mt-3 text-sm text-[#5B6478]">Effective date: {new Date().toLocaleDateString("en-MY", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white p-6 shadow-sm">
              <h2 className="font-heading text-lg font-semibold text-[#0B1B3D]">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5B6478]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
