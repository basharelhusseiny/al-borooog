import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useTranslation } from "../context/TranslationContext";

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const { isAr } = useTranslation();

  let translateClass = "translate-y-12";
  if (direction === "left")
    translateClass = isAr ? "translate-x-12" : "-translate-x-12";
  if (direction === "right")
    translateClass = isAr ? "-translate-x-12" : "translate-x-12";

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${translateClass}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
