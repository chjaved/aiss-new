import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { services, type ServiceMeta, type ServiceSlug } from "@/lib/site";
import { GlassCard } from "@/components/brand/GlassCard";
import { PrimaryButton, SecondaryButton } from "@/components/brand/Buttons";
import { SectionTag } from "@/components/brand/SectionTag";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const UNSPLASH = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

interface ServiceDetail {
  processSteps: { n: string; iconName: string; t: string; d: string }[];
  useCases: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  techStack: string[];
  sampleProjects: { title: string; client: string; image: string; result: string }[];
}

// Service-specific detailed content (SSR-safe: only serializable data)
const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "ai-automation": {
    processSteps: [
      { n: "01", iconName: "Search", t: "Process Audit", d: "Map your workflows and identify automation opportunities with highest ROI." },
      { n: "02", iconName: "Brain", t: "AI Model Design", d: "Design custom AI models trained on your specific data and requirements." },
      { n: "03", iconName: "Cpu", t: "Integration", d: "Connect AI systems to your existing tools via APIs and middleware." },
      { n: "04", iconName: "Rocket", t: "Deployment", d: "Go live with monitoring, optimization, and continuous learning." },
    ],
    sampleProjects: [
      { title: "Ministry Workflow Automation", client: "Federal Government Agency", image: UNSPLASH("photo-1581090464777-f3220bbe1b8b"), result: "6,000+ documents/day processed automatically" },
      { title: "AI Customer Support Bot", client: "National Bank Malaysia", image: UNSPLASH("photo-1485827404703-89b55fcc595e"), result: "82% of inquiries resolved without human agent" },
      { title: "Predictive Maintenance Engine", client: "Penang Electronics Plant", image: UNSPLASH("photo-1581092335397-9583eb92d232"), result: "35% reduction in unplanned downtime" },
    ],
    useCases: [
      { title: "Document Processing", desc: "Automatically extract data from invoices, forms, and documents" },
      { title: "Customer Support", desc: "AI chatbots that handle 80% of routine inquiries" },
      { title: "Report Generation", desc: "Auto-generate weekly/monthly reports from multiple data sources" },
      { title: "Approval Workflows", desc: "Smart routing based on content analysis and urgency" },
    ],
    stats: [
      { value: "60%", label: "Time Savings" },
      { value: "40%", label: "Cost Reduction" },
      { value: "99.2%", label: "Accuracy Rate" },
      { value: "24/7", label: "Availability" },
    ],
    techStack: ["Python", "TensorFlow", "LangChain", "OpenAI", "Azure ML"],
  },
  "custom-software": {
    processSteps: [
      { n: "01", iconName: "MessageSquare", t: "Discovery", d: "Deep-dive workshops to understand your business, users, and goals." },
      { n: "02", iconName: "PenTool", t: "UX/UI Design", d: "Wireframes, prototypes, and user testing before any code is written." },
      { n: "03", iconName: "Code", t: "Development", d: "Agile sprints with 2-week demos and your feedback at every step." },
      { n: "04", iconName: "Shield", t: "QA & Launch", d: "Rigorous testing, security audit, and smooth deployment." },
    ],
    sampleProjects: [
      { title: "Multi-Tenant CRM Platform", client: "KL Property Group", image: UNSPLASH("photo-1551434678-e076c223a692"), result: "4 business units unified on one platform" },
      { title: "Enterprise Ops Portal", client: "National Logistics Company", image: UNSPLASH("photo-1460925895917-afdab827c52f"), result: "30% faster operations reporting cycle" },
      { title: "University Admissions System", client: "Selangor Private University", image: UNSPLASH("photo-1551288049-bebda4e38f71"), result: "40,000 applications processed in first intake" },
    ],
    useCases: [
      { title: "ERP Systems", desc: "Custom enterprise resource planning tailored to your operations" },
      { title: "Customer Portals", desc: "Branded self-service portals for your clients" },
      { title: "Internal Tools", desc: "Productivity apps built specifically for your team's workflow" },
      { title: "E-commerce", desc: "Custom online stores with Malaysia payment gateway integration" },
    ],
    stats: [
      { value: "100%", label: "Custom Fit" },
      { value: "2-Week", label: "Sprints" },
      { value: "50+", label: "Projects" },
      { value: "100%", label: "Source Code" },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
  },
  "document-digitization": {
    processSteps: [
      { n: "01", iconName: "Scan", t: "Document Scan", d: "High-volume scanning with OCR and intelligent classification." },
      { n: "02", iconName: "Minimize2", t: "AI Compression", d: "SmartForce AI reduces file sizes by up to 60% without quality loss." },
      { n: "03", iconName: "Database", t: "Secure Storage", d: "Encrypted storage with granular access controls and audit trails." },
      { n: "04", iconName: "Search", t: "Smart Search", d: "Find any document in seconds with AI-powered full-text search." },
    ],
    sampleProjects: [
      { title: "Federal Archive Digitisation", client: "Ministry of Home Affairs", image: UNSPLASH("photo-1450101499163-c8848c66ca85"), result: "2.5M paper records digitised in 8 months" },
      { title: "Hospital Records System", client: "Private Hospital Group, KL", image: UNSPLASH("photo-1519494026892-80bbd2d6fd0d"), result: "60% storage cost reduction" },
      { title: "Legal Firm Document AI", client: "Boutique Law Firm", image: UNSPLASH("photo-1589994965851-a8f479c573a9"), result: "Contracts reviewed 8x faster with AI" },
    ],
    useCases: [
      { title: "Archive Digitization", desc: "Convert decades of paper archives to searchable digital format" },
      { title: "Invoice Processing", desc: "Automated data extraction from supplier invoices" },
      { title: "Contract Management", desc: "Centralized contract storage with expiry alerts" },
      { title: "Compliance Records", desc: "Audit-ready document management for regulated industries" },
    ],
    stats: [
      { value: "60%", label: "Storage Savings" },
      { value: "5 sec", label: "Retrieval Time" },
      { value: "99.8%", label: "OCR Accuracy" },
      { value: "Bank-Grade", label: "Security" },
    ],
    techStack: ["SmartForce DMS", "Python", "Tesseract", "AWS S3", "Elasticsearch"],
  },
  "mobile-apps": {
    processSteps: [
      { n: "01", iconName: "Layout", t: "Strategy", d: "Define features, platforms, and user experience goals." },
      { n: "02", iconName: "PenTool", t: "Design", d: "Native UI/UX design following iOS and Android guidelines." },
      { n: "03", iconName: "Smartphone", t: "Development", d: "Native or cross-platform development with offline support." },
      { n: "04", iconName: "Upload", t: "Store Launch", d: "App Store and Play Store submission with ASO optimization." },
    ],
    sampleProjects: [
      { title: "Field Service Mobile App", client: "Telco Infrastructure Provider", image: UNSPLASH("photo-1556761175-5973dc0f32e7"), result: "500 field technicians, offline-first" },
      { title: "Citizen Services App", client: "State Government Portal", image: UNSPLASH("photo-1512941937669-90a1b58e7e9c"), result: "4.6★ rating on Play Store" },
      { title: "Patient Companion App", client: "Private Specialist Group", image: UNSPLASH("photo-1551076805-e1869033e561"), result: "30% appointment no-show reduction" },
    ],
    useCases: [
      { title: "Field Service Apps", desc: "Mobile tools for technicians with offline sync" },
      { title: "Patient Portals", desc: "Healthcare apps for appointments and records access" },
      { title: "Sales Force Apps", desc: "CRM mobile apps for sales teams on the go" },
      { title: "Citizen Services", desc: "Government service apps with MyDigital ID" },
    ],
    stats: [
      { value: "99.5%", label: "Crash-Free" },
      { value: "4.6★", label: "App Rating" },
      { value: "60fps", label: "Performance" },
      { value: "Offline", label: "Capability" },
    ],
    techStack: ["React Native", "Swift", "Kotlin", "Firebase", "AWS Amplify"],
  },
  "api-integration": {
    processSteps: [
      { n: "01", iconName: "Map", t: "Mapping", d: "Document current systems, data flows, and integration points." },
      { n: "02", iconName: "Shield", t: "Security", d: "Design authentication, encryption, and access control." },
      { n: "03", iconName: "GitMerge", t: "Build", d: "Develop APIs, middleware, and data transformation layers." },
      { n: "04", iconName: "Activity", t: "Monitor", d: "Real-time monitoring, logging, and error handling." },
    ],
    sampleProjects: [
      { title: "LHDN e-Invoicing Bridge", client: "Manufacturing Conglomerate", image: UNSPLASH("photo-1454165804606-c3d57bc86b40"), result: "50,000+ invoices/month auto-submitted" },
      { title: "MyDigital ID Integration", client: "Government Service Portal", image: UNSPLASH("photo-1558494949-ef010cbdcc31"), result: "Single sign-on across 12 agencies" },
      { title: "Banking Core API Layer", client: "Regional Bank", image: UNSPLASH("photo-1563013544-824ae1b704d3"), result: "99.99% uptime, sub-100ms latency" },
    ],
    useCases: [
      { title: "ERP Integration", desc: "Connect your ERP with CRM, HR, and finance systems" },
      { title: "Payment Gateways", desc: "Integrate FPX, credit cards, and e-wallets" },
      { title: "Government APIs", desc: "MyDigital ID, e-Invoicing LHDN, and SSM integration" },
      { title: "Legacy Modernization", desc: "Connect old systems to modern cloud services" },
    ],
    stats: [
      { value: "<100ms", label: "Response Time" },
      { value: "99.9%", label: "Uptime" },
      { value: "50+", label: "Integrations" },
      { value: "REST", label: "& GraphQL" },
    ],
    techStack: ["Node.js", "GraphQL", "REST", "Kafka", "AWS API Gateway"],
  },
  "smart-dashboards": {
    processSteps: [
      { n: "01", iconName: "Database", t: "Data Audit", d: "Identify data sources, quality, and integration requirements." },
      { n: "02", iconName: "BarChart3", t: "Design", d: "Create wireframes with key metrics and user roles." },
      { n: "03", iconName: "Layers", t: "Build", d: "Connect data pipelines and build interactive visualizations." },
      { n: "04", iconName: "Share2", t: "Deploy", d: "Role-based access, mobile optimization, and alerts." },
    ],
    sampleProjects: [
      { title: "Executive Command Center", client: "State Government CEO Office", image: UNSPLASH("photo-1551288049-bebda4e38f71"), result: "Real-time KPIs from 18 departments" },
      { title: "Hospital Operations Dashboard", client: "Private Hospital Network", image: UNSPLASH("photo-1576091160550-2173dba999ef"), result: "Live bed availability and patient flow" },
      { title: "Sales Pipeline Analytics", client: "Industrial Distributor", image: UNSPLASH("photo-1460925895917-afdab827c52f"), result: "3x faster forecast accuracy" },
    ],
    useCases: [
      { title: "Executive Dashboards", desc: "CEO/C-suite KPI monitoring in real-time" },
      { title: "Operations Centers", desc: "Live operational metrics for command centers" },
      { title: "Sales Analytics", desc: "Pipeline, conversion, and revenue tracking" },
      { title: "Healthcare Monitoring", desc: "Patient flow, bed occupancy, and resource usage" },
    ],
    stats: [
      { value: "Real-Time", label: "Data" },
      { value: "50+", label: "Data Sources" },
      { value: "Mobile", label: "Responsive" },
      { value: "Drill-Down", label: "Analysis" },
    ],
    techStack: ["React", "D3.js", "PostgreSQL", "Redis", "WebSocket"],
  },
  "iot-integration": {
    processSteps: [
      { n: "01", iconName: "Radio", t: "Assessment", d: "Evaluate devices, protocols, and network requirements." },
      { n: "02", iconName: "Cpu", t: "Edge Setup", d: "Configure edge computing for low-latency processing." },
      { n: "03", iconName: "Database", t: "Pipeline", d: "Build data ingestion, storage, and analytics pipeline." },
      { n: "04", iconName: "Bell", t: "Alerts", d: "Set up predictive alerts and automated responses." },
    ],
    sampleProjects: [
      { title: "Smart Building Platform", client: "Commercial Tower KL", image: UNSPLASH("photo-1486325212027-8081e485255e"), result: "22% energy savings via smart HVAC" },
      { title: "Fleet Telematics", client: "National Logistics Provider", image: UNSPLASH("photo-1601584115197-04ecc0da31d7"), result: "200+ vehicles with live tracking" },
      { title: "Factory Floor Monitor", client: "Penang Manufacturer", image: UNSPLASH("photo-1518770660439-4636190af475"), result: "35% downtime reduction" },
    ],
    useCases: [
      { title: "Smart Buildings", desc: "Energy monitoring, HVAC control, and occupancy tracking" },
      { title: "Fleet Tracking", desc: "GPS, fuel monitoring, and predictive maintenance" },
      { title: "Industrial IoT", desc: "Machine monitoring and predictive maintenance" },
      { title: "Environmental", desc: "Air quality, water monitoring for smart cities" },
    ],
    stats: [
      { value: "10K+", label: "Devices" },
      { value: "<1s", label: "Latency" },
      { value: "MQTT", label: "& CoAP" },
      { value: "Edge", label: "Computing" },
    ],
    techStack: ["MQTT", "AWS IoT", "TimescaleDB", "Grafana", "Node-RED"],
  },
  "cybersecurity": {
    processSteps: [
      { n: "01", iconName: "Search", t: "Assessment", d: "Security audit, vulnerability scanning, and risk analysis." },
      { n: "02", iconName: "Shield", t: "Strategy", d: "Design defense-in-depth security architecture." },
      { n: "03", iconName: "Wrench", t: "Implementation", d: "Deploy SIEM, IAM, encryption, and monitoring tools." },
      { n: "04", iconName: "Eye", t: "Monitoring", d: "24/7 SOC monitoring with incident response." },
    ],
    sampleProjects: [
      { title: "Government SOC Setup", client: "Federal Agency", image: UNSPLASH("photo-1550751827-4bd374c3f58b"), result: "24/7 monitoring across 200+ endpoints" },
      { title: "Penetration Testing", client: "Regional Bank", image: UNSPLASH("photo-1563013544-824ae1b704d3"), result: "14 critical vulnerabilities patched pre-audit" },
      { title: "Zero-Trust Migration", client: "Insurance Provider", image: UNSPLASH("photo-1614064641938-3bbee52942c7"), result: "Full IAM overhaul in 6 months" },
    ],
    useCases: [
      { title: "Penetration Testing", desc: "Identify vulnerabilities before attackers do" },
      { title: "SIEM Deployment", desc: "Centralized security monitoring and alerting" },
      { title: "Zero Trust", desc: "Modern security architecture implementation" },
      { title: "Compliance", desc: "ISO 27001, PDPA, and government standards" },
    ],
    stats: [
      { value: "24/7", label: "Monitoring" },
      { value: "<1hr", label: "Response" },
      { value: "ISO", label: "27001 Ready" },
      { value: "Zero", label: "Breach Tolerance" },
    ],
    techStack: ["Splunk", "Sentinel", "CrowdStrike", "AWS Security", "Wazuh"],
  },
  "government-solutions": {
    processSteps: [
      { n: "01", iconName: "Building2", t: "Requirements", d: "Gather requirements with compliance and security focus." },
      { n: "02", iconName: "Shield", t: "Security", d: "Design for MAMPU and government security standards." },
      { n: "03", iconName: "Code", t: "Development", d: "Build with full documentation and audit trails." },
      { n: "04", iconName: "GraduationCap", t: "Training", d: "Comprehensive training and knowledge transfer." },
    ],
    sampleProjects: [
      { title: "Citizen Services Portal", client: "State Government Agency", image: UNSPLASH("photo-1486406146926-c627a92ad1ab"), result: "500K citizens, 50+ services online" },
      { title: "Inter-Agency Data Exchange", client: "Federal Coordination Office", image: UNSPLASH("photo-1541872703-74c5e44368f9"), result: "12 agencies connected securely" },
      { title: "e-Procurement System", client: "Statutory Body", image: UNSPLASH("photo-1450101499163-c8848c66ca85"), result: "RM 200M tenders managed digitally" },
    ],
    useCases: [
      { title: "Citizen Portals", desc: "Digital government services for public access" },
      { title: "Inter-Agency", desc: "Secure data sharing between departments" },
      { title: "e-Procurement", desc: "Digital tendering and vendor management" },
      { title: "Document Mgmt", desc: "Classification and secure archival systems" },
    ],
    stats: [
      { value: "MAMPU", label: "Compliant" },
      { value: "On-Prem", label: "Option" },
      { value: "BM/EN", label: "Bilingual" },
      { value: "MyDigital", label: "ID Ready" },
    ],
    techStack: ["Java", "PostgreSQL", "OpenLDAP", "Docker", "Kubernetes"],
  },
  "healthcare-software": {
    processSteps: [
      { n: "01", iconName: "Stethoscope", t: "Clinical", d: "Work with doctors and nurses to understand workflows." },
      { n: "02", iconName: "Shield", t: "Compliance", d: "Design for MOH and PDPA healthcare requirements." },
      { n: "03", iconName: "Code", t: "Build", d: "Develop with HL7/FHIR integration and security." },
      { n: "04", iconName: "HeartPulse", t: "Go-Live", d: "Phased rollout with 24/7 clinical support." },
    ],
    sampleProjects: [
      { title: "Hospital Information System", client: "Private Hospital KL", image: UNSPLASH("photo-1538108149393-fbbd81895907"), result: "40% patient processing time reduction" },
      { title: "Telemedicine Platform", client: "Specialist Clinic Group", image: UNSPLASH("photo-1576091160399-112ba8d25d1d"), result: "15,000+ virtual consults in first year" },
      { title: "Lab Results Portal", client: "Diagnostic Lab Chain", image: UNSPLASH("photo-1579154204601-01588f351e67"), result: "Results delivered in 4 hours vs 2 days" },
    ],
    useCases: [
      { title: "Hospital HIS", desc: "Complete hospital information systems" },
      { title: "Patient Portals", desc: "Appointment booking and records access" },
      { title: "Telemedicine", desc: "Video consultations with EHR integration" },
      { title: "Lab Integration", desc: "Connect with lab analyzers and DICOM" },
    ],
    stats: [
      { value: "HL7", label: "FHIR Ready" },
      { value: "PDPA", label: "Healthcare" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "24/7", label: "Support" },
    ],
    techStack: ["React", "Node.js", "HL7 FHIR", "DICOM", "PostgreSQL"],
  },
};

const slugs = services.map((s) => s.slug);

export const Route = createFileRoute("/services/$slug")({
  beforeLoad: ({ params }: { params: { slug: string } }) => {
    if (!slugs.includes(params.slug as ServiceSlug)) throw notFound();
  },
  loader: ({ params }: { params: { slug: string } }) => {
    const svc = services.find((s) => s.slug === params.slug)!;
    const details = serviceDetails[params.slug as ServiceSlug];
    return { svc, details };
  },
  head: ({ loaderData }: { loaderData: { svc: ServiceMeta } }) => {
    const t = loaderData?.svc.title ?? "Service";
    return {
      meta: [
        { title: `${t} Malaysia | AI Software Solution` },
        { name: "description", content: `${loaderData?.svc.short ?? ""} AI Software Solutions delivers ${t.toLowerCase()} for Malaysian organisations from Petaling Jaya.` },
        { property: "og:title", content: `${t} | AI Software Solutions` },
        { property: "og:description", content: loaderData?.svc.short ?? "" },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { svc, details } = Route.useLoaderData() as { svc: ServiceMeta; details: ServiceDetail };
  const related = services.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-mesh px-6 pt-16 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="text-xs text-[#5B6478]">
            <Link to="/" className="hover:text-[#0049D7]">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-[#0049D7]">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B1B3D]">{svc.title}</span>
          </nav>
          <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <SectionTag>{svc.tag}</SectionTag>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                {svc.title}
              </h1>
              <p className="mt-5 max-w-xl text-[#5B6478] sm:text-lg">{svc.long}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton to="/contact" size="lg">
                  Book Free Demo <Icons.ArrowRight className="h-4 w-4" />
                </PrimaryButton>
                <SecondaryButton to="/case-studies" size="lg">See Related Work</SecondaryButton>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-[rgba(0,73,215,0.15)] shadow-[0_30px_80px_-20px_rgba(0,73,215,0.3)]">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="h-[360px] w-full object-cover sm:h-[440px]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/40 via-transparent to-transparent" />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-5 -left-5 rounded-xl border border-[rgba(0,73,215,0.2)] bg-white p-4 shadow-xl">
                <div className="font-display text-2xl font-extrabold text-[#0049D7]">{details.stats[0].value}</div>
                <div className="text-xs text-[#5B6478]">{details.stats[0].label}</div>
              </div>
              <div className="absolute -right-4 top-6 rounded-xl border border-[rgba(255,180,0,0.3)] bg-white p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Icons.CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span className="text-xs font-semibold text-[#0B1B3D]">Live in production</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-[rgba(0,73,215,0.1)] bg-white px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {details.stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.05}>
                <div className="text-center">
                  <div className="font-display text-3xl font-extrabold text-[#0049D7]">{stat.value}</div>
                  <div className="mt-1 text-xs text-[#5B6478]">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW + BEST FOR */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.4fr,0.6fr]">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">What is {svc.title}?</h2>
            <p className="mt-4 text-[#5B6478]">{svc.long}</p>
            <p className="mt-3 text-[#5B6478]">
              We work shoulder-to-shoulder with your team - from initial discovery through deployment and post-launch optimisation. Every project is delivered by Malaysian engineers who understand local compliance, language, and operational context.
            </p>
            <h3 className="mt-7 font-heading text-base font-semibold text-[#0B1B3D]">Key Capabilities</h3>
            <ul className="mt-3 space-y-2.5">
              {svc.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-[15px] text-[#0B1B3D]">
                  <Icons.CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0049D7]" /> {c}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <GlassCard className="border-[rgba(255,180,0,0.3)]">
              <div className="flex items-center gap-2">
                <Icons.Target className="h-4 w-4 text-[#FFB400]" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-[#FFB400]">Best For</span>
              </div>
              <ul className="mt-4 space-y-2">
                {svc.bestFor.map((b) => (
                  <li key={b} className="flex items-center gap-2 rounded-lg border border-[rgba(0,73,215,0.1)] bg-[rgba(0,73,215,0.04)] px-3.5 py-2.5 text-sm text-[#0B1B3D]">
                    <Icons.CheckCircle2 className="h-3.5 w-3.5 text-[#0049D7]" /> {b}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* SAMPLE PROJECTS */}
      <section className="bg-[#F4F7FB] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionTag>Recent Work</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
              Sample <span className="text-[#0049D7]">{svc.title}</span> Projects
            </h2>
            <p className="mt-4 text-[#5B6478]">
              A selection of real {svc.title.toLowerCase()} projects we've delivered for Malaysian organisations.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {details.sampleProjects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white shadow-sm transition hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/70 via-[#0B1B3D]/10 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0049D7]">
                      {svc.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-heading text-base font-semibold text-[#0B1B3D]">{p.title}</h3>
                    <p className="mt-1 text-xs text-[#5B6478]">{p.client}</p>
                    <div className="mt-4 flex items-start gap-2 rounded-lg bg-[rgba(0,73,215,0.05)] p-3">
                      <Icons.TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-[#0049D7]" />
                      <span className="text-xs font-medium text-[#0B1B3D]">{p.result}</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionTag>Use Cases</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
              How Organisations Use <span className="text-[#0049D7]">{svc.title}</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {details.useCases.map((uc, i) => (
              <ScrollReveal key={uc.title} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#0049D7]/10 text-[#0049D7]">
                      <Icons.CheckCircle2 className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-[#0B1B3D]">{uc.title}</h3>
                      <p className="mt-1 text-sm text-[#5B6478]">{uc.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionTag>Key Benefits</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
              Why Teams Choose <span className="text-[#0049D7]">AI Software Solutions</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {svc.benefits.map((b, i) => {
              const BIco = (Icons[b.iconName as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon;
              return (
                <ScrollReveal key={b.title} delay={(i % 3) * 0.06}>
                  <GlassCard className="h-full">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[rgba(0,73,215,0.1)] text-[#0049D7]">
                      <BIco className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-heading text-base font-semibold text-[#0B1B3D]">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5B6478]">{b.desc}</p>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS - Service Specific */}
      <section className="bg-[#F4F7FB] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionTag>How We Deliver</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
              Our <span className="text-[#FFB400]">{svc.title}</span> Process
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {details.processSteps.map((s, i) => {
              const StepIcon = (Icons[s.iconName as keyof typeof Icons] ?? Icons.Box) as Icons.LucideIcon;
              return (
                <ScrollReveal key={s.n} delay={i * 0.1}>
                  <div className="rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white p-6">
                    <span className="font-display text-4xl font-extrabold text-[rgba(0,73,215,0.15)]">{s.n}</span>
                    <StepIcon className="mt-2 h-6 w-6 text-[#0049D7]" />
                    <h3 className="mt-3 font-heading text-base font-semibold">{s.t}</h3>
                    <p className="mt-1.5 text-sm text-[#5B6478]">{s.d}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <SectionTag>Technology Stack</SectionTag>
            <h2 className="mt-5 font-display text-2xl font-bold">Tools & Technologies We Use</h2>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {details.techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-[rgba(0,73,215,0.2)] bg-[rgba(0,73,215,0.05)] px-4 py-2 text-sm font-medium text-[#0B1B3D]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F4F7FB] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <SectionTag>FAQ</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">Common Questions About {svc.title}</h2>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {svc.faq.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`}>
                <AccordionTrigger className="text-left font-heading text-[15px] font-semibold text-[#0B1B3D] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#5B6478]">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* RELATED */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display text-2xl font-extrabold sm:text-3xl">You may also be interested in</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {related.map((r) => {
              const RIco = (Icons[r.iconName as keyof typeof Icons] ?? Icons.Box) as Icons.LucideIcon;
              return (
                <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }}>
                  <GlassCard accent="gold" className="h-full transition hover:shadow-lg">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[rgba(0,73,215,0.1)] text-[#0049D7]">
                      <RIco className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 font-heading text-base font-semibold">{r.title}</h3>
                    <p className="mt-1.5 text-sm text-[#5B6478]">{r.short}</p>
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
            Ready to discuss your <span className="text-gradient-cg">{svc.title}</span> project?
          </h2>
          <p className="mt-4 text-[#5B6478]">Book a free 30-minute call. We'll listen first, then advise.</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton to="/contact" size="lg">Book My Free Demo <Icons.ArrowRight className="h-4 w-4" /></PrimaryButton>
            <SecondaryButton to="/services">View All Services</SecondaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
