import React, { useEffect } from "react";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";
import { Shield, FileText, Lock, Eye } from "lucide-react";

const Privacy = () => {
  const { t, isAr } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#07062e] pt-32 pb-20 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 text-center">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#ea3326]" />
              <span className="text-[#f5c04f] text-xs font-bold uppercase tracking-[0.3em]">
                {isAr ? "الخصوصية والأمان" : "Privacy & Security"}
              </span>
              <div className="h-px w-10 bg-[#ea3326]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              {t("footer.privacy")}
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              {isAr
                ? "نحن ملتزمون بحماية بياناتكم وضمان أقصى درجات الشفافية في كيفية تعاملنا مع المعلومات."
                : "We are committed to protecting your data and ensuring maximum transparency in how we handle information."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <FadeIn>
            <div className={`space-y-12 ${isAr ? "text-right" : "text-left"}`}>
              <div className="border-l-4 border-[#ea3326] pl-8 pr-8 py-2">
                <h2 className="text-2xl font-black text-[#07062e] mb-4 flex items-center gap-3">
                  <Lock className="text-[#ea3326]" size={24} />
                  {isAr ? "1. جمع المعلومات" : "1. Information Collection"}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {isAr
                    ? "نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند استخدام خدماتنا أو التواصل معنا. قد يتضمن ذلك اسمك، بريدك الإلكتروني، ورقم هاتفك، وتفاصيل شركتك."
                    : "We collect information you provide directly to us when you use our services or communicate with us. This may include your name, email address, phone number, and company details."}
                </p>
              </div>

              <div className="border-l-4 border-[#ea3326] pl-8 pr-8 py-2">
                <h2 className="text-2xl font-black text-[#07062e] mb-4 flex items-center gap-3">
                  <Eye className="text-[#ea3326]" size={24} />
                  {isAr ? "2. كيف نستخدم معلوماتك" : "2. How We Use Your Information"}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {isAr
                    ? "نستخدم المعلومات التي نجمعها لتقديم خدماتنا وتحسينها وتخصيصها، وللتواصل معك بخصوص عمليات التوريد، Logistics، والتحديثات الهامة."
                    : "We use the information we collect to provide, maintain, and improve our services, and to communicate with you about operations, logistics, and important updates."}
                </p>
              </div>

              <div className="border-l-4 border-[#ea3326] pl-8 pr-8 py-2">
                <h2 className="text-2xl font-black text-[#07062e] mb-4 flex items-center gap-3">
                  <Shield className="text-[#ea3326]" size={24} />
                  {isAr ? "3. أمن البيانات" : "3. Data Security"}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {isAr
                    ? "نطبق تدابير أمنية تقنية وإدارية صارمة لحماية بياناتك من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف."
                    : "We implement strict technical and administrative security measures to protect your data from unauthorized access, alteration, disclosure, or destruction."}
                </p>
              </div>

              <div className="border-l-4 border-[#ea3326] pl-8 pr-8 py-2">
                <h2 className="text-2xl font-black text-[#07062e] mb-4 flex items-center gap-3">
                  <FileText className="text-[#ea3326]" size={24} />
                  {isAr ? "4. التزاماتنا القانونية" : "4. Legal Obligations"}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {isAr
                    ? "نلتزم بكافة القوانين واللوائح المعمول بها في السودان والمتعلقة بحماية البيانات والخصوصية في قطاع الطاقة."
                    : "We comply with all applicable laws and regulations in Sudan regarding data protection and privacy within the energy sector."}
                </p>
              </div>
            </div>

            <div className="mt-20 p-8 bg-slate-50 border border-slate-200 rounded-sm">
              <p className="text-slate-500 text-sm text-center italic">
                {isAr
                  ? "آخر تحديث: أبريل 2024. نحن نحتفظ بالحق في تحديث هذه السياسة في أي وقت."
                  : "Last updated: April 2024. We reserve the right to update this policy at any time."}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
