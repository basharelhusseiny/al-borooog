import React from "react";
import PageHero from "../../components/PageHero";
import OpsPortSection from "./OpsPortSection";
import OpsDistributionSection from "./OpsDistributionSection";
import { useTranslation } from "../../context/TranslationContext";

const LogisticsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fadeIn bg-white pb-32">
      <PageHero
        bgImage="https://images.unsplash.com/photo-1549488344-c711828f73ec?q=80&w=2500&auto=format&fit=crop"
        title1={t("ops.title1")}
        title2={t("ops.title2")}
        subtitle={t("ops.subtitle")}
        align="center"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <OpsPortSection />
        <OpsDistributionSection />
      </div>
    </div>
  );
};

export default LogisticsPage;
