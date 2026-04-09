import React from "react";
import {
  CheckCircle2,
  BarChart3,
  Route,
  Building2,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router";
import FadeIn from "../../components/FadeIn";
import AnimatedCounter from "../../components/AnimatedCounter";
import { useTranslation } from "../../context/TranslationContext";

const PILLARS_EN = [
  {
    icon: BarChart3,
    title: "End-to-End Supply Control",
    desc: "Unlike intermediaries, AL Burouj owns every stage — import, storage, transport, and station construction. This vertical integration eliminates dependency, reduces cost, and guarantees product integrity from manifest to pump.",
  },
  {
    icon: Route,
    title: "Unmatched National Reach",
    desc: "Our logistics network is engineered to conquer Sudan's vast geography. From the Red Sea coastline to the southernmost agricultural belts, we reach every state through optimized routing and dedicated regional hubs.",
  },
  {
    icon: Building2,
    title: "Infrastructure We Build & Own",
    desc: "We don't just deliver fuel — we build the future of Sudan's fueling ecosystem. Every station we engineer is a long-term asset that creates employment, fuels local economies, and elevates the standard of service.",
  },
];

const PILLARS_AR = [
  {
    icon: BarChart3,
    title: "تحكم كامل في سلسلة التوريد",
    desc: "على عكس الوسطاء، تمتلك البروج كل مرحلة — الاستيراد والتخزين والنقل وبناء المحطات. هذا التكامل الرأسي يُلغي الاعتماد على الغير ويضمن جودة المنتج من البيان الجمركي إلى المضخة.",
  },
  {
    icon: Route,
    title: "انتشار وطني لا مثيل له",
    desc: "شبكتنا اللوجستية مُصممة للتغلب على الجغرافيا الشاسعة للسودان. من ساحل البحر الأحمر إلى أعمق الأحزمة الزراعية جنوباً، نصل إلى كل ولاية عبر مسارات مُحسّنة ومراكز إقليمية مخصصة.",
  },
  {
    icon: Building2,
    title: "بنية تحتية نبنيها ونمتلكها",
    desc: "لا نكتفي بتوصيل الوقود — بل نبني مستقبل منظومة تزويد الوقود في السودان. كل محطة نُنجزها هي أصل طويل الأمد يخلق فرص العمل ويُغذّي الاقتصاد المحلي.",
  },
];

const STATS = [
  {
    value: 850000,
    suffix: "+",
    label_en: "MT Imported Annually",
    label_ar: "طن مستورد سنوياً",
  },
  {
    value: 18,
    suffix: "",
    label_en: "Sudanese States Served",
    label_ar: "ولاية سودانية مُخدَّمة",
  },
  {
    value: 320,
    suffix: "+",
    label_en: "Fleet Vehicles Active",
    label_ar: "مركبة في الأسطول النشط",
  },
  {
    value: 150,
    suffix: "+",
    label_en: "B2B Corporate Clients",
    label_ar: "عميل مؤسسي",
  },
];

const HomeWhyUsSection = () => {
  const { isAr } = useTranslation();
  const navigate = useNavigate();
  const pillars = isAr ? PILLARS_AR : PILLARS_EN;

  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* ── Top: Section label + heading + CTA ── */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-24 ${isAr ? "lg:flex-row-reverse text-right" : ""}`}
        >
          <FadeIn direction={isAr ? "left" : "right"}>
            <div>
              <div
                className={`inline-flex items-center gap-3 mb-4 ${isAr ? "flex-row-reverse" : ""}`}
              >
                <div className="h-px w-10 bg-[#ea3326]" />
                <span className="text-[#ea3326] text-xs font-bold uppercase tracking-[0.3em]">
                  {isAr ? "ميزتنا التنافسية" : "Our Competitive Edge"}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#07062e] leading-tight">
                {isAr ? "لماذا " : "Why "}

                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #07062e 0%, #ea3326 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {isAr ? "البروج؟" : "AL Burouj?"}
                </span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction={isAr ? "right" : "left"} delay={150}>
            <div className="max-w-sm">
              <p className="text-slate-500 text-base leading-relaxed mb-6">
                {isAr
                  ? "في قطاع يتطلب الدقة والموثوقية والسرعة — نحن الخيار الوحيد الذي يملك الجرأة على الوعد بالتميز في كل نقطة من السلسلة."
                  : "In a sector that demands precision, reliability, and speed — we are the only partner bold enough to promise excellence at every link in the chain."}
              </p>
              <button
                onClick={() => navigate("/corporate-profile")}
                className="group inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-[#07062e] hover:text-[#ea3326] transition-colors"
              >
                {isAr ? "ملف الشركة الكامل" : "Full Corporate Profile"}
                <ArrowRight
                  size={16}
                  className={`transition-transform ${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
                />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* ── Stats Bar ── */}
        <FadeIn>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-24 border border-slate-200 divide-x divide-slate-200"
            style={{ direction: "ltr" }} // keep numbers LTR
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="py-10 px-8 text-center group hover:bg-[#07062e] transition-colors duration-300"
              >
                <p className="text-4xl md:text-5xl font-black mb-2 text-[#07062e] group-hover:text-[#f5c04f] transition-colors">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </p>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold group-hover:text-white/60 transition-colors">
                  {isAr ? s.label_ar : s.label_en}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Pillars (3-col) ── */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isAr ? "text-right" : ""}`}
        >
          {pillars.map((p, idx) => (
            <FadeIn key={idx} delay={idx * 120}>
              <div className="group relative p-10 border border-slate-200 hover:border-[#07062e] transition-colors duration-300 h-full overflow-hidden">
                {/* background sweep on hover */}
                <div className="absolute inset-0 bg-[#07062e] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center bg-slate-100 group-hover:bg-white/10 transition-colors mb-8">
                    <p.icon
                      size={22}
                      className="text-[#07062e] group-hover:text-[#f5c04f] transition-colors"
                    />
                  </div>

                  {/* Step number */}
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 group-hover:text-[#ea3326]/60 mb-3 transition-colors">
                    0{idx + 1}
                  </p>

                  <h3 className="text-lg font-extrabold text-[#07062e] group-hover:text-white mb-4 transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed font-light transition-colors">
                    {p.desc}
                  </p>

                  <div
                    className={`mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#f5c04f] text-xs font-bold uppercase tracking-widest ${isAr ? "flex-row-reverse" : ""}`}
                  >
                    <CheckCircle2 size={14} />
                    {isAr ? "معتمد ومثبت" : "Proven & Certified"}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhyUsSection;
