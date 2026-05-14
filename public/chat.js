(function () {
  if (window.__AISS_CHAT_INIT__) return;
  window.__AISS_CHAT_INIT__ = true;

  var KEY = window.__AISS_KEY__ || '';
  var EMAIL = 'info@aiss.com.my';
  var PHONE = '+60 3-3007 3021';

  var SYSTEM_PROMPT = 'You are a friendly and professional customer support assistant for AI Software Solutions (AISS), a Malaysian AI and software development company.\n\nCOMPANY INFO:\n- Name: AI Software Solutions Sdn. Bhd.\n- Tagline: "Intelligent Software. Real Results."\n- Specialises in AI-powered software for Government, Enterprise & Healthcare\n- Location: C-6-25, Centum @ Oasis Corporate Park, No. 2, Jalan PJU 1A/2, Ara Damansara, 47301 Petaling Jaya, Selangor, Malaysia\n- Email: info@aiss.com.my | Phone: +60 3-3007 3021\n- Hours: Monday \u2013 Friday, 9:00 AM \u2013 6:00 PM\n- Website: aisoftwaresolutions.com.my\n\nSERVICES:\n1. AI & Automation Systems \u2013 workflow automation, RPA, predictive analytics. Pilot in 6\u201310 weeks.\n2. Custom Software Development \u2013 web apps, ERP/CRM, enterprise platforms. MVP in 8\u201312 weeks.\n3. Document & Process Digitization \u2013 SmartForce DMS (proprietary), AI OCR, 60% storage savings.\n4. Mobile App Development \u2013 iOS, Android, React Native, Flutter. MVP in 8\u201312 weeks.\n5. API Integration & Middleware \u2013 REST/GraphQL, legacy bridging, Kafka, API gateways.\n6. Smart Dashboards & Data Portals \u2013 real-time KPI dashboards, BI tools.\n7. IoT Integration & Smart Monitoring \u2013 sensor integration, edge computing, predictive maintenance.\n8. Cybersecurity Solutions \u2013 AI SIEM/SOAR, zero-trust, penetration testing.\n9. Government & Civil Administration Systems \u2013 citizen portals, MAMPU/PDPA/MyDigital ID compliant.\n10. Healthcare Software \u2013 HIS, telemedicine, HL7/FHIR, clinical decision support.\n\nKEY PRODUCT \u2013 SmartForce DMS: Proprietary AI document management, 60% storage reduction, OCR, role-based access, PDPA compliant, on-prem/cloud/hybrid.\n\nINDUSTRIES: Government, Healthcare, Manufacturing, Logistics, Finance, Education, Legal, Defence.\n\nYOUR BEHAVIOUR:\n- Answer questions warmly and concisely\n- Help visitors find the right service for their needs\n- Encourage booking a free demo at info@aiss.com.my or +60 3-3007 3021\n- Never state specific pricing\n- Keep responses under 130 words unless detail is needed';

  var isOpen = false;
  var messages = [{ role: 'assistant', content: 'Hi there! \ud83d\udc4b I\u2019m the AISS virtual assistant. I can help you learn about our services, find the right solution, or connect you with our team.\n\nWhat can I help you with today?' }];
  var loading = false;

  /* ── Styles ── */
  var style = document.createElement('style');
  style.textContent = '#aiss-btn{position:fixed;bottom:24px;right:24px;z-index:9999;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#0049D7,#0B2F8A);color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 30px rgba(0,73,215,.45);transition:transform .2s,box-shadow .2s}#aiss-btn:hover{transform:scale(1.1);box-shadow:0 12px 40px rgba(0,73,215,.55)}#aiss-panel{position:fixed;bottom:96px;right:24px;z-index:9999;width:360px;max-width:calc(100vw - 2rem);background:#fff;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.18);border:1px solid rgba(0,73,215,.12);flex-direction:column;overflow:hidden;display:none}#aiss-panel.open{display:flex}.aiss-hd{background:linear-gradient(135deg,#0049D7,#0B2F8A);padding:14px 16px;display:flex;align-items:center;justify-content:space-between}.aiss-hdl{display:flex;align-items:center;gap:12px}.aiss-av{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center}.aiss-t1{color:#fff;font-size:14px;font-weight:600;line-height:1.2;font-family:sans-serif}.aiss-t2{color:rgba(147,197,253,1);font-size:11px;display:flex;align-items:center;gap:5px;font-family:sans-serif;margin-top:2px}.aiss-dot{width:6px;height:6px;border-radius:50%;background:#25D366;display:inline-block}.aiss-x{background:none;border:none;cursor:pointer;color:rgba(255,255,255,.7);width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;padding:0}.aiss-x:hover{background:rgba(255,255,255,.2);color:#fff}#aiss-msgs{overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;min-height:220px;max-height:340px}.aiss-m{display:flex;gap:8px}.aiss-m.u{flex-direction:row-reverse;align-self:flex-end;max-width:78%}.aiss-m.a{align-self:flex-start;max-width:78%}.aiss-mi{width:24px;height:24px;border-radius:50%;background:rgba(0,73,215,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.aiss-b{padding:10px 14px;border-radius:16px;font-size:13px;line-height:1.5;white-space:pre-wrap;word-break:break-word;font-family:sans-serif}.aiss-m.u .aiss-b{background:#0049D7;color:#fff;border-top-right-radius:4px}.aiss-m.a .aiss-b{background:#F4F7FB;color:#0B1B3D;border-top-left-radius:4px}.aiss-ty{display:flex;gap:4px;align-items:center;padding:10px 14px;background:#F4F7FB;border-radius:16px;border-top-left-radius:4px}.aiss-ty span{width:6px;height:6px;border-radius:50%;background:#5B6478;display:inline-block;animation:aiss-b 1.2s infinite}.aiss-ty span:nth-child(2){animation-delay:.15s}.aiss-ty span:nth-child(3){animation-delay:.3s}@keyframes aiss-b{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}.aiss-ir{display:flex;align-items:center;gap:8px;padding:10px 12px;background:#F4F7FB;border-top:1px solid rgba(0,73,215,.1)}#aiss-inp{flex:1;background:transparent;border:none;outline:none;font-size:13px;color:#0B1B3D;font-family:sans-serif}#aiss-inp::placeholder{color:#9CA3AF}#aiss-send{width:32px;height:32px;border-radius:50%;background:#0049D7;color:#fff;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s;padding:0}#aiss-send:hover:not(:disabled){background:#0038A8}#aiss-send:disabled{opacity:.4;cursor:not-allowed}';
  document.head.appendChild(style);

  /* ── SVG icons ── */
  var ICO_MSG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  var ICO_X = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  var ICO_BOT_SM = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="#0049D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>';
  var ICO_BOT_LG = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>';
  var ICO_SEND = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';

  /* ── Build DOM ── */
  var btn = document.createElement('button');
  btn.id = 'aiss-btn';
  btn.setAttribute('aria-label', 'Open support chat');
  btn.innerHTML = ICO_MSG;
  document.body.appendChild(btn);

  var panel = document.createElement('div');
  panel.id = 'aiss-panel';
  panel.innerHTML =
    '<div class="aiss-hd">' +
      '<div class="aiss-hdl">' +
        '<div class="aiss-av">' + ICO_BOT_LG + '</div>' +
        '<div><div class="aiss-t1">AISS Support</div>' +
        '<div class="aiss-t2"><span class="aiss-dot"></span> Always online \u00b7 AI-powered</div></div>' +
      '</div>' +
      '<button class="aiss-x" aria-label="Close">' + ICO_X + '</button>' +
    '</div>' +
    '<div id="aiss-msgs"></div>' +
    '<div class="aiss-ir">' +
      '<input id="aiss-inp" type="text" placeholder="Ask me anything\u2026" />' +
      '<button id="aiss-send" disabled aria-label="Send">' + ICO_SEND + '</button>' +
    '</div>';
  document.body.appendChild(panel);

  var msgsEl = document.getElementById('aiss-msgs');
  var inp = document.getElementById('aiss-inp');
  var sendBtn = document.getElementById('aiss-send');

  /* ── Render ── */
  function esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
  }

  function render() {
    var html = '';
    messages.forEach(function(m) {
      if (m.role === 'assistant') {
        html += '<div class="aiss-m a"><div class="aiss-mi">' + ICO_BOT_SM + '</div><div class="aiss-b">' + esc(m.content) + '</div></div>';
      } else {
        html += '<div class="aiss-m u"><div class="aiss-b">' + esc(m.content) + '</div></div>';
      }
    });
    if (loading) {
      html += '<div class="aiss-m a"><div class="aiss-mi">' + ICO_BOT_SM + '</div><div class="aiss-ty"><span></span><span></span><span></span></div></div>';
    }
    msgsEl.innerHTML = html;
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  /* ── Toggle ── */
  function toggle() {
    isOpen = !isOpen;
    if (isOpen) {
      panel.classList.add('open');
      btn.innerHTML = ICO_X;
      btn.setAttribute('aria-label', 'Close support chat');
      setTimeout(function() { inp.focus(); }, 100);
    } else {
      panel.classList.remove('open');
      btn.innerHTML = ICO_MSG;
      btn.setAttribute('aria-label', 'Open support chat');
    }
  }

  /* ── Send ── */
  async function send() {
    var text = inp.value.trim();
    if (!text || loading) return;
    messages.push({ role: 'user', content: text });
    inp.value = '';
    sendBtn.disabled = true;
    loading = true;
    render();

    if (!KEY) {
      messages.push({ role: 'assistant', content: 'The chat assistant isn\'t configured yet.\n\n\ud83d\udce7 ' + EMAIL + '\n\ud83d\udcde ' + PHONE + '\n\nWe\'re available Mon\u2013Fri, 9am\u20136pm.' });
      loading = false;
      render();
      return;
    }

    try {
      var res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + KEY },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'system', content: SYSTEM_PROMPT }].concat(
            messages.map(function(m) { return { role: m.role, content: m.content }; })
          ),
          max_tokens: 400,
          temperature: 0.7
        })
      });
      var data = await res.json();
      var reply = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content)
        ? data.choices[0].message.content.trim()
        : 'Sorry, I couldn\'t get a response. Please contact us at ' + EMAIL + '.';
      messages.push({ role: 'assistant', content: reply });
    } catch (e) {
      messages.push({ role: 'assistant', content: 'Something went wrong. Reach us at ' + EMAIL + ' or call ' + PHONE + '.' });
    }
    loading = false;
    render();
  }

  /* ── Events ── */
  btn.addEventListener('click', toggle);
  panel.querySelector('.aiss-x').addEventListener('click', toggle);
  inp.addEventListener('input', function() { sendBtn.disabled = !inp.value.trim() || loading; });
  inp.addEventListener('keydown', function(e) { if (e.key === 'Enter' && !e.shiftKey) send(); });
  sendBtn.addEventListener('click', send);

  render();
})();
