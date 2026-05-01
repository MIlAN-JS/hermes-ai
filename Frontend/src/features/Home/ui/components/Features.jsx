import { useState } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const features = [
  {
    id: 1,
    tag: "User-Centric Design",
    heading: "Built around\nyour users.",
    body: "We prioritize user needs to create intuitive and impactful experiences. Every interaction is thoughtfully crafted to reduce friction and delight customers.",
    checks: ["Intuitive UI patterns", "Accessibility-first approach", "Feedback-driven iteration"],
    cta: "Explore Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&fit=crop",
    imageAlt: "UX design wireframes",
    accent: "#c85a00",
    flip: false,
  },
  {
    id: 2,
    tag: "Secure & Reliable Platform",
    heading: "Enterprise-grade\nsecurity.",
    body: "Built with enterprise-grade security and performance at the core. SOC2-compliant infrastructure, end-to-end encryption, and 99.99% uptime SLA.",
    checks: ["End-to-end encryption", "SOC2 Type II compliant", "99.99% uptime guarantee"],
    cta: "Security Details",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&fit=crop",
    imageAlt: "Security infrastructure",
    accent: "#1a6b3a",
    flip: true,
  },
  {
    id: 3,
    tag: "AI-First Innovation",
    heading: "Automation that\nactually thinks.",
    body: "Leveraging frontier AI to automate workflows and deliver smarter, context-aware responses. Reduce manual work by up to 80% with intelligent automation.",
    checks: ["Agentic workflows", "End-to-end observability", "Data privacy & controls"],
    cta: "Discover Studio",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&fit=crop",
    imageAlt: "AI dashboard analytics",
    accent: "#c85a00",
    flip: false,
  },
  {
    id: 4,
    tag: "Seamless Integrations",
    heading: "Connect everything\nyou already use.",
    body: "Connect with your favourite tools and systems with ease. From CRMs to helpdesks, Hermes AI plugs into your existing stack in minutes.",
    checks: ["100+ native integrations", "REST & webhook support", "No-code connectors"],
    cta: "Browse Integrations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&fit=crop",
    imageAlt: "Integration ecosystem",
    accent: "#1a6b3a",
    flip: true,
  },
  {
    id: 5,
    tag: "Data-Driven Insights",
    heading: "Turn data into\ndecisions.",
    body: "Turn data into actionable insights to make better business decisions. Real-time dashboards, custom reports, and AI-powered trend detection at your fingertips.",
    checks: ["Real-time dashboards", "Custom report builder", "AI trend detection"],
    cta: "View Analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&fit=crop",
    imageAlt: "Analytics dashboard",
    accent: "#c85a00",
    flip: false,
  },
  {
    id: 6,
    tag: "Scalable for Growth",
    heading: "From startup\nto enterprise.",
    body: "Designed to grow with your business — from your first 100 conversations to your first 10 million. Scale compute, agents, and storage on demand.",
    checks: ["Auto-scaling infrastructure", "Usage-based pricing", "Multi-region deployment"],
    cta: "Pricing Plans",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&fit=crop",
    imageAlt: "Growing city skyline",
    accent: "#1a6b3a",
    flip: true,
  },
  {
    id: 7,
    tag: "Our Mission",
    heading: "Empowering exceptional\ncustomer support.",
    body: "Empower businesses to deliver exceptional customer support with the power of AI. We believe every customer deserves a fast, helpful, and human-feeling experience.",
    checks: ["Customer-first philosophy", "Continuous model improvement", "Dedicated success team"],
    cta: "Our Story",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&fit=crop",
    imageAlt: "Team collaborating",
    accent: "#c85a00",
    flip: false,
  },
];

/* ─────────────────────────────────────────────
   CHECK BADGE
───────────────────────────────────────────── */
function CheckBadge({ label, accent }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium"
      style={{ backgroundColor: "#f5e9b8", fontFamily: "'DM Sans', sans-serif", color: "#2a1f08" }}
    >
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
        <path d="M1 6L5.5 10.5L15 1" stroke={accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CTA BUTTON (matches reference style)
───────────────────────────────────────────── */
function CtaButton({ label, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center justify-between gap-6 px-5 py-3.5 text-sm font-semibold transition-all duration-200"
      style={{
        backgroundColor: hovered ? "#1a1208" : "#1a1208",
        color: "#fff",
        minWidth: "180px",
        fontFamily: "'DM Sans', sans-serif",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
        boxShadow: hovered ? "0 6px 20px rgba(0,0,0,0.18)" : "none",
      }}
    >
      {label}
      <span
        className="flex items-center justify-center"
        style={{ backgroundColor: accent, width: 28, height: 28, flexShrink: 0 }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 7h10M8 4l4 3-4 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}

/* ─────────────────────────────────────────────
   FEATURE CARD (single feature row)
───────────────────────────────────────────── */
function FeatureCard({ feature }) {
  const { tag, heading, body, checks, cta, image, imageAlt, accent, flip } = feature;

  const textBlock = (
    <div className="flex flex-col justify-center gap-6 py-12 lg:py-16 px-6 sm:px-10 lg:px-14">
      {/* Tag */}
      <span
        className="text-xs font-bold tracking-[0.2em] uppercase"
        style={{ color: accent, fontFamily: "'DM Sans', sans-serif" }}
      >
        {tag}
      </span>

      {/* Heading */}
      <h2
        className="heading-font text-3xl sm:text-4xl lg:text-5xl leading-tight"
        style={{ color: "#1a1208", whiteSpace: "pre-line" }}
      >
        {heading}
      </h2>

      {/* Body */}
      <p
        className="text-base leading-relaxed max-w-md"
        style={{ color: "#5a4a2a", fontFamily: "'DM Sans', sans-serif" }}
      >
        {body}
      </p>

      {/* Check badges */}
      <div className="flex flex-col gap-2.5">
        {checks.map((c) => (
          <CheckBadge key={c} label={c} accent={accent} />
        ))}
      </div>

      {/* CTA */}
      <div className="pt-2">
        <CtaButton label={cta} accent={accent} />
      </div>
    </div>
  );

  const imageBlock = (
    <div className="relative overflow-hidden min-h-72 lg:min-h-0">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-full object-cover"
        style={{ minHeight: "320px" }}
        loading="lazy"
      />
      {/* Floating metric card overlay */}
      <div
        className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs p-4 rounded-sm shadow-2xl"
        style={{ backgroundColor: "#111", color: "#fff" }}
      >
        <p className="text-xs text-gray-400 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {tag}
        </p>
        <div className="flex items-center gap-6">
          <div>
            <p className="text-2xl font-bold" style={{ color: accent }}>↑ 80%</p>
            <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>efficiency gain</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">2.1s</p>
            <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>avg response</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">99%</p>
            <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>CSAT score</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 border-b"
      style={{ borderColor: "#d6c9a0" }}
    >
      {flip ? (
        <>
          <div className="order-2 lg:order-1">{imageBlock}</div>
          <div className="order-1 lg:order-2">{textBlock}</div>
        </>
      ) : (
        <>
          <div>{textBlock}</div>
          <div>{imageBlock}</div>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export default function Features() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap');
        .heading-font { font-family: 'DM Serif Display', serif; }
        .features-section { background-color: #fdf8ec; }

        /* Grid overlay background */
        .grid-bg {
          background-image:
            linear-gradient(rgba(180,155,90,0.13) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180,155,90,0.13) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      <section className="features-section grid-bg w-full">

        {/* Section header */}
        <div
          className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20 border-b"
          style={{ borderColor: "#d6c9a0" }}
        >
          <span
            className="text-xs font-bold tracking-[0.25em] uppercase mb-4 block"
            style={{ color: "#c85a00", fontFamily: "'DM Sans', sans-serif" }}
          >
            Platform Capabilities
          </span>
          <h1
            className="heading-font text-4xl sm:text-5xl lg:text-6xl max-w-2xl leading-tight"
            style={{ color: "#1a1208" }}
          >
            Everything you need to build AI-powered support.
          </h1>
          <p
            className="mt-5 text-base sm:text-lg max-w-xl leading-relaxed"
            style={{ color: "#5a4a2a", fontFamily: "'DM Sans', sans-serif" }}
          >
            From intelligent automation to real-time insights — Hermes AI gives your team
            the tools to deliver exceptional customer experiences at scale.
          </p>
        </div>

        {/* Feature rows */}
        <div className="max-w-7xl mx-auto">
            
          {features.map((f) => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </div>

      </section>
    </>
  );
}