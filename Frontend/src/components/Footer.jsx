import { useState } from "react";
import { RiRobot2Line } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const links = {
  Product: [
    "AI Chatbot",
    "Ticket Routing",
    "Agent Suggestions",
    "Live Chat",
    "Analytics",
    "Integrations",
  ],
  Company: ["About Us", "Our Mission", "Careers", "Blog", "Press Kit", "Contact"],
  Resources: ["Documentation", "API Reference", "Changelog", "Status Page", "Community", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "GDPR"],
};

const socials = [
  { icon: FaXTwitter,   label: "X / Twitter", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn",     href: "#" },
  { icon: FaGithub,     label: "GitHub",       href: "#" },
  { icon: FaInstagram,  label: "Instagram",    href: "#" },
  { icon: FaYoutube,    label: "YouTube",      href: "#" },
];

const badges = [
  { label: "SOC2 Compliant" },
  { label: "GDPR Ready" },
  { label: "99.99% Uptime" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) { setSubscribed(true); setEmail(""); }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap');

        .footer-root {
          background-color: #fffaea;
          font-family: 'DM Sans', sans-serif;
          border-top: 1px solid #e2d9b3;
        }
        .footer-heading { font-family: 'DM Serif Display', serif; }

        .footer-link {
          color: #6b5a3a;
          font-size: 0.875rem;
          transition: color 0.18s;
          text-decoration: none;
          line-height: 1;
        }
        .footer-link:hover { color: #c85a00; }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid #d6c9a0;
          color: #6b5a3a;
          background: transparent;
          transition: background 0.18s, color 0.18s, border-color 0.18s, transform 0.18s;
          cursor: pointer;
        }
        .social-btn:hover {
          background: #c85a00;
          color: #fff;
          border-color: #c85a00;
          transform: translateY(-2px);
        }

        .newsletter-input {
          flex: 1;
          background: #fff8e8;
          border: 1px solid #d6c9a0;
          padding: 0.7rem 1rem;
          font-size: 0.875rem;
          color: #1a1208;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.18s;
        }
        .newsletter-input::placeholder { color: #b89a60; }
        .newsletter-input:focus { border-color: #c85a00; }

        .newsletter-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.7rem 1.2rem;
          background: #c85a00;
          color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          border: none;
          cursor: pointer;
          transition: background 0.18s, transform 0.18s;
          white-space: nowrap;
        }
        .newsletter-btn:hover { background: #a84800; transform: translateY(-1px); }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b5a3a;
          background: #f5e9b8;
          padding: 4px 10px;
          border-radius: 2px;
        }

        .divider { border-color: #e2d9b3; }

        .col-title {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #1a1208;
          margin-bottom: 1rem;
        }
      `}</style>

      <footer className="footer-root w-full">

        {/* ── TOP CTA BAND ── */}
        <div
          className="w-full px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderBottom: "1px solid #e2d9b3" }}
        >
          <div>
            <p className="text-xs font-bold tracking-[0.22em] uppercase mb-1" style={{ color: "#c85a00" }}>
              Ready to get started?
            </p>
            <h2 className="footer-heading text-2xl sm:text-3xl" style={{ color: "#1a1208" }}>
              Make your business faster with Hermes AI
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              style={{ background: "#1a1208", color: "#fff" }}
            >
              Get your AI <FiArrowRight />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              style={{ border: "1px solid #c85a00", color: "#c85a00", background: "transparent" }}
            >
              Get in touch <FiArrowRight />
            </a>
          </div>
        </div>

        {/* ── MAIN FOOTER GRID ── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand column — takes 2 cols */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#c85a00" }}>
                <RiRobot2Line className="text-white text-lg" />
              </div>
              <span className="footer-heading text-2xl" style={{ color: "#1a1208" }}>
                Hermes<span style={{ color: "#c85a00" }}>AI</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#6b5a3a" }}>
              Empowering businesses to deliver exceptional customer support with the power of AI — faster, smarter, and always on.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b.label} className="badge">
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1a6b3a", display: "inline-block" }} />
                  {b.label}
                </span>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2.5 pt-1">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} className="social-btn">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([col, items]) => (
            <div key={col} className="flex flex-col">
              <p className="col-title">{col}</p>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── NEWSLETTER ── */}
        <div
          className="max-w-7xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{ borderTop: "1px solid #e2d9b3" }}
        >
          <div>
            <p className="text-sm font-semibold" style={{ color: "#1a1208" }}>Stay in the loop</p>
            <p className="text-xs mt-0.5" style={{ color: "#6b5a3a" }}>Product updates, AI tips, and no spam. Ever.</p>
          </div>

          {!subscribed ? (
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                placeholder="you@company.com"
                className="newsletter-input w-full sm:w-64"
              />
              <button className="newsletter-btn" onClick={handleSubscribe}>
                Subscribe <FiArrowRight size={13} />
              </button>
            </div>
          ) : (
            <p className="text-sm font-semibold" style={{ color: "#1a6b3a" }}>
              ✓ You're subscribed — welcome aboard!
            </p>
          )}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div
          className="px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid #e2d9b3" }}
        >
          <p className="text-xs" style={{ color: "#9a8060" }}>
            © {new Date().getFullYear()} HermesAI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="footer-link" style={{ fontSize: "0.75rem" }}>{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a6b3a", display: "inline-block" }} className="animate-pulse" />
            <span className="text-xs" style={{ color: "#6b5a3a" }}>All systems operational</span>
          </div>
        </div>

      </footer>
    </>
  );
}