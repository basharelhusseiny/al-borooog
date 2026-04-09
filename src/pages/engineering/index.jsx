import React from "react";
import PageHero from "../../components/PageHero";
import EngRetailSection from "./EngRetailSection";
import EngCorporateSection from "./EngCorporateSection";
import { useTranslation } from "../../context/TranslationContext";

const EngineeringPage = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fadeIn bg-white pb-32">
      <PageHero
        bgImage="https://images.unsplash.com/photo-1605336069925-96db15ec3c8d?q=80&w=2500&auto=format&fit=crop"
        title1={t("eng.title1")}
        title2={t("eng.title2")}
        subtitle={t("eng.subtitle")}
        align="left"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 space-y-32">
        <EngRetailSection />
        <EngCorporateSection />
      </div>
    </div>
  );
};

export default EngineeringPage;
