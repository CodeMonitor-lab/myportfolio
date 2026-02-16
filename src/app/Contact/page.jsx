"use client";

import {
  ContactForm,
  ContactDetail,
  ContactHero,
  ProfessionalLinks,
} from "@/components/ui/Contact";

export default function ContactPage() {
  return (
    <main className="
      min-h-screen font-sans transition-colors duration-300
      bg-gradient-to-b 
      from-white via-slate-50 to-white
      dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
      text-slate-800 dark:text-slate-200
    ">
      
      {/* Hero */}
      <section className="relative pb-10">
        <ContactHero />
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side – Form */}
          <div>
            <ContactForm />
          </div>

          {/* Right Side – Details + Links */}
          <div className="space-y-10 lg:sticky lg:top-24">
            <ContactDetail />
            <ProfessionalLinks />
          </div>

        </div>
      </section>

    </main>
  );
}
