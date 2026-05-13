import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { GlassCard } from "@/components/brand/GlassCard";
import { PrimaryButton, SecondaryButton } from "@/components/brand/Buttons";
import { SectionTag } from "@/components/brand/SectionTag";
import { ScrollReveal } from "@/components/brand/ScrollReveal";
import { AnimatedCounter } from "@/components/brand/AnimatedCounter";
import { services, industries, site } from "@/lib/site";
import heroVideo from "@/assets/14851872_3840_2160_30fps.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Software Solution | AI & Software Development Malaysia" },
      { name: "description", content: "Premier Malaysian AI software company building intelligent automation, custom software, and SmartForce DMS for government, enterprise, and healthcare." },
      { property: "og:title", content: "AI Software Solution | Intelligent Software. Real Results." },
      { property: "og:description", content: "AI-powered software for Malaysian government, enterprise & healthcare. Petaling Jaya based." },
    ],
  }),
  component: HomePage,
});

/* ---------- Typewriter ---------- */
function Typewriter({ words, speed = 90, pause = 1600 }: { words: string[]; speed?: number; pause?: number }) {
  const [wi, setWi] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[wi];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setWi((v) => (v + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setText((cur) => (deleting ? word.slice(0, cur.length - 1) : word.slice(0, cur.length + 1)));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, deleting, wi, words, speed, pause]);
  return (
    <span className="inline-block">
      {text}
      <span className="ml-1 inline-block h-[0.9em] w-[3px] -translate-y-[-2px] bg-current animate-pulse align-middle" />
    </span>
  );
}

/* ---------- 1. HERO — Cinematic KL Skyline ---------- */
function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduced = useReducedMotion();
  const noAnim = !mounted || reduced;

  // KL skyline images — guaranteed to load (Unsplash CDN); animated Ken Burns effect
  const KL_NIGHT = "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=2400&q=85&auto=format&fit=crop";
  const KL_TWIN = "https://images.unsplash.com/photo-1597212618440-6a36a07d3f6e?w=2400&q=85&auto=format&fit=crop";

  return (
    <section className="relative isolate flex min-h-[100vh] items-center overflow-hidden bg-[#0B1B3D] px-6 pt-24 pb-20 text-white">
      {/* Animated KL skyline background — uses two layered images with slow zoom + cross-fade */}
      <div className="absolute inset-0 z-0">
        <img
          src={KL_NIGHT}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
        />
        <img
          src={KL_TWIN}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-0 animate-hero-fade"
        />
        {/* Local hero video bundled via Vite — always loads */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
      </div>
      {/* Cinematic overlays — strong enough for text readability */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[#0B1B3D]/55" aria-hidden />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#0B1B3D]/90 via-[#0B1B3D]/55 to-[#0B1B3D]/30" aria-hidden />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#0B1B3D] via-transparent to-[#0B1B3D]/40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 z-10 bg-grid opacity-[0.08]" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-1/4 z-10 h-[28rem] w-[28rem] rounded-full bg-[#0049D7] opacity-30 blur-[160px]" aria-hidden />
      <div className="pointer-events-none absolute -right-32 bottom-0 z-10 h-[24rem] w-[24rem] rounded-full bg-[#FFB400] opacity-15 blur-[180px]" aria-hidden />

      <div className="relative z-20 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <motion.div
            initial={noAnim ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur"
          >
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#FFB400] opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-[#FFB400]" />
            </span>
            Petaling Jaya · Malaysia's AI Software Experts
          </motion.div>

          <motion.h1
            initial={noAnim ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: noAnim ? 0 : 0.1 }}
            className="mt-6 font-display text-[clamp(2.6rem,6.5vw,5rem)] font-extrabold leading-[1.02] tracking-tight text-white"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.45)" }}
          >
            <span className="text-white">Enterprise Software</span>
            <br />
            <span className="text-white">That </span>
            <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD66B] to-[#FFB400] bg-clip-text text-transparent">Actually Gets Used.</span>
          </motion.h1>

          <motion.p
            initial={noAnim ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: noAnim ? 0 : 0.25 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            AI systems, automation platforms, and secure enterprise software for Malaysian government agencies, healthcare providers, and growing enterprises.
          </motion.p>

          <motion.div
            initial={noAnim ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: noAnim ? 0 : 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#FFB400] px-8 py-4 font-bold text-[#0B1B3D] shadow-[0_12px_40px_-8px_rgba(255,180,0,0.6)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Book a Free Demo
              <Icons.ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:border-white/60 hover:bg-white/10"
            >
              <Icons.PlayCircle className="h-4 w-4" /> See Our Work
            </Link>
          </motion.div>

          {/* Featured-in / trust strip */}
          <motion.div
            initial={noAnim ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: noAnim ? 0 : 0.6 }}
            className="mt-12"
          >
            <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
              Trusted by Government & Enterprise
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-2"><Icons.ShieldCheck className="h-4 w-4 text-[#FFB400]" /> PDPA Compliant</span>
              <span className="inline-flex items-center gap-2"><Icons.Award className="h-4 w-4 text-[#FFB400]" /> MSC Status</span>
              <span className="inline-flex items-center gap-2"><Icons.Lock className="h-4 w-4 text-[#FFB400]" /> ISO 27001</span>
              <span className="inline-flex items-center gap-2"><Icons.MapPin className="h-4 w-4 text-[#FFB400]" /> 100% Malaysian Team</span>
            </div>
          </motion.div>
        </div>

        {/* Right column: Command Center Dashboard */}
        <div className="hidden lg:col-span-4 lg:block">
          <motion.div
            initial={noAnim ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: noAnim ? 0 : 0.3 }}
            className="relative h-[480px]"
          >
            {/* Dashboard Frame */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-[#0A1628] shadow-[0_40px_80px_-20px_rgba(0,73,215,0.5)]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#0D1F35] px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                    <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                    <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                  </div>
                  <span className="ml-2 text-xs font-medium text-white/80">AISS Command Center</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-emerald-400">Live</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 space-y-3">
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Active Users", value: "2,847", trend: "+12%", color: "#0049D7" },
                    { label: "Documents", value: "156K", trend: "+8%", color: "#FFB400" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-[#0D1F35] border border-white/5 p-3">
                      <p className="text-[9px] uppercase tracking-wider text-white/50">{stat.label}</p>
                      <p className="mt-1 font-display text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-[9px] text-emerald-400">{stat.trend}</p>
                    </div>
                  ))}
                </div>

                {/* Analytics Chart */}
                <div className="rounded-lg bg-[#0D1F35] border border-white/5 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium text-white/80">System Performance</span>
                    <span className="text-[9px] text-white/50">Last 24h</span>
                  </div>
                  <div className="flex h-16 items-end gap-1">
                    {[35, 52, 48, 68, 75, 82, 70, 88, 76, 92, 85, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-[#0049D7] to-[#0066FF]"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Document Workflow */}
                <div className="rounded-lg bg-[#0D1F35] border border-white/5 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium text-white/80">Document Workflow</span>
                    <span className="text-[9px] text-white/50">Processing</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Gov Contract.pdf", status: "Complete", progress: 100 },
                      { name: "Medical Records.zip", status: "Processing", progress: 67 },
                      { name: "Audit_Report.docx", status: "Queued", progress: 0 },
                    ].map((doc) => (
                      <div key={doc.name} className="flex items-center gap-2">
                        <Icons.FileText className="h-3 w-3 text-white/50" />
                        <span className="flex-1 text-[9px] text-white/70 truncate">{doc.name}</span>
                        <div className="h-1.5 w-16 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#0049D7] to-[#FFB400]"
                            style={{ width: `${doc.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="rounded-lg bg-[#0D1F35] border border-white/5 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium text-white/80">Recent Activity</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { action: "Document compressed", time: "2m ago" },
                      { action: "API integration complete", time: "5m ago" },
                      { action: "User authentication", time: "8m ago" },
                    ].map((activity) => (
                      <div key={activity.action} className="flex items-center justify-between text-[9px]">
                        <span className="text-white/60">{activity.action}</span>
                        <span className="text-white/40">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#0049D7]/20 to-[#FFB400]/20 blur-xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/60 md:flex">
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll to explore</span>
        <Icons.ChevronDown className="h-4 w-4 animate-bounce-soft" />
      </div>
    </section>
  );
}

/* ---------- Device showcase: Real Mobile App, Laptop CRM, Laptop AI Dev ---------- */
function DeviceShowcase() {
  const slides = ["crm", "mobile", "ai"] as const;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((v) => (v + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, []);

  const slideContent = {
    crm: (
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop"
        alt="CRM Dashboard"
        className="rounded-xl shadow-2xl"
      />
    ),
    mobile: (
      <img
        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&auto=format&fit=crop"
        alt="Mobile App"
        className="rounded-xl shadow-2xl"
      />
    ),
    ai: (
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop"
        alt="AI Development"
        className="rounded-xl shadow-2xl"
      />
    ),
  };

  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_50%_50%,rgba(0,73,215,0.12),transparent_60%)]" />

      {/* Fixed height container */}
      <div className="relative h-[480px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="scale-[0.88] origin-center lg:scale-[0.92] xl:scale-100">
            {slideContent[slides[idx]]}
          </div>
        </div>
      </div>
    </div>
  );
}

function LaptopCRM() {
  return (
    <div className="w-[480px]">
      {/* Laptop Frame */}
      <div className="rounded-t-xl bg-[#1a1a2e] p-2 pb-0 shadow-[0_40px_80px_-20px_rgba(0,73,215,0.4)]">
        {/* Browser Chrome */}
        <div className="rounded-t-lg bg-[#f8fafc] p-3">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1.5 text-[11px] text-[#5B6478] shadow-sm">
              <span className="text-[#0049D7]">https://</span>crm.aiss.com.my/dashboard
            </div>
          </div>
          {/* CRM Interface */}
          <div className="rounded-lg bg-white p-4 shadow-inner">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#0049D7] to-[#0066FF]" />
                <span className="font-heading text-sm font-semibold text-[#0B1B3D]">AISS CRM</span>
              </div>
              <div className="flex gap-2">
                <span className="rounded-md bg-[#F4F7FB] px-2 py-1 text-[10px] text-[#5B6478]">Q4 2025</span>
                <span className="rounded-md bg-[#0049D7]/10 px-2 py-1 text-[10px] font-medium text-[#0049D7]">Live</span>
              </div>
            </div>
            {/* Stats Grid */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: "Total Revenue", value: "RM 2.4M", change: "+12.5%", up: true },
                { label: "Active Deals", value: "156", change: "+8", up: true },
                { label: "Conversion", value: "24.8%", change: "+2.1%", up: true },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg bg-[#F8FAFC] p-3">
                  <p className="text-[9px] uppercase tracking-wide text-[#5B6478]">{stat.label}</p>
                  <p className="mt-1 font-display text-lg font-bold text-[#0B1B3D]">{stat.value}</p>
                  <p className={`text-[9px] ${stat.up ? "text-emerald-500" : "text-red-500"}`}>{stat.change}</p>
                </div>
              ))}
            </div>
            {/* Chart Area */}
            <div className="mt-4 rounded-lg bg-gradient-to-br from-[#0049D7]/5 to-transparent p-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-[#5B6478]">Sales Pipeline</span>
                <div className="flex gap-2">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                    <span key={m} className="text-[8px] text-[#5B6478]">{m}</span>
                  ))}
                </div>
              </div>
              <div className="mt-3 flex h-16 items-end gap-1">
                {[45, 62, 55, 78, 85, 95].map((h, k) => (
                  <div key={k} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#0049D7] to-[#0066FF]" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            {/* Recent Activity */}
            <div className="mt-4 space-y-2">
              {["Kementerian KDN - Proposal Sent", "Hospital KL - Contract Signed", "TM Malaysia - Demo Scheduled"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 rounded-md bg-[#F8FAFC] px-2 py-1.5">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#FFB400] to-[#FF8C00]" />
                  <span className="flex-1 text-[10px] text-[#0B1B3D]">{item}</span>
                  <span className="text-[8px] text-[#5B6478]">{["2h", "5h", "1d"][i]} ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Laptop Base */}
      <div className="mx-auto h-2 w-[95%] rounded-b-md bg-gradient-to-b from-[#2a2a3e] to-[#1a1a2e]" />
      <div className="mx-auto h-1.5 w-[30%] rounded-b-sm bg-[#0f0f1a]" />
    </div>
  );
}

function MobileApp() {
  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="w-[220px] rounded-[40px] border-[8px] border-[#1a1a2e] bg-[#1a1a2e] p-1 shadow-[0_40px_80px_-20px_rgba(0,73,215,0.4)]">
        {/* Screen */}
        <div className="overflow-hidden rounded-[32px] bg-white">
          {/* Status Bar */}
          <div className="flex items-center justify-between bg-[#0049D7] px-5 py-2 text-white">
            <span className="text-[10px] font-medium">9:41</span>
            <div className="flex gap-1">
              <Icons.Wifi className="h-3 w-3" />
              <Icons.Battery className="h-3 w-3" />
            </div>
          </div>
          {/* App Header */}
          <div className="bg-gradient-to-br from-[#0049D7] to-[#0066FF] px-4 pb-6 pt-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-white/20 backdrop-blur" />
                <span className="font-heading text-sm font-semibold">AISS Mobile</span>
              </div>
              <Icons.Bell className="h-4 w-4 opacity-80" />
            </div>
            <p className="mt-4 text-[11px] opacity-80">Good morning,</p>
            <p className="font-display text-xl font-bold">Encik Ahmad</p>
          </div>
          {/* Quick Stats */}
          <div className="mx-3 -mt-3 rounded-xl bg-white p-3 shadow-lg">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-[#F8FAFC] p-2">
                <p className="text-[8px] uppercase text-[#5B6478]">Tasks Today</p>
                <p className="font-display text-lg font-bold text-[#0049D7]">8</p>
              </div>
              <div className="rounded-lg bg-[#F8FAFC] p-2">
                <p className="text-[8px] uppercase text-[#5B6478]">Approved</p>
                <p className="font-display text-lg font-bold text-emerald-500">12</p>
              </div>
            </div>
          </div>
          {/* Menu Grid */}
          <div className="p-3">
            <p className="mb-2 text-[10px] font-medium text-[#5B6478]">Quick Actions</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: Icons.FileText, label: "Documents", color: "#0049D7" },
                { icon: Icons.Calendar, label: "Schedule", color: "#FFB400" },
                { icon: Icons.MessageSquare, label: "Messages", color: "#0049D7" },
                { icon: Icons.BarChart3, label: "Reports", color: "#10B981" },
                { icon: Icons.Users, label: "Team", color: "#0049D7" },
                { icon: Icons.Settings, label: "Settings", color: "#5B6478" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1 rounded-lg bg-[#F8FAFC] p-2">
                  <div className="grid h-8 w-8 place-items-center rounded-lg" style={{ backgroundColor: `${item.color}15` }}>
                    <item.icon className="h-4 w-4" style={{ color: item.color }} />
                  </div>
                  <span className="text-[8px] text-[#5B6478]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Recent Items */}
          <div className="border-t border-gray-100 p-3">
            <p className="mb-2 text-[10px] font-medium text-[#5B6478]">Recent</p>
            {["Q4 Report.pdf", "Meeting Notes.docx"].map((file, i) => (
              <div key={i} className="mb-2 flex items-center gap-2 rounded-lg bg-[#F8FAFC] p-2">
                <div className="h-6 w-6 rounded-lg bg-[#0049D7]/10" />
                <div className="flex-1">
                  <p className="text-[9px] font-medium text-[#0B1B3D]">{file}</p>
                  <p className="text-[7px] text-[#5B6478]">2 MB • Opened today</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LaptopAI() {
  return (
    <div className="w-[480px]">
      {/* Laptop Frame */}
      <div className="rounded-t-xl bg-[#1a1a2e] p-2 pb-0 shadow-[0_40px_80px_-20px_rgba(0,73,215,0.4)]">
        {/* IDE-like Interface */}
        <div className="rounded-t-lg bg-[#0d1117] p-3">
          {/* Window Controls + Title */}
          <div className="mb-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="ml-4 text-[11px] text-[#5B6478]">AISS AI Studio - agent_development.py</span>
          </div>
          {/* Code Editor Area */}
          <div className="rounded-lg bg-[#161b22] p-4 font-mono text-[10px]">
            {/* Sidebar + Code */}
            <div className="flex gap-4">
              {/* File Explorer */}
              <div className="w-24 text-[#5B6478]">
                <p className="mb-2 text-[8px] uppercase">Explorer</p>
                <p className="text-emerald-400">📁 agents</p>
                <p className="pl-3 text-[#c9d1d9]">agent_core.py</p>
                <p className="pl-3 text-[#c9d1d9]">nlp_engine.py</p>
                <p className="pl-3 text-[#c9d1d9]">model_api.py</p>
                <p className="mt-1 text-blue-400">📁 config</p>
                <p className="mt-1 text-yellow-400">📁 tests</p>
              </div>
              {/* Code Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 border-b border-[#30363d] pb-2">
                  <span className="text-[#c9d1d9]">agent_development.py</span>
                  <span className="ml-auto rounded bg-[#238636] px-2 py-0.5 text-[8px] text-white">Running</span>
                </div>
                <div className="mt-3 space-y-1 text-[9px]">
                  <p><span className="text-[#ff7b72]">from</span> <span className="text-[#c9d1d9]">aiss.ai</span> <span className="text-[#ff7b72]">import</span> <span className="text-[#c9d1d9]">Agent, Model</span></p>
                  <p><span className="text-[#ff7b72]">from</span> <span className="text-[#c9d1d9]">aiss.automation</span> <span className="text-[#ff7b72]">import</span> <span className="text-[#c9d1d9]">Workflow</span></p>
                  <p className="text-[#8b949e]"># Initialize AI Agent for document processing</p>
                  <p><span className="text-[#c9d1d9]">agent = Agent(</span></p>
                  <p className="pl-4"><span className="text-[#79c0ff]">model</span><span className="text-[#c9d1d9]">=Model.GPT_4,</span></p>
                  <p className="pl-4"><span className="text-[#79c0ff]">tools</span><span className="text-[#c9d1d9]">=["ocr", "classify", "route"],</span></p>
                  <p className="pl-4"><span className="text-[#79c0ff]">compliance</span><span className="text-[#c9d1d9]">="PDPA_2010"</span></p>
                  <p><span className="text-[#c9d1d9]">)</span></p>
                  <p className="mt-2 text-[#d2a8ff]">@agent.task</p>
                  <p><span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">process_documents</span><span className="text-[#c9d1d9]">(batch):</span></p>
                </div>
              </div>
            </div>
            {/* Terminal Output */}
            <div className="mt-4 rounded-lg bg-black p-3">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[8px] text-emerald-400">AI Agent Active</span>
              </div>
              <p className="text-[8px] text-[#8b949e]">$ aiss run agent_development.py</p>
              <p className="text-[8px] text-emerald-400">[INFO] Loading model: gpt-4-aiss-v2...</p>
              <p className="text-[8px] text-blue-400">[SUCCESS] Agent initialized with PDPA compliance</p>
              <p className="text-[8px] text-emerald-400">[METRICS] Latency: 245ms | Accuracy: 98.7%</p>
              <p className="text-[8px] text-[#c9d1d9]">Processing batch of 1,247 documents...</p>
              <div className="mt-2 h-1.5 rounded-full bg-[#30363d]">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#0049D7] to-[#FFB400]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop Base */}
      <div className="mx-auto h-2 w-[95%] rounded-b-md bg-gradient-to-b from-[#2a2a3e] to-[#1a1a2e]" />
      <div className="mx-auto h-1.5 w-[30%] rounded-b-sm bg-[#0f0f1a]" />
    </div>
  );
}

/* ---------- 2. TRUST BAR ---------- */
function TrustBar() {
  const items = [
    "Ministry of Home Affairs", "Kementerian KDN", "Healthcare Malaysia",
    "Enterprise Client", "Government Agency", "Medical Centre",
    "Private Hospital", "Smart City Project",
  ];
  const all = [...items, ...items];
  return (
    <section className="relative border-y border-[rgba(0,73,215,0.08)] bg-[#F4F7FB] py-10">
      <p className="text-center font-heading text-[11px] font-semibold uppercase tracking-[0.25em] text-[#5B6478]">
        Trusted by Forward-Thinking Malaysian Organisations
      </p>
      <div className="relative mt-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F4F7FB] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F4F7FB] to-transparent" />
        <div className="flex w-max gap-3 animate-marquee">
          {all.map((n, i) => (
            <span
              key={i}
              className="rounded-full border border-[rgba(0,73,215,0.15)] bg-white px-5 py-2 font-heading text-xs text-[#0B1B3D] shadow-sm"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- 4. PAIN POINTS ---------- */
function PainPoints() {
  const pains = [
    { Icon: Icons.AlertTriangle, text: "Drowning in paperwork and manual approvals" },
    { Icon: Icons.Clock, text: "Slow decisions because critical data lives in disconnected silos across departments" },
    { Icon: Icons.Shield, text: "Security risks from legacy systems and manual access" },
    { Icon: Icons.Users, text: "IT team rebuilding the same tools repeatedly" },
    { Icon: Icons.BarChart3, text: "No real-time visibility into operations or KPIs" },
    { Icon: Icons.Globe, text: "Your competitors are already automating - you're not" },
  ];
  return (
    <section className="bg-[#F4F7FB] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTag>Sound Familiar?</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
            Is Your Business Stuck in <span className="text-[#FFB400]">Manual Mode?</span>
          </h2>
          <p className="mt-4 text-[#5B6478]">
            Most Malaysian organisations are losing time and revenue to outdated processes. Here's what we hear every day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <ScrollReveal key={p.text} delay={(i % 3) * 0.08}>
              <GlassCard className="flex h-full items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[rgba(255,180,0,0.1)] text-[#FFB400]">
                  <p.Icon className="h-5 w-5" />
                </span>
                <p className="font-heading text-[15px] font-medium text-[#0B1B3D]">{p.text}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center italic text-[#5B6478]">
          We've solved all of these - for government agencies, hospitals, and enterprise clients across Malaysia.
        </p>
      </div>
    </section>
  );
}

/* ---------- 5. SERVICES GRID ---------- */
function ServicesGrid() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTag>What We Build</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
            End-to-End <span className="text-gradient-cg">AI & Software</span> Solutions
          </h2>
          <p className="mt-4 text-[#5B6478]">
            Every solution is custom-built for your industry, your team, and your goals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Ico = (Icons[s.iconName as keyof typeof Icons] ?? Icons.Box) as Icons.LucideIcon;
            return (
              <ScrollReveal key={s.slug} delay={(i % 3) * 0.05}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="block h-full">
                  <GlassCard accent="gold" className="group flex h-full flex-col">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[rgba(0,73,215,0.1)] text-[#0049D7]">
                      <Ico className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-heading text-[17px] font-semibold text-[#0B1B3D]">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5B6478]">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0049D7] transition group-hover:gap-2">
                      Learn More <Icons.ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            );
          })}
          <ScrollReveal>
            <GlassCard className="flex h-full flex-col justify-between border-[rgba(255,180,0,0.4)] bg-[rgba(255,180,0,0.04)]">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[rgba(255,180,0,0.15)] text-[#FFB400]">
                  <Icons.Sparkles className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">Don't see what you need?</h3>
                <p className="mt-2 text-sm text-[#5B6478]">
                  We build fully custom solutions. Tell us your challenge.
                </p>
              </div>
              <PrimaryButton to="/contact" size="sm" className="mt-5 self-start">
                Let's Talk <Icons.ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


/* ---------- 7. WHY AI SOFTWARE SOLUTIONS ---------- */
function WhyAISS() {
  const points = [
    "100% Malaysian team - we understand local compliance and culture",
    "Government-grade security standards on every project",
    "Full-stack capability: from mobile apps to cloud infrastructure",
    "SmartForce DMS - our proprietary AI document management system",
    "Bilingual support in English and Bahasa Malaysia",
    "Post-launch support SLA with guaranteed response times",
  ];
  const mini = [
    ["Ara Damansara", "KL-based HQ"],
    ["Gov & Enterprise", "Primary Sectors"],
    ["Mon–Fri 9–6", "Support Hours"],
    ["PDPA Compliant", "Data Security"],
  ];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <ScrollReveal>
          <SectionTag>Why Choose AI Software Solutions</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Built for Malaysian Businesses.
            <br />
            <span className="text-gradient-cg">Backed by Real Expertise.</span>
          </h2>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <Icons.CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0049D7]" />
                <span className="text-[15px] text-[#0B1B3D]">{p}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <GlassCard className="border-[rgba(0,73,215,0.4)] shadow-[0_0_60px_rgba(0,73,215,0.1)]">
            <div className="grid grid-cols-2 gap-4">
              {mini.map(([v, l]) => (
                <div key={l} className="rounded-xl border border-[rgba(0,73,215,0.1)] bg-[rgba(0,73,215,0.04)] p-5">
                  <div className="font-display text-lg font-bold text-[#0049D7]">{v}</div>
                  <div className="mt-1 text-xs text-[#5B6478]">{l}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------- 8. INDUSTRIES ---------- */
function Industries() {
  return (
    <section className="bg-[#F4F7FB] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTag>Who We Serve</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
            Solutions for <span className="text-[#FFB400]">Every Sector</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {industries.map((ind, i) => {
            const Ico = (Icons[ind.icon as keyof typeof Icons] ?? Icons.Box) as Icons.LucideIcon;
            return (
              <ScrollReveal key={ind.name} delay={(i % 4) * 0.05}>
                <Link to="/industries/$slug" params={{ slug: ind.slug }} className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#FFB400] hover:shadow-lg">
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#0049D7] to-[#FFB400] transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[rgba(0,73,215,0.08)] text-[#0049D7] transition group-hover:bg-[#FFB400]/15 group-hover:text-[#FFB400]">
                    <Ico className="h-6 w-6" />
                  </span>
                  <span className="text-center font-heading text-xs font-semibold text-[#0B1B3D]">{ind.name}</span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. SmartForce DMS ---------- */
function SmartForce() {
  return (
    <section className="relative overflow-hidden border-l-2 border-[#0049D7] bg-gradient-to-br from-white via-[#F4F7FB] to-white px-6 py-24">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#0049D7] opacity-[0.08] blur-[120px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <ScrollReveal>
          <SectionTag>Featured Solution</SectionTag>
          <h2 className="mt-5 font-display text-4xl font-extrabold sm:text-5xl">SmartForce DMS</h2>
          <h3 className="mt-2 font-heading text-lg font-semibold text-[#0049D7]">
            AI Data Compression & Document Management System
          </h3>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#5B6478]">
            SmartForce DMS reduces storage costs, automates document workflows, and brings enterprise-grade security to your document management. Purpose-built for government agencies, hospitals, and regulated industries handling high volumes of sensitive documents.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              ["🗜️", "AI Compression"],
              ["🔒", "Secure Access"],
              ["⚡", "Fast Retrieval"],
            ].map(([e, t]) => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(0,73,215,0.2)] bg-[rgba(0,73,215,0.06)] px-3.5 py-1.5 text-xs font-medium text-[#0B1B3D]">
                <span>{e}</span> {t}
              </span>
            ))}
          </div>
          <div className="mt-7">
            <SecondaryButton to="/services/document-digitization">
              Learn About SmartForce DMS <Icons.ArrowRight className="h-4 w-4" />
            </SecondaryButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <GlassCard className="border-[rgba(0,73,215,0.3)] shadow-[0_0_60px_rgba(0,73,215,0.15)]">
            <div className="flex items-center justify-between border-b border-[#0B1B3D]/10 pb-3">
              <div className="flex items-center gap-2">
                <Icons.FileStack className="h-4 w-4 text-[#0049D7]" />
                <span className="font-heading text-xs font-semibold text-[#0B1B3D]">SmartForce DMS - Document Manager</span>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#FFB400]" />
                <span className="h-2 w-2 rounded-full bg-[#0049D7]" />
                <span className="h-2 w-2 rounded-full bg-[#5B6478]" />
              </div>
            </div>
            <div className="mt-4 space-y-2.5">
              {[
                ["Patient_Records_Q3.pdf", "1.2 MB → 480 KB", "Compressed"],
                ["Procurement_2025.xlsx", "3.8 MB → 1.5 MB", "Compressed"],
                ["Audit_Report_Final.pdf", "5.6 MB → 2.1 MB", "Compressed"],
              ].map(([n, s, st]) => (
                <div key={n} className="flex items-center justify-between rounded-lg border border-[#0B1B3D]/10 bg-[#F4F7FB] px-3 py-2.5 text-xs">
                  <div className="flex items-center gap-2">
                    <Icons.FileText className="h-3.5 w-3.5 text-[#5B6478]" />
                    <span className="text-[#0B1B3D]">{n}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[#5B6478]">{s}</span>
                    <span className="rounded-full bg-[rgba(0,73,215,0.15)] px-2 py-0.5 text-[10px] font-semibold text-[#0049D7]">{st}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-[#0B1B3D]/10 bg-[#F4F7FB] p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#5B6478]">Storage saved this month</span>
                <span className="font-display text-sm font-bold text-[#FFB400]">61.4%</span>
              </div>
              <div className="flex h-16 items-end gap-1.5">
                {[40, 65, 50, 78, 55, 88, 72, 95, 80, 92].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-[#0049D7] to-[#0049D7]/30"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------- 10. TESTIMONIALS ---------- */
const testimonials = [
  { q: "AI Software Solutions delivered our document management system on time and on budget. The team understood our government compliance requirements from day one.", n: "Encik Ahmad Faizal", t: "IT Director, Government Agency" },
  { q: "The hospital management system they built has cut our patient processing time by 40%. Excellent local team, excellent support.", n: "Dr. Sarah Lim", t: "CIO, Private Hospital, KL" },
  { q: "From API integration to dashboard build - the AI Software Solutions team handled everything and communicated clearly throughout the entire project.", n: "Raj Kumar", t: "Head of Operations, Logistics Company" },
  { q: "SmartForce DMS has transformed how we handle document archives. Storage cost dropped 60%, retrieval is instant.", n: "Puan Nor Hidayah", t: "Admin Manager, Regulatory Body" },
  { q: "Professional, responsive, and technically sharp. Exactly what a Malaysian AI company should be. Highly recommend AI Software Solutions.", n: "Michael Tan", t: "CEO, Manufacturing SME, Penang" },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((v) => (v + 1) % testimonials.length), 4500);
    return () => clearInterval(id);
  }, [paused]);
  const t = testimonials[idx];
  const initials = t.n.split(" ").slice(0, 2).map(s => s[0]).join("");
  return (
    <section
      className="px-6 py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <SectionTag>Client Stories</SectionTag>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">What Our Clients Say</h2>
        </div>
        <div className="relative mt-12">
          <motion.div key={idx} initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <GlassCard className="px-8 py-10 sm:px-12">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icons.Star key={i} className="h-4 w-4 fill-[#FFB400] text-[#FFB400]" />
                ))}
              </div>
              <p className="mt-5 font-display text-xl leading-relaxed text-[#0B1B3D] sm:text-2xl">
                "{t.q}"
              </p>
              <div className="mt-7 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#0049D7] to-[#FFB400] font-display text-sm font-bold text-[#FFFFFF]">
                  {initials}
                </div>
                <div>
                  <div className="font-heading text-sm font-semibold text-[#0B1B3D]">{t.n}</div>
                  <div className="text-xs text-[#5B6478]">{t.t}</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-[#0049D7]" : "w-1.5 bg-[rgba(255,255,255,0.2)]"}`}
              />
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-[#5B6478]">
          Sample quotes - replace with verified client testimonials
        </p>
      </div>
    </section>
  );
}

/* ---------- 11. TECH STACK ---------- */
function TechStack() {
  const techs = [
    { name: "Python", icon: "python" },
    { name: "React.js", icon: "react" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Docker", icon: "docker" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "TensorFlow", icon: "tensorflow" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Redis", icon: "redis" },
    { name: "Elasticsearch", icon: "elasticsearch" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Linux", icon: "linux" },
    { name: "Nginx", icon: "nginx" },
    { name: "JavaScript", icon: "javascript" },
    { name: "WordPress", icon: "wordpress" },
    { name: "Strapi", icon: "strapi" },
    { name: "GraphQL", icon: "graphql" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Vite", icon: "vite" },
    { name: "Jest", icon: "jest" },
    { name: "MySQL", icon: "mysql" },
    { name: "SQLite", icon: "sqlite" },
    { name: "Firebase", icon: "firebase" },
  ];
  const renderRow = (items: typeof techs, dir: "" | "-reverse") => (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-4 ${dir === "-reverse" ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg border border-[rgba(0,73,215,0.1)] bg-white px-5 py-3 shadow-sm">
            <img src={`https://cdn.simpleicons.org/${t.icon}`} alt={t.name} className="h-6 w-6" />
            <span className="text-sm font-semibold text-[#0B1B3D]">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <section className="bg-[#F4F7FB] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTag>Technologies We Use</SectionTag>
          <h2 className="mt-5 font-display text-2xl font-extrabold sm:text-3xl">
            Powered by <span className="text-[#0049D7]">Enterprise-Grade</span> Technology
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {renderRow(techs.slice(0, 12), "")}
          {renderRow(techs.slice(12, 24), "-reverse")}
        </div>
      </div>
    </section>
  );
}


/* ---------- 13. FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,73,215,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
          Ready to Build Something
          <br />
          <span className="text-gradient-cg">Intelligent?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[#5B6478]">
          Book a free 30-minute discovery call with our team. No pressure, no sales pitch - just honest insights about your project.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton to="/contact" size="lg">
            Book My Free Demo <Icons.ArrowRight className="h-4 w-4" />
          </PrimaryButton>
          <a href={site.phoneHref} className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-[#0049D7] hover:underline">
            <Icons.Phone className="h-4 w-4" /> {site.phoneDisplay}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {[
            ["🕒", "30-Min Free Call"],
            ["🇲🇾", "Malaysian Team"],
            ["🔒", "PDPA Safe"],
          ].map(([e, t]) => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-[#0B1B3D]/10 bg-white px-3 py-1.5 text-xs text-[#5B6478]">
              <span>{e}</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- VISUAL SHOWCASE ---------- */
function VisualShowcase() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <SectionTag>Our Work in Action</SectionTag>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Building Software That <span className="text-gradient-cg">Transforms</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#5B6478]">
              From government portals to healthcare systems - see how we bring ideas to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop",
              title: "Team Collaboration",
              desc: "Cross-functional teams working together on complex projects for our clients",
            },
            {
              img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop",
              title: "Modern Office",
              desc: "Our Petaling Jaya HQ where innovation happens every single day",
            },
            {
              img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
              title: "Strategic Planning",
              desc: "Deep dive sessions to understand your business needs and goals",
            },
            {
              img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&auto=format&fit=crop",
              title: "Code Review",
              desc: "Rigorous quality assurance for every line of code we write and deploy",
            },
            {
              img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format&fit=crop",
              title: "Client Meetings",
              desc: "Regular check-ins to ensure project success and alignment",
            },
            {
              img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop",
              title: "Training Sessions",
              desc: "Empowering teams with new technologies and best practices",
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white shadow-sm transition hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-[#0B1B3D]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#5B6478] line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CASE STUDIES PREVIEW (DARK PREMIUM) ---------- */
function CaseStudyPreview() {
  const cases = [
    {
      industry: "Government",
      client: "Ministry of Home Affairs",
      problem: "Document retrieval took 4 hours on average",
      result: "95% faster retrieval, 60% storage cut",
      slug: "government-citizen-portal",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
    },
    {
      industry: "Healthcare",
      client: "Private Hospital KL",
      problem: "Patient processing was slow and manual",
      result: "40% faster patient processing",
      slug: "healthcare-operations",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&auto=format&fit=crop",
    },
    {
      industry: "Finance",
      client: "Regional Digital Bank",
      problem: "Manual KYC reviews took 3-7 days",
      result: "92% completion rate, onboarding in <5min",
      slug: "manufacturing-automation",
      img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#0B1B3D] px-6 py-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#0049D7] opacity-25 blur-[140px]" aria-hidden />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#FFB400] opacity-15 blur-[160px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFB400] shadow-[0_0_8px_rgba(255,180,0,0.8)]" />
              Case Studies
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Real Results for{" "}
              <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">Malaysian Organisations</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              See how we've transformed operations across government, healthcare, and finance.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link to="/case-studies/$slug" params={{ slug: c.slug }} className="group block h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur transition hover:-translate-y-1 hover:border-[#FFB400]/50 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_-20px_rgba(255,180,0,0.4)]">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.client}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-[#0B1B3D]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block rounded-full bg-[#FFB400] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0B1B3D]">
                        {c.industry}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-white">{c.client}</h3>
                    <p className="mt-2 text-sm text-white/60">{c.problem}</p>
                    <div className="mt-5 flex items-center justify-between rounded-xl border border-[#FFB400]/30 bg-[#FFB400]/10 p-3">
                      <p className="text-sm font-bold text-[#FFB400]">{c.result}</p>
                      <Icons.ArrowUpRight className="h-4 w-4 text-[#FFB400] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 font-bold text-[#0B1B3D] shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition hover:-translate-y-0.5 hover:bg-[#FFB400]">
            View All Case Studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPARISON TABLE ---------- */
function ComparisonTable() {
  const columns = ["Feature", "AI Software Solutions", "Freelancer", "Big Agency", "In-house"];
  const rows: { feature: string; cells: (boolean | string)[] }[] = [
    { feature: "Malaysian Team", cells: [true, true, false, true] },
    { feature: "Government Compliance", cells: [true, false, true, false] },
    { feature: "Dedicated Support", cells: [true, false, true, true] },
    { feature: "Scalable Team", cells: [true, false, true, false] },
    { feature: "Cost Predictable", cells: [true, false, false, false] },
    { feature: "Local Knowledge", cells: [true, true, false, true] },
    { feature: "Full-Stack Capability", cells: [true, false, true, false] },
    { feature: "Post-Launch Support", cells: [true, false, true, true] },
  ];
  const Cell = ({ v, highlight }: { v: boolean | string; highlight?: boolean }) => (
    <td className={`px-6 py-4 text-center ${highlight ? "bg-[rgba(0,73,215,0.06)]" : ""}`}>
      {typeof v === "boolean" ? (
        v ? (
          <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${highlight ? "bg-[#0049D7] text-white" : "bg-emerald-500/15 text-emerald-600"}`}>
            <Icons.Check className="h-4 w-4" strokeWidth={3} />
          </span>
        ) : (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-500">
            <Icons.X className="h-4 w-4" strokeWidth={3} />
          </span>
        )
      ) : (
        <span className="text-[#5B6478]">{v}</span>
      )}
    </td>
  );

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center">
            <SectionTag>Why Choose Us</SectionTag>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              How We <span className="text-gradient-cg">Compare</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#5B6478]">
              See why Malaysian organisations trust AI Software Solutions
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 overflow-x-auto rounded-2xl border border-[rgba(0,73,215,0.1)] shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0B1B3D] text-white">
                  {columns.map((col, i) => (
                    <th key={i} className={`px-6 py-4 text-left font-heading font-semibold ${i === 1 ? "bg-[#0049D7]" : ""}`}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-[rgba(0,73,215,0.08)] transition hover:bg-[#F4F7FB]">
                    <td className="px-6 py-4 font-heading text-sm font-semibold text-[#0B1B3D]">{row.feature}</td>
                    {row.cells.map((v, ci) => (
                      <Cell key={ci} v={v} highlight={ci === 0} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}



/* ---------- VIDEO EMBED ---------- */
function VideoEmbed() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center">
            <SectionTag>See Us in Action</SectionTag>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              What We Do in <span className="text-gradient-cg">60 Seconds</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#5B6478]">
              A quick overview of how we help Malaysian organisations transform with AI
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 overflow-hidden rounded-2xl border border-[rgba(0,73,215,0.15)] shadow-xl">
            <div className="relative aspect-video bg-[#0B1B3D]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-white/20 backdrop-blur-sm">
                    <Icons.Play className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-white">Video Coming Soon</p>
                  <p className="mt-2 text-sm text-white/70">We're preparing a demo video showcasing our work</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------- CERTIFICATIONS BAR ---------- */
function CertificationsBar() {
  const certs = [
    { name: "MSC Status", desc: "Multimedia Super Corridor" },
    { name: "PDPA Compliant", desc: "Personal Data Protection Act" },
    { name: "ISO 27001", desc: "Information Security Management" },
    { name: "MDEC", desc: "Malaysia Digital Economy Corporation" },
  ];

  return (
    <section className="bg-[#0B1B3D] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center">
            <h3 className="font-display text-xl font-bold">Certifications & Compliance</h3>
            <p className="mt-2 text-sm text-white/70">Trusted by government and enterprise clients</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {certs.map((cert, i) => (
              <div key={i} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur transition hover:-translate-y-1 hover:border-[#FFB400]/50 hover:bg-white/[0.08]">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[#FFB400]/20 to-[#0049D7]/20 transition group-hover:scale-110">
                  <Icons.Award className="h-8 w-8 text-[#FFB400]" />
                </div>
                <p className="mt-3 font-heading text-sm font-semibold">{cert.name}</p>
                <p className="mt-1 text-xs text-white/60">{cert.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------- INTERACTIVE FAQ — native details (zero-JS, bulletproof) ---------- */
function InteractiveFAQ() {
  const faqs = [
    { q: "How long does a typical project take?", a: "Most engagements run 8–16 weeks from kickoff to launch. We deliver in 2-week sprints with weekly demos so you see progress continuously. Larger government or enterprise projects are scoped in phases with clear milestones." },
    { q: "Do you work with non-Malaysian clients?", a: "Yes — while we specialise in Malaysian government and enterprise, we deliver for clients across ASEAN, the Middle East, and Australia. Our core team is 100% Malaysia-based." },
    { q: "How much does a project cost?", a: "Custom software starts at RM 80,000 for focused scopes. Government and enterprise projects typically range RM 200,000–RM 2M+. We provide fixed-price quotes after a free scoping call." },
    { q: "What about data security and compliance?", a: "We're PDPA compliant by default and have delivered ISO 27001-aligned systems for government. All sensitive projects use hardened infrastructure, encrypted storage, audit logging, and role-based access controls." },
    { q: "Do you provide post-launch support?", a: "Yes — every project includes 3 months of free bug-fix support. We offer ongoing SLA-backed support contracts starting at RM 2,500/month for monitoring, security patches, and minor feature work." },
    { q: "Can you integrate with our existing systems?", a: "Absolutely. We've integrated with SAP, Oracle, government APIs, hospital information systems (HIS), payment gateways, and bespoke legacy systems. API integration is one of our core services." },
    { q: "Do you sign NDAs and IP assignment agreements?", a: "Yes — NDA before any scoping conversation, and full IP assignment to you on delivery. Your code, your data, your IP. We retain only the right to anonymised case studies (with your approval)." },
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center">
            <SectionTag>FAQ</SectionTag>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl text-[#0B1B3D]">
              Frequently Asked <span className="text-gradient-cg">Questions</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#5B6478]">
              The answers most clients ask before working with us.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              open={i === 0}
              className="group overflow-hidden rounded-2xl border border-[rgba(0,73,215,0.1)] bg-white shadow-sm transition-all duration-300 open:border-[#0049D7]/40 open:shadow-[0_8px_30px_-12px_rgba(0,73,215,0.3)] hover:border-[#0049D7]/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span className="font-heading text-base font-semibold text-[#0B1B3D] transition group-open:text-[#0049D7] sm:text-lg">
                  {f.q}
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[rgba(0,73,215,0.08)] text-[#0049D7] transition-all duration-300 group-open:rotate-180 group-open:bg-[#0049D7] group-open:text-white">
                  <Icons.ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="px-6 pb-5 text-sm leading-relaxed text-[#5B6478] animate-in fade-in slide-in-from-top-1 duration-300">
                {f.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#5B6478]">Still have questions?</p>
          <div className="mt-4">
            <PrimaryButton to="/contact" size="lg">
              Talk to Our Team <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FLOATING ELEMENTS ---------- */
function FloatingElements() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 animate-pulse-ring"
        aria-label="Chat on WhatsApp"
      >
        <Icons.MessageCircle className="h-6 w-6" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-[#0B1B3D] px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </a>
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#0049D7] text-white shadow-[0_8px_24px_rgba(0,73,215,0.45)] transition-transform hover:scale-110"
            aria-label="Back to top"
          >
            <Icons.ArrowUp className="h-5 w-5" />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-[#0B1B3D] px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
              Back to top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PainPoints />
      <ServicesGrid />
      <CaseStudyPreview />
      <ComparisonTable />
      <SmartForce />
      <Industries />
      <CertificationsBar />
      <Testimonials />
      <TechStack />
      <InteractiveFAQ />
      <FinalCTA />
      <FloatingElements />
    </>
  );
}
