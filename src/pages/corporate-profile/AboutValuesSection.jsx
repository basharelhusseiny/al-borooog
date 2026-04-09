import React from "react";
import {
  ShieldCheck,
  Truck,
  Settings,
  Users,
  CheckCircle2,
} from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";

const VALUE_ICONS = [
  <ShieldCheck size={32} />,
  <Truck size={32} />,
  <Settings size={32} />,
  <Users size={32} />,
  <CheckCircle2 size={32} />,
];

const AboutValuesSection = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-32">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#07062e] mb-6">
            {t("about.valuesTitle")}
          </h2>
          <div className="w-24 h-1 bg-[#f5c04f] mx-auto"></div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {VALUE_ICONS.map((icon, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <div className="bg-white p-8 border border-slate-200 shadow-md hover:shadow-xl transition-shadow h-full flex flex-col items-start">
              <div className="text-[#07062e] mb-6 p-4 bg-slate-100 rounded-full">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-[#07062e] mb-4">
                {t(`about.values.${idx}.title`)}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed text-justify font-medium">
                {t(`about.values.${idx}.desc`)}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default AboutValuesSection;
