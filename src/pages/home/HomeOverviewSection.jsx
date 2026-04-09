import React from "react";
import { Flame } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";

const HomeOverviewSection = () => {
  const { t, isAr } = useTranslation();

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive Summary Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <FadeIn direction="right">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#07062e] mb-6 leading-tight">
              {t("home.execSum")}
            </h2>
            <div className="w-20 h-1 bg-[#ea3326] mb-8"></div>
            <h3 className="text-2xl font-bold text-[#07062e] mb-4">
              {t("home.introTitle")}
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed text-justify font-medium mb-8">
              {t("home.introText")}
            </p>
          </FadeIn>
          <FadeIn direction="left">
            <div className="relative h-[500px] w-full shadow-2xl">
              <img
                src="/img-4.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                alt="Oil Infrastructure"
              />
              <div
                className={`absolute -bottom-8 ${isAr ? "-left-8" : "-right-8"} bg-[#07062e] p-8 text-white max-w-xs shadow-xl hidden md:block`}
              >
                <Flame className="text-[#f5c04f] w-12 h-12 mb-4" />
                <p className="font-bold text-xl">{t("home.stratTitle")}</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Infrastructure Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
            <div className="relative h-[600px] w-full shadow-2xl">
              <img
                src="/img-3.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                alt="Pipeline Infrastructure"
              />
            </div>
          </FadeIn>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-[#07062e] mb-6">
              {t("home.moreTitle")}
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed text-justify font-medium mb-10">
              {t("home.moreText")}
            </p>
            <h3 className="text-3xl font-bold text-[#07062e] mb-6">
              {t("home.stratTitle")}
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed text-justify font-medium">
              {t("home.stratText")}
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default HomeOverviewSection;
