import React from "react";
import { Truck, Activity } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";

const OpsDistributionSection = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
      <FadeIn direction="right">
        <div className="h-[600px] w-full shadow-2xl relative">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1500&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Fuel Distribution"
          />
        </div>
      </FadeIn>
      <FadeIn direction="left">
        <h2 className="text-4xl font-extrabold text-[#07062e] mb-6">
          {t("ops.logTitle")}
        </h2>
        <div className="w-16 h-1 bg-[#ea3326] mb-8"></div>
        <p className="text-slate-600 font-medium text-lg text-justify leading-relaxed mb-10">
          {t("ops.logText")}
        </p>

        <div className="space-y-8">
          <div className="flex gap-6">
            <Truck size={40} className="text-[#07062e] shrink-0" />
            <div>
              <h4 className="text-2xl font-bold text-[#07062e] mb-2">
                {t("ops.fleetTitle")}
              </h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                {t("ops.fleetText")}
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <Activity size={40} className="text-[#ea3326] shrink-0" />
            <div>
              <h4 className="text-2xl font-bold text-[#07062e] mb-2">
                {t("ops.routeTitle")}
              </h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                {t("ops.routeText")}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default OpsDistributionSection;
