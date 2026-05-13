export const site = {
  name: "AI Software Solutions",
  short: "AI Software Solutions",
  tagline: "Intelligent Software. Real Results.",
  subTagline: "AI-Powered Software Solutions for Government, Enterprise & Healthcare",
  email: "info@aiss.com.my",
  phoneDisplay: "+60 3-3007 3021",
  phoneHref: "tel:+60330073021",
  whatsapp: "https://wa.me/60330073021",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM",
  address: {
    line1: "C-6-25, Centum @ Oasis Corporate Park",
    line2: "No. 2, Jalan PJU 1A/2, Ara Damansara",
    line3: "47301 Petaling Jaya, Selangor, Malaysia",
  },
  maps: "https://maps.app.goo.gl/QyH2fFoJ9fii93mt7",
  domain: "aisoftwaresolutions.com.my",
};

export type ServiceSlug =
  | "ai-automation"
  | "custom-software"
  | "document-digitization"
  | "mobile-apps"
  | "api-integration"
  | "smart-dashboards"
  | "iot-integration"
  | "cybersecurity"
  | "government-solutions"
  | "healthcare-software";

export interface ServiceMeta {
  slug: ServiceSlug;
  title: string;
  tag: string;
  iconName: string; // lucide icon name
  image: string; // hero image URL
  short: string;
  long: string;
  bestFor: string[];
  benefits: { title: string; desc: string; iconName: string }[];
  capabilities: string[];
  faq: { q: string; a: string }[];
}

const UNSPLASH = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const services: ServiceMeta[] = [
  {
    slug: "ai-automation",
    title: "AI & Automation Systems",
    tag: "Intelligent Automation",
    iconName: "Cpu",
    image: UNSPLASH("photo-1677442136019-21780ecad995"),
    short: "Intelligent automation tools to streamline workflows and decision-making.",
    long: "Eliminate repetitive tasks and accelerate decision-making with intelligent automation tailored to your workflows. We design, deploy, and maintain AI-driven systems that integrate cleanly with your existing tools - no rip-and-replace required.",
    bestFor: ["Government", "Healthcare", "Manufacturing", "Finance"],
    capabilities: [
      "Workflow automation across departments",
      "AI document classification and routing",
      "Predictive analytics for operations",
      "Natural-language query interfaces",
      "RPA (Robotic Process Automation) integration",
    ],
    benefits: [
      { iconName: "Zap", title: "Faster Decisions", desc: "Automated insights cut response time from days to seconds." },
      { iconName: "TrendingUp", title: "Higher Accuracy", desc: "AI eliminates manual entry errors across critical workflows." },
      { iconName: "DollarSign", title: "Cost Reduction", desc: "Slash operating costs by automating routine task volume." },
      { iconName: "Users", title: "Free Up Your Team", desc: "Let people focus on strategy, not data entry." },
      { iconName: "Layers", title: "Scales With You", desc: "Modular architecture grows as your operations expand." },
      { iconName: "ShieldCheck", title: "Audit-Ready", desc: "Every automated action is logged for compliance review." },
    ],
    faq: [
      { q: "How long does an AI automation project take?", a: "Most projects deliver a working pilot within 6–10 weeks, with full rollout in 3–6 months." },
      { q: "Do we need to replace our existing systems?", a: "No. We integrate with what you already use via APIs and middleware." },
      { q: "Is AI automation safe for sensitive government data?", a: "Yes. Our deployments meet PDPA and government security standards, with on-prem options available." },
      { q: "What ROI should we expect?", a: "Clients typically see 30–60% time savings on automated workflows within the first year." },
      { q: "Do you provide training?", a: "Yes. Every project includes onboarding, documentation, and ongoing support." },
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    tag: "Bespoke Solutions",
    iconName: "Code2",
    image: UNSPLASH("photo-1517694712202-14dd9538aa97"),
    short: "Web and system solutions built exactly for your business requirements.",
    long: "Web applications, management systems, and enterprise platforms built exactly to your specifications. We don't sell off-the-shelf - every line of code is shaped around your workflow, your users, and your goals.",
    bestFor: ["Enterprise", "Government", "SMEs", "Education"],
    capabilities: [
      "Full-stack web applications (React, Node, Python)",
      "Enterprise management systems (ERP, CRM, custom)",
      "Internal tools and admin portals",
      "Cloud-native and on-premise deployment",
      "Modernisation of legacy systems",
    ],
    benefits: [
      { iconName: "Target", title: "Built For You", desc: "No compromise - software shaped around your real workflow." },
      { iconName: "Rocket", title: "Faster Time-to-Value", desc: "Agile sprints with working demos every 2 weeks." },
      { iconName: "RefreshCw", title: "Future-Proof", desc: "Modern stack that's easy to extend, never locked-in." },
      { iconName: "Lock", title: "Owned By You", desc: "Full source code and IP transferred on delivery." },
      { iconName: "Activity", title: "Performance First", desc: "Optimised for speed, scale, and uptime from day one." },
      { iconName: "Headphones", title: "Long-Term Support", desc: "We don't disappear after launch - SLAs and roadmaps included." },
    ],
    faq: [
      { q: "How is pricing structured?", a: "Fixed-price for well-scoped projects; T&M for evolving requirements. Always agreed upfront." },
      { q: "Do we own the source code?", a: "Yes - 100%. Full IP transfer on delivery." },
      { q: "Can you work with our internal team?", a: "Absolutely. We frequently augment in-house teams or hand off cleanly after launch." },
      { q: "What if requirements change mid-project?", a: "Our agile process expects change - we accommodate scope shifts via sprint planning." },
      { q: "Do you handle hosting and DevOps?", a: "Yes. We can deploy to AWS, Azure, GCP, or your on-prem environment." },
    ],
  },
  {
    slug: "document-digitization",
    title: "Document & Process Digitization",
    tag: "SmartForce DMS",
    iconName: "FileStack",
    image: UNSPLASH("photo-1568667256549-094345857637"),
    short: "Modernize paperwork, reduce manual work, increase operational efficiency.",
    long: "Including our proprietary SmartForce DMS - AI-powered document compression, management, and retrieval at enterprise scale. Built for organisations that handle massive document volumes and need them to be searchable, secure, and instantly accessible.",
    bestFor: ["Government", "Healthcare", "Legal", "Finance"],
    capabilities: [
      "SmartForce DMS deployment and customisation",
      "AI-powered OCR and document classification",
      "Automated workflow and approval routing",
      "Compression up to 60% storage reduction",
      "Granular role-based access controls",
    ],
    benefits: [
      { iconName: "HardDrive", title: "60% Storage Cut", desc: "AI compression dramatically reduces storage footprint." },
      { iconName: "Search", title: "Instant Retrieval", desc: "Find any document in seconds, not hours." },
      { iconName: "Lock", title: "Audit-Grade Security", desc: "Every access logged, encrypted at rest and in transit." },
      { iconName: "Workflow", title: "Automated Approvals", desc: "Replace email chains with structured workflows." },
      { iconName: "FileSearch", title: "OCR & Search", desc: "Even scanned PDFs become fully searchable." },
      { iconName: "ClipboardCheck", title: "Compliance Ready", desc: "PDPA, audit, and retention policies built-in." },
    ],
    faq: [
      { q: "What is SmartForce DMS?", a: "Our proprietary AI Data Compression & Document Management System purpose-built for high-volume regulated environments." },
      { q: "Can it handle scanned paper documents?", a: "Yes - built-in OCR converts scans into searchable, structured documents automatically." },
      { q: "Is on-premise deployment available?", a: "Yes. SmartForce DMS deploys on-prem, hybrid, or cloud depending on your compliance needs." },
      { q: "How much storage can we save?", a: "Most clients see 50–60% storage reduction without quality loss." },
      { q: "How is access controlled?", a: "Granular role-based permissions, with full audit trails on every view, edit, or download." },
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    tag: "iOS & Android",
    iconName: "Smartphone",
    image: UNSPLASH("photo-1512941937669-90a1b58e7e9c"),
    short: "Native and cross-platform apps for enterprise, productivity, and public use.",
    long: "Native and cross-platform mobile applications for enterprise, government, and consumer use cases. From field-service apps to citizen-facing portals - we build for performance, accessibility, and offline reliability.",
    bestFor: ["Government", "Healthcare", "Logistics", "Enterprise"],
    capabilities: [
      "Native iOS (Swift) and Android (Kotlin)",
      "Cross-platform with React Native and Flutter",
      "Offline-first architecture",
      "Push notifications and real-time sync",
      "App Store and Play Store deployment",
    ],
    benefits: [
      { iconName: "Smartphone", title: "Native Performance", desc: "60fps responsiveness on every platform." },
      { iconName: "WifiOff", title: "Offline-First", desc: "Works without signal - syncs when reconnected." },
      { iconName: "Bell", title: "Real-Time Push", desc: "Engage users with timely, relevant notifications." },
      { iconName: "Accessibility", title: "Accessible By Default", desc: "WCAG-compliant for all user abilities." },
      { iconName: "Globe", title: "Bilingual Ready", desc: "BM and English support out of the box." },
      { iconName: "Upload", title: "Store Submission", desc: "We handle the App Store / Play Store process end-to-end." },
    ],
    faq: [
      { q: "Native or cross-platform?", a: "Depends on your needs - we recommend the best fit after scoping. Both deliver excellent UX." },
      { q: "Do you handle App Store submission?", a: "Yes. We manage the full submission, review, and update lifecycle." },
      { q: "Can the app work offline?", a: "Yes - we build offline-first with smart sync when connectivity returns." },
      { q: "How long does an MVP take?", a: "Typically 8–12 weeks for a focused MVP with one platform." },
      { q: "Do you provide ongoing maintenance?", a: "Yes - OS updates, bug fixes, and feature additions are covered under our SLA." },
    ],
  },
  {
    slug: "api-integration",
    title: "API Integration & Middleware",
    tag: "System Connectivity",
    iconName: "GitMerge",
    image: UNSPLASH("photo-1558494949-ef010cbdcc31"),
    short: "Connect software, services, and databases seamlessly across your systems.",
    long: "Connect your existing systems, third-party services, and databases with clean, well-documented integration layers. We make disparate systems behave like one cohesive platform.",
    bestFor: ["Enterprise", "Finance", "Logistics", "Government"],
    capabilities: [
      "RESTful and GraphQL API design",
      "Legacy system bridging (SOAP, EDI, flat-file)",
      "Real-time event streaming (Kafka, RabbitMQ)",
      "Third-party SaaS integrations",
      "API gateway and rate limiting",
    ],
    benefits: [
      { iconName: "GitMerge", title: "Unified Data", desc: "Single source of truth across all your systems." },
      { iconName: "Zap", title: "Real-Time Sync", desc: "No more nightly batches - data moves as it happens." },
      { iconName: "BookOpen", title: "Documented", desc: "OpenAPI specs and clear docs for every endpoint." },
      { iconName: "Shield", title: "Secure By Design", desc: "OAuth2, mTLS, and rate limits built in." },
      { iconName: "Activity", title: "Observable", desc: "Monitoring and alerts on every integration." },
      { iconName: "Repeat", title: "Resilient", desc: "Retries, circuit breakers, dead-letter queues handled." },
    ],
    faq: [
      { q: "Can you integrate with our legacy systems?", a: "Yes - we routinely bridge SOAP, EDI, and even mainframe systems to modern APIs." },
      { q: "Do you build API gateways?", a: "Yes. We deploy gateways with auth, rate limits, and analytics." },
      { q: "What about real-time event streaming?", a: "We use Kafka, RabbitMQ, or cloud-native event buses based on your stack." },
      { q: "How do you handle API versioning?", a: "Semantic versioning with backward-compatible deprecation paths." },
      { q: "Can you integrate with Malaysian government APIs?", a: "Yes - we have experience with MyDigital ID, e-Invoicing LHDN, and others." },
    ],
  },
  {
    slug: "smart-dashboards",
    title: "Smart Dashboards & Data Portals",
    tag: "Business Intelligence",
    iconName: "LayoutDashboard",
    image: UNSPLASH("photo-1551288049-bebda4e38f71"),
    short: "Turn complex data into actionable insights with interactive, real-time portals.",
    long: "Real-time, interactive dashboards that give your team and leadership instant visibility into operations and KPIs. No more waiting for monthly reports - see what's happening, right now.",
    bestFor: ["Enterprise", "Government", "Healthcare", "Finance"],
    capabilities: [
      "Custom executive dashboards",
      "Real-time KPI monitoring",
      "Multi-source data aggregation",
      "Role-based views and permissions",
      "Mobile-responsive designs",
    ],
    benefits: [
      { iconName: "Eye", title: "Total Visibility", desc: "See every KPI that matters, in one place." },
      { iconName: "Clock", title: "Real-Time Data", desc: "No more waiting for end-of-month reports." },
      { iconName: "Filter", title: "Self-Serve", desc: "Filter, drill, export - without IT involvement." },
      { iconName: "Smartphone", title: "Anywhere Access", desc: "Mobile-optimised for executives on the move." },
      { iconName: "AlertCircle", title: "Smart Alerts", desc: "Proactive notifications when KPIs cross thresholds." },
      { iconName: "Database", title: "Unified Sources", desc: "Pull from all your databases and SaaS into one view." },
    ],
    faq: [
      { q: "What data sources can you connect?", a: "Almost any - SQL/NoSQL DBs, SaaS APIs, spreadsheets, even legacy ERPs." },
      { q: "Do you build with PowerBI or custom?", a: "Both - we recommend based on cost, flexibility, and your team's skills." },
      { q: "Can dashboards be embedded in our app?", a: "Yes - we build embeddable dashboards with full SSO." },
      { q: "How are permissions handled?", a: "Granular row- and column-level security based on user roles." },
      { q: "Mobile-friendly?", a: "Every dashboard we build is fully responsive." },
    ],
  },
  {
    slug: "iot-integration",
    title: "IoT Integration & Smart Monitoring",
    tag: "Connected Systems",
    iconName: "Wifi",
    image: UNSPLASH("photo-1518770660439-4636190af475"),
    short: "Real-time data collection, remote monitoring, and automation via IoT devices.",
    long: "Connect physical devices to intelligent platforms for real-time monitoring, predictive alerts, and automated response. From factory floors to smart city infrastructure - we bridge the physical and digital.",
    bestFor: ["Manufacturing", "Logistics", "Government", "Healthcare"],
    capabilities: [
      "Sensor and device integration (MQTT, CoAP)",
      "Edge computing deployments",
      "Time-series data pipelines",
      "Predictive maintenance models",
      "Smart city / Industry 4.0 platforms",
    ],
    benefits: [
      { iconName: "Radio", title: "Real-Time Telemetry", desc: "Live data from every connected device." },
      { iconName: "AlertTriangle", title: "Predictive Alerts", desc: "Catch failures before they happen." },
      { iconName: "MapPin", title: "Asset Tracking", desc: "Know where everything is, all the time." },
      { iconName: "Cpu", title: "Edge Intelligence", desc: "Process at the edge - fast, even offline." },
      { iconName: "Battery", title: "Energy Efficient", desc: "Optimised protocols for battery-powered devices." },
      { iconName: "Lock", title: "Secure Channels", desc: "End-to-end encrypted device communication." },
    ],
    faq: [
      { q: "What protocols do you support?", a: "MQTT, CoAP, HTTP/2, AMQP, and proprietary device protocols." },
      { q: "Can you handle thousands of devices?", a: "Yes - our platforms scale to millions of devices with proper architecture." },
      { q: "Do you build the hardware too?", a: "We partner with hardware vendors but focus on the software, integration, and analytics." },
      { q: "What about predictive maintenance?", a: "Yes - we build ML models that predict failures from sensor data." },
      { q: "Edge or cloud processing?", a: "Both - hybrid edge-cloud is usually optimal for latency and bandwidth." },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Solutions",
    tag: "AI-Enhanced Security",
    iconName: "ShieldCheck",
    image: UNSPLASH("photo-1550751827-4bd374c3f58b"),
    short: "AI-enhanced threat detection, prevention, and response for critical systems.",
    long: "AI-powered threat detection, access control, and security monitoring to protect your critical systems and data. We secure everything from government networks to hospital records - with proactive, intelligent defense.",
    bestFor: ["Government", "Defence", "Finance", "Healthcare"],
    capabilities: [
      "AI-driven threat detection (SIEM/SOAR)",
      "Identity and access management (IAM)",
      "Penetration testing and audits",
      "Zero-trust architecture deployment",
      "Incident response and forensics",
    ],
    benefits: [
      { iconName: "Shield", title: "Proactive Defense", desc: "AI detects threats before they cause damage." },
      { iconName: "Eye", title: "24/7 Monitoring", desc: "Continuous surveillance of your attack surface." },
      { iconName: "UserCheck", title: "Strong Identity", desc: "Multi-factor and zero-trust by default." },
      { iconName: "FileCheck", title: "Compliance Ready", desc: "ISO 27001, PDPA, and government standards." },
      { iconName: "Activity", title: "Real-Time Response", desc: "Automated containment within seconds of detection." },
      { iconName: "Search", title: "Forensics Ready", desc: "Full incident reconstruction and reporting." },
    ],
    faq: [
      { q: "Do you offer penetration testing?", a: "Yes - black-box, grey-box, and white-box engagements available." },
      { q: "What about ISO 27001 certification support?", a: "We help organisations prepare for and achieve ISO 27001." },
      { q: "Can you integrate with our existing SIEM?", a: "Yes - we work with Splunk, Sentinel, QRadar, and others." },
      { q: "Do you provide incident response?", a: "Yes - both proactive monitoring and reactive IR retainers." },
      { q: "How fast is threat response?", a: "Automated containment in seconds; analyst review within minutes." },
    ],
  },
  {
    slug: "government-solutions",
    title: "Government & Civil Administration Systems",
    tag: "Public Sector",
    iconName: "Building2",
    image: UNSPLASH("photo-1541872703-74c5e44368f9"),
    short: "Secure systems for citizen services, data handling, and departmental coordination.",
    long: "Secure, compliant software systems for government agencies - from citizen service portals to inter-departmental data management. Built to government security standards, deployed by a Malaysian team that understands the public sector.",
    bestFor: ["Federal", "State", "Local Government", "Statutory Bodies"],
    capabilities: [
      "Citizen-facing service portals",
      "Inter-departmental data exchange",
      "Document management at scale",
      "MyDigital ID and e-government integration",
      "Multilingual (BM/EN/Chinese/Tamil) interfaces",
    ],
    benefits: [
      { iconName: "Users", title: "Citizen-Centric", desc: "Services that actually work for the public." },
      { iconName: "Lock", title: "Gov-Grade Security", desc: "Built to MAMPU and government standards." },
      { iconName: "Globe", title: "Bilingual+", desc: "BM, English, and other languages supported." },
      { iconName: "FileText", title: "Audit Trails", desc: "Every action logged for accountability." },
      { iconName: "Server", title: "On-Prem Capable", desc: "Cloud, hybrid, or fully on-premise deployment." },
      { iconName: "Award", title: "Local Expertise", desc: "Malaysian team that knows public sector workflow." },
    ],
    faq: [
      { q: "Do you have government project experience?", a: "Yes - multiple federal and state government deployments." },
      { q: "Can you deploy on-premise?", a: "Yes - full on-prem, hybrid, or cloud per your security policy." },
      { q: "How do you handle PDPA compliance?", a: "Built into every project - data residency, retention, and consent management." },
      { q: "Do you integrate with MyDigital ID?", a: "Yes - and other federal e-government systems." },
      { q: "What about procurement processes?", a: "We're familiar with government procurement and can support eP submissions." },
    ],
  },
  {
    slug: "healthcare-software",
    title: "Healthcare Software Solutions",
    tag: "MedTech",
    iconName: "HeartPulse",
    image: UNSPLASH("photo-1576091160399-112ba8d25d1d"),
    short: "Medical software for diagnostics, patient care, and hospital operations.",
    long: "Patient management systems, hospital operations software, and predictive analytics built for Malaysian healthcare providers. From private specialist clinics to multi-site hospital groups - we build software clinicians actually want to use.",
    bestFor: ["Hospitals", "Clinics", "Diagnostics Labs", "Health NGOs"],
    capabilities: [
      "Hospital Information Systems (HIS)",
      "Patient portals and telemedicine",
      "Clinical decision support tools",
      "Lab and imaging integration (HL7/FHIR)",
      "Predictive analytics for clinical outcomes",
    ],
    benefits: [
      { iconName: "Heart", title: "Patient-First", desc: "Designed around patient outcomes, not paperwork." },
      { iconName: "Activity", title: "Clinical Insights", desc: "ML models that surface what matters to clinicians." },
      { iconName: "Stethoscope", title: "Clinician-Friendly", desc: "Built with doctors and nurses - not just for them." },
      { iconName: "FileLock2", title: "PDPA Compliant", desc: "Health data handled to the highest security standards." },
      { iconName: "Network", title: "HL7 / FHIR Ready", desc: "Standards-based interop with labs and devices." },
      { iconName: "Smartphone", title: "Telemedicine", desc: "Video consults and remote monitoring built in." },
    ],
    faq: [
      { q: "Are you familiar with HL7/FHIR standards?", a: "Yes - all our healthcare integrations are standards-compliant." },
      { q: "Can you build a HIS from scratch?", a: "Yes, or we can extend your existing HIS with new modules." },
      { q: "What about telemedicine?", a: "Yes - secure video consults with EHR integration are our specialty." },
      { q: "Do you handle MOH compliance?", a: "Yes - we build to MOH and PDPA healthcare-specific requirements." },
      { q: "Can you integrate with diagnostic equipment?", a: "Yes - DICOM for imaging, HL7 for lab analysers, and more." },
    ],
  },
];

export type IndustrySlug =
  | "government"
  | "healthcare"
  | "manufacturing"
  | "logistics"
  | "finance"
  | "education"
  | "legal"
  | "defence";

export interface IndustryMeta {
  slug: IndustrySlug;
  name: string;
  icon: string;
  image: string;
  tagline: string;
  short: string;
  long: string;
  challenges: string[];
  solutions: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  relatedServices: ServiceSlug[];
}

export const industries: IndustryMeta[] = [
  {
    slug: "government",
    name: "Government",
    icon: "Building2",
    image: UNSPLASH("photo-1541872703-74c5e44368f9"),
    tagline: "Public Sector Software",
    short: "Citizen portals, document systems, secure inter-departmental data exchange, and MyDigital ID integration.",
    long: "We build software for Malaysian federal, state, and local government agencies. From citizen-facing service portals to inter-departmental data exchange platforms - we deliver compliant, secure systems that meet MAMPU and PDPA standards.",
    challenges: [
      "Legacy systems that don't talk to each other",
      "Long queues at counter services",
      "Manual document archives and slow retrieval",
      "Compliance with PDPA and government security standards",
    ],
    solutions: [
      { title: "Citizen Service Portals", desc: "24/7 online services with MyDigital ID authentication" },
      { title: "Inter-Agency Platforms", desc: "Secure data exchange between departments" },
      { title: "Document Management", desc: "AI-powered DMS with PDPA compliance built-in" },
      { title: "Smart Dashboards", desc: "Real-time KPIs for leadership and operations" },
    ],
    stats: [
      { value: "MAMPU", label: "Compliant" },
      { value: "PDPA", label: "Ready" },
      { value: "On-Prem", label: "Capable" },
      { value: "Bilingual", label: "BM / EN" },
    ],
    relatedServices: ["government-solutions", "document-digitization", "smart-dashboards", "cybersecurity"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "Heart",
    image: UNSPLASH("photo-1538108149393-fbbd81895907"),
    tagline: "MedTech Solutions",
    short: "HIS, telemedicine, patient portals, clinical decision support, and HL7/FHIR integrations.",
    long: "We build software clinicians actually want to use - Hospital Information Systems, patient portals, telemedicine platforms, and predictive analytics for Malaysian hospitals, clinics, and diagnostic labs.",
    challenges: [
      "Disconnected clinical and administrative systems",
      "Slow patient processing and long waiting times",
      "Manual record-keeping and duplicate data entry",
      "Compliance with MOH and PDPA healthcare regulations",
    ],
    solutions: [
      { title: "Hospital Information Systems", desc: "End-to-end HIS with HL7/FHIR standards" },
      { title: "Patient Portals", desc: "Appointment booking, records, and telemedicine" },
      { title: "Clinical Analytics", desc: "Predictive insights for better outcomes" },
      { title: "Lab Integration", desc: "DICOM imaging and HL7 lab interfaces" },
    ],
    stats: [
      { value: "HL7/FHIR", label: "Standards" },
      { value: "PDPA", label: "Healthcare" },
      { value: "99.9%", label: "Uptime" },
      { value: "24/7", label: "Support" },
    ],
    relatedServices: ["healthcare-software", "mobile-apps", "smart-dashboards", "api-integration"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    image: UNSPLASH("photo-1565793298595-6a879b1d9492"),
    tagline: "Industry 4.0",
    short: "IoT-driven production monitoring, predictive maintenance, and operational dashboards.",
    long: "Bring Industry 4.0 to your factory floor. We connect machines, sensors, and people with intelligent platforms that improve quality, reduce downtime, and increase throughput across Malaysian manufacturing.",
    challenges: [
      "Manual quality control with inconsistent results",
      "Unplanned machine downtime hurting output",
      "No real-time visibility into production lines",
      "Disconnected MES, ERP, and shop-floor systems",
    ],
    solutions: [
      { title: "Computer Vision QC", desc: "AI defect detection in real-time" },
      { title: "Predictive Maintenance", desc: "Catch failures before they cause downtime" },
      { title: "Production Dashboards", desc: "Live OEE, throughput, and quality metrics" },
      { title: "MES Integration", desc: "Connect shop floor with ERP seamlessly" },
    ],
    stats: [
      { value: "85%", label: "Defect Reduction" },
      { value: "35%", label: "Less Downtime" },
      { value: "<1s", label: "Sensor Latency" },
      { value: "MQTT", label: "Protocol" },
    ],
    relatedServices: ["iot-integration", "ai-automation", "smart-dashboards", "custom-software"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "Truck",
    image: UNSPLASH("photo-1601584115197-04ecc0da31d7"),
    tagline: "Supply Chain Tech",
    short: "Fleet tracking, warehouse automation, real-time delivery dashboards, and supply chain visibility.",
    long: "Software that moves with your fleet. From GPS tracking and route optimisation to warehouse automation and real-time delivery visibility - we connect every link in your supply chain.",
    challenges: [
      "No real-time view of fleet operations",
      "Inefficient routing driving up fuel costs",
      "Customer complaints about delivery uncertainty",
      "Manual warehouse processes causing errors",
    ],
    solutions: [
      { title: "Fleet Tracking", desc: "Live GPS, fuel, and driver behaviour monitoring" },
      { title: "Route Optimisation", desc: "AI-powered routing for cost and time savings" },
      { title: "Customer Notifications", desc: "Real-time delivery updates to end customers" },
      { title: "Warehouse Management", desc: "Inventory automation and barcode systems" },
    ],
    stats: [
      { value: "22%", label: "Fuel Savings" },
      { value: "95%", label: "On-Time Rate" },
      { value: "50%", label: "Fewer Support Calls" },
      { value: "Real-Time", label: "Tracking" },
    ],
    relatedServices: ["iot-integration", "mobile-apps", "smart-dashboards", "api-integration"],
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "Landmark",
    image: UNSPLASH("photo-1559526324-4b87b5e36e44"),
    tagline: "FinTech & Compliance",
    short: "Secure transaction systems, KYC/AML automation, dashboards, and regulatory compliance tooling.",
    long: "Banking-grade software for Malaysian financial institutions, fintechs, and payment processors. We build with security, compliance, and performance baked in - from day one.",
    challenges: [
      "Manual KYC and AML processes",
      "Compliance with BNM regulations",
      "Legacy core banking integration",
      "Real-time fraud detection requirements",
    ],
    solutions: [
      { title: "KYC/AML Automation", desc: "AI-powered identity verification and screening" },
      { title: "Payment Integrations", desc: "FPX, e-wallets, and card networks" },
      { title: "Compliance Tooling", desc: "BNM reporting and audit trails" },
      { title: "Risk Dashboards", desc: "Real-time exposure and fraud monitoring" },
    ],
    stats: [
      { value: "BNM", label: "Compliant" },
      { value: "<100ms", label: "Latency" },
      { value: "ISO 27001", label: "Ready" },
      { value: "24/7", label: "Monitoring" },
    ],
    relatedServices: ["custom-software", "cybersecurity", "api-integration", "smart-dashboards"],
  },
  {
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    image: UNSPLASH("photo-1503676260728-1c00da094a0b"),
    tagline: "EdTech Platforms",
    short: "LMS platforms, student portals, examination systems, and assessment analytics.",
    long: "Modern software for Malaysian schools, universities, and training institutions. From learning management systems to assessment analytics - we help educators focus on teaching, not administration.",
    challenges: [
      "Manual student record management",
      "Limited online learning capability",
      "Disconnected assessment and reporting",
      "Parent communication gaps",
    ],
    solutions: [
      { title: "Learning Management", desc: "Full-featured LMS with mobile support" },
      { title: "Student Portals", desc: "Single login for grades, attendance, fees" },
      { title: "Exam Systems", desc: "Secure online assessment with anti-cheat" },
      { title: "Parent Apps", desc: "Real-time updates and communication" },
    ],
    stats: [
      { value: "Multi-Lang", label: "BM/EN/CN" },
      { value: "Mobile", label: "First" },
      { value: "Offline", label: "Capable" },
      { value: "MOE", label: "Aligned" },
    ],
    relatedServices: ["custom-software", "mobile-apps", "smart-dashboards"],
  },
  {
    slug: "legal",
    name: "Legal",
    icon: "Scale",
    image: UNSPLASH("photo-1589994965851-a8f479c573a9"),
    tagline: "LegalTech",
    short: "Document management, contract analysis, secure client portals, and case management systems.",
    long: "Software for Malaysian law firms, in-house counsel, and corporate legal departments. We help legal teams manage documents, track cases, and serve clients better - with airtight security throughout.",
    challenges: [
      "Massive document volumes hard to search",
      "Manual contract review eating billable hours",
      "Client communication scattered across channels",
      "Case deadlines slipping through cracks",
    ],
    solutions: [
      { title: "Document AI", desc: "Auto-classify and extract from legal docs" },
      { title: "Case Management", desc: "Deadlines, billable hours, and client comms" },
      { title: "Client Portals", desc: "Secure document sharing and updates" },
      { title: "Contract Analytics", desc: "AI-flagged clauses and risk scoring" },
    ],
    stats: [
      { value: "Encrypted", label: "Storage" },
      { value: "Audit", label: "Trails" },
      { value: "OCR", label: "99%+" },
      { value: "PDPA", label: "Compliant" },
    ],
    relatedServices: ["document-digitization", "custom-software", "cybersecurity", "ai-automation"],
  },
  {
    slug: "defence",
    name: "Defence",
    icon: "Shield",
    image: UNSPLASH("photo-1551288049-bebda4e38f71"),
    tagline: "Mission-Critical Systems",
    short: "Mission-critical software, secure comms platforms, surveillance integration, and analytics.",
    long: "Highly secure, mission-critical software for Malaysian defence and national security agencies. Built to the strictest security standards with on-premise deployment and air-gapped operation when required.",
    challenges: [
      "Air-gapped network requirements",
      "Multi-classification data handling",
      "Integration with legacy defence systems",
      "Real-time situational awareness needs",
    ],
    solutions: [
      { title: "Secure Comms", desc: "End-to-end encrypted communication platforms" },
      { title: "Surveillance Integration", desc: "Unified view from cameras, sensors, radar" },
      { title: "Command Dashboards", desc: "Real-time operational intelligence" },
      { title: "Forensic Analytics", desc: "Post-event reconstruction and analysis" },
    ],
    stats: [
      { value: "Air-Gap", label: "Capable" },
      { value: "Zero-Trust", label: "Architecture" },
      { value: "On-Prem", label: "Required" },
      { value: "ISO 27001", label: "Standards" },
    ],
    relatedServices: ["cybersecurity", "iot-integration", "smart-dashboards", "custom-software"],
  },
];
