import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export const Route = createFileRoute("/thank-you")({
  head: () => ({ meta: [{ title: "Thank You | AI Software Solutions Malaysia" }, { name: "robots", content: "noindex" }] }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-mesh px-6 py-20">
      <div className="max-w-md text-center">
        <CheckCircle2 className="mx-auto h-20 w-20 text-[#0049D7]" />
        <h1 className="mt-6 font-display text-3xl font-extrabold sm:text-4xl">We've Received Your Enquiry!</h1>
        <p className="mt-4 text-[#5B6478]">
          Our team will be in touch within 2 business hours. In the meantime, feel free to explore our case studies or connect with us on WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/services" className="rounded-full bg-[#FFB400] px-5 py-2.5 font-heading text-sm font-bold text-[#FFFFFF]">View Our Services</Link>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
