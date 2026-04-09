import React from "react";
import PageHero from "../../components/PageHero";
import HSESection from "./HSESection";
import { useTranslation } from "../../context/TranslationContext";

const SustainabilityPage = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fadeIn bg-white pb-32">
      <PageHero
        bgImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2500&auto=format&fit=crop"
        title1={t("hse.title1")}
        title2={t("hse.title2")}
        subtitle={t("hse.subtitle")}
        align="center"
      />
      <HSESection />
    </div>
  );
};

export default SustainabilityPage;
