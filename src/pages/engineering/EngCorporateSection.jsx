import { Factory } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";

const EngCorporateSection = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <FadeIn direction="right" className="order-2 lg:order-1">
        <div className="h-[600px] shadow-2xl overflow-hidden bg-[#07062e]">
          <img
            src="/img-6.webp"
            className="w-full h-full object-cover opacity-90"
            alt="Industrial Depot"
          />
        </div>
      </FadeIn>
      <FadeIn direction="left" className="order-1 lg:order-2">
        <h2 className="text-4xl font-extrabold text-[#07062e] mb-6">
          {t("eng.corpTag")}
        </h2>
        <div className="w-16 h-1 bg-[#ea3326] mb-8"></div>
        <p className="text-slate-600 text-lg leading-relaxed font-medium text-justify mb-8">
          {t("eng.corpDesc")}
        </p>
        <div className="bg-[#07062e] text-white p-10 shadow-xl">
          <Factory size={40} className="text-[#f5c04f] mb-6" />
          <p className="text-lg font-light leading-relaxed">
            {t("eng.corpDesc2")}
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default EngCorporateSection;
