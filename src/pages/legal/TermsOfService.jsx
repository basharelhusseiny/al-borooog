import React, { useEffect } from "react";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";
import { Scale, CheckCircle2, AlertCircle, Handshake } from "lucide-react";

const TermsOfService = () => {
  const { t, isAr } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#07062e] pt-32 pb-20 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 text-center">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#ea3326]" />
              <span className="text-[#f5c04f] text-xs font-bold uppercase tracking-[0.3em]">
                {isAr ? "الاتفاقية القانونية" : "Legal Agreement"}
              </span>
              <div className="h-px w-10 bg-[#ea3326]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              {t("footer.terms")}
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              {isAr
                ? "القواعد واللوائح التي تحكم استخدامك لخدمات البروج ومنصاتها الرقمية."
                : "The rules and regulations governing your use of AL Boroog services and digital platforms."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <div className={`space-y-12 ${isAr ? "text-right" : "text-left"}`}>
              <div className="border-l-4 border-[#f5c04f] pl-8 pr-8 py-2">
                <h2 className="text-2xl font-black text-[#07062e] mb-4 flex items-center gap-3">
                  <CheckCircle2 className="text-[#f5c04f]" size={24} />
                  {isAr ? "1. قبول الشروط" : "1. Acceptance of Terms"}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {isAr
                    ? "باستخدام خدماتنا، فإنك تقبل وتوافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق، يرجى عدم استخدام خدماتنا."
                    : "By using our services, you accept and agree to be bound by these terms and conditions. If you do not agree, please do not use our services."}
                </p>
              </div>

              <div className="border-l-4 border-[#f5c04f] pl-8 pr-8 py-2">
                <h2 className="text-2xl font-black text-[#07062e] mb-4 flex items-center gap-3">
                  <Handshake className="text-[#f5c04f]" size={24} />
                  {isAr ? "2. تقديم الخدمات" : "2. Provision of Services"}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {isAr
                    ? "نحن نسعى لتقديم خدمات طاقة ولوجستيات على أعلى مستوى، ومع ذلك، قد تتأثر الخدمات بظروف تشغيلية أو طوارئ وطنية."
                    : "We strive to provide energy and logistics services of the highest standard; however, services may be affected by operational conditions or national emergencies."}
                </p>
              </div>

              <div className="border-l-4 border-[#f5c04f] pl-8 pr-8 py-2">
                <h2 className="text-2xl font-black text-[#07062e] mb-4 flex items-center gap-3">
                  <AlertCircle className="text-[#f5c04f]" size={24} />
                  {isAr ? "3. حدود المسؤولية" : "3. Limitation of Liability"}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {isAr
                    ? "البروج ليست مسؤولة عن أي أضرار غير مباشرة أو عرضية تنجم عن استخدام خدماتنا، بما في ذلك على سبيل المثال لا الحصر، انقطاع الأعمال."
                    : "AL Boroog is not liable for any indirect or incidental damages resulting from the use of our services, including but not limited to business interruption."}
                </p>
              </div>

              <div className="border-l-4 border-[#f5c04f] pl-8 pr-8 py-2">
                <h2 className="text-2xl font-black text-[#07062e] mb-4 flex items-center gap-3">
                  <Scale className="text-[#f5c04f]" size={24} />
                  {isAr ? "4. القانون المعمول به" : "4. Governing Law"}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {isAr
                    ? "تخضع هذه الشروط وتفسر وفقاً لقوانين جمهورية السودان. أي نزاعات تنشأ تخضع للاختصاص الحصري للمحاكم السودانية."
                    : "These terms are governed by and construed in accordance with the laws of the Republic of Sudan. Any disputes arising are subject to the exclusive jurisdiction of Sudanese courts."}
                </p>
              </div>
            </div>

            <div className="mt-20 p-8 bg-slate-50 border border-slate-200 rounded-sm">
              <p className="text-slate-500 text-sm text-center italic">
                {isAr
                  ? "تحتفظ شركة البروج بالحق في تعديل هذه الشروط في أي وقت لتلبية المتطلبات التشغيلية والقانونية."
                  : "AL Boroog reserves the right to modify these terms at any time to meet operational and legal requirements."}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
