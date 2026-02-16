"use client";

import {
  CTA,
  BrandStudio,
  Brandphilosophy,
  BrandServices,
  BrandProcess,
  BrandPortfolio,
  BrandPerspective,
} from "@/components/ui/Studio";

export default function App() {
  return (
    <div className="min-h-screen font-sans
      bg-white text-slate-900
      dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
      dark:text-slate-200
      transition-colors duration-300"
    >
      <BrandStudio />
      <Brandphilosophy />
      <BrandServices />
      <BrandProcess />
      <BrandPortfolio />
      <BrandPerspective />
      <CTA />
    </div>
  );
}
