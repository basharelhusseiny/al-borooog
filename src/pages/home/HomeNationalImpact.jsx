import React from "react";
import { Search, MapPin, ShieldCheck, Zap } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";

const IMPACT_EN = [
  {
    icon: MapPin,
    title: "Strategic Presence",
    desc: "From the maritime gateway of Port Sudan to the central industrial hubs in Khartoum, our footprint covers every essential economic zone.",
  },
  {
    icon: ShieldCheck,
    title: "National Security",
    desc: "We don't just supply fuel; we secure the nation's energy future through resilient logistics and high-capacity storage reserves.",
  },
  {
    icon: Zap,
    title: "Economic Catalyst",
    desc: "Powering the agriculture, mining, and manufacturing sectors that form the backbone of Sudan's gross domestic product.",
  },
];

const IMPACT_AR = [
  {
    icon: MapPin,
    title: "تواجد استراتيجي",
    desc: "من البوابة البحرية في بورتسودان إلى المراكز الصناعية المركزية في الخرطوم، نغطي كل منطقة اقتصادية حيوية.",
  },
  {
    icon: ShieldCheck,
    title: "الأمن القومي",
    desc: "نحن لا نكتفي بتوفير الوقود؛ بل نؤمن مستقبل الطاقة في السودان من خلال خدمات لوجستية مرنة واحتياطيات تخزين ضخمة.",
  },
  {
    icon: Zap,
    title: "محفز اقتصادي",
    desc: "ندعم قطاعات الزراعة والتعدين والتصنيع التي تشكل الركيزة الأساسية للناتج المحلي الإجمالي للسودان.",
  },
];

const HomeNationalImpact = () => {
  const { isAr } = useTranslation();
  const impactData = isAr ? IMPACT_AR : IMPACT_EN;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-around opacity-5 pointer-events-none">
        <div className="w-px h-full bg-slate-800" />
        <div className="w-px h-full bg-slate-800" />
        <div className="w-px h-full bg-slate-800" />
        <div className="w-px h-full bg-slate-800" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${isAr ? "lg:flex-row-reverse" : ""}`}>
          <FadeIn direction={isAr ? "left" : "right"}>
            <div className={isAr ? "text-right" : "text-left"}>
              <h2 className="text-4xl md:text-5xl font-black text-[#07062e] mb-8 leading-tight">
                {isAr ? "أثر وطني يمتد " : "A National Impact "}
                <span className="text-[#ea3326]">{isAr ? "عبر الحدود" : "Beyond Boundaries"}</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                {isAr 
                  ? "شركة البروج ليست مجرد مورد للطاقة، بل هي محرك للنمو يغذي الطموحات السودانية بمليارات اللترات سنوياً، مما يضمن تدفق الحياة في كل ركن من أركان بلادنا."
                  : "AL Burouj is more than an energy provider; we are an engine of growth fueling Sudanese ambitions with billions of liters annually, ensuring the flow of life in every corner of our nation."}
              </p>
              
              <div className="space-y-8">
                {impactData.map((item, idx) => (
                  <div key={idx} className={`flex gap-6 ${isAr ? "flex-row-reverse text-right" : "text-left"}`}>
                    <div className="w-14 h-14 bg-white shadow-md flex items-center justify-center flex-shrink-0 rounded-sm">
                      <item.icon className="text-[#ea3326]" size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#07062e] mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction={isAr ? "right" : "left"}>
            <div className="relative">
              {/* Image Frame with decorative border */}
              <div className="border-[15px] border-white shadow-2xl relative z-10">
                <img 
                  src="/img-1.jpg" 
                  alt="Infrastructure" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
              {/* Red decorative square behind */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#ea3326] -z-0 opacity-10" />
              {/* Gold decorative square behind */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#f5c04f] -z-0 opacity-10" />
              
              {/* Floating Stat Card */}
              <div className={`absolute bottom-10 ${isAr ? "-left-8" : "-right-8"} bg-[#07062e] text-white p-8 shadow-2xl z-20 max-w-[240px]`}>
                <p className="text-4xl font-black text-[#f5c04f] mb-2">100%</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">
                  {isAr ? "التزام بالمعايير العالمية" : "Commitment to Global Standards"}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HomeNationalImpact;
