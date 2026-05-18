(function () {
"use strict";

const CONFIG = {


  brand: `<img src="https://cdn.prod.website-files.com/65fdd9abdfe007f804f15369/69f2817d3ad5de3dea2ee10a_logo.png" alt="Coachability Consultants" style="height:18px;object-fit:contain;width:auto;display:block;">`,


  brandShort: "CCI",


  submitUrl: "",


  intro: {
    heading: "Discover your coaching culture readiness",
    body: "8 questions. 2 minutes. A data-informed snapshot of where coachability may be your biggest untapped performance lever.",
    insightLabel: "What you'll get",
    insightText: "A personalized assessment of your organization's coaching culture maturity — with a specific recommendation on where to start.",
    ctaLabel: "Start assessment",
  },


  step1Card: {
    bgImage: "https://cdn.prod.website-files.com/65fdd9abdfe007f804f15369/6a0b63162f0a05ed816fed16_Block%3D00-Step%2C%20Version%3DPrincipal%2C%20Viewport%3DDesktop%2C%20Status%3DDefault.png",
    heading: "Check your readiness.",
    body: "Take 2 minutes to discover where coachability can fuel your team's performance. Get your personalized maturity snapshot and clear next steps.",
    cta: "Start my assessment",
  },


  sidebarSteps: [
    "Start",
    "Culture",
    "Chats",
    "After launch",
    "Main hurdles",
    "Today's setup",
    "Priority",
    "Audience",
    "Timeline",
    "About you",
  ],


  questions: [
    {
      heading: "Let's understand your coaching culture",
      subtitle: "What role does coaching currently play in driving performance in your organization?",
      type: "single",
      insight: {
        label: "WHY THIS MATTERS",
        text: "Research shows that when coaching is tied directly to business outcomes, performance improves up to 79% faster. Where coaching sits in your organization tells us a lot about where the opportunity is.",
      },
      answers: [
        { text: "Developmental support — helpful, but not tied directly to business outcomes", weight: 1 },
        { text: "Encouraged practice — impact varies by leader", weight: 2 },
        { text: "Expected leadership behavior with performance accountability", weight: 3 },
        { text: "Core performance lever — embedded in how results are achieved", weight: 4 },
      ],
    },
    {
      heading: "How does coaching land today?",
      subtitle: "When coaching conversations occur, what most often happens afterward?",
      type: "single",
      insight: {
        label: "WHAT WE LOOK AT",
        text: "The gap between a great coaching conversation and actual behavior change is where most organizations lose momentum. This is the coachability gap.",
      },
      answers: [
        { text: "Insightful discussions — behavior change is inconsistent", weight: 1 },
        { text: "Motivation increases — follow-through varies", weight: 2 },
        { text: "Clear action plans — execution depends on the individual", weight: 3 },
        { text: "Observable behavior change and measurable performance improvement", weight: 4 },
      ],
    },
    {
      heading: "What happens after launch?",
      subtitle: "When new initiatives roll out (sales models, leadership programs, system changes), what typically happens?",
      type: "single",
      insight: {
        label: "INSIGHT",
        text: "Pull-through is the #1 predictor of whether a coaching investment pays off. Adoption that fades isn't a training problem — it's a coachability problem.",
      },
      answers: [
        { text: "Energy is high at kickoff; adoption fades quickly", weight: 1 },
        { text: "Some teams embrace it; others resist or quietly revert", weight: 2 },
        { text: "Managers reinforce it inconsistently — results vary widely", weight: 3 },
        { text: "Behavior change sticks and scales — we see measurable results", weight: 4 },
      ],
    },
    {
      heading: "Where does coaching fall short?",
      subtitle: "When coaching doesn't drive performance improvements, the underlying issue is usually:",
      type: "single",
      insight: {
        label: "THE MISSING PIECE",
        text: "Most organizations focus on improving the coach. We focus on the other side — the person being coached. That's where the untapped leverage lives.",
      },
      answers: [
        { text: "Managers may not be coaching consistently", weight: 1 },
        { text: "Coaching quality varies significantly", weight: 2 },
        { text: "Employees struggle to apply feedback", weight: 3 },
        { text: "Coaching reliably drives behavior change", weight: 4 },
      ],
    },
    {
      heading: "Your coaching investments",
      subtitle: "Which of the following are currently in place? Select all that apply.",
      type: "multiple",
      insight: {
        label: "CONTEXT",
        text: "The more infrastructure you've built, the more coachability becomes the differentiator. Without it, even the best investments plateau.",
      },
      answers: [
        { text: "A defined coaching model or framework", weight: 1 },
        { text: "Coaching skills training for leaders", weight: 1 },
        { text: "Internal or external executive coaching", weight: 1 },
        { text: "AI-enabled or technology-supported coaching tools", weight: 1 },
        { text: "Coaching embedded in competency models", weight: 1 },
        { text: "Measurement of coaching effectiveness", weight: 1 },
        { text: "We are early in building coaching capability", weight: 0 },
      ],
    },
    {
      heading: "Where's the opportunity?",
      subtitle: "Where is the greatest opportunity to strengthen coachability today?",
      type: "single",
      insight: {
        label: "WHAT WE SEE",
        text: "Organizations that start with sales often expand enterprise-wide within 12 months once results become visible. The entry point matters less than the commitment.",
      },
      answers: [
        { text: "Primarily within our sales organization", weight: 1 },
        { text: "Sales first — then potentially broader teams", weight: 2 },
        { text: "Across all levels of leadership", weight: 3 },
        { text: "Enterprise-wide capability tied to culture and talent strategy", weight: 4 },
      ],
    },
    {
      heading: "Scale of impact",
      subtitle: "If you were to elevate coachability, the initial reach would likely be:",
      type: "single",
      insight: {
        label: "SCALE",
        text: "Whether you start with a single team or a global rollout, the methodology adapts. What matters is that coachability becomes measurable from day one.",
      },
      answers: [
        { text: "A team or group of teams", weight: 1 },
        { text: "A business unit or department(s)", weight: 2 },
        { text: "National / regional population", weight: 3 },
        { text: "Global enterprise-wide rollout", weight: 4 },
      ],
    },
    {
      heading: "Timing",
      subtitle: "When would developing coachability realistically enter your planning horizon?",
      type: "single",
      insight: {
        label: "READINESS",
        text: "There's no wrong time to start understanding your coachability baseline. Even exploratory conversations surface insights that shift how leaders think about development.",
      },
      answers: [
        { text: "Immediately — it's already a priority", weight: 4 },
        { text: "Within the next 6–12 months", weight: 3 },
        { text: "Within the next 12–24 months", weight: 2 },
        { text: "Future consideration — exploratory", weight: 1 },
      ],
    },
  ],


  leadForm: {
    heading: "One last step before your results",
    subtitle: "Tell us a little about you so one of our consultants can get back to you with a tailored next step.",
    fields: {
      firstName:  { label: "First name",    placeholder: "Jane" },
      lastName:   { label: "Last name",     placeholder: "Smith" },
      company:    { label: "Company name",  placeholder: "Acme Inc." },
      email:      { label: "Work email",    placeholder: "jane@acme.com" },
      phone:      { label: "Phone",         placeholder: "+1 555 123 4567" },
      message:    { label: "Message",       placeholder: "Tell us briefly what you're hoping to achieve…" },
    },
    termsText: 'I agree to the <a href="#" target="_blank" rel="noopener">Terms &amp; Conditions</a> and the <a href="#" target="_blank" rel="noopener">Privacy Policy</a>, and consent to being contacted by Coachability Consultants.',
    submitLabel: "Get my results",
  },


  tiers: [
    {
      type: "A", label: "Foundational",
      scoreMin: 8, scoreMax: 13,
      response: "Your organization appears to invest in coaching, but adoption and behavior change may be inconsistent. In environments like this, the gap is rarely intent — it's usually application.",
      detail: "Coaching conversations may be happening, but without a deliberate focus on coachability, even the best coaching struggles to translate into lasting performance improvement. Organizations at this stage often see the fastest transformation once they address the receiving side of coaching.",
      cta: "Want to see where coachability may be limiting performance — and how to quantify it?",
      recommendation: "Coachability Quotient (CQ) Assessment",
    },
    {
      type: "B", label: "Emerging",
      scoreMin: 14, scoreMax: 19,
      response: "Your organization has begun building a coaching culture, and there are signs of progress — but the results are uneven. Coaching impact depends too heavily on individual receptivity rather than a systematic capability.",
      detail: "You're past the starting line, which matters. The next move is turning coachability from something that varies person-to-person into a measurable, trainable skill across your teams. That shift is what separates organizations that coach from organizations where coaching works.",
      cta: "Ready to make coachability a measurable skill?",
      recommendation: "CQ Assessment + Explore Your Coachability Workshop",
    },
    {
      type: "C", label: "Strategic",
      scoreMin: 20, scoreMax: 25,
      response: "Organizations operating at this level don't just coach more — they systematically elevate coachability across roles, levels, and regions. You've built real infrastructure. The foundation is strong.",
      detail: "At this stage, the opportunity isn't more coaching — it's making coachability a strategic competency. That means measurement, precision, and embedding coachability into how your organization develops talent, drives adoption, and sustains performance over time.",
      cta: "Ready to move from coaching culture to coachability culture?",
      recommendation: "Collaborative Coaching Framework + Coachability Skills Training",
    },
    {
      type: "D", label: "Multiplier-Ready",
      scoreMin: 26, scoreMax: 32,
      response: "This is rare. Your organization has coaching embedded as a true performance lever — behavior change sticks, initiatives scale, and results are measurable. You've moved beyond building a coaching culture into operating one.",
      detail: "At the Multiplier-Ready level, the play is multiplication: certifying internal champions, embedding coachability into hiring and talent strategy, and using advanced behavioral measurement to stay ahead. This is where coaching becomes a compounding competitive advantage.",
      cta: "Ready to protect and multiply your advantage?",
      recommendation: "Coachability Certification + Hiring for Coachability + Behavioral Measurements",
    },
  ],


  pathways: [
    {
      id: "coachees",
      eyebrow: "A Pathway for <strong>Coachees</strong>",
      headline: "Everyone can be more coachable.",
      desc: "Preparing your people to receive coaching well — the foundation that makes every other coaching investment pay off. Most companies start here.",
      url: "/pathway-for-coachees",
      cta: "Check it out",
    },
    {
      id: "coaches",
      eyebrow: "A Pathway for <strong>Coaches</strong>",
      headline: "Better results with better coaching.",
      desc: "Hands-on training that gives your leaders the tools, language and frameworks to coach their teams consistently and well.",
      url: "/a-pathway-for-coaches",
      cta: "Check it out",
    },
    {
      id: "elite",
      eyebrow: "A Pathway for <strong>Elite Performers</strong>",
      headline: "Specific training to be even better.",
      desc: "A focused program for top performers who already deliver — and want sharper feedback loops to keep raising the bar.",
      url: "/a-pathway-for-elite-performers",
      cta: "Check it out",
    },
    {
      id: "peer",
      eyebrow: "A Pathway for <strong>Peer Leaders</strong>",
      headline: "The delicate art of leading peers.",
      desc: "The most advanced pathway — for organizations ready to embed coachability into how peers grow each other.",
      url: "/a-pathway-for-peer-leaders",
      cta: "Check it out",
    },
  ],


  resultsCtas: {
    primary:   { label: "Schedule a conversation", url: "/your-coachability-quotient" },
    secondary: { label: "Learn more",              url: "/why-cci-method" },
  },


  pathwaysSection: {
    title: "Where to go from here",
    subtitle: "Based on your answers we've highlighted the pathway that fits you best — but feel free to explore all four.",
  },
};

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
#msf-overlay{
  position:fixed;inset:0;background:#F9F9F9;z-index:99999;
  display:flex;flex-direction:column;
  font-family:'Inter',system-ui,-apple-system,sans-serif;
  color:#0a0a0a;overflow:hidden;
  opacity:0;transform:translateY(18px);
  transition:opacity .35s ease, transform .35s cubic-bezier(.22,1,.36,1);
}
#msf-overlay.msf-visible{opacity:1;transform:translateY(0)}
#msf-overlay *{font-family:inherit}

.msf-header{
  display:flex;justify-content:space-between;align-items:center;
  padding:22px 32px;border-bottom:none;flex-shrink:0;
}
.msf-logo{font-size:.95rem;font-weight:700;letter-spacing:-.01em;color:#0a0a0a}
.msf-close{
  width:40px;height:40px;border:1.5px solid #e5e5e5;background:transparent;
  display:flex;align-items:center;justify-content:center;
  font-size:1.3rem;font-weight:400;color:#0a0a0a;border-radius:50%;
  cursor:pointer;transition:all .2s ease;flex-shrink:0;line-height:1;
}
.msf-close:hover{background:#0a0a0a;color:#fff;border-color:#0a0a0a}
.msf-progress{height:3px;background:#f0f0f0;flex-shrink:0}
.msf-progress-fill{height:100%;background:#0a0a0a;transition:width .4s cubic-bezier(.4,0,.2,1)}

.msf-body{
  flex:1;padding:52px 32px 36px;max-width:760px;width:100%;
  margin:0 auto;overflow-y:auto;
  transition:opacity .25s ease,transform .25s ease;
}
.msf-body.fade-out-fwd{opacity:0;transform:translateX(28px)}
.msf-body.fade-out-back{opacity:0;transform:translateX(-28px)}
.msf-body.fade-in{opacity:1;transform:translateX(0)}

.msf-body.msf-intro-active{
  max-width:100%;
  padding:0;
  display:flex;
  flex-direction:column;
}

.msf-body.msf-panel-active{
  max-width:100%;
  padding:0;
  display:flex;
  flex-direction:row;
  overflow:hidden;
}

.msf-sidebar{
  width:220px;
  min-width:180px;
  flex-shrink:0;
  display:flex;
  flex-direction:column;
  padding:32px 28px;
  border-right:none;
  background:Transparent;
  overflow-y:auto;
}
.msf-sidebar-brand{
  font-size:1.4rem;
  font-weight:700;
  letter-spacing:-.03em;
  color:#0a0a0a;
  margin-bottom:auto;
  line-height:1;
}
.msf-sidebar-steps{
  margin-top:auto;
  padding-top:32px;
  display:flex;
  flex-direction:column;
  gap:6px;
}
.msf-sidebar-step{
  font-size:.88rem;
  font-weight:400;
  color:#bbb;
  padding:5px 0;
  transition:color .18s ease;
  line-height:1.3;
}
.msf-sidebar-step.active{
  color:#0a0a0a;
  font-weight:600;
}
.msf-sidebar-step.done{
  color:#888;
}

.msf-panel-right{
  flex:1;
  overflow-y:auto;
  display:flex;
  flex-direction:column;
  background:transparent;
}

.msf-panel-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:18px 32px;
  border-bottom:none;
  flex-shrink:0;
}
.msf-panel-counter{
  font-size:.82rem;
  font-weight:600;
  color:#9a9a9a;
  letter-spacing:.04em;
}
.msf-panel-tagline{
  font-size:.82rem;
  font-weight:500;
  color:#9a9a9a;
  text-transform:uppercase;
  letter-spacing:.08em;
}

.msf-panel-content{
  flex:1;
  overflow-y:auto;
  padding:40px 40px 32px;
}

/* ── START CARD ── */
.msf-start-card{
  background:#fff;
  border:1px solid #e5e5e5;
  border-radius:16px;
  overflow:hidden;
  max-width:520px;
  box-shadow:0 2px 12px rgba(0,0,0,.06);
}
.msf-start-card-top{
  padding:28px 28px 20px;
}
.msf-start-card-heading{
  font-size:1.45rem;
  font-weight:700;
  line-height:1.2;
  letter-spacing:-.02em;
  color:#0a0a0a;
}
.msf-start-card-hero{
  width:100%;
  height:220px;
  background-size:cover;
  background-position:center top;
  background-color:#ece9f5;
  display:none;
}
.msf-start-card-body{
  padding:22px 28px 26px;
}
.msf-start-card-text{
  font-size:.93rem;
  line-height:1.65;
  color:#555;
  margin-bottom:22px;
}
.msf-start-card-btn{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:12px 22px;
  background:#0a0a0a;
  color:#fff;
  font-size:.88rem;
  font-weight:600;
  border-radius:999px;
  border:none;
  cursor:pointer;
  transition:background .18s ease, transform .15s ease;
  letter-spacing:-.01em;
}
.msf-start-card-btn:hover{background:#333;transform:translateY(-1px)}
.msf-start-card-btn:active{transform:scale(.97)}

/* bottom-right watermark */
.msf-panel-watermark{
  position:absolute;
  bottom:20px;
  right:28px;
  font-size:.68rem;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
  color:#bbb;
  pointer-events:none;
}

.msf-step-row{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px;gap:16px}
.msf-heading{font-size:clamp(1.45rem,3.4vw,2.1rem);font-weight:700;line-height:1.15;letter-spacing:-.02em;color:#0a0a0a}
.msf-step-indicator{font-size:.82rem;font-weight:500;color:#9a9a9a;white-space:nowrap;flex-shrink:0}
.msf-subtitle{font-size:1rem;font-weight:400;color:#555;margin-bottom:34px;line-height:1.6;max-width:600px}
.msf-option{
  display:block;width:100%;padding:17px 22px;margin-bottom:10px;
  border:1.5px solid #e5e5e5;background:#fff;color:#0a0a0a;
  font-size:.95rem;font-weight:500;line-height:1.5;text-align:left;
  border-radius:10px;transition:all .18s ease;cursor:pointer;
}
.msf-option:hover{border-color:#0a0a0a;background:#fafafa}
.msf-option.selected{background:#0a0a0a;color:#fff;border-color:#0a0a0a}
.msf-option.selected:hover{background:#0a0a0a}
.msf-check{
  display:inline-flex;align-items:center;justify-content:center;
  width:18px;height:18px;border:1.5px solid currentColor;border-radius:4px;
  margin-right:13px;vertical-align:middle;position:relative;top:-1px;
  font-size:.7rem;font-weight:700;flex-shrink:0;
}
.msf-insight{margin-top:34px;border-left:3px solid #0a0a0a;padding-left:18px;animation:msfIn .3s ease}
@keyframes msfIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.msf-insight-label{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#9a9a9a;margin-bottom:8px}
.msf-insight-text{font-size:.93rem;line-height:1.6;color:#555}

.msf-footer{
  border-top:1px solid #e5e5e5;padding:18px 32px;
  display:flex;justify-content:space-between;align-items:center;
  flex-shrink:0;gap:12px;
}
.msf-btn-back{
  padding:13px 26px;border:1.5px solid #e5e5e5;background:transparent;
  color:#bbb;font-size:.93rem;font-weight:600;border-radius:999px;
  cursor:pointer;transition:all .18s ease;
}
.msf-btn-back.active{border-color:#0a0a0a;color:#0a0a0a}
.msf-btn-back.active:hover{background:#fafafa}
.msf-btn-continue{
  padding:13px 30px;border:1.5px solid #0a0a0a;background:#0a0a0a;color:#fff;
  font-size:.93rem;font-weight:600;border-radius:999px;
  cursor:pointer;transition:all .18s ease;
}
.msf-btn-continue:hover:not(:disabled){background:#333;border-color:#333}
.msf-btn-continue:active:not(:disabled){transform:scale(.97)}
.msf-btn-continue:disabled{background:#e5e5e5;border-color:#e5e5e5;color:#bbb;cursor:not-allowed}

.msf-lead-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px 16px;margin-bottom:8px}
.msf-field{display:flex;flex-direction:column;gap:7px}
.msf-field-full{grid-column:1/-1}
.msf-label{font-size:.83rem;font-weight:600;color:#0a0a0a;letter-spacing:-.005em}
.msf-label .msf-req{color:#9a9a9a;font-weight:400;margin-left:2px}
.msf-input,.msf-textarea{
  width:100%;padding:13px 15px;border:1.5px solid #e5e5e5;border-radius:10px;
  background:#fff;font-size:.97rem;color:#0a0a0a;line-height:1.5;
  transition:border-color .18s ease;outline:none;
}
.msf-input::placeholder,.msf-textarea::placeholder{color:#bbb}
.msf-input:hover,.msf-textarea:hover{border-color:#9a9a9a}
.msf-input:focus,.msf-textarea:focus{border-color:#0a0a0a}
.msf-input.error,.msf-textarea.error{border-color:#c94f4f}
.msf-textarea{resize:vertical;min-height:108px}
.msf-error-msg{font-size:.76rem;font-weight:500;color:#c94f4f;margin-top:-2px;display:none}
.msf-error-msg.show{display:block}
.msf-terms{display:flex;align-items:flex-start;gap:11px;margin-top:18px;cursor:pointer;user-select:none}
.msf-terms input{position:absolute;opacity:0;pointer-events:none}
.msf-terms-box{
  flex-shrink:0;width:22px;height:22px;border:1.5px solid #bbb;border-radius:6px;
  display:flex;align-items:center;justify-content:center;background:#fff;
  transition:all .18s ease;margin-top:1px;
}
.msf-terms-box::after{
  content:"";width:10px;height:6px;border-left:2px solid #fff;border-bottom:2px solid #fff;
  transform:rotate(-45deg) translate(1px,-1px);opacity:0;transition:opacity .18s;
}
.msf-terms input:checked+.msf-terms-box{background:#0a0a0a;border-color:#0a0a0a}
.msf-terms input:checked+.msf-terms-box::after{opacity:1}
.msf-terms-text{font-size:.88rem;color:#555;line-height:1.5}
.msf-terms-text a{color:#0a0a0a;text-decoration:underline;text-underline-offset:2px}
.msf-terms.error .msf-terms-box{border-color:#c94f4f}

.msf-result-box{
  border:1px solid #e5e5e5;border-radius:16px;padding:36px;margin-top:28px;
  background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.03),0 8px 24px rgba(0,0,0,.04);
}
.msf-result-label{font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#9a9a9a;text-align:center;margin-bottom:22px}
.msf-result-type{text-align:center;margin-bottom:26px}
.msf-result-type-letter{font-size:2.3rem;font-weight:700;letter-spacing:-.02em;color:#0a0a0a}
.msf-result-type-name{font-size:1.05rem;font-weight:500;color:#9a9a9a;margin-left:10px}
.msf-bar-wrap{width:100%;height:54px;border:1.5px solid #0a0a0a;border-radius:10px;display:flex;overflow:hidden;margin-bottom:10px}
.msf-bar-fill{height:100%;background:#0a0a0a;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.97rem;font-weight:700;transition:width 1s cubic-bezier(.4,0,.2,1);white-space:nowrap;padding:0 13px}
.msf-bar-rest{flex:1;display:flex;align-items:center;justify-content:center;font-size:.97rem;font-weight:700;color:#0a0a0a}
.msf-bar-labels{display:flex;justify-content:space-between;font-size:.7rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#9a9a9a;margin-bottom:26px}
.msf-divider{width:100%;height:1px;background:#e5e5e5;margin:22px 0}
.msf-result-response{font-size:.97rem;font-weight:500;line-height:1.65;color:#0a0a0a;margin-bottom:13px}
.msf-result-detail{font-size:.93rem;line-height:1.7;color:#555;margin-bottom:20px}
.msf-result-cta{font-size:.97rem;font-weight:600;color:#0a0a0a;margin-bottom:5px}
.msf-result-rec{font-size:.93rem;color:#555;font-style:italic}
.msf-result-note{font-size:.86rem;color:#555;line-height:1.65}
.msf-cta-row{display:flex;gap:12px;margin-top:36px;flex-wrap:wrap}
.msf-cta-btn{
  flex:1;min-width:180px;padding:15px 28px;border:1.5px solid #0a0a0a;
  font-size:.93rem;font-weight:600;text-align:center;border-radius:999px;
  cursor:pointer;transition:all .18s ease;text-decoration:none;display:inline-block;
}
.msf-cta-btn.primary{background:#0a0a0a;color:#fff}
.msf-cta-btn.primary:hover{background:#333;border-color:#333}
.msf-cta-btn.secondary{background:#fff;color:#0a0a0a}
.msf-cta-btn.secondary:hover{background:#fafafa}

.msf-pathways{margin-top:52px}
.msf-pathways-title{font-size:clamp(1.35rem,3vw,1.75rem);font-weight:700;line-height:1.2;letter-spacing:-.01em;color:#0a0a0a;margin-bottom:7px}
.msf-pathways-subtitle{font-size:.93rem;color:#555;margin-bottom:26px;line-height:1.6}
.msf-pathways-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.msf-pathway-card{
  display:flex;flex-direction:column;padding:26px;
  border:1.5px solid #e5e5e5;border-radius:14px;background:#fff;transition:border-color .18s ease;
}
.msf-pathway-card:hover{border-color:#9a9a9a}
.msf-pathway-card.best{border:2px solid #0a0a0a;background:linear-gradient(180deg,#f4eefc 0%,#fff 80%);box-shadow:0 1px 2px rgba(0,0,0,.04),0 12px 32px rgba(0,0,0,.06)}
.msf-pathway-badge{
  display:inline-flex;align-items:center;gap:5px;font-size:.66rem;font-weight:700;
  letter-spacing:.08em;text-transform:uppercase;color:#fff;background:#0a0a0a;
  padding:5px 11px;border-radius:999px;margin-bottom:16px;align-self:flex-start;
}
.msf-pathway-eyebrow{font-size:.86rem;font-weight:500;color:#555;margin-bottom:9px}
.msf-pathway-eyebrow strong{color:#0a0a0a;font-weight:700}
.msf-pathway-headline{font-size:1.18rem;font-weight:700;line-height:1.25;letter-spacing:-.01em;color:#0a0a0a;margin-bottom:12px}
.msf-pathway-desc{font-size:.9rem;line-height:1.55;color:#555;margin-bottom:20px;flex:1}
.msf-pathway-cta{
  align-self:flex-start;padding:10px 20px;border:1.5px solid #0a0a0a;
  background:#fff;color:#0a0a0a;font-size:.86rem;font-weight:600;
  border-radius:999px;text-decoration:none;cursor:pointer;transition:all .18s ease;display:inline-block;
}
.msf-pathway-cta:hover{background:#0a0a0a;color:#fff}
.msf-pathway-card.best .msf-pathway-cta{background:#0a0a0a;color:#fff}
.msf-pathway-card.best .msf-pathway-cta:hover{background:#333;border-color:#333}

.msf-intro-hero{
  flex:1;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
}
.msf-intro-bg{
  position:absolute;
  inset:0;
  background-image: url('https://cdn.prod.website-files.com/65fdd9abdfe007f804f15369/6a0b5e9b7779453863f4d3fb_Block%3DWelcome%2C%20Version%3DPrincipal%2C%20Viewport%3DDesktop%2C%20Status%3DDefault.jpg');
  background-size:cover;
  background-position:center;
  background-color:#f5f5f5;
}
.msf-intro-content{
  position:relative;
  z-index:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  padding:40px 32px;
  max-width:560px;
  width:100%;
}
.msf-intro-heading{
  font-size:clamp(1.8rem,4.5vw,2.8rem);
  font-family: DM Sans;
  font-weight:500;
  line-height:1.12;
  letter-spacing:-.03em;
  color:#0a0a0a;
  margin-bottom:16px;
}
.msf-intro-body{
  font-size:1rem;
  font-family: DM Sans;
  line-height:1.65;
  color:#2E2E2E;
  margin-bottom:0;
}
.msf-intro-spacer{height:clamp(48px, 8vh, 96px)}
.msf-intro-cta{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:14px 28px;
  background:#0a0a0a;
  color:#fff;
  font-size:.93rem;
  font-weight:600;
  border-radius:999px;
  border:none;
  cursor:pointer;
  transition:background .18s ease, transform .18s ease;
  letter-spacing:-.01em;
  white-space:nowrap;
}
.msf-intro-cta:hover{background:#333;transform:translateY(-1px)}
.msf-intro-cta:active{transform:scale(.97)}

.msf-panel-close{
  width:36px;height:36px;border:1.5px solid #e5e5e5;background:transparent;
  display:flex;align-items:center;justify-content:center;
  font-size:1.2rem;font-weight:400;color:#0a0a0a;border-radius:50%;
  cursor:pointer;transition:all .2s ease;flex-shrink:0;line-height:1;
}
.msf-panel-close:hover{background:#0a0a0a;color:#fff;border-color:#0a0a0a}

/* panel-content wrapper needs relative for watermark */
.msf-panel-content-wrap{
  flex:1;
  overflow-y:auto;
  position:relative;
  padding:40px 40px 32px;
}

@media(max-width:640px){
  .msf-header{padding:16px 18px}
  .msf-body{padding:32px 18px 24px}
  .msf-footer{padding:14px 18px}
  .msf-cta-row{flex-direction:column}
  .msf-lead-grid{grid-template-columns:1fr;gap:16px}
  .msf-result-box{padding:22px 18px}
  .msf-pathways-grid{grid-template-columns:1fr}
  .msf-pathway-card{padding:20px}
  .msf-heading{font-size:1.35rem}
  .msf-intro-content{padding:28px 20px}
  .msf-intro-heading{font-size:1.6rem}
  .msf-intro-spacer{height:40px}
  .msf-sidebar{display:none}
  .msf-panel-content-wrap{padding:28px 20px 24px}
  .msf-panel-content{padding:28px 20px 24px}
}
`;

(function injectCSS() {
  if (document.getElementById('msf-style')) return;
  const s = document.createElement('style');
  s.id = 'msf-style';
  s.textContent = CSS;
  document.head.appendChild(s);
})();

function buildModal() {
  if (document.getElementById('msf-overlay')) return;
  const el = document.createElement('div');
  el.id = 'msf-overlay';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.style.display = 'none';
  el.innerHTML = `
    <div class="msf-header">
      <div class="msf-logo">${CONFIG.brand}</div>
      <button class="msf-close" id="msf-close" aria-label="Close">×</button>
    </div>
    <div class="msf-progress"><div class="msf-progress-fill" id="msf-prog" style="width:0%"></div></div>
    <div class="msf-body fade-in" id="msf-body"></div>
    <div class="msf-footer" id="msf-footer">
      <button class="msf-btn-back" id="msf-back">Back</button>
      <button class="msf-btn-continue" id="msf-continue" disabled>Continue</button>
    </div>
  `;
  document.body.appendChild(el);
}

const TOTAL = CONFIG.questions.length;
const STEP_START   = 1;
const STEP_Q_FIRST = 2;
const STEP_LEAD    = STEP_Q_FIRST + TOTAL;
const STEP_RESULTS = STEP_LEAD + 1;
const PROG_TOTAL   = TOTAL + 1;

let step = 0;
let answers = [];
let selectedMultiple = new Set();
let leadData = {};

function resetState() {
  step = 0;
  answers = Array(TOTAL).fill(null);
  selectedMultiple = new Set();
  leadData = { firstName:'', lastName:'', company:'', email:'', phone:'', message:'', terms:false };
}

function openModal() {
  buildModal();
  resetState();
  const ov = document.getElementById('msf-overlay');
  ov.style.display = 'flex';
  requestAnimationFrame(() => ov.classList.add('msf-visible'));
  document.body.style.overflow = 'hidden';
  bindModalEvents();
  renderStep(0, 'none');
}

function closeModal() {
  const ov = document.getElementById('msf-overlay');
  if (!ov) return;
  ov.classList.remove('msf-visible');
  setTimeout(() => { ov.style.display = 'none'; }, 350);
  document.body.style.overflow = '';
}

function bindModalEvents() {
  const close = document.getElementById('msf-close');
  const back  = document.getElementById('msf-back');
  const cont  = document.getElementById('msf-continue');
  if (close && !close._msfBound) { close.addEventListener('click', closeModal); close._msfBound = true; }
  if (back  && !back._msfBound)  { back.addEventListener('click', goBack);      back._msfBound = true; }
  if (cont  && !cont._msfBound)  { cont.addEventListener('click', goForward);   cont._msfBound = true; }
}

function transition(newStep, dir) {
  const body = document.getElementById('msf-body');
  const cls  = dir === 'forward' ? 'fade-out-fwd' : 'fade-out-back';
  body.classList.remove('fade-in');
  body.classList.add(cls);
  setTimeout(() => {
    step = newStep;
    body.classList.remove(cls);
    renderStep(step, dir);
    setTimeout(() => body.classList.add('fade-in'), 20);
  }, 240);
}

function renderStep(s) {
  const prog   = document.getElementById('msf-prog');
  const body   = document.getElementById('msf-body');
  const footer = document.getElementById('msf-footer');
  const back   = document.getElementById('msf-back');
  const cont   = document.getElementById('msf-continue');

  const isIntro   = s === 0;
  const isStart   = s === STEP_START;
  const isQ       = s >= STEP_Q_FIRST && s < STEP_LEAD;
  const isLead    = s === STEP_LEAD;
  const isResults = s === STEP_RESULTS;

  const header  = document.querySelector('.msf-header');
  const progBar = document.querySelector('.msf-progress');

  if (isIntro || isStart) {
    if (header)  header.style.display = 'none';
    if (progBar) progBar.style.display = 'none';
    prog.style.width = '0%';
  } else {
    if (header)  header.style.display = '';
    if (progBar) progBar.style.display = '';
    if (isResults || isLead) prog.style.width = '100%';
    else {
      const qIdx = s - STEP_Q_FIRST + 1;
      prog.style.width = `${(qIdx / PROG_TOTAL) * 100}%`;
    }
  }

  body.classList.remove('msf-intro-active','msf-panel-active');
  if (isIntro) body.classList.add('msf-intro-active');
  if (isStart) body.classList.add('msf-panel-active');

  if (isResults || isIntro || isStart) {
    footer.style.display = 'none';
  } else if (isLead) {
    footer.style.display = 'flex';
    back.className = 'msf-btn-back active';
    back.disabled = false;
    cont.textContent = CONFIG.leadForm.submitLabel;
    updateContBtn();
  } else {
    footer.style.display = 'flex';
    back.className = s > STEP_Q_FIRST ? 'msf-btn-back active' : 'msf-btn-back';
    back.disabled = s <= STEP_Q_FIRST;
    cont.textContent = 'Continue';
    updateContBtn();
  }

  if (isIntro)        { body.innerHTML = renderIntro();        attachIntroListeners(); }
  else if (isStart)   { body.innerHTML = renderStartPanel();   attachStartPanelListeners(); }
  else if (isLead)    { body.innerHTML = renderLeadInPanel();  attachLeadListeners(); }
  else if (isResults) { body.innerHTML = renderResults();      animateBar(); }
  else if (isQ)       { body.innerHTML = renderQuestionInPanel(s); attachOptionListeners(s); }
}

function renderIntro() {
  return `
    <div class="msf-intro-hero">
      <div class="msf-intro-bg"></div>
      <div class="msf-intro-content">
        <h1 class="msf-intro-heading">I am a title that will be modified by Iñaki.</h1>
        <p class="msf-intro-body">I am a subtitle that will be modified by Iñaki.</p>
        <div class="msf-intro-spacer"></div>
        <button class="msf-intro-cta" id="msf-intro-cta-btn">
          Launch assessment
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>`;
}
function attachIntroListeners() {
  const btn = document.getElementById('msf-intro-cta-btn');
  if (btn) btn.addEventListener('click', goForward);
}

function renderStartPanel() {
  const c   = CONFIG.step1Card;
  const ss  = CONFIG.sidebarSteps;
  const bgStyle = c.bgImage && c.bgImage !== 'YOUR_WEBFLOW_CDN_IMAGE_URL_HERE'
    ? `background-image:url('${c.bgImage}');`
    : '';

  const stepsHtml = ss.map((label, i) =>
    `<div class="msf-sidebar-step${i === 0 ? ' active' : ''}">${esc(label)}</div>`
  ).join('');

  return `
    <div class="msf-sidebar">
      <div class="msf-sidebar-brand">${esc(CONFIG.brandShort)}</div>
      <div class="msf-sidebar-steps">${stepsHtml}</div>
    </div>

    <div class="msf-panel-right">
      <div class="msf-panel-header">
        <span class="msf-panel-counter">00 / 0${TOTAL}</span>
        <span class="msf-panel-tagline">Unlock your potential</span>
        <button class="msf-panel-close" id="msf-panel-close-btn" aria-label="Close">×</button>
      </div>

      <div class="msf-panel-content" style="position:relative;">
        <div class="msf-start-card">
          <div class="msf-start-card-top">
            <h2 class="msf-start-card-heading">${esc(c.heading)}</h2>
          </div>
          <div class="msf-start-card-hero" style="${bgStyle}"></div>
          <div class="msf-start-card-body">
            <p class="msf-start-card-text">${esc(c.body)}</p>
            <button class="msf-start-card-btn" id="msf-start-card-btn">
              ${esc(c.cta)} <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div class="msf-panel-watermark">Power up performance.</div>
      </div>
    </div>`;
}
function attachStartPanelListeners() {
  const closeBtn = document.getElementById('msf-panel-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  const startBtn = document.getElementById('msf-start-card-btn');
  if (startBtn) startBtn.addEventListener('click', goForward);
}

function renderQuestionInPanel(s) {
  const qIdx  = s - STEP_Q_FIRST;
  const q     = CONFIG.questions[qIdx];
  const ans   = answers[qIdx];
  const qNum  = qIdx + 1;
  const ss    = CONFIG.sidebarSteps;

  const showInsight = q.type === 'multiple' ? selectedMultiple.size > 0 : ans !== null;

  const opts = q.answers.map((a, i) => {
    const sel = q.type === 'single' ? ans === a.weight : selectedMultiple.has(i);
    const chk = q.type === 'multiple'
      ? `<span class="msf-check">${sel ? '✓' : ''}</span>` : '';
    return `<button class="msf-option${sel ? ' selected' : ''}" data-idx="${i}" data-weight="${a.weight}">${chk}${esc(a.text)}</button>`;
  }).join('');

  const insight = showInsight ? `
    <div class="msf-insight">
      <div class="msf-insight-label">${q.insight.label}</div>
      <div class="msf-insight-text">${q.insight.text}</div>
    </div>` : '';

  const stepsHtml = ss.map((label, i) => {
    let cls = 'msf-sidebar-step';
    if (i === qNum)    cls += ' active';
    else if (i < qNum) cls += ' done';
    return `<div class="${cls}">${esc(label)}</div>`;
  }).join('');

  const padNum   = String(qNum).padStart(2,'0');
  const padTotal = String(TOTAL).padStart(2,'0');

  return `
    <div class="msf-sidebar">
      <div class="msf-sidebar-brand">${esc(CONFIG.brandShort)}</div>
      <div class="msf-sidebar-steps">${stepsHtml}</div>
    </div>
    <div class="msf-panel-right">
      <div class="msf-panel-header">
        <span class="msf-panel-counter">${padNum} / ${padTotal}</span>
        <span class="msf-panel-tagline">Unlock your potential</span>
        <button class="msf-panel-close" id="msf-panel-close-btn" aria-label="Close">×</button>
      </div>
      <div class="msf-panel-content" style="flex:1;overflow-y:auto;padding:40px 40px 32px;">
        <div class="msf-step-row">
          <div class="msf-heading">${q.heading}</div>
        </div>
        <div class="msf-subtitle">${q.subtitle}</div>
        <div id="msf-options">${opts}</div>
        <div id="msf-insight">${insight}</div>
      </div>
    </div>`;
}

function renderLeadInPanel() {
  const f  = CONFIG.leadForm;
  const v  = leadData;
  const ss = CONFIG.sidebarSteps;

  const stepsHtml = ss.map((label, i) => {
    const cls = 'msf-sidebar-step' + (i < ss.length - 1 ? ' done' : ' active');
    return `<div class="${cls}">${esc(label)}</div>`;
  }).join('');

  function field(name, type, span) {
    const fd  = f.fields[name];
    const tag = name === 'message';
    const inp = tag
      ? `<textarea class="msf-textarea" id="lf-${name}" name="${name}" rows="4" placeholder="${fd.placeholder}" required>${escText(v[name])}</textarea>`
      : `<input class="msf-input" id="lf-${name}" name="${name}" type="${type||'text'}" placeholder="${fd.placeholder}" value="${escAttr(v[name])}" autocomplete="${autoC(name)}" required>`;
    return `<div class="msf-field${span?' msf-field-full':''}">
      <label class="msf-label" for="lf-${name}">${fd.label}<span class="msf-req">*</span></label>
      ${inp}
      <div class="msf-error-msg" data-err="${name}">${errMsg(name)}</div>
    </div>`;
  }

  return `
    <div class="msf-sidebar">
      <div class="msf-sidebar-brand">${esc(CONFIG.brandShort)}</div>
      <div class="msf-sidebar-steps">${stepsHtml}</div>
    </div>
    <div class="msf-panel-right">
      <div class="msf-panel-header">
        <span class="msf-panel-counter">Almost there</span>
        <span class="msf-panel-tagline">Unlock your potential</span>
        <button class="msf-panel-close" id="msf-panel-close-btn" aria-label="Close">×</button>
      </div>
      <div class="msf-panel-content" style="flex:1;overflow-y:auto;padding:40px 40px 32px;">
        <div class="msf-step-row">
          <div class="msf-heading">${f.heading}</div>
        </div>
        <div class="msf-subtitle">${f.subtitle}</div>
        <div class="msf-lead-grid">
          ${field('firstName')}${field('lastName')}
          ${field('company','text',true)}
          ${field('email','email')}${field('phone','tel')}
          ${field('message','',true)}
        </div>
        <label class="msf-terms" for="lf-terms">
          <input id="lf-terms" name="terms" type="checkbox" ${v.terms?'checked':''} required>
          <span class="msf-terms-box" aria-hidden="true"></span>
          <span class="msf-terms-text">${f.termsText}</span>
        </label>
        <div class="msf-error-msg" data-err="terms" style="margin-top:8px">You must accept the terms to continue.</div>
      </div>
    </div>`;
}

function renderResults() {
  const score = calcScore();
  const tier  = getTier(score);
  const pct   = Math.round(((score - 8) / 24) * 100);
  const opp   = 100 - pct;
  const fillW = Math.max(pct, 15);
  const rec   = getRecommendedPathway(tier.type);

  const pathCards = CONFIG.pathways.map(p => {
    const best = p.id === rec;
    return `
      <article class="msf-pathway-card${best?' best':''}">
        ${best?`<span class="msf-pathway-badge">★ Best fit for you</span>`:''}
        <div class="msf-pathway-eyebrow">${p.eyebrow}</div>
        <h3 class="msf-pathway-headline">${p.headline}</h3>
        <p class="msf-pathway-desc">${p.desc}</p>
        <a class="msf-pathway-cta" href="${p.url}">${best?'Explore this pathway':p.cta}</a>
      </article>`;
  }).join('');

  const ctaC = CONFIG.resultsCtas;
  const ps   = CONFIG.pathwaysSection;

  return `
    <div class="msf-heading">Here is our initial conclusion</div>
    <div class="msf-subtitle">Based on your responses, here's a snapshot of your coaching culture — and where the opportunity lives.</div>
    <div class="msf-result-box">
      <div class="msf-result-label">Your coachability profile</div>
      <div class="msf-result-type">
        <span class="msf-result-type-letter">${tier.type}</span>
        <span class="msf-result-type-name">${tier.label}</span>
      </div>
      <div class="msf-bar-wrap">
        <div class="msf-bar-fill" id="msf-bar" style="width:0%" data-target="${fillW}%">${pct}%</div>
        <div class="msf-bar-rest">${opp}%</div>
      </div>
      <div class="msf-bar-labels"><span>Current maturity</span><span>Coachability opportunity</span></div>
      <div class="msf-divider"></div>
      <div class="msf-result-response">${tier.response}</div>
      <div class="msf-result-detail">${tier.detail}</div>
      <div class="msf-result-cta">${tier.cta}</div>
      <div class="msf-result-rec">→ Recommended: ${tier.recommendation}</div>
      <div class="msf-divider" style="margin:22px 0 16px"></div>
      <div class="msf-result-note">Thanks ${escText(leadData.firstName)||'for sharing your details'}. Someone at ${CONFIG.brand} will be in touch shortly.</div>
    </div>
    <div class="msf-pathways">
      <h2 class="msf-pathways-title">${ps.title}</h2>
      <p class="msf-pathways-subtitle">${ps.subtitle}</p>
      <div class="msf-pathways-grid">${pathCards}</div>
    </div>
    <div class="msf-cta-row">
      <a class="msf-cta-btn primary" href="${ctaC.primary.url}">${ctaC.primary.label}</a>
      <a class="msf-cta-btn secondary" href="${ctaC.secondary.url}">${ctaC.secondary.label}</a>
    </div>`;
}

function animateBar() {
  setTimeout(() => {
    const bar = document.getElementById('msf-bar');
    if (bar) bar.style.width = bar.dataset.target;
  }, 80);
}

function normalizeQ5(raw) {
  if (raw === 0) return 1;
  if (raw <= 2)  return 2;
  if (raw <= 4)  return 3;
  return 4;
}
function calcScore() {
  let t = 0;
  CONFIG.questions.forEach((q, i) => {
    const a = answers[i];
    if (a == null) return;
    t += q.type === 'multiple' ? normalizeQ5(a) : a;
  });
  return t;
}
function getTier(score) {
  return CONFIG.tiers.find(t => score >= t.scoreMin && score <= t.scoreMax) || CONFIG.tiers[0];
}
function getRecommendedPathway(tierType) {
  if (tierType === 'D') return 'peer';
  const q4 = answers[3];
  const q6 = answers[5];
  const q7 = answers[6];
  if (q4 === 3) return 'coachees';
  if (q4 === 1 || q4 === 2) return 'coaches';
  if (q4 === 4) {
    if (tierType === 'C' && (q6 === 1 || q7 === 1)) return 'elite';
    if (tierType === 'A') return 'coachees';
    if (tierType === 'B') return 'coaches';
  }
  return 'coachees';
}

function attachOptionListeners(s) {
  const qIdx = s - STEP_Q_FIRST;
  const q    = CONFIG.questions[qIdx];

  const closeBtn = document.getElementById('msf-panel-close-btn');
  if (closeBtn && !closeBtn._msfBound) { closeBtn.addEventListener('click', closeModal); closeBtn._msfBound = true; }

  document.querySelectorAll('.msf-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx);
      const w   = parseInt(btn.dataset.weight);
      if (q.type === 'single') {
        answers[qIdx] = w;
        document.querySelectorAll('.msf-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      } else {
        if (selectedMultiple.has(idx)) {
          selectedMultiple.delete(idx);
          btn.classList.remove('selected');
          btn.querySelector('.msf-check').textContent = '';
        } else {
          selectedMultiple.add(idx);
          btn.classList.add('selected');
          btn.querySelector('.msf-check').textContent = '✓';
        }
        let raw = 0;
        selectedMultiple.forEach(i => { raw += q.answers[i].weight; });
        answers[qIdx] = raw;
      }
      updateContBtn();
      showInsight(s);
    });
  });
}

function showInsight(s) {
  const qIdx = s - STEP_Q_FIRST;
  const q    = CONFIG.questions[qIdx];
  const show = q.type === 'multiple' ? selectedMultiple.size > 0 : answers[qIdx] !== null;
  const c    = document.getElementById('msf-insight');
  if (!c || !show || c.querySelector('.msf-insight')) return;
  c.innerHTML = `<div class="msf-insight"><div class="msf-insight-label">${q.insight.label}</div><div class="msf-insight-text">${q.insight.text}</div></div>`;
}

function attachLeadListeners() {
  const closeBtn = document.getElementById('msf-panel-close-btn');
  if (closeBtn && !closeBtn._msfBound) { closeBtn.addEventListener('click', closeModal); closeBtn._msfBound = true; }

  ['firstName','lastName','company','email','phone','message'].forEach(name => {
    const el = document.querySelector(`[name="${name}"]`);
    if (!el) return;
    el.addEventListener('input', () => {
      leadData[name] = el.value;
      el.classList.remove('error');
      const err = document.querySelector(`[data-err="${name}"]`);
      if (err) err.classList.remove('show');
      updateContBtn();
    });
    el.addEventListener('blur', () => {
      if (!validField(name, el.value)) markErr(name, true);
    });
  });
  const terms = document.querySelector('[name="terms"]');
  if (terms) {
    terms.addEventListener('change', () => {
      leadData.terms = terms.checked;
      const err  = document.querySelector('[data-err="terms"]');
      const wrap = document.querySelector('.msf-terms');
      if (terms.checked) {
        if (err) err.classList.remove('show');
        if (wrap) wrap.classList.remove('error');
      }
      updateContBtn();
    });
  }
}

function validField(n, v) {
  if (n === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  return v.trim().length > 0;
}
function markErr(n, on) {
  const el  = document.querySelector(`[name="${n}"]`);
  const err = document.querySelector(`[data-err="${n}"]`);
  if (el)  el.classList.toggle('error', on);
  if (err) err.classList.toggle('show', on);
}
function isLeadValid() {
  return ['firstName','lastName','company','email','phone','message'].every(n => validField(n, leadData[n])) && leadData.terms;
}
function validateLead() {
  let ok = true;
  ['firstName','lastName','company','email','phone','message'].forEach(n => {
    const v = validField(n, leadData[n]);
    markErr(n, !v);
    if (!v) ok = false;
  });
  if (!leadData.terms) {
    const err  = document.querySelector('[data-err="terms"]');
    const wrap = document.querySelector('.msf-terms');
    if (err) err.classList.add('show');
    if (wrap) wrap.classList.add('error');
    ok = false;
  }
  return ok;
}

function autoC(n){return{firstName:'given-name',lastName:'family-name',company:'organization',email:'email',phone:'tel',message:'off'}[n]||'off'}
function errMsg(n){return{firstName:'Please enter your first name.',lastName:'Please enter your last name.',company:'Please enter your company name.',email:'Please enter a valid email.',phone:'Please enter your phone number.',message:'Please share a short message.'}[n]||''}

function updateContBtn() {
  const cont = document.getElementById('msf-continue');
  if (!cont) return;
  if (step === 0 || step === STEP_START) { cont.disabled = false; return; }
  if (step === STEP_LEAD)                { cont.disabled = !isLeadValid(); return; }
  if (step >= STEP_RESULTS)              { cont.disabled = true; return; }

  const qIdx = step - STEP_Q_FIRST;
  const q    = CONFIG.questions[qIdx];
  cont.disabled = q.type === 'multiple'
    ? selectedMultiple.size === 0
    : answers[qIdx] === null;
}

function goForward() {
  const cont = document.getElementById('msf-continue');
  if (step !== 0 && step !== STEP_START && cont && cont.disabled) return;
  if (step === 0)          { transition(STEP_START, 'forward'); return; }
  if (step === STEP_START) { transition(STEP_Q_FIRST, 'forward'); return; }
  if (step === STEP_LEAD) {
    if (!validateLead()) return;
    submitLead();
    transition(STEP_RESULTS, 'forward');
    return;
  }
  if (step === STEP_Q_FIRST + TOTAL - 1) {
    selectedMultiple = new Set();
    transition(STEP_LEAD, 'forward');
    return;
  }
  if (step >= STEP_Q_FIRST && step < STEP_LEAD) {
    selectedMultiple = new Set();
    transition(step + 1, 'forward');
  }
}

function goBack() {
  const back = document.getElementById('msf-back');
  if (back && back.disabled) return;
  if (step === STEP_LEAD)    { selectedMultiple = new Set(); transition(STEP_Q_FIRST + TOTAL - 1, 'back'); return; }
  if (step <= STEP_Q_FIRST)  { return; }
  selectedMultiple = new Set();
  transition(step - 1, 'back');
}

function submitLead() {
  if (!CONFIG.submitUrl) return;
  fetch(CONFIG.submitUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...leadData, score: calcScore(), tier: getTier(calcScore()).type, answers }),
  }).catch(() => {});
}

function esc(s)     { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') }
function escAttr(s) { return esc(s).replace(/"/g,'&quot;') }
function escText(s) { return esc(s) }

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const ov = document.getElementById('msf-overlay');
    if (ov && ov.style.display !== 'none') closeModal();
  }
});

function bindTriggers() {
  document.querySelectorAll('[data-msf-open]').forEach(el => {
    if (!el._msfTrigger) { el.addEventListener('click', openModal); el._msfTrigger = true; }
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bindTriggers);
} else {
  bindTriggers();
}
const _obs = new MutationObserver(bindTriggers);
_obs.observe(document.body, { childList: true, subtree: true });

window.msfOpen  = openModal;
window.msfClose = closeModal;

})();
