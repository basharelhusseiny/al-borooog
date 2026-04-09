import React from "react";
import { useLocation } from "react-router"; // لإحضار المسار الحالي
import FadeIn from "./FadeIn";
import { useTranslation } from "../context/TranslationContext";

const PageHero = ({ title1, title2, subtitle, align = "center" }) => {
  const { isAr } = useTranslation();
  const location = useLocation(); // المسار الحالي مثل /engineering

  // خريطة الصور بناءً على الـ Route
  const routeImages = {
    "/": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2800&auto=format&fit=crop",
    "/corporate-profile":
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2800&auto=format&fit=crop",
    "/operations":
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2800&auto=format&fit=crop",
    "/engineering":
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2800&auto=format&fit=crop",
    "/sustainability":
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2800&auto=format&fit=crop",
  };

  // اختيار الصورة بناءً على المسار، وإذا لم يوجد نضع صورة افتراضية (Home)
  const currentImage = routeImages[location.pathname] || routeImages["/"];

  const alignmentClass =
    align === "center"
      ? "text-center mx-auto items-center"
      : isAr
        ? "text-right items-end"
        : "text-left items-start";

  return (
    <div className="relative h-[60vh] min-h-[500px] flex items-center bg-[#07062e] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentImage}
          alt={title1}
          className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-105 transition-transform duration-1000"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07062e] via-[#07062e]/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className={`max-w-4xl flex flex-col ${alignmentClass}`}>
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
              {title1} <br />
              <span className="text-[#f5c04f]">{title2}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
