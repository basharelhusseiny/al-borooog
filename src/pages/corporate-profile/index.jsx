import React from "react";
import PageHero from "../../components/PageHero";
import AboutVisionSection from "./AboutVisionSection";
import AboutValuesSection from "./AboutValuesSection";
import AboutImpactSection from "./AboutImpactSection";
import { useTranslation } from "../../context/TranslationContext";

const CorporateProfilePage = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fadeIn bg-white pb-32">
      <PageHero
        bgImage="https://images.unsplash.com/photo-1542228601-3e4775d714b1?q=80&w=2500&auto=format&fit=crop"
        title1={t("about.title")}
        title2={t("about.titleHighlight")}
        subtitle={t("about.subtitle")}
        align="left"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <AboutVisionSection />
        <AboutValuesSection />
        <AboutImpactSection />
      </div>
    </div>
  );
};

export default CorporateProfilePage;
