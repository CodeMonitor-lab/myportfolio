import React from 'react'
import {
  ClientExperience,
  OurServices,
  FrequentlyAskQuestion,
  WorkingProcess,
  ServicesHero
} from '@/components/ui/Services'

const Page = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <ServicesHero />
      <OurServices />
      <WorkingProcess />
      <ClientExperience />
      <FrequentlyAskQuestion />
    </main>
  )
}

export default Page
