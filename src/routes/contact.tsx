import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, MessageCircle, Lock, ArrowRight, CheckCircle, Users, Zap, Shield } from "lucide-react";
import { GlassCard } from "@/components/brand/GlassCard";
import { PrimaryButton } from "@/components/brand/Buttons";
import { SectionTag } from "@/components/brand/SectionTag";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import { site } from "@/lib/site";

const UNSPLASH = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Book a Free Demo | AI Software Solution Malaysia" },
      { name: "description", content: "Book a free 30-min discovery call with AI Software Solutions. Petaling Jaya office. Email info@aiss.com.my or WhatsApp us today." },
      { property: "og:title", content: "Contact AI Software Solutions - Book a Free Demo" },
      { property: "og:description", content: "Get in touch with Malaysia's AI software experts." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  company: z.string().trim().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Please tell us more about your project").max(2000),
  pdpa: z.literal(true, { message: "You must agree to the PDPA notice" }),
});
type FormData = z.infer<typeof schema>;

const inputCls = "w-full rounded-xl border border-[rgba(0,73,215,0.18)] bg-white/80 px-4 py-3 text-sm text-[#0B1B3D] placeholder:text-[#5B6478] focus:border-[#0049D7] focus:outline-none focus:ring-2 focus:ring-[#0049D7]/10 transition backdrop-blur-sm";

function ContactPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { pdpa: false as unknown as true },
  });

  const onSubmit = async (_data: FormData) => {
    try {
      await new Promise((r) => setTimeout(r, 700));
      navigate({ to: "/thank-you" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden bg-mesh">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0049D7]/5 via-transparent to-[#0B1B3D]/5" />
        <div className="relative px-6 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <SectionTag>Let's Work Together</SectionTag>
                <h1 className="mt-5 font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl leading-tight">
                  Transform Your Business with <span className="text-gradient-cg">AI-Powered Solutions</span>
                </h1>
                <p className="mt-6 text-lg text-[#5B6478] max-w-xl">
                  Book a free 30-minute discovery call with our experts. We'll discuss your challenges and explore how AI can drive real results for your organization.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-[#5B6478]">
                    <CheckCircle className="h-5 w-5 text-[#0049D7]" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#5B6478]">
                    <CheckCircle className="h-5 w-5 text-[#0049D7]" />
                    <span>No obligation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#5B6478]">
                    <CheckCircle className="h-5 w-5 text-[#0049D7]" />
                    <span>Response within 2 hours</span>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="relative">
                  <img
                    src={UNSPLASH("photo-1556761175-5973dc0f32e7", 800)}
                    alt="Team collaboration"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl border border-[rgba(0,73,215,0.1)]">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-[#0049D7]/10">
                        <Users className="h-6 w-6 text-[#0049D7]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#0B1B3D]">500+</p>
                        <p className="text-xs text-[#5B6478]">Projects Delivered</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-[rgba(0,73,215,0.1)] bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "500+", label: "Projects Delivered" },
              { icon: Zap, value: "98%", label: "Client Satisfaction" },
              { icon: Shield, value: "6+", label: "Years Experience" },
              { icon: Clock, value: "2h", label: "Avg Response Time" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl bg-[#0049D7]/10">
                    <stat.icon className="h-6 w-6 text-[#0049D7]" />
                  </div>
                  <p className="font-display text-3xl font-bold text-[#0B1B3D]">{stat.value}</p>
                  <p className="mt-1 text-sm text-[#5B6478]">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <ScrollReveal className="lg:col-span-3">
              <div className="rounded-3xl bg-white p-8 shadow-xl shadow-[#0B1B3D]/5 border border-[rgba(0,73,215,0.1)]">
                <h2 className="font-display text-2xl font-bold text-[#0B1B3D]">Get in Touch</h2>
                <p className="mt-2 text-[#5B6478]">Fill out the form below and we'll get back to you within 2 business hours.</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#0B1B3D]">Full Name *</label>
                      <input className={inputCls} placeholder="Ahmad Faizal" {...register("name")} />
                      {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#0B1B3D]">Email *</label>
                      <input type="email" className={inputCls} placeholder="you@company.com" {...register("email")} />
                      {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#0B1B3D]">Phone/WhatsApp *</label>
                      <input type="tel" className={inputCls} placeholder="+60 12-345 6789" {...register("phone")} />
                      {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#0B1B3D]">Company</label>
                      <input className={inputCls} placeholder="Your organisation" {...register("company")} />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0B1B3D]">Service Interest</label>
                    <select className={inputCls} {...register("service")}>
                      <option value="">Select a service (optional)</option>
                      {["AI & Automation","Custom Software Development","SmartForce DMS","Mobile App Development","API Integration","Smart Dashboards","IoT Integration","Cybersecurity","Government Solutions","Healthcare Software","Not Sure - Need Consultation"].map(i => <option key={i}>{i}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0B1B3D]">Tell us about your project *</label>
                    <textarea rows={5} className={inputCls} placeholder="What challenge are you trying to solve? Any specific requirements or timeline?" {...register("message")} />
                    {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>}
                  </div>

                  <div className="rounded-xl bg-[#F4F7FB] p-4">
                    <label className="flex items-start gap-3 text-sm text-[#5B6478]">
                      <input type="checkbox" {...register("pdpa")} className="mt-0.5 h-5 w-5 accent-[#0049D7]" />
                      <span>I agree to AI Software Solution processing my data per the <Link to="/privacy-policy" className="text-[#0049D7] underline font-medium">Privacy Policy</Link>. *</span>
                    </label>
                    {errors.pdpa && <p className="mt-2 text-xs text-red-500">{errors.pdpa.message}</p>}
                  </div>

                  <PrimaryButton type="submit" size="lg" className="w-full justify-center text-base">
                    {isSubmitting ? "Sending..." : "Book My Free Demo"} <ArrowRight className="ml-2 h-5 w-5" />
                  </PrimaryButton>
                  <p className="text-center text-sm text-[#5B6478]"><Lock className="mr-1 inline h-4 w-4" /> Protected under Malaysia's PDPA 2010</p>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                <h2 className="font-display text-2xl font-bold text-[#0B1B3D]">Other Ways to Reach Us</h2>
                <p className="mt-2 text-[#5B6478]">Prefer to call or message us directly? Here are all the ways you can get in touch.</p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-4">
                  <GlassCard className="border-[rgba(0,73,215,0.15)] p-5 hover:border-[#0049D7]/30 transition">
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0049D7]/10">
                        <Phone className="h-6 w-6 text-[#0049D7]" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-[#0B1B3D]">Call Us</h3>
                        <a href={site.phoneHref} className="text-sm text-[#0049D7] hover:underline">{site.phoneDisplay}</a>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="border-[rgba(0,73,215,0.15)] p-5 hover:border-[#0049D7]/30 transition">
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0049D7]/10">
                        <Mail className="h-6 w-6 text-[#0049D7]" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-[#0B1B3D]">Email Us</h3>
                        <a href={`mailto:${site.email}`} className="text-sm text-[#0049D7] hover:underline">{site.email}</a>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard className="border-[rgba(0,73,215,0.15)] p-5 hover:border-[#0049D7]/30 transition">
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0049D7]/10">
                        <MapPin className="h-6 w-6 text-[#0049D7]" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-[#0B1B3D]">Visit Us</h3>
                        <p className="text-sm text-[#5B6478]">Centum Oasis Corporate Park, Ara Damansara, Petaling Jaya, Selangor</p>
                      </div>
                    </div>
                    <a href={site.maps} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#0049D7] hover:underline">
                      Get Directions <ArrowRight className="h-4 w-4" />
                    </a>
                  </GlassCard>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border-2 border-[#25D366]/30 bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 p-5 transition hover:shadow-xl hover:border-[#25D366]/50"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-lg group-hover:scale-110 transition">
                    <MessageCircle className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-[#0B1B3D]">Chat on WhatsApp</h3>
                    <p className="text-sm text-[#5B6478]">Get the fastest response time</p>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-[#25D366] group-hover:translate-x-1 transition" />
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="rounded-2xl overflow-hidden border border-[rgba(0,73,215,0.15)] shadow-lg">
                  <iframe
                    title="AI Software Solutions Office Location"
                    src="https://www.google.com/maps?q=Centum+Oasis+Corporate+Park+Ara+Damansara&output=embed"
                    className="h-[250px] w-full"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
