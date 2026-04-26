"use client";

import { useState, use } from "react";
import {
  PlayHeader,
  PlayContent,
  PlaygroundSidebar,
} from "@/components/ui/playground";

export default function PlaygroundSlugPage({ params }) {
  const { slug } = use(params); // ✅ FIX HERE

  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-cyan-400 font-mono">
      <PlaygroundSidebar
        currentSlug={slug}
        open={open}
        setOpen={setOpen}
      />

      <div className="flex-1 flex flex-col">
        <PlayHeader slug={slug} open={open} setOpen={setOpen} />
        <PlayContent slug={slug} />
      </div>
    </div>
  );
}