import React from "react";
import { ShieldCheck, Droplet, Flame, Globe, Users } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";
import { THEME } from "../../data/translations";

const HSE_ICON_CONFIG = [
  { color: THEME.primary, icon: <Droplet size={32} /> },
  { color: THEME.accent, icon: <Flame size={32} /> },
  { color: "#16a34a", icon: <Globe size={32} /> },
  { color: THEME.secondary, icon: <Users size={32} /> },
];

const HSESection = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
      <FadeIn>
        <div className="text-center max-w-4xl mx-auto mb-20">
          <ShieldCheck className="text-[#ea3326] w-20 h-20 mx-auto mb-8" />
          <p className="text-2xl text-slate-700 font-medium leading-relaxed">
            {t("hse.desc")}
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {t("hse.items").map((item, idx) => {
          const iconConfig = HSE_ICON_CONFIG[idx];
          return (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="h-full bg-[#f8fafc] border border-slate-200 p-10 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-start">
                <div
                  className="w-16 h-16 flex items-center justify-center text-white mb-6 shadow-md"
                  style={{ backgroundColor: iconConfig.color }}
                >
                  {iconConfig.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#07062e] mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium text-justify">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
};

export default HSESection;
