import React from "react";
import { ArrowRight, Mail, Phone, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router";
import FadeIn from "../../components/FadeIn";
import { useTranslation } from "../../context/TranslationContext";

const HomeContactCta = () => {
  const { isAr, t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#07062e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ea3326]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#f5c04f]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-12 ${isAr ? "lg:flex-row-reverse text-right" : "text-left"}`}>
          <FadeIn direction={isAr ? "left" : "right"}>
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                {isAr ? "هل أنت مستعد لتأمين " : "Ready to Secure Your "}
                <span className="text-[#f5c04f]">{isAr ? "مستقبل الطاقة؟" : "Energy Future?"}</span>
              </h2>
              <p className="text-slate-300 text-xl font-light mb-10 leading-relaxed">
                {isAr 
                  ? "تواصل مع فريق الخبراء لدينا اليوم لمناقشة حلول الطاقة المتكاملة المصممة خصيصاً لتلبية احتياجات أعمالك في جميع أنحاء السودان."
                  : "Connect with our expert team today to discuss integrated energy solutions tailored specifically to meet your business needs across Sudan."}
              </p>
              
              <div className={`flex flex-wrap gap-6 mt-4 ${isAr ? "justify-end" : "justify-start"}`}>
                <div className="flex items-center gap-3 text-white font-bold tracking-wide">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={20} className="text-[#f5c04f]" />
                  </div>
                  <span>+249 123 456 789</span>
                </div>
                <div className="flex items-center gap-3 text-white font-bold tracking-wide">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail size={20} className="text-[#f5c04f]" />
                  </div>
                  <span>info@alburouj.com.sd</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction={isAr ? "right" : "left"}>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => navigate("/operations")}
                className="group relative px-10 py-5 bg-[#f5c04f] text-[#07062e] font-black text-lg uppercase tracking-widest text-nowrap flex items-center gap-3 hover:bg-white transition-all duration-300 shadow-2xl"
              >
                {isAr ? "ابدأ الآن" : "Get Started"}
                <ArrowRight size={22} className={`transition-transform duration-300 ${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
              </button>
              
              <button 
                className="px-10 py-5 text-nowrap border-2 border-white/20 text-white font-bold text-lg uppercase tracking-widest hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
              >
                {t("nav.contact")}
                <ExternalLink size={20} />
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HomeContactCta;
