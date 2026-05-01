import { useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi2";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for small teams getting started with AI support.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    accent: "#6b5a3a",
    badge: null,
    cta: "Request Demo",
    ctaStyle: "outline",
    features: [
      "Up to 1,000 AI conversations/mo",
      "1 chatbot deployment",
      "Automated replies & routing",
      "Email & chat support",
      "Basic analytics dashboard",
      "3 native integrations",
      "99.9% uptime SLA",
    ],
    notIncluded: [
      "AI agent suggestions",
      "Multi-tenant architecture",
      "Custom model fine-tuning",
      "Dedicated success manager",
    ],
  },
  {
    name: "Growth",
    tagline: "For scaling teams that need smarter automation and insights.",
    monthlyPrice: 149,
    yearlyPrice: 119,
    accent: "#c85a00",
    badge: "Most Popular",
    cta: "Request Demo",
    ctaStyle: "filled",
    features: [
      "Up to 10,000 AI conversations/mo",
      "5 chatbot deployments",
      "AI-powered agent suggestions",
      "Smart ticket classification",
      "Real-time chat system",
      "Advanced analytics & reports",
      "20+ native integrations",
      "Priority email & chat support",
      "99.95% uptime SLA",
      "Multi-language support",
    ],
    notIncluded: [
      "Multi-tenant architecture",
      "Custom model fine-tuning",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Full-power AI infrastructure for large organisations.",
    monthlyPrice: 499,
    yearlyPrice: 399,
    accent: "#1a1208",
    badge: null,
    cta: "Contact Sales",
    ctaStyle: "dark",
    features: [
      "Unlimited AI conversations",
      "Unlimited chatbot deployments",
      "Multi-tenant architecture",
      "Custom model fine-tuning",
      "AI-powered agent suggestions",
      "Real-time chat system",
      "Full data privacy & controls",
      "Self-contained private deployment",
      "100+ integrations + REST API",
      "Dedicated success manager",
      "Custom SLA (up to 99.99%)",
      "On-premise or cloud deployment",
    ],
    notIncluded: [],
  },
];

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fees, ever. You only pay the monthly or annual subscription cost.",
  },
  {
    q: "What counts as an AI conversation?",
    a: "A conversation is a single session between a customer and your AI chatbot, regardless of how many messages are exchanged within it.",
  },
  {
    q: "Do you offer a trial?",
    a: "Yes — request a demo and we'll set up a 14-day sandbox environment tailored to your use case, completely free.",
  },
  {
    q: "Is my data secure?",
    a: "Hermes AI is SOC2 Type II compliant and GDPR-ready. Enterprise plans support fully self-contained private deployments.",
  },
];

function PlanCard({ plan, yearly }) {
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
  const isPopular = plan.badge === "Most Popular";

  return (
    <div
      className="relative flex flex-col rounded-sm overflow-hidden"
      style={{
        border: isPopular ? `2px solid ${plan.accent}` : "1px solid #e2d9b3",
        background: isPopular ? "#fff8e8" : "#fffaea",
        boxShadow: isPopular ? "0 12px 48px rgba(200,90,0,0.12)" : "none",
      }}
    >
      {/* Popular badge */}
      {plan.badge && (
        <div
          className="absolute top-0 right-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-widest uppercase"
          style={{ background: plan.accent, color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
        >
          <HiSparkles size={11} /> {plan.badge}
        </div>
      )}

      {/* Header */}
      <div className="px-7 pt-8 pb-6" style={{ borderBottom: "1px solid #e2d9b3" }}>
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
          style={{ color: plan.accent, fontFamily: "'DM Sans', sans-serif" }}
        >
          {plan.name}
        </p>
        <div className="flex items-end gap-1.5 mb-3">
          <span
            className="text-5xl font-extrabold"
            style={{ color: "#1a1208", fontFamily: "'DM Serif Display', serif", lineHeight: 1 }}
          >
            ${price}
          </span>
          <span className="text-sm mb-1.5" style={{ color: "#9a8060", fontFamily: "'DM Sans', sans-serif" }}>
            / mo{yearly ? " (billed yearly)" : ""}
          </span>
        </div>
        {yearly && (
          <p className="text-xs font-semibold" style={{ color: "#1a6b3a", fontFamily: "'DM Sans', sans-serif" }}>
            Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/yr vs monthly
          </p>
        )}
        <p className="text-sm mt-3 leading-relaxed" style={{ color: "#6b5a3a", fontFamily: "'DM Sans', sans-serif" }}>
          {plan.tagline}
        </p>
      </div>

      {/* Features */}
      <div className="px-7 py-6 flex-1 flex flex-col gap-3">
        {plan.features.map((f) => (
          <div key={f} className="flex items-start gap-2.5">
            <FiCheck size={15} className="mt-0.5 flex-shrink-0" style={{ color: plan.accent }} strokeWidth={2.5} />
            <span className="text-sm" style={{ color: "#2a1f08", fontFamily: "'DM Sans', sans-serif" }}>{f}</span>
          </div>
        ))}
        {plan.notIncluded.map((f) => (
          <div key={f} className="flex items-start gap-2.5 opacity-40">
            <span className="mt-0.5 flex-shrink-0 text-xs" style={{ color: "#9a8060" }}>✕</span>
            <span className="text-sm line-through" style={{ color: "#9a8060", fontFamily: "'DM Sans', sans-serif" }}>{f}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-7 pb-8">
        <button
          className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold transition-all duration-200 group"
          style={{
            background: plan.ctaStyle === "filled" ? plan.accent
              : plan.ctaStyle === "dark" ? "#1a1208"
              : "transparent",
            color: plan.ctaStyle === "outline" ? plan.accent : "#fff",
            border: plan.ctaStyle === "outline" ? `1.5px solid ${plan.accent}` : "none",
            fontFamily: "'DM Sans', sans-serif",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          {plan.cta}
          <span
            className="flex items-center justify-center w-7 h-7"
            style={{ background: plan.ctaStyle === "outline" ? plan.accent : "rgba(255,255,255,0.18)" }}
          >
            <FiArrowRight size={13} color="#fff" />
          </span>
        </button>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="cursor-pointer"
      style={{ borderBottom: "1px solid #e2d9b3" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <p className="text-sm font-semibold" style={{ color: "#1a1208", fontFamily: "'DM Sans', sans-serif" }}>{q}</p>
        <span
          className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-lg transition-transform duration-200"
          style={{ color: "#c85a00", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </div>
      {open && (
        <p className="text-sm pb-5 leading-relaxed" style={{ color: "#6b5a3a", fontFamily: "'DM Sans', sans-serif" }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap');
        .pricing-root {
          background-color: #fffaea;
          font-family: 'DM Sans', sans-serif;
        }
        .grid-bg {
          background-image:
            linear-gradient(rgba(180,155,90,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180,155,90,0.10) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .toggle-pill {
          display: flex;
          align-items: center;
          background: #f5e9b8;
          border: 1px solid #e2d9b3;
          border-radius: 9999px;
          padding: 4px;
          gap: 4px;
        }
        .toggle-opt {
          padding: 6px 16px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: background 0.18s, color 0.18s;
        }
      `}</style>

      <section className="pricing-root grid-bg w-full">

        {/* ── HEADER ── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-bold tracking-widest uppercase"
            style={{ background: "#f5e9b8", color: "#c85a00", border: "1px solid #e2d9b3" }}>
            <RiRobot2Line /> Pricing
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5"
            style={{ color: "#1a1208", fontFamily: "'DM Serif Display', serif" }}
          >
            Simple, transparent pricing.
          </h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8" style={{ color: "#6b5a3a" }}>
            No hidden fees. No lock-ins. Pick the plan that fits your team and scale when you're ready.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-3">
            <div className="toggle-pill">
              <button
                className="toggle-opt"
                style={{ background: !yearly ? "#1a1208" : "transparent", color: !yearly ? "#fff" : "#6b5a3a" }}
                onClick={() => setYearly(false)}
              >
                Monthly
              </button>
              <button
                className="toggle-opt"
                style={{ background: yearly ? "#1a1208" : "transparent", color: yearly ? "#fff" : "#6b5a3a" }}
                onClick={() => setYearly(true)}
              >
                Yearly
              </button>
            </div>
            {yearly && (
              <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#d4edda", color: "#1a6b3a" }}>
                Save up to 20%
              </span>
            )}
          </div>
        </div>

        {/* ── PLANS ── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} yearly={yearly} />
            ))}
          </div>
        </div>

        {/* ── COMPARE STRIP ── */}
        <div
          className="max-w-7xl mx-auto mx-6 sm:mx-10 px-8 sm:px-12 py-8 mb-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-sm"
          style={{ background: "#1a1208", margin: "0 1.5rem 5rem" }}
        >
          <div>
            <p className="text-white font-semibold text-lg" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Not sure which plan fits you?
            </p>
            <p className="text-sm mt-1" style={{ color: "#b89a60", fontFamily: "'DM Sans', sans-serif" }}>
              Book a 30-min call with our team and we'll build a custom plan for your business.
            </p>
          </div>
          <button
            className="flex-shrink-0 flex items-center gap-3 px-6 py-3.5 text-sm font-semibold"
            style={{ background: "#c85a00", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#a84800"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#c85a00"; }}
          >
            Book a Demo Call <FiArrowRight />
          </button>
        </div>

        {/* ── TRUST BADGES ── */}
        <div
          className="max-w-7xl mx-auto px-6 sm:px-10 py-10 flex flex-wrap justify-center gap-8"
          style={{ borderTop: "1px solid #e2d9b3", borderBottom: "1px solid #e2d9b3" }}
        >
          {[
            { icon: "🔒", label: "SOC2 Type II Compliant" },
            { icon: "🇪🇺", label: "GDPR Ready" },
            { icon: "⚡", label: "99.99% Uptime SLA" },
            { icon: "🔐", label: "End-to-End Encrypted" },
            { icon: "🌍", label: "Multi-Region Deployment" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-base">{icon}</span>
              <span className="text-xs font-semibold tracking-wide" style={{ color: "#6b5a3a" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* ── FAQ ── */}
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16">
          <h2
            className="text-3xl sm:text-4xl mb-2"
            style={{ color: "#1a1208", fontFamily: "'DM Serif Display', serif" }}
          >
            Frequently asked questions.
          </h2>
          <p className="text-sm mb-8" style={{ color: "#9a8060" }}>
            Can't find your answer? <a href="#" style={{ color: "#c85a00", textDecoration: "underline" }}>Chat with us</a>.
          </p>
          <div style={{ borderTop: "1px solid #e2d9b3" }}>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>

      </section>
    </>
  );
}