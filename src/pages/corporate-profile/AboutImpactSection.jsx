import React from "react";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";

const AboutImpactSection = () => {
  const { t } = useTranslation();

  return (
    <FadeIn delay={200}>
      <div className="relative overflow-hidden shadow-2xl bg-[#07062e]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
            alt="Industrial Impact"
          />
        </div>
        <div className="relative z-10 p-12 md:p-20 lg:p-24 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            {t("about.impactTitle1")} <br />
            <span className="text-[#f5c04f]">{t("about.impactTitle2")}</span>
          </h2>
          <div className="w-20 h-1 bg-[#ea3326] mb-8"></div>
          <p className="text-xl text-slate-200 font-light leading-relaxed text-justify">
            {t("about.impactText")}
          </p>
        </div>
      </div>
    </FadeIn>
  );
};

export default AboutImpactSection;
