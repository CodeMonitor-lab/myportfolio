import React from 'react'
import {
  ServicesHero,
  ClientExperience,
  OurServices,
  FrequentlyAskQuestion,
  WorkingProcess,
  CTAForService
} from '@/components/ui/Services'

const Page = () => {
  return (
    <main className="
      min-h-screen 
      bg-white dark:bg-slate-950 
      text-slate-900 dark:text-slate-200
      transition-colors duration-300
    ">
      
      <ServicesHero />

      <OurServices />

      <WorkingProcess />

      <ClientExperience />

      <FrequentlyAskQuestion />

      <CTAForService />

    </main>
  )
}

export default Page
