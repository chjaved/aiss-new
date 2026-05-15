import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Star, Layers, Zap, Shield } from "lucide-react";
import * as Icons from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/brand/Buttons";
import { SectionTag } from "@/components/brand/SectionTag";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import { GlassCard } from "@/components/brand/GlassCard";

const productsData = {
  "smartforce-dms": {
    name: "SmartForce DMS",
    tagline: "AI Data Compression & Document Management",
    description: "Government-grade document automation with AI compression, secure access, and PDPA-compliant workflows for high-volume document operations.",
    longDescription: "SmartForce DMS is AISS's flagship proprietary platform designed for high-volume document environments in government and healthcare. It combines on-premise AI compression, intelligent OCR, and enterprise-grade access controls to cut storage costs, eliminate manual workflows, and ensure full PDPA compliance.",
    iconName: "FileStack",
    color: "#0049D7",
    industry: "Government & Healthcare",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=1400&q=85&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80&auto=format&fit=crop",
    metrics: [
      { label: "Storage Saved", value: "70%", desc: "Through AI compression" },
      { label: "Faster Retrieval", value: "40%", desc: "Intelligent indexing" },
      { label: "OCR Accuracy", value: "99.2%", desc: "Even on aged documents" },
      { label: "Compliance", value: "100%", desc: "PDPA & MyDigital ready" },
    ],
    features: [
      { icon: "Cpu", title: "AI Compression Engine", desc: "Proprietary ML model compresses documents up to 70% without quality loss, slashing storage costs immediately." },
      { icon: "Search", title: "Intelligent OCR", desc: "Handles Bahasa Malaysia, English, and legacy document formats with 99.2% accuracy, including aged and damaged papers." },
      { icon: "Lock", title: "Role-Based Access Control", desc: "Granular permissions per department, division, and user. Full audit trail on every document action." },
      { icon: "Cloud", title: "Hybrid Deployment", desc: "Deploy on-premise, cloud, or hybrid. Integrates with AWS GovCloud, Azure Government, and on-prem infrastructure." },
      { icon: "GitBranch", title: "Workflow Automation", desc: "Build approval chains, auto-routing, and escalation rules without code using the drag-and-drop workflow builder." },
      { icon: "Shield", title: "PDPA Compliant", desc: "Full personal data protection compliance, automated data retention policies, and right-to-erasure tooling." },
    ],
    deployments: ["Ministry of Home Affairs", "3 State Government Agencies", "2 Private Hospitals"],
    technologies: ["Python", "TensorFlow", "PostgreSQL", "AWS GovCloud", "Redis", "Docker"],
    related: ["radpics-ai", "mwmsys"],
  },
  "radpics-ai": {
    name: "Radpics AI",
    tagline: "AI-Powered Medical Imaging Platform",
    description: "Enterprise PACS, EMR, and workflow automation for hospitals and diagnostic centres. AI-assisted reporting and DICOM compression at scale.",
    longDescription: "Radpics AI is a complete medical imaging ecosystem — PACS, EMR, RIS, and AI-assisted diagnostic reporting — purpose-built for Malaysian hospitals and diagnostic centres. It enables multi-centre workflows, remote radiologist reporting, and significant cost reduction through intelligent DICOM compression.",
    iconName: "Activity",
    color: "#0049D7",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=85&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1400&q=80&auto=format&fit=crop",
    metrics: [
      { label: "Faster Reporting", value: "40%", desc: "AI-assisted turnaround" },
      { label: "Cost Reduction", value: "30%", desc: "DICOM compression" },
      { label: "Report Accuracy", value: "97%", desc: "AI-assisted findings" },
      { label: "Centres Supported", value: "Multi", desc: "Centralised management" },
    ],
    features: [
      { icon: "Activity", title: "AI-Powered PACS", desc: "Full Picture Archiving and Communication System with AI-assisted detection for common conditions like pneumonia, fractures, and tumour markers." },
      { icon: "FileText", title: "Integrated EMR & RIS", desc: "Electronic Medical Records and Radiology Information System in one platform — no more switching between disparate systems." },
      { icon: "Users", title: "Multi-Centre Management", desc: "Centralised administration for hospital groups and diagnostic chains. One dashboard, multiple locations." },
      { icon: "Monitor", title: "Remote Reporting", desc: "Radiologists can read and report from anywhere. Full-resolution DICOM viewing with AI overlay in the browser." },
      { icon: "HardDrive", title: "DICOM Compression", desc: "Lossless DICOM compression reduces storage costs by 30–50%, with tiered archiving for ageing studies." },
      { icon: "MessageSquare", title: "Instant Communication", desc: "Clinician-radiologist messaging, report alerts, and urgent case escalation built directly into the workflow." },
    ],
    deployments: ["3 Private Hospitals KL", "2 Diagnostic Centre Chains", "1 University Hospital"],
    technologies: ["React", "Node.js", "DICOM", "HL7 FHIR", "PostgreSQL", "AWS"],
    related: ["smartforce-dms", "mwmsys"],
  },
  "optistack": {
    name: "OptiStack",
    tagline: "AI-Powered Cloud Cost Decision Engine",
    description: "Detect cloud waste, unused SaaS licenses, and AI token overspend across AWS, Azure, and GCP. Auto-generates Jira tickets with full context.",
    longDescription: "OptiStack continuously monitors your cloud infrastructure, SaaS stack, and AI API usage to find and eliminate waste. It connects to AWS, Azure, GCP, and 100+ SaaS tools — then uses AI to rank savings opportunities by ROI, auto-generates Jira tickets with full context, and tracks actual savings over time.",
    iconName: "Database",
    color: "#FFB400",
    industry: "Cloud FinOps",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&auto=format&fit=crop",
    metrics: [
      { label: "Avg. Savings/yr", value: "$240K", desc: "Per enterprise customer" },
      { label: "Services Tracked", value: "100+", desc: "Cloud & SaaS tools" },
      { label: "Setup Time", value: "<1 day", desc: "Agentless deployment" },
      { label: "ROI", value: "12×", desc: "Avg. first year" },
    ],
    features: [
      { icon: "Cloud", title: "Multi-Cloud Monitoring", desc: "AWS, Azure, and GCP in one unified view. Idle EC2 instances, over-provisioned RDS, orphaned storage — all surfaced automatically." },
      { icon: "CreditCard", title: "SaaS License Intelligence", desc: "Track who's actually using which tool. Catch unused Salesforce seats, duplicate tools, and licence tier mismatches." },
      { icon: "Cpu", title: "AI Token Cost Tracking", desc: "First-of-its-kind monitoring for OpenAI, Anthropic, and Cohere API spend. Attribute costs to teams, features, and use-cases." },
      { icon: "GitPullRequest", title: "Auto Jira Ticket Generation", desc: "Every savings opportunity generates a Jira ticket with owner, effort estimate, potential saving, and implementation steps." },
      { icon: "TrendingDown", title: "Savings Realisation Tracker", desc: "Track whether tickets get actioned and measure actual savings vs projected. Close the loop on every recommendation." },
      { icon: "Bell", title: "Anomaly Alerts", desc: "Spike alerts for cloud spend, SaaS usage, or AI token consumption. Slack and email notifications before bills arrive." },
    ],
    deployments: ["5 Tech Startups (Series B–D)", "2 Enterprise Groups", "1 Financial Institution"],
    technologies: ["Python", "React", "AWS SDK", "Azure API", "GCP SDK", "PostgreSQL", "Kafka"],
    related: ["smartforce-dms", "radpics-ai"],
  },
  "mwmsys": {
    name: "MWMSYS",
    tagline: "Migrant Worker Management System",
    description: "Comprehensive HRMS for migrant workers covering compliance, dispute resolution, 24/7 call centre, and workforce productivity.",
    longDescription: "MWMSYS is a full-stack migrant worker management platform that helps Malaysian employers meet JTKSM, MOHA, and international labour compliance requirements while improving worker welfare and productivity. It covers the entire lifecycle from recruitment and onboarding through payroll, dispute resolution, and repatriation.",
    iconName: "Users",
    color: "#10B981",
    industry: "HR & Compliance",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=85&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80&auto=format&fit=crop",
    metrics: [
      { label: "Workers Managed", value: "3,500+", desc: "Active on platform" },
      { label: "Employers", value: "2,400+", desc: "Registered companies" },
      { label: "Compliance Rate", value: "100%", desc: "JTKSM & MOHA" },
      { label: "Support", value: "24/7", desc: "Trilingual call centre" },
    ],
    features: [
      { icon: "Users", title: "Full HRMS", desc: "Onboarding, payroll, leave management, attendance tracking, and offboarding in one system — for both employer and worker." },
      { icon: "Phone", title: "24/7 Trilingual Call Centre", desc: "Worker support hotline in English, Bahasa Malaysia, and Bahasa Indonesia. Escalation to welfare officers on duty." },
      { icon: "Scale", title: "Dispute Resolution", desc: "Structured dispute logging, case management, mediation workflows, and escalation to JTKSM where required." },
      { icon: "FileCheck", title: "Compliance Management", desc: "Automated JTKSM, MOHA, and DOSH compliance checks. Permit renewal reminders, levy tracking, and audit-ready reports." },
      { icon: "Smartphone", title: "Worker Mobile App", desc: "Workers can view payslips, apply for leave, raise grievances, and access support from their mobile — in their language." },
      { icon: "BarChart2", title: "Employer Dashboard", desc: "Real-time workforce analytics, compliance status, cost per worker, and productivity metrics for management." },
    ],
    deployments: ["Plantation Companies", "Construction Groups", "Manufacturing Plants"],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Twilio", "AWS", "Redis"],
    related: ["smartforce-dms", "optistack"],
  },
  "homefood": {
    name: "HomeFood",
    tagline: "Home Cook Food Delivery Platform",
    description: "Connects 15,000+ home cooks with customers across KL & Selangor. Verified kitchens, instant payouts, real-time delivery tracking.",
    longDescription: "HomeFood is Malaysia's first dedicated home-cook food delivery platform — connecting verified home chefs with food lovers across Klang Valley. Unlike restaurant delivery apps, HomeFood champions authentic homestyle cooking with transparent kitchen verification, instant payouts to cooks, and 70% revenue share — the highest in the market.",
    iconName: "Utensils",
    color: "#F97316",
    industry: "Food Tech",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1400&q=85&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1400&q=80&auto=format&fit=crop",
    metrics: [
      { label: "Home Cooks", value: "15K+", desc: "Active on platform" },
      { label: "Avg. Delivery", value: "28 min", desc: "KL & Selangor" },
      { label: "Cook Revenue", value: "70%", desc: "Best in market" },
      { label: "Rating", value: "4.8★", desc: "App store average" },
    ],
    features: [
      { icon: "CheckCircle", title: "Verified Kitchen Programme", desc: "Every cook passes a hygiene audit, food handling certification check, and test order before going live. Safety first." },
      { icon: "DollarSign", title: "Instant Payouts", desc: "Cooks get paid within minutes of order completion — not weekly or monthly. Full financial inclusion for home-based earners." },
      { icon: "MapPin", title: "Real-Time Delivery Tracking", desc: "End-to-end GPS tracking from kitchen to door. Customers see live cook progress, rider location, and ETA." },
      { icon: "Star", title: "70% Revenue to Cooks", desc: "Highest cook revenue share in Malaysia. HomeFood takes only 30% to cover delivery, platform, and payment processing." },
      { icon: "Smartphone", title: "Cook & Customer Apps", desc: "Separate apps for cooks and customers with full order management, reviews, menu builder, and earnings dashboard." },
      { icon: "Users", title: "Community & Growth", desc: "Cook community features, recipe sharing, promotional tools, and in-app coaching to help cooks grow their business." },
    ],
    deployments: ["KL Sentral Zone", "Petaling Jaya", "Subang Jaya", "Cheras", "Puchong"],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Stripe", "Google Maps API", "Firebase"],
    related: ["jommamak", "mwmsys"],
  },
  "jommamak": {
    name: "JomMamak",
    tagline: "Malaysia's Mamak Food Delivery Platform",
    description: "Order from 200+ verified mamak stalls in minutes. Late-night delivery till 3am with real-time tracking from kitchen to doorstep.",
    longDescription: "JomMamak is built specifically for Malaysia's beloved mamak culture — bringing the late-night teh tarik and roti canai experience to your doorstep. With 200+ verified mamak stalls across Klang Valley, delivery till 3am, and a guaranteed 25-minute average, it's the only platform that truly understands Malaysian night-owl eating habits.",
    iconName: "Coffee",
    color: "#8B4513",
    industry: "Food Tech",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1400&q=85&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1400&q=80&auto=format&fit=crop",
    metrics: [
      { label: "Verified Stalls", value: "200+", desc: "Across Klang Valley" },
      { label: "Avg. Delivery", value: "25 min", desc: "Guaranteed SLA" },
      { label: "Late Night", value: "Till 3am", desc: "7 days a week" },
      { label: "App Rating", value: "4.7★", desc: "App store average" },
    ],
    features: [
      { icon: "MapPin", title: "200+ Verified Mamak Stalls", desc: "Every stall is physically verified for quality and consistency. From corner kedai to established mamak chains." },
      { icon: "Moon", title: "Late-Night Delivery Till 3am", desc: "The only platform with full operations until 3am, 7 days a week. Perfect for supper, post-event meals, and midnight cravings." },
      { icon: "Clock", title: "25-Minute Guarantee", desc: "Orders are matched to nearby riders immediately. If delivery exceeds 35 minutes, customers get a voucher automatically." },
      { icon: "Navigation", title: "Live Kitchen-to-Door Tracking", desc: "See when the cook starts your roti canai, when your order is picked up, and watch the rider move in real-time on the map." },
      { icon: "Utensils", title: "Full Menu Customisation", desc: "Specify ice level, sugar for teh, egg style, extra cheese — all the customisations mamak regulars know and love." },
      { icon: "Star", title: "Loyalty & Rewards", desc: "JomPoints earned on every order, redeemable for free drinks and discounts. Streak rewards for frequent night orders." },
    ],
    deployments: ["KLCC Zone", "Bangsar", "PJ New Town", "Subang SS15", "Damansara Uptown"],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Google Maps API", "Firebase", "Stripe"],
    related: ["homefood", "mwmsys"],
  },
};

type ProductSlug = keyof typeof productsData;
const slugs = Object.keys(productsData) as ProductSlug[];

export const Route = createFileRoute("/products/$slug")({
  beforeLoad: ({ params }: { params: { slug: string } }) => {
    if (!slugs.includes(params.slug as ProductSlug)) throw notFound();
  },
  loader: ({ params }: { params: { slug: string } }) => ({
    product: productsData[params.slug as ProductSlug],
  }),
  head: ({ loaderData }: { loaderData?: { product: (typeof productsData)[ProductSlug] } }) => {
    const p = loaderData?.product;
    return {
      meta: [
        { title: `${p?.name} — ${p?.tagline} | AI Software Solutions` },
        { name: "description", content: p?.description ?? "" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData() as { product: (typeof productsData)[ProductSlug] };
  const IconComponent = (Icons[p.iconName as keyof typeof Icons] ?? Icons.Box) as Icons.LucideIcon;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-mesh px-6 pb-20 pt-16">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav className="text-xs text-[#5B6478]">
            <Link to="/" className="hover:text-[#0049D7]">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/" hash="products" className="hover:text-[#0049D7]">Our Products</Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B1B3D]">{p.name}</span>
          </nav>

          <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr,0.8fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-lg"
                  style={{ backgroundColor: p.color }}
                >
                  <IconComponent className="h-6 w-6 text-white" />
                </span>
                <span className="rounded-full border border-[rgba(0,73,215,0.2)] bg-[rgba(0,73,215,0.06)] px-3 py-1 text-xs font-semibold text-[#0049D7]">
                  {p.industry}
                </span>
              </div>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                {p.name}
              </h1>
              <p className="mt-2 text-lg font-medium" style={{ color: p.color }}>{p.tagline}</p>
              <p className="mt-5 max-w-xl text-[#5B6478] leading-relaxed">{p.longDescription}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton to="/contact" size="lg">
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </PrimaryButton>
                <SecondaryButton to="/" hash="products">
                  <ArrowLeft className="h-4 w-4 mr-1" /> All Products
                </SecondaryButton>
              </div>
            </div>

            <ScrollReveal>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-[rgba(0,73,215,0.15)] shadow-[0_30px_80px_-20px_rgba(0,73,215,0.3)]">
                  <img
                    src={p.heroImage}
                    alt={p.name}
                    className="h-[340px] w-full object-cover sm:h-[400px]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/30 via-transparent to-transparent rounded-3xl" />
                </div>
                <div
                  className="absolute -bottom-5 -right-5 rounded-2xl border bg-white p-4 shadow-xl"
                  style={{ borderColor: `${p.color}40` }}
                >
                  <p className="text-[10px] uppercase tracking-wider text-[#5B6478]">Key Metric</p>
                  <div className="mt-1 font-display text-3xl font-extrabold" style={{ color: p.color }}>
                    {p.metrics[0].value}
                  </div>
                  <p className="text-xs font-medium text-[#0B1B3D]">{p.metrics[0].label}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-[#F4F7FB] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {p.metrics.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.08}>
                <GlassCard className="text-center">
                  <div className="font-display text-4xl font-extrabold" style={{ color: p.color }}>
                    {m.value}
                  </div>
                  <div className="mt-1 font-heading text-sm font-semibold text-[#0B1B3D]">{m.label}</div>
                  <p className="mt-0.5 text-xs text-[#5B6478]">{m.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center">
              <SectionTag>Features</SectionTag>
              <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
                Everything You Need, <span className="text-gradient-cg">Built In</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {p.features.map((feat, i) => {
              const FeatIcon = (Icons[feat.icon as keyof typeof Icons] ?? Icons.Zap) as Icons.LucideIcon;
              return (
                <ScrollReveal key={feat.title} delay={(i % 3) * 0.08}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white p-6 shadow-sm transition hover:shadow-md">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${p.color}18` }}
                    >
                      <FeatIcon className="h-5 w-5" style={{ color: p.color }} />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-[#0B1B3D]">{feat.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#5B6478]">{feat.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deployments + Tech */}
      <section className="bg-[#F4F7FB] px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Deployments */}
          <ScrollReveal>
            <div className="rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white p-8 shadow-sm">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5" style={{ color: p.color }} />
                <h3 className="font-display text-xl font-bold text-[#0B1B3D]">Live Deployments</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {p.deployments.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span className="text-sm text-[#0B1B3D]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Technologies */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white p-8 shadow-sm">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" style={{ color: p.color }} />
                <h3 className="font-display text-xl font-bold text-[#0B1B3D]">Tech Stack</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-3.5 py-1.5 text-sm font-medium text-[#0B1B3D]"
                    style={{ borderColor: `${p.color}30`, backgroundColor: `${p.color}08` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Products */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display text-2xl font-bold text-[#0B1B3D]">Related Products</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {p.related.map((slug) => {
              const rel = productsData[slug as ProductSlug];
              const RelIcon = (Icons[rel.iconName as keyof typeof Icons] ?? Icons.Box) as Icons.LucideIcon;
              return (
                <Link key={slug} to="/products/$slug" params={{ slug }}>
                  <GlassCard className="group flex items-start gap-4 transition hover:shadow-lg">
                    <span
                      className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${rel.color}18` }}
                    >
                      <RelIcon className="h-5 w-5" style={{ color: rel.color }} />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-[#0B1B3D] group-hover:text-[#0049D7] transition">
                        {rel.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-[#5B6478]">{rel.tagline}</p>
                    </div>
                    <ArrowRight className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-[#5B6478] transition group-hover:text-[#0049D7] group-hover:translate-x-1" />
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#0B1B3D] px-6 py-24 text-white">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#0049D7] opacity-25 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full opacity-15 blur-[140px]" style={{ backgroundColor: p.color }} />
        <div className="relative mx-auto max-w-2xl text-center">
          <Shield className="mx-auto h-10 w-10 text-white/30" />
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
            Ready to Deploy {p.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            Book a free demo and our team will walk you through a live deployment tailored to your organisation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton to="/contact" size="lg">
              Book Free Demo <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <Link to="/" hash="products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white transition">
              <ArrowLeft className="h-4 w-4" /> All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
