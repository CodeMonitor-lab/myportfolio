"use client";

import {
  Hero,
  About,
  Stats,
  Projects,
  NetworkMap,
  HologramProfile,
  AIConsole,
  Timeline,
  Terminal,
} from "@/components/ui/home";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-cyan-400 font-mono overflow-hidden relative">
      {/* Hero */}
      <section className="relative z-10">
        <Hero />
      </section>

      {/* About + Overlap */}
      <section className="relative">
        {/* Hologram */}
        <div className="relative z-20 -mb-60">
          <HologramProfile />
        </div>

        {/* About */}
        <div className="relative z-10">
          <About />
        </div>
      </section>

      <section>
        <Stats />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <NetworkMap />
      </section>

      <section>
        <AIConsole />
      </section>

      <section>
        <Timeline />
      </section>

      <section>
        <Terminal />
      </section>
    </main>
  );
}