import React from "react";
import { MapPin, Building2, Phone, Mail, Globe, Flame } from "lucide-react";
import { useTranslation } from "../../context/TranslationContext";
import { useNavigate } from "react-router";

const Footer = () => {
  const { t, isAr } = useTranslation();
  const navigate = useNavigate();
  return (
    <footer className="bg-[#04031a] pt-24 pb-12 border-t-8 border-[#f5c04f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start mb-6">
              <img src="/1.png" alt="AL BURUJ" className="h-32 w-auto mb-2" />
              <span className="text-white text-xs tracking-[0.2em] font-bold uppercase opacity-80">
                {t("nav.subtitle")}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-[#f5c04f] font-extrabold mb-6 uppercase tracking-widest text-sm">
              {t("footer.hq")}
            </h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li className="flex gap-4 items-start">
                <MapPin size={20} className="text-[#ea3326] shrink-0 mt-0.5" />{" "}
                <span>{t("footer.loc1")}</span>
              </li>
              <li className="flex gap-4 items-start">
                <Building2
                  size={20}
                  className="text-[#ea3326] shrink-0 mt-0.5"
                />{" "}
                <span>{t("footer.loc2")}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5c04f] font-extrabold mb-6 uppercase tracking-widest text-sm">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li className="flex gap-4 items-center group cursor-pointer hover:text-white transition-colors">
                <Phone
                  size={20}
                  className="text-slate-400 group-hover:text-white transition-colors"
                />{" "}
                <span dir="ltr">+249 123 456 789</span>{" "}
                <span className="text-xs text-slate-500">
                  {t("footer.phone1")}
                </span>
              </li>
              <li className="flex gap-4 items-center group cursor-pointer hover:text-white transition-colors">
                <Phone
                  size={20}
                  className="text-slate-400 group-hover:text-white transition-colors"
                />{" "}
                <span dir="ltr">+249 987 654 321</span>{" "}
                <span className="text-xs text-slate-500">
                  {t("footer.phone2")}
                </span>
              </li>
              <li className="flex gap-4 items-center group cursor-pointer hover:text-white transition-colors">
                <Mail
                  size={20}
                  className="text-slate-400 group-hover:text-white transition-colors"
                />{" "}
                info@alburouj.com.sd
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5c04f] font-extrabold mb-6 uppercase tracking-widest text-sm">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => navigate("/privacy-policy")}
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest"
                >
                  {t("footer.privacy")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/terms-of-service")}
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest"
                >
                  {t("footer.terms")}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 ${isAr ? "md:flex-row-reverse" : ""}`}
        >
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} {t("footer.copy")}
          </p>
          <p className="text-[#f5c04f] text-sm font-extrabold tracking-widest uppercase">
            {t("footer.eng")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
