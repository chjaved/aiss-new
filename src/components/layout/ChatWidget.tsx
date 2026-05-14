import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Loader2 } from "lucide-react";
import { site } from "@/lib/site";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are a friendly and professional customer support assistant for AI Software Solutions (AISS), a Malaysian AI and software development company.

COMPANY INFO:
- Name: AI Software Solutions Sdn. Bhd.
- Tagline: "Intelligent Software. Real Results."
- Specialises in AI-powered software for Government, Enterprise & Healthcare
- Location: C-6-25, Centum @ Oasis Corporate Park, No. 2, Jalan PJU 1A/2, Ara Damansara, 47301 Petaling Jaya, Selangor, Malaysia
- Email: info@aiss.com.my
- Phone: +60 3-3007 3021
- Office Hours: Monday – Friday, 9:00 AM – 6:00 PM
- Website: aisoftwaresolutions.com.my

SERVICES:
1. AI & Automation Systems – workflow automation, RPA, predictive analytics, natural-language interfaces. Pilot in 6–10 weeks.
2. Custom Software Development – web apps, ERP/CRM, enterprise platforms, legacy modernisation (React, Node, Python). MVP in 8–12 weeks.
3. Document & Process Digitization – SmartForce DMS (proprietary), AI OCR, automated approvals, 60% storage savings. On-prem/cloud/hybrid.
4. Mobile App Development – iOS (Swift), Android (Kotlin), React Native, Flutter, offline-first apps. MVP in 8–12 weeks.
5. API Integration & Middleware – REST/GraphQL, legacy bridging (SOAP, EDI), Kafka event streaming, API gateways. 2–6 weeks.
6. Smart Dashboards & Data Portals – real-time KPI dashboards, multi-source BI, role-based views, mobile-ready.
7. IoT Integration & Smart Monitoring – sensor/device integration, MQTT/CoAP, edge computing, predictive maintenance.
8. Cybersecurity Solutions – AI-driven SIEM/SOAR, zero-trust architecture, penetration testing, incident response.
9. Government & Civil Administration Systems – citizen portals, inter-agency platforms, MAMPU/PDPA/MyDigital ID compliant.
10. Healthcare Software – HIS, patient portals, telemedicine, HL7/FHIR standards, clinical decision support.

KEY PRODUCT – SmartForce DMS:
- Proprietary AI document management and compression system
- 60% storage reduction via AI compression
- OCR converts even scanned paper documents into searchable text
- Granular role-based access control with full audit trails
- PDPA compliance built-in
- Deployable on-prem, hybrid, or cloud

INDUSTRIES SERVED: Government, Healthcare, Manufacturing, Logistics, Finance, Education, Legal, Defence

COMPLIANCE: PDPA, MAMPU, ISO 27001 support, MOH healthcare standards, BNM finance-ready

PRICING: Always project-specific based on scope. Encourage a free consultation.

YOUR BEHAVIOUR:
- Answer questions about services, capabilities, and industry fit warmly and concisely
- Help visitors identify which service suits their specific needs
- Encourage booking a free demo or consultation at info@aiss.com.my or +60 3-3007 3021
- Never state specific pricing — always say it depends on scope and offer a free consultation
- Be warm, professional, and concise
- Use Malaysian-friendly English
- Keep responses under 130 words unless detail is genuinely needed
- If unsure about anything, offer to connect them directly with the AISS team`;

const WELCOME: Message = {
  role: "assistant",
  content:
    "Hi there! 👋 I'm the AISS virtual assistant. I can help you learn about our services, find the right solution for your business, or connect you with our team.\n\nWhat can I help you with today?",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY as string | undefined;
    if (!apiKey) {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: `The chat assistant isn't configured yet. Please reach us directly:\n\n📧 ${site.email}\n📞 ${site.phoneDisplay}\n\nWe're available Mon–Fri, 9am–6pm.`,
        },
      ]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...next.map((m) => ({ role: m.role, content: m.content })),
          ],
          max_tokens: 400,
          temperature: 0.7,
        }),
      });
      const data = await res.json();
      const reply: string =
        data.choices?.[0]?.message?.content?.trim() ??
        "I'm sorry, I couldn't get a response right now. Please try again or contact us at info@aiss.com.my.";
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: `Something went wrong on my end. You can reach us at ${site.email} or call ${site.phoneDisplay}.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-[100] flex w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-[rgba(0,73,215,0.12)] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-[#0049D7] to-[#0B2F8A] px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur-sm">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight text-white">AISS Support</p>
                <p className="flex items-center gap-1.5 text-[11px] text-blue-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                  Always online · AI-powered
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="grid h-7 w-7 place-items-center rounded-full text-white/60 transition hover:bg-white/20 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex flex-col gap-3 overflow-y-auto p-4"
            style={{ minHeight: "220px", maxHeight: "340px" }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {m.role === "assistant" && (
                  <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0049D7]/10">
                    <Bot className="h-3.5 w-3.5 text-[#0049D7]" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "rounded-tr-sm bg-[#0049D7] text-white"
                      : "rounded-tl-sm bg-[#F4F7FB] text-[#0B1B3D]"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2">
                <div className="grid h-6 w-6 place-items-center rounded-full bg-[#0049D7]/10">
                  <Bot className="h-3.5 w-3.5 text-[#0049D7]" />
                </div>
                <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-[#F4F7FB] px-3.5 py-3">
                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#5B6478]"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#5B6478]"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#5B6478]"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-[rgba(0,73,215,0.1)] bg-[#F4F7FB] px-3 py-2.5">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
              placeholder="Ask me anything…"
              disabled={loading}
              className="flex-1 bg-transparent text-[13px] text-[#0B1B3D] placeholder:text-[#9CA3AF] outline-none disabled:opacity-60"
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0049D7] text-white transition hover:bg-[#0038A8] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Send className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close support chat" : "Open support chat"}
        className="fixed bottom-6 right-6 z-[100] grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#0049D7] to-[#0B2F8A] text-white shadow-[0_8px_30px_rgba(0,73,215,0.45)] transition-all hover:scale-110 hover:shadow-[0_12px_40px_rgba(0,73,215,0.55)]"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </>
  );
}
