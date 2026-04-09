import React from "react";
import { Ship, Warehouse, Truck, HardHat, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";

const SERVICES_EN = [
  {
    icon: Ship,
    number: "01",
    title: "International Importation",
    subtitle: "Port Sudan Gateway",
    desc: "We manage the full maritime importation cycle — from procurement with global refineries to discharge operations at Port Sudan's deep-water terminals — ensuring premium-grade hydrocarbons reach Sudanese shores without delay.",
    path: "/operations",
    accentColor: "#f5c04f",
  },
  {
    icon: Warehouse,
    number: "02",
    title: "Secure Storage & Handling",
    subtitle: "World-Class Tank Farms",
    desc: "Our strategically located tank farms feature cutting-edge interstitial monitoring, automated telemetry, and full-compliance fire suppression — holding millions of liters of diesel, gasoline, aviation fuel, and LPG at any time.",
    path: "/operations",
    accentColor: "#ea3326",
  },
  {
    icon: Truck,
    number: "03",
    title: "Nationwide Distribution",
    subtitle: "320+ Fleet Vehicles",
    desc: "A massive, GPS-integrated fleet of articulated road tankers delivers critical fuel across all 18 states of Sudan — navigating remote terrains and maintaining real-time delivery schedules via our centralized dispatch command center.",
    path: "/operations",
    accentColor: "#f5c04f",
  },
  {
    icon: HardHat,
    number: "04",
    title: "Fuel Infrastructure Engineering",
    subtitle: "Turnkey Station Development",
    desc: "From retail service stations to bespoke industrial bulk depots, our engineering division handles every phase of construction — site assessment, architectural design, civil works, and full electromechanical commissioning.",
    path: "/engineering",
    accentColor: "#ea3326",
  },
];

const SERVICES_AR = [
  {
    icon: Ship,
    number: "01",
    title: "الاستيراد الدولي",
    subtitle: "بوابة بورتسودان",
    desc: "ندير دورة الاستيراد البحري الكاملة — من المشتريات مع مصافي النفط العالمية إلى عمليات التفريغ في موانئ بورتسودان — لضمان وصول الهيدروكربونات عالية الجودة دون تأخير.",
    path: "/operations",
    accentColor: "#f5c04f",
  },
  {
    icon: Warehouse,
    number: "02",
    title: "التخزين الآمن والمناولة",
    subtitle: "مزارع خزانات عالمية",
    desc: "تتميز مزارع الخزانات الاستراتيجية لدينا بمراقبة متطورة وقياس آلي ومنظومة كاملة لإخماد الحرائق — تحتجز ملايين اللترات من الديزل والبنزين ووقود الطيران وغاز البترول المسال.",
    path: "/operations",
    accentColor: "#ea3326",
  },
  {
    icon: Truck,
    number: "03",
    title: "التوزيع الوطني",
    subtitle: "+320 مركبة أسطول",
    desc: "أسطول ضخم مدمج بنظام GPS من ناقلات الطرق المفصلية يوصل الوقود عبر جميع الولايات الـ18 في السودان — بمراقبة مركزية في الوقت الفعلي.",
    path: "/operations",
    accentColor: "#f5c04f",
  },
  {
    icon: HardHat,
    number: "04",
    title: "هندسة البنية التحتية",
    subtitle: "تطوير محطات جاهزة",
    desc: "من محطات التجزئة إلى المستودعات الصناعية الضخمة، يتولى قسم الهندسة لدينا كل مرحلة — التقييم والتصميم المعماري والبناء المدني والتشغيل الكهروميكانيكي الكامل.",
    path: "/engineering",
    accentColor: "#ea3326",
  },
];

const HomeServicesSection = () => {
  const { isAr } = useTranslation();
  const navigate = useNavigate();
  const services = isAr ? SERVICES_AR : SERVICES_EN;

  return (
    <section className="relative bg-[#07062e] py-32 overflow-hidden">
      {/* background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* gold glow top-left */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,192,79,0.12) 0%, transparent 70%)" }}
      />
      {/* red glow bottom-right */}
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(234,51,38,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <FadeIn>
          <div className={`mb-20 ${isAr ? "text-right" : ""}`}>
            <div className={`inline-flex items-center gap-3 mb-6 ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="h-px w-10 bg-[#ea3326]" />
              <span className="text-[#ea3326] text-xs font-bold uppercase tracking-[0.3em]">
                {isAr ? "ما نقدمه" : "What We Offer"}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-2xl">
              {isAr ? "خدماتنا " : "Integrated "}
              <span
                style={{
                  background: "linear-gradient(90deg, #f5c04f, #ea3326)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {isAr ? "المتكاملة" : "Core Services"}
              </span>
            </h2>
            <p className="text-slate-400 text-lg mt-5 max-w-xl font-light leading-relaxed">
              {isAr
                ? "من الميناء إلى المضخة — نتحكم في كل حلقة في سلسلة طاقة السودان."
                : "From port to pump — we command every link in Sudan's energy supply chain."}
            </p>
          </div>
        </FadeIn>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {services.map((svc, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div
                className="group relative bg-[#07062e] p-10 flex flex-col h-full cursor-pointer overflow-hidden"
                onClick={() => navigate(svc.path)}
                style={{ minHeight: 320 }}
              >
                {/* hover fill */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${svc.accentColor}08 0%, transparent 60%)` }}
                />
                {/* top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: svc.accentColor }}
                />

                <div className={`flex items-start justify-between mb-8 ${isAr ? "flex-row-reverse" : ""}`}>
                  {/* Icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center border"
                    style={{ borderColor: `${svc.accentColor}40`, backgroundColor: `${svc.accentColor}10` }}
                  >
                    <svc.icon size={24} style={{ color: svc.accentColor }} />
                  </div>
                  {/* Number */}
                  <span
                    className="font-black text-5xl leading-none transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.05)", fontVariantNumeric: "tabular-nums" }}
                  >
                    {svc.number}
                  </span>
                </div>

                <div className={`flex-1 ${isAr ? "text-right" : ""}`}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: svc.accentColor }}>
                    {svc.subtitle}
                  </p>
                  <h3 className="text-xl font-extrabold text-white mb-4">{svc.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{svc.desc}</p>
                </div>

                <div
                  className={`mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0 ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ color: svc.accentColor }}
                >
                  {isAr ? "اعرف أكثر" : "Learn More"}
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;
