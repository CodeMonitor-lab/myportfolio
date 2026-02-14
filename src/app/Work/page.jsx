'use client';

import React, { useState } from "react";
import OurWork from "@/components/ui/Work/OurWork";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="min-h-screen">
      <OurWork/>
    </main>
  );
};

export default Page;
