import React from "react";
import { Ship } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";

const OpsPortSection = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
      <FadeIn direction="right" className="order-2 lg:order-1">
        <h2 className="text-4xl font-extrabold text-[#07062e] mb-6">
          {t("ops.advTitle")}
        </h2>
        <div className="w-16 h-1 bg-[#f5c04f] mb-8"></div>
        <p className="text-slate-600 font-medium text-lg text-justify leading-relaxed mb-8">
          {t("ops.advText")}
        </p>
        <div className="bg-[#f8fafc] p-8 border-l-4 border-[#07062e]">
          <Ship className="text-[#ea3326] w-10 h-10 mb-4" />
          <h4 className="text-xl font-bold text-[#07062e] mb-2">
            {t("ops.globalTitle")}
          </h4>
          <p className="text-slate-600 font-medium text-base mb-4">
            {t("ops.globalText1")}
          </p>
          <p className="text-slate-600 font-medium text-base">
            {t("ops.globalText2")}
          </p>
        </div>
      </FadeIn>
      <FadeIn direction="left" className="order-1 lg:order-2">
        <div className="h-[700px] w-full shadow-2xl relative">
          <img
            src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=1500&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Port Sudan Terminal"
          />
        </div>
      </FadeIn>
    </div>
  );
};

export default OpsPortSection;
