import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { TranslationProvider } from "./context/TranslationContext";
import Layout from "./layout/index";

// Pages
import HomePage from "./pages/home/index";
import CorporateProfilePage from "./pages/corporate-profile/index";
import LogisticsPage from "./pages/logistics/index";
import EngineeringPage from "./pages/engineering/index";
import SustainabilityPage from "./pages/sustainability/index";

export default function App() {
  return (
    <BrowserRouter>
      <TranslationProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/corporate-profile" element={<CorporateProfilePage />} />
            <Route path="/operations" element={<LogisticsPage />} />
            <Route path="/engineering" element={<EngineeringPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </TranslationProvider>
    </BrowserRouter>
  );
}
