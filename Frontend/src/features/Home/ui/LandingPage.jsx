import { useState, useEffect } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { RiRobot2Line } from "react-icons/ri";
import Navbar from "../../../components/Navbar";
import InfiniteScrollbar from "./components/InfiniteScrollbar";
import Services from "./components/Services";
import Features from "./components/Features";
import Footer from "../../../components/Footer";
import PricingSection from "../../Pricing/ui/Pricing";

const MOUNTAIN_BG ="https://ik.imagekit.io/cryg162lg/bg-cream.jpg";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen font-sans overflow-x-hidden" style={{ fontFamily: "'Sora', sans-serif" }}>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,160,20,0.4); }
          50%       { box-shadow: 0 0 45px rgba(255,160,20,0.8); }
        }

        .anim-fade-up-1 { animation: fadeUp 0.9s ease forwards; }
        .anim-fade-up-2 { animation: fadeUp 0.9s 0.18s ease both; }
        .anim-fade-up-3 { animation: fadeUp 0.9s 0.34s ease both; }
        .anim-fade-up-4 { animation: fadeUp 0.9s 0.50s ease both; }
        .anim-fade-in   { animation: fadeIn 1.2s 0.6s ease both; }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #fff 0%, #fff 35%,
            #ffdb80 50%,
            #fff 65%, #fff 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .btn-primary:hover { transform: translateY(-2px) scale(1.03); }
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .btn-primary:hover::after { transform: translateX(100%); }

        .btn-ghost {
          transition: transform 0.2s, background 0.2s, border-color 0.2s;
        }
        .btn-ghost:hover {
          transform: translateY(-2px) scale(1.03);
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.6);
        }

        .float-badge { animation: float 4s ease-in-out infinite; }
        .float-badge-delay { animation: float 4s 1.5s ease-in-out infinite; }

        .nav-glass {
          background: ${scrolled ? "rgba(20,8,0,0.55)" : "transparent"};
          backdrop-filter: ${scrolled ? "blur(14px)" : "none"};
          border-bottom: ${scrolled ? "1px solid rgba(255,200,80,0.12)" : "none"};
          transition: background 0.4s, backdrop-filter 0.4s;
        }

        .overlay-gradient {
          background: linear-gradient(
            to right,
            rgba(15,5,0,0.72) 0%,
            rgba(20,6,0,0.55) 40%,
            rgba(0,0,0,0.05) 100%
          );
        }

        .hero-line {
          line-height: 1.06;
          letter-spacing: -0.03em;
        }
      `}</style>

      {/* ── NAV ── */}
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={MOUNTAIN_BG}
            alt="Mountain landscape"
            className="w-full h-full object-cover object-center"
          />
          {/* Warm color overlay to match the orange/amber tone */}
          <div className="absolute inset-0" style={{ background: "rgba(200,70,0,0.48)", mixBlendMode: "multiply" }} />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 overlay-gradient" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to top, rgba(10,3,0,0.6), transparent)" }} />
        </div>

        {/* Floating badge — top right area */}
        <div className="float-badge absolute top-32 right-10 md:right-28 hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full shadow-xl z-10">
          <HiSparkles className="text-amber-300 text-sm" />
          Powered by GPT-4o & Claude
        </div>

        <div className="float-badge-delay absolute bottom-36 right-8 md:right-24 hidden md:flex items-center gap-2 bg-amber-400/15 backdrop-blur-md border border-amber-300/25 text-amber-100 text-xs font-medium px-4 py-2 rounded-full shadow-xl z-10">
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
          99.9% uptime SLA
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          {/* Eyebrow */}
          <div className="anim-fade-up-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-amber-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
            <HiSparkles className="text-amber-300" />
            AI-Powered Customer Service
          </div>

          {/* Headline */}
          <h1 className="anim-fade-up-2 hero-line text-white font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-3xl mb-6">
            <span className="shimmer-text">Hermes AI.</span>
            <br />
            <span className="text-white">In your hands.</span>
          </h1>

          {/* Sub-heading */}
          <p
            className="anim-fade-up-3 text-white/75 text-base sm:text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We help organizations build custom AI chatbots for faster customer services.
          </p>

          {/* CTAs */}
          <div className="anim-fade-up-4 flex flex-wrap gap-4 items-center">
            <a
              href="#"
              className="btn-primary flex items-center gap-2.5 bg-amber-400 text-amber-950 font-bold text-sm sm:text-base px-7 py-3.5  shadow-2xl"
            >
              Get in touch
              <FiArrowRight className="text-lg" />
            </a>
            <a
              href="#"
              className="btn-ghost flex items-center gap-2.5 border border-white/40 text-white font-semibold text-sm sm:text-base px-7 py-3.5 "
            >
              Get your AI
              <FiArrowRight className="text-lg" />
            </a>
          </div>

          
         
        </div>
      </section>

      {/* infinite scrollbar  */}

      <InfiniteScrollbar/>

      <Services/>
      <PricingSection/>

      <div>
        <h1 style={{ fontFamily: "'Sora', sans-serif" }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center pb-6 md:pb-8 bg-[#fffaea]">
  What Hermes AI can do for You
</h1>
        <Features/>
      </div>


      <Footer/>

      
    </main>
  );
}