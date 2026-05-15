import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type Env = { OPENAI_API_KEY?: string };

const SYSTEM_PROMPT = `You are a friendly and professional customer support assistant for AI Software Solutions (AISS), a Malaysian AI and software development company.

COMPANY INFO:
- Name: AI Software Solutions Sdn. Bhd.
- Tagline: "Intelligent Software. Real Results."
- Specialises in AI-powered software for Government, Enterprise & Healthcare
- Location: C-6-25, Centum @ Oasis Corporate Park, No. 2, Jalan PJU 1A/2, Ara Damansara, 47301 Petaling Jaya, Selangor, Malaysia
- Email: info@aiss.com.my | Phone: +60 3-3007 3021
- Hours: Monday – Friday, 9:00 AM – 6:00 PM
- Website: aisoftwaresolutions.com.my

SERVICES:
1. AI & Automation Systems – workflow automation, RPA, predictive analytics. Pilot in 6–10 weeks.
2. Custom Software Development – web apps, ERP/CRM, enterprise platforms. MVP in 8–12 weeks.
3. Document & Process Digitization – SmartForce DMS (proprietary), AI OCR, 60% storage savings.
4. Mobile App Development – iOS, Android, React Native, Flutter. MVP in 8–12 weeks.
5. API Integration & Middleware – REST/GraphQL, legacy bridging, Kafka, API gateways.
6. Smart Dashboards & Data Portals – real-time KPI dashboards, BI tools.
7. IoT Integration & Smart Monitoring – sensor integration, edge computing, predictive maintenance.
8. Cybersecurity Solutions – AI SIEM/SOAR, zero-trust, penetration testing.
9. Government & Civil Administration Systems – citizen portals, MAMPU/PDPA/MyDigital ID compliant.
10. Healthcare Software – HIS, telemedicine, HL7/FHIR, clinical decision support.

KEY PRODUCT – SmartForce DMS: Proprietary AI document management, 60% storage reduction, OCR, role-based access, PDPA compliant, on-prem/cloud/hybrid.

INDUSTRIES: Government, Healthcare, Manufacturing, Logistics, Finance, Education, Legal, Defence.

YOUR BEHAVIOUR:
- Answer warmly, like a real human teammate — never robotic
- Keep replies short (2–4 sentences for most questions)
- Write in flowing prose, not lists, unless the user explicitly asks for a list
- Help visitors find the right service for their needs
- Encourage booking a free demo at info@aiss.com.my or +60 3-3007 3021 when relevant — but don't push it in every reply
- Never state specific pricing

FORMATTING RULES (very important):
- Do NOT use markdown syntax: no **bold**, no *italics*, no #, no backticks, no bullet asterisks (*) or hyphens (-) for lists
- Do NOT prefix lines with symbols
- Just plain conversational sentences, like a friendly human typing in chat
- If you really must list 2–3 things, separate with commas in one sentence
- Never start a reply with "Sure!", "Of course!", "Absolutely!", "Great question!" — just answer directly`;

async function handleChatApi(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  const key = env.OPENAI_API_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: "OPENAI_API_KEY not configured" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
  let body: { messages?: Array<{ role: string; content: string }> };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
  const userMessages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];

  const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...userMessages],
      max_tokens: 400,
      temperature: 0.7,
    }),
  });

  if (!upstream.ok) {
    const errText = await upstream.text();
    return new Response(JSON.stringify({ error: "OpenAI request failed", detail: errText }), {
      status: 502,
      headers: { "content-type": "application/json" },
    });
  }

  const data = (await upstream.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const reply = data.choices?.[0]?.message?.content?.trim() ?? "";
  return new Response(JSON.stringify({ reply }), {
    headers: { "content-type": "application/json" },
  });
}

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} - try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/chat") {
        return await handleChatApi(request, (env ?? {}) as Env);
      }
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
