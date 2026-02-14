import {
  Testimonials,
  TestimonialsCard,
  CodeCard,
  LeftContent,
  OurSpecialties,
  WhatWeDo
} from "@/components/ui/Home";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <LeftContent />
          <div className="flex justify-center md:justify-end">
            <CodeCard />
          </div>
        </div>
      </section>
      {/*  */}
      <section className="px-8 py-8" >
      <WhatWeDo />
      </section>
      {/*  */}
      <section className="px-8 py-8" >
      <OurSpecialties />
      </section>
      {/*  */}
      <section>
      <Testimonials />
      {/* <TestimonialsCard/> */}
      </section>
    </div>
  );
}
