import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { Menu, X, Globe, Flame } from "lucide-react";
import { useTranslation } from "../../context/TranslationContext";

const NAV_LINKS = [
  { path: "/", label_key: 0 },
  { path: "/corporate-profile", label_key: 1 },
  { path: "/operations", label_key: 2 },
  { path: "/engineering", label_key: 3 },
  { path: "/sustainability", label_key: 4 },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, toggleLang, isAr } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = scrolled
    ? "bg-[#07062e] shadow-2xl py-4 transition-all duration-500"
    : "bg-transparent py-8 transition-all duration-500";

  const tabs = t("nav.tabs");

  return (
    <nav className={`fixed top-0 z-50 w-full ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <img src="/1.png" alt="AL Boroog" className="h-28 w-auto" />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:block">
            <div
              className={`flex items-center ${isAr ? "gap-x-8" : "gap-x-6"}`}
            >
              {NAV_LINKS.map(({ path, label_key }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `font-bold transition-all border-b-2 py-1 ${
                      isAr ? "text-[15px]" : "text-sm tracking-wide uppercase"
                    } ${
                      isActive
                        ? "border-[#f5c04f] text-[#f5c04f]"
                        : "border-transparent text-white hover:text-[#f5c04f]"
                    }`
                  }
                >
                  {tabs[label_key]}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={toggleLang}
              className={`flex items-center gap-2 text-white hover:text-[#f5c04f] transition-colors font-bold ${
                isAr ? "text-base" : "uppercase text-sm tracking-widest"
              }`}
            >
              <Globe size={18} /> {lang === "en" ? "العربية" : "EN"}
            </button>
            <button
              className={`bg-[#f5c04f] text-nowrap text-[#07062e] px-8 py-3 font-extrabold transition-colors shadow-lg ${
                isAr
                  ? "text-base"
                  : "text-sm uppercase tracking-wider hover:bg-white"
              } hover:bg-white`}
            >
              {t("nav.contact")}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-6">
            <button
              onClick={toggleLang}
              className="text-white font-bold text-sm uppercase"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#07062e] border-t border-white/10 ${isOpen ? "max-h-[500px]" : "max-h-0"}`}
      >
        <div className="px-4 py-6 space-y-2 text-nowrap">
          {NAV_LINKS.map(({ path, label_key }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block w-full text-start px-4 py-4 text-lg font-bold border-s-4 ${
                  isAr ? "" : "uppercase tracking-wider"
                } ${
                  isActive
                    ? "border-[#f5c04f] text-[#f5c04f] bg-white/5"
                    : "border-transparent text-white hover:bg-white/5"
                }`
              }
            >
              {tabs[label_key]}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
