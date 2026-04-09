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
            <img src="/1.png" alt="AL BURUJ" className="h-28 w-auto" />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:block">
            <div
              className={`flex items-center space-x-6 ${isAr ? "space-x-reverse" : ""}`}
            >
              {NAV_LINKS.map(({ path, label_key }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `text-sm font-bold tracking-wide transition-all uppercase border-b-2 py-1 ${
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
              className="flex items-center gap-2 text-white hover:text-[#f5c04f] transition-colors font-bold uppercase text-sm tracking-widest"
            >
              <Globe size={18} /> {lang === "en" ? "العربية" : "EN"}
            </button>
            <button className="bg-[#f5c04f] text-[#07062e] px-8 py-3 text-sm font-extrabold uppercase tracking-wider hover:bg-white transition-colors shadow-lg">
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
        <div className="px-4 py-6 space-y-2">
          {NAV_LINKS.map(({ path, label_key }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block w-full text-start px-4 py-4 text-lg font-bold uppercase tracking-wider border-l-4 ${
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
