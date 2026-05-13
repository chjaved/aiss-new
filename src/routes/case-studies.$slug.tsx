import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, CheckCircle2, Clock, Users, Target, TrendingUp } from "lucide-react";
import { GlassCard } from "@/components/brand/GlassCard";
import { PrimaryButton, SecondaryButton } from "@/components/brand/Buttons";
import { SectionTag } from "@/components/brand/SectionTag";
import { ScrollReveal } from "@/components/brand/ScrollReveal";

const UNSPLASH = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const caseStudiesData = {
  "federal-document-modernisation": {
    industry: "Government",
    title: "Federal Document Modernisation",
    client: "Ministry of Home Affairs Malaysia",
    image: UNSPLASH("photo-1450101499163-c8848c66ca85"),
    duration: "8 months",
    team: "6 engineers",
    challenge: "Manual archives, slow retrieval, rising storage cost. The agency was drowning in decades of paper documents, with retrieval times averaging 4 hours per request.",
    challengePoints: [
      "2.5 million documents in physical storage",
      "Average retrieval time: 4 hours per document",
      "Storage costs increasing 15% annually",
      "No digital backup or disaster recovery",
      "Compliance risks with document handling",
    ],
    solution: "SmartForce DMS deployment with on-prem AI compression and intelligent OCR. We built a complete document management ecosystem with AI-powered compression, automated classification, and secure cloud backup.",
    solutionPoints: [
      "Deployed SmartForce DMS with custom AI models",
      "Built automated OCR pipeline with 99.2% accuracy",
      "Implemented role-based access control",
      "Created secure hybrid cloud backup",
      "Integrated with existing government systems",
    ],
    result: "60% storage cut, 95% faster retrieval",
    resultMetric: "60%",
    resultLabel: "Storage Reduction",
    results: [
      { metric: "95%", label: "Faster Retrieval", desc: "From 4 hours to 12 minutes average" },
      { metric: "60%", label: "Storage Saved", desc: "AI compression reduced footprint" },
      { metric: "99.2%", label: "OCR Accuracy", desc: "Even on aged documents" },
      { metric: "0", label: "Lost Documents", desc: "Complete audit trail established" },
    ],
    testimonial: {
      quote: "AI Software Solutions transformed how we handle document requests. What used to take half a day now takes minutes. The team's understanding of government compliance was invaluable.",
      author: "Encik Ahmad Faizal",
      role: "IT Director, Ministry of Home Affairs",
    },
    technologies: ["SmartForce DMS", "Python", "TensorFlow", "PostgreSQL", "AWS GovCloud"],
    related: ["healthcare-operations", "logistics-fleet"],
  },
  "healthcare-operations": {
    industry: "Healthcare",
    title: "Hospital Operations Platform",
    client: "Private Hospital KL",
    image: UNSPLASH("photo-1538108149393-fbbd81895907"),
    duration: "12 months",
    team: "8 engineers",
    challenge: "Siloed systems, slow patient processing. The hospital was using 7 different systems that didn't communicate, causing delays and errors in patient care.",
    challengePoints: [
      "7 disconnected systems across departments",
      "Patient check-in taking 45+ minutes",
      "Duplicate data entry causing errors",
      "No real-time bed availability visibility",
      "Clinicians frustrated with fragmented workflow",
    ],
    solution: "Unified HIS with HL7/FHIR integration and clinician dashboards. We built a modern Hospital Information System that connects all departments with real-time data synchronization.",
    solutionPoints: [
      "Built unified HIS with HL7/FHIR standards",
      "Created real-time patient tracking",
      "Developed mobile apps for nurses",
      "Integrated with lab and radiology systems",
      "Built executive analytics dashboard",
    ],
    result: "40% reduction in patient processing time",
    resultMetric: "40%",
    resultLabel: "Time Reduction",
    results: [
      { metric: "40%", label: "Faster Processing", desc: "Patient journey streamlined" },
      { metric: "85%", label: "Staff Satisfaction", desc: "Easier workflow, less frustration" },
      { metric: "60%", label: "Error Reduction", desc: "Single source of truth" },
      { metric: "3x", label: "ROI in Year 1", desc: "Efficiency gains exceeded investment" },
    ],
    testimonial: {
      quote: "The hospital management system they built has cut our patient processing time by 40%. Our staff can now focus on care instead of paperwork. Excellent local team, excellent support.",
      author: "Dr. Sarah Lim",
      role: "CIO, Private Hospital KL",
    },
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "HL7 FHIR"],
    related: ["federal-document-modernisation", "logistics-fleet"],
  },
  "logistics-fleet": {
    industry: "Logistics",
    title: "Real-Time Fleet Visibility",
    client: "National Logistics Provider",
    image: UNSPLASH("photo-1601584115197-04ecc0da31d7"),
    duration: "6 months",
    team: "5 engineers",
    challenge: "No live view of fleet operations across regions. The company couldn't track 200+ vehicles in real-time, leading to inefficient routing and customer complaints.",
    challengePoints: [
      "200+ vehicles with no unified tracking",
      "Customers calling for delivery updates",
      "Manual route planning wasting fuel",
      "No predictive maintenance capability",
      "Delayed response to breakdowns",
    ],
    solution: "IoT integration with smart dashboards and predictive alerts. We built a complete fleet management platform with GPS tracking, route optimization, and predictive maintenance.",
    solutionPoints: [
      "Deployed IoT sensors across entire fleet",
      "Built real-time tracking dashboard",
      "Created predictive maintenance ML models",
      "Developed customer notification system",
      "Integrated with fuel card systems",
    ],
    result: "Cut downtime by 35% with predictive maintenance",
    resultMetric: "35%",
    resultLabel: "Downtime Reduction",
    results: [
      { metric: "35%", label: "Less Downtime", desc: "Predictive maintenance works" },
      { metric: "22%", label: "Fuel Savings", desc: "Optimized routing" },
      { metric: "95%", label: "On-Time Delivery", desc: "Up from 78%" },
      { metric: "50%", label: "Support Calls", desc: "Proactive customer updates" },
    ],
    testimonial: {
      quote: "From API integration to dashboard build - the AI Software Solutions team handled everything and communicated clearly throughout. Our fleet has never been more efficient.",
      author: "Raj Kumar",
      role: "Head of Operations, National Logistics",
    },
    technologies: ["IoT", "MQTT", "React", "Python", "TimescaleDB"],
    related: ["federal-document-modernisation", "healthcare-operations"],
  },
  "manufacturing-automation": {
    industry: "Manufacturing",
    title: "Smart Factory Automation",
    client: "Penang Electronics Manufacturer",
    image: UNSPLASH("photo-1565793298595-6a879b1d9492"),
    duration: "10 months",
    team: "7 engineers",
    challenge: "Manual quality control causing delays and defects. The factory relied on human inspectors, leading to inconsistent quality and production bottlenecks.",
    challengePoints: [
      "Manual QC causing 12% defect rate",
      "Production stops for inspections",
      "Inconsistent quality standards",
      "No real-time production visibility",
      "High labor costs for inspection",
    ],
    solution: "AI-powered computer vision system with automated defect detection. We built a smart factory solution using computer vision and IoT sensors to automate quality control.",
    solutionPoints: [
      "Deployed computer vision AI models",
      "Built real-time production monitoring",
      "Created automated defect alerting",
      "Integrated with MES and ERP systems",
      "Developed quality analytics dashboard",
    ],
    result: "85% reduction in defect rate, 3x faster QC",
    resultMetric: "85%",
    resultLabel: "Defect Reduction",
    results: [
      { metric: "85%", label: "Fewer Defects", desc: "AI catches issues instantly" },
      { metric: "3x", label: "Faster QC", desc: "From minutes to seconds" },
      { metric: "40%", label: "Labor Savings", desc: "Automated inspection" },
      { metric: "99.7%", label: "Accuracy", desc: "Consistent detection" },
    ],
    testimonial: {
      quote: "The AI vision system has transformed our quality control. We catch defects before they become problems, and our production speed has increased significantly.",
      author: "Michael Tan",
      role: "CEO, Electronics Manufacturer",
    },
    technologies: ["Python", "TensorFlow", "OpenCV", "IoT", "PostgreSQL"],
    related: ["healthcare-operations", "logistics-fleet"],
  },
  "government-citizen-portal": {
    industry: "Government",
    title: "Citizen Service Portal",
    client: "State Government Agency",
    image: UNSPLASH("photo-1486406146926-c627a92ad1ab"),
    duration: "14 months",
    team: "9 engineers",
    challenge: "Citizens facing long queues and complex processes. The agency needed a digital platform to serve 500,000+ citizens with 50+ services.",
    challengePoints: [
      "500,000+ citizens to serve",
      "50+ services with different processes",
      "Long queues at service counters",
      "No online appointment system",
      "Complex forms causing errors",
    ],
    solution: "Full-service citizen portal with MyDigital ID integration. We built a comprehensive digital government platform that makes services accessible 24/7.",
    solutionPoints: [
      "Built responsive citizen portal",
      "Integrated MyDigital ID authentication",
      "Created smart form system with validation",
      "Implemented online appointment booking",
      "Built admin dashboard for officials",
    ],
    result: "70% of services now available online",
    resultMetric: "70%",
    resultLabel: "Digital Services",
    results: [
      { metric: "70%", label: "Online Services", desc: "24/7 citizen access" },
      { metric: "60%", label: "Queue Reduction", desc: "At physical counters" },
      { metric: "4.8★", label: "User Rating", desc: "Citizen satisfaction" },
      { metric: "90%", label: "Form Accuracy", desc: "Smart validation" },
    ],
    testimonial: {
      quote: "The citizen portal has transformed how we deliver services. Citizens can now complete tasks from home, and our staff can focus on complex cases.",
      author: "Puan Nor Hidayah",
      role: "Digital Director, State Government",
    },
    technologies: ["React", "Node.js", "MyDigital ID", "PostgreSQL", "Redis"],
    related: ["federal-document-modernisation", "healthcare-operations"],
  },
  "fintech-kyc-automation": {
    industry: "Finance",
    title: "AI-Powered KYC Automation",
    client: "Regional Digital Bank",
    image: UNSPLASH("photo-1563013544-824ae1b704d3"),
    duration: "9 months",
    team: "6 engineers",
    challenge: "Customer onboarding was taking 3–7 days due to manual KYC and AML checks, causing 60% of new applicants to drop off before completion.",
    challengePoints: [
      "3–7 day manual onboarding process",
      "60% drop-off rate before account activation",
      "Heavy compliance team workload (8 reviewers)",
      "BNM AML/CFT regulatory pressure",
      "Fraudulent applications slipping through",
    ],
    solution: "AI-powered identity verification with document analysis, liveness detection, and automated sanctions screening. Real-time decisions for 90% of applicants, with edge cases escalated to human reviewers.",
    solutionPoints: [
      "Built AI document verification (MyKad, passport)",
      "Implemented liveness detection with face match",
      "Integrated sanctions and PEP screening APIs",
      "Built risk scoring engine with ML",
      "Created human-in-the-loop review dashboard",
    ],
    result: "92% completion rate, onboarding in <5 minutes",
    resultMetric: "92%",
    resultLabel: "Completion Rate",
    results: [
      { metric: "92%", label: "Completion Rate", desc: "Up from 40% before automation" },
      { metric: "<5min", label: "Onboarding Time", desc: "From 3–7 days previously" },
      { metric: "99.4%", label: "Fraud Detection", desc: "Caught synthetic identities" },
      { metric: "75%", label: "Less Manual Review", desc: "Compliance team focuses on edge cases" },
    ],
    testimonial: {
      quote: "AI Software Solutions delivered a KYC system that transformed our customer experience overnight. We went from drowning in manual reviews to onboarding customers in minutes. Their BNM compliance expertise was the difference-maker.",
      author: "Datin Aisyah Rahman",
      role: "Chief Compliance Officer, Regional Digital Bank",
    },
    technologies: ["Python", "TensorFlow", "AWS Rekognition", "PostgreSQL", "Kafka"],
    related: ["government-citizen-portal", "federal-document-modernisation"],
  },
};

const slugs = Object.keys(caseStudiesData);

export const Route = createFileRoute("/case-studies/$slug")({
  beforeLoad: ({ params }: { params: { slug: string } }) => {
    if (!slugs.includes(params.slug)) throw notFound();
  },
  loader: ({ params }: { params: { slug: string } }) => {
    return { caseStudy: caseStudiesData[params.slug as keyof typeof caseStudiesData] };
  },
  head: ({ loaderData }: { loaderData?: { caseStudy: typeof caseStudiesData["federal-document-modernisation"] } }) => {
    const cs = loaderData?.caseStudy;
    return {
      meta: [
        { title: `${cs?.title} | Case Study | AI Software Solutions Malaysia` },
        { name: "description", content: `${cs?.result} - See how AI Software Solutions delivered ${cs?.title} for ${cs?.client}.` },
      ],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { caseStudy: cs } = Route.useLoaderData() as { caseStudy: typeof caseStudiesData["federal-document-modernisation"] };

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-mesh px-6 pt-16 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="text-xs text-[#5B6478]">
            <Link to="/" className="hover:text-[#0049D7]">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/case-studies" className="hover:text-[#0049D7]">Case Studies</Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B1B3D]">{cs.title}</span>
          </nav>

          <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div>
              <span className="inline-block rounded-full bg-[#0049D7]/10 px-3 py-1 text-xs font-semibold text-[#0049D7]">
                {cs.industry}
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                {cs.title}
              </h1>
              <p className="mt-4 text-lg text-[#5B6478]">{cs.client}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-white/50 px-3 py-2">
                  <Clock className="h-4 w-4 text-[#0049D7]" />
                  <span className="text-sm text-[#5B6478]">{cs.duration}</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/50 px-3 py-2">
                  <Users className="h-4 w-4 text-[#0049D7]" />
                  <span className="text-sm text-[#5B6478]">{cs.team}</span>
                </div>
              </div>
            </div>

            {/* Hero image + result floating card */}
            <ScrollReveal>
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-[rgba(0,73,215,0.15)] shadow-[0_30px_80px_-20px_rgba(0,73,215,0.3)]">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="h-[340px] w-full object-cover sm:h-[420px]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-[rgba(255,180,0,0.4)] bg-white p-5 shadow-xl">
                  <p className="text-[10px] uppercase tracking-wider text-[#5B6478]">Key Result</p>
                  <div className="mt-1 font-display text-4xl font-extrabold text-[#FFB400]">{cs.resultMetric}</div>
                  <p className="text-sm font-medium text-[#0B1B3D]">{cs.resultLabel}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Challenge */}
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-red-500" />
                <h2 className="font-display text-2xl font-bold text-[#0B1B3D]">The Challenge</h2>
              </div>
              <p className="mt-4 text-[#5B6478]">{cs.challenge}</p>
              <ul className="mt-6 space-y-3">
                {cs.challengePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400" />
                    <span className="text-sm text-[#5B6478]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal delay={0.15}>
            <div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <h2 className="font-display text-2xl font-bold text-[#0B1B3D]">Our Solution</h2>
              </div>
              <p className="mt-4 text-[#5B6478]">{cs.solution}</p>
              <ul className="mt-6 space-y-3">
                {cs.solutionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span className="text-sm text-[#5B6478]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[#F4F7FB] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <SectionTag>Results</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
              Measurable <span className="text-[#0049D7]">Impact</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {cs.results.map((result, i) => (
              <ScrollReveal key={result.label} delay={i * 0.1}>
                <GlassCard className="text-center">
                  <div className="font-display text-4xl font-extrabold text-[#0049D7]">{result.metric}</div>
                  <div className="mt-1 font-heading text-sm font-semibold text-[#0B1B3D]">{result.label}</div>
                  <p className="mt-1 text-xs text-[#5B6478]">{result.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold">Technologies Used</h2>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {cs.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-[rgba(0,73,215,0.2)] bg-[rgba(0,73,215,0.05)] px-4 py-2 text-sm text-[#0B1B3D]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <GlassCard className="relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#0049D7]/5" />
            <div className="relative">
              <div className="text-6xl text-[#0049D7]/20">"</div>
              <p className="-mt-8 text-lg italic text-[#0B1B3D]">{cs.testimonial.quote}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#0049D7] to-[#FFB400] font-display text-sm font-bold text-white">
                  {cs.testimonial.author.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-[#0B1B3D]">{cs.testimonial.author}</div>
                  <div className="text-sm text-[#5B6478]">{cs.testimonial.role}</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="bg-[#F4F7FB] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display text-2xl font-bold">Related Case Studies</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {cs.related.map((slug) => {
              const related = caseStudiesData[slug as keyof typeof caseStudiesData];
              return (
                <Link key={slug} to="/case-studies/$slug" params={{ slug }}>
                  <GlassCard className="h-full transition hover:shadow-lg">
                    <span className="text-xs font-semibold text-[#0049D7]">{related.industry}</span>
                    <h3 className="mt-2 font-heading text-lg font-semibold">{related.title}</h3>
                    <p className="mt-1 text-sm text-[#5B6478]">{related.result}</p>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden px-6 py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,73,215,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Want Similar Results?
          </h2>
          <p className="mt-4 text-[#5B6478]">Let's discuss how we can help transform your organisation.</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton to="/contact" size="lg">
              Book My Free Demo <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton to="/case-studies">
              <ArrowLeft className="mr-1 h-4 w-4" /> All Case Studies
            </SecondaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
