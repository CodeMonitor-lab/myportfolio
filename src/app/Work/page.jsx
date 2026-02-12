'use client';

import React, { useState } from "react";
import OurWork from "@/components/custom/Work/OurWork";
import WorkPagination from "@/components/custom/Work/WorkPagination";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="min-h-screen">
      <OurWork currentPage={currentPage} />
      
      <WorkPagination
        totalPages={6}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
};

export default Page;
