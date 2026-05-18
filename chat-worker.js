const SYSTEM_PROMPT = `You are a friendly and professional customer support assistant for AI Software Solutions (AISS). Answer questions about AISS services, products, and capabilities. Be concise, helpful, and professional.`;

export default {
  async fetch(request, env) {
    const allowedOrigins = [
      "https://aisoftwaresolutions.com",
      "http://localhost:5173",
    ];
    const origin = request.headers.get("Origin") || "";
    const corsHeaders = {
      "Access-Control-Allow-Origin": allowedOrigins.includes(origin)
        ? origin
        : allowedOrigins[0],
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    const key = env.OPENAI_API_KEY;
    if (!key) {
      return new Response(
        JSON.stringify({ error: "OPENAI_API_KEY not configured" }),
        { status: 500, headers: { "content-type": "application/json", ...corsHeaders } }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON" }),
        { status: 400, headers: { "content-type": "application/json", ...corsHeaders } }
      );
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
      return new Response(
        JSON.stringify({ error: "OpenAI request failed", detail: errText }),
        { status: 502, headers: { "content-type": "application/json", ...corsHeaders } }
      );
    }

    const data = await upstream.json();
    const reply = data.choices?.[0]?.message?.content?.trim() ?? "";
    return new Response(JSON.stringify({ reply }), {
      headers: { "content-type": "application/json", ...corsHeaders },
    });
  },
};
