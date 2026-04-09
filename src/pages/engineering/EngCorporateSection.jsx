import React from "react";
import { Factory } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";

const EngCorporateSection = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <FadeIn direction="right" className="order-2 lg:order-1">
        <div className="h-[600px] shadow-2xl overflow-hidden bg-[#07062e]">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=1500&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-90"
            alt="Industrial Depot"
          />
        </div>
      </FadeIn>
      <FadeIn direction="left" className="order-1 lg:order-2">
        <h2 className="text-4xl font-extrabold text-[#07062e] mb-6">
          {t("eng.corpTag")}
        </h2>
        <div className="w-16 h-1 bg-[#ea3326] mb-8"></div>
        <p className="text-slate-600 text-lg leading-relaxed font-medium text-justify mb-8">
          {t("eng.corpDesc")}
        </p>
        <div className="bg-[#07062e] text-white p-10 shadow-xl">
          <Factory size={40} className="text-[#f5c04f] mb-6" />
          <p className="text-lg font-light leading-relaxed">
            Whether a commercial client requires a compact 10,000-liter skid
            tank or a massive 500,000-liter multi-tank bulk plant, our engineers
            provide the exact bespoke solution tailored to heavy industry needs.
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default EngCorporateSection;
