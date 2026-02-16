'use client';

import React from "react";
import OurWork from "@/components/ui/Work/OurWork";
import { WorkHero } from "@/components/ui/Work";

const Page = () => {

  return (
    <main className="min-h-screen">
      <WorkHero/>
      <OurWork/>
    </main>
  );
};

export default Page;
