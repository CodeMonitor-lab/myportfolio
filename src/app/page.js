import {
  Testimonials,
  CodeCard,
  LeftContent,
  OurSpecialties,
  WhatWeDo
} from "@/components/ui/Home";
import { WorkHero } from "@/components/ui/Work";


export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* Hero Section */}
      <section className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-b 
        from-slate-50 via-white to-slate-100
        dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
        py-24 px-4 sm:px-6 lg:px-8
        transition-colors duration-300
      ">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <LeftContent />
          <div className="flex justify-center md:justify-end">
            <CodeCard />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="
        px-6 lg:px-8 py-20
        bg-white dark:bg-slate-950
        transition-colors duration-300
      ">
        <div className="max-w-7xl mx-auto">
      <OurSpecialties />
        </div>
      </section>

      {/* Our Specialties */}
      <section className="
        px-6 lg:px-8 py-20
        bg-slate-50 dark:bg-slate-900/50
        transition-colors duration-300
        ">
        <div className="max-w-7xl mx-auto">
        <WhatWeDo />
        </div>
      </section>

      {/* Testimonials */}
      <section className="
        py-20
        bg-white dark:bg-slate-950
        transition-colors duration-300
      ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Testimonials />
        </div>
      </section>

    </main>
  );
}
