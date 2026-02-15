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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-200 font-sans">
      {/* Hero Section */}
      <BrandStudio />
      {/* Philosophy Section */}
      <Brandphilosophy />

      {/* Services Section */}
      <BrandServices />

      {/* Process Section */}
      <BrandProcess />

      {/* Portfolio Section */}
      <BrandPortfolio />

      {/* Testimonials Section */}
      <BrandPerspective />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
