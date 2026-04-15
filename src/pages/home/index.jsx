import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import HomeServicesSection from "./HomeServicesSection";
import HomeWhyUsSection from "./HomeWhyUsSection";
import HomeNationalImpact from "./HomeNationalImpact";
import HomeOverviewSection from "./HomeOverviewSection";
import HomeContactCta from "./HomeContactCta";
import HomeStatsSection from "./HomeStatsSection";

const HomePage = () => {
  return (
    <div className="animate-fadeIn">
      {/* 1. Hero — full screen cinematic */}
      <HomeHeroSection />

      {/* 2. Why AL Boroog — stats + 3 pillars */}
      <HomeWhyUsSection />

      {/* 3. National Impact — split layout with image highlight */}
      <HomeNationalImpact />

      {/* 4. Services — dark navy 4-card grid */}
      <HomeServicesSection />

      {/* 5. Corporate Overview — editorial layout */}
      <HomeOverviewSection />

      {/* 6. Contact CTA — bold dark banner */}
      <HomeContactCta />

      {/* 7. Animated stats banner */}
      <HomeStatsSection />
    </div>
  );
};

export default HomePage;
