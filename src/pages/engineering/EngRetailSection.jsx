import React from "react";
import { CheckCircle2 } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";

const RETAIL_FEATURES = [
  "High-Volume Dispensing Technology",
  "Subterranean Storage Integrity",
  "Integrated Commercial Convenience",
  "Traffic Optimization & Corporate Branding",
];

const EngRetailSection = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <FadeIn direction="right">
        <h2 className="text-4xl font-extrabold text-[#07062e] mb-6">
          {t("eng.pubTag")}
        </h2>
        <div className="w-16 h-1 bg-[#f5c04f] mb-8"></div>
        <p className="text-slate-600 text-lg leading-relaxed font-medium text-justify mb-8">
          {t("eng.pubDesc")}
        </p>
        <ul className="space-y-4">
          {RETAIL_FEATURES.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 bg-[#f8fafc] p-4 border border-slate-200 font-bold text-[#07062e]"
            >
              <CheckCircle2 className="text-[#ea3326]" /> {item}
            </li>
          ))}
        </ul>
      </FadeIn>
      <FadeIn direction="left">
        <div className="h-[600px] shadow-2xl overflow-hidden bg-[#07062e]">
          <img
            src="/img-5.jpg"
            className="w-full h-full object-cover opacity-90"
            alt="Retail Station"
          />
        </div>
      </FadeIn>
    </div>
  );
};

export default EngRetailSection;
