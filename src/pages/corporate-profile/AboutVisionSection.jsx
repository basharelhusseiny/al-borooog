import React from "react";
import { Globe, Anchor } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";

const AboutVisionSection = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
      <FadeIn direction="right">
        <div className="bg-[#f8fafc] border-t-4 border-[#07062e] p-12 shadow-lg h-full">
          <Globe size={40} className="text-[#07062e] mb-6" />
          <h2 className="text-3xl font-extrabold text-[#07062e] mb-6">
            {t("about.vision")}
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg text-justify font-medium">
            {t("about.visionText")}
          </p>
        </div>
      </FadeIn>

      <FadeIn direction="left" delay={200}>
        <div className="bg-[#f8fafc] border-t-4 border-[#ea3326] p-12 shadow-lg h-full">
          <Anchor size={40} className="text-[#ea3326] mb-6" />
          <h2 className="text-3xl font-extrabold text-[#07062e] mb-6">
            {t("about.mission")}
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg text-justify font-medium">
            {t("about.missionText")}
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default AboutVisionSection;
