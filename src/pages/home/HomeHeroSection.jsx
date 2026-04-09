import React, { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, Shield, Globe2, Zap } from "lucide-react";
import { useNavigate } from "react-router";
import { useTranslation } from "../../context/TranslationContext";

const HomeHeroSection = () => {
  const { t, isAr } = useTranslation();
  const navigate = useNavigate();
  const parallaxRef = useRef(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-[#07062e] overflow-hidden">
      {/* ── Background Image with parallax ── */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2800&auto=format&fit=crop"
          alt="AL Burouj Energy Infrastructure"
          className="w-full h-full object-cover scale-110"
          style={{ opacity: 0.8 }}
        />
      </div>

      {/* ── Layered Gradients ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: isAr
            ? "linear-gradient(to left, #07062e 40%, rgba(7,6,46,0.6) 60%, transparent 100%)"
            : "linear-gradient(to right, #07062e 40%, rgba(7,6,46,0.6) 70%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to top, #07062e 0%, transparent 60%)",
        }}
      />

      {/* ── Dot Grid Overlay ── */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #f5c04f 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── Decorative Animated Rings (top-right) ── */}
      <div
        className={`absolute z-[2] ${isAr ? "left-[-100px]" : "right-[-100px]"} top-1/2 -translate-y-1/2 pointer-events-none`}
      >
        {[400, 320, 240, 160].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#f5c04f] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: size,
              height: size,
              opacity: 0.06 + i * 0.04,
              animation: `pulse-ring ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
        {/* Gold glowing orb center */}
        <div
          className="w-40 h-40 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,192,79,0.25) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      {/* ── Red accent bar (left/right edge) ── */}
      <div
        className={`absolute top-0 bottom-0 z-[3] w-1 bg-gradient-to-b from-transparent via-[#ea3326] to-transparent ${isAr ? "right-8" : "left-8"}`}
        style={{ opacity: 0.6 }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-32">
        <div className={`max-w-3xl ${isAr ? "ml-auto text-right" : "mr-auto"}`}>
          {/* H1 */}
          <h1
            className="font-black text-white leading-[1.0] tracking-tight mb-8"
            style={{
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              animation: "fadeSlideUp 0.9s 0.15s ease both",
            }}
          >
            {t("hero.title1")}
            <br />
            <span
              className="relative inline-block"
              style={{
                background:
                  "linear-gradient(90deg, #f5c04f 0%, #ff9f0a 50%, #ea3326 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t("hero.title2")}
              {/* Underline swoosh */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                style={{ opacity: 0.5 }}
              >
                <path
                  d="M0 10 Q150 0 300 10"
                  stroke="#f5c04f"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <div
            className={`flex gap-5 mb-12 ${isAr ? "flex-row-reverse" : ""}`}
            style={{ animation: "fadeSlideUp 0.9s 0.3s ease both" }}
          >
            <div className="w-0.5 bg-gradient-to-b from-[#ea3326] via-[#ea3326]/50 to-transparent flex-shrink-0" />
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-xl">
              {t("hero.desc")}
            </p>
          </div>

          {/* Trust chips */}
          <div
            className={`flex flex-wrap gap-4 mb-12 ${isAr ? "justify-end" : ""}`}
            style={{ animation: "fadeSlideUp 0.9s 0.4s ease both" }}
          >
            {[
              {
                icon: <Globe2 size={14} />,
                label: isAr ? "تغطية وطنية" : "Nationwide Coverage",
              },
              {
                icon: <Shield size={14} />,
                label: isAr
                  ? "معايير HSE دولية"
                  : "International HSE Standards",
              },
              {
                icon: <Zap size={14} />,
                label: isAr ? "أسطول 320+ مركبة" : "320+ Fleet Vehicles",
              },
            ].map(({ icon, label }, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold backdrop-blur-sm"
              >
                <span className="text-[#f5c04f]">{icon}</span>
                {label}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 ${isAr ? "justify-end" : ""}`}
            style={{ animation: "fadeSlideUp 0.9s 0.55s ease both" }}
          >
            <button
              onClick={() => navigate("/operations")}
              className="group relative overflow-hidden flex items-center justify-center gap-3 px-9 py-4 font-extrabold text-base uppercase tracking-wider text-[#07062e] rounded-sm"
              style={{
                background: "linear-gradient(135deg, #f5c04f 0%, #ff9f0a 100%)",
                boxShadow:
                  "0 0 40px rgba(245,192,79,0.35), 0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              <span className="relative z-10">{t("hero.btn1")}</span>
              <ArrowRight
                size={18}
                className={`relative z-10 transition-transform duration-300 ${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
              />
              {/* shimmer sweep */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
            </button>

            <button
              onClick={() => navigate("/corporate-profile")}
              className="flex items-center justify-center gap-3 px-9 py-4 font-bold text-base uppercase tracking-wider text-white rounded-sm border border-white/20 hover:border-[#f5c04f]/60 hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
            >
              {t("hero.btn2")}
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom year / established strip ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {[
              { num: "850K+", label: isAr ? "طن/سنة" : "MT / Year" },
              { num: "18", label: isAr ? "ولاية مغطاة" : "States Covered" },
              { num: "150+", label: isAr ? "شريك تجاري" : "B2B Partners" },
            ].map(({ num, label }, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && <div className="w-px h-6 bg-white/15" />}
                <div>
                  <p className="text-[#f5c04f] font-black text-lg leading-none">
                    {num}
                  </p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-0.5">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll indicator */}
          <div className="hidden md:flex flex-col items-center gap-2 text-white/30">
            <span className="text-[10px] uppercase tracking-[0.2em]">
              Scroll
            </span>
            <ChevronDown
              size={16}
              style={{ animation: "bounce-y 1.8s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-ring {
          0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: inherit; }
          50%       { transform: translate(-50%, -50%) scale(1.05); opacity: 0.04; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes bounce-y {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(5px); }
        }
      `}</style>
    </div>
  );
};

export default HomeHeroSection;
