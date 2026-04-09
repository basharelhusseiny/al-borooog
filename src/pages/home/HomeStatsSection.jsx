import React from "react";
import FadeIn from "../../components/FadeIn";
import AnimatedCounter from "../../components/AnimatedCounter";
import { useTranslation } from "../../context/TranslationContext";

const HomeStatsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#07062e] py-20 border-t-4 border-[#ea3326] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t("home.stats").map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="text-center">
                <p className="text-4xl md:text-6xl font-black mb-4 text-[#f5c04f] drop-shadow-lg">
                  <AnimatedCounter end={stat.value} suffix="+" />
                </p>
                <p className="text-white text-sm font-bold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeStatsSection;
