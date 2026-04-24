"use client";
import React from "react";

export default function AIConsole() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_60%)] blur-2xl" />

      {/* Console */}
      <div className="relative z-10 w-full max-w-3xl border border-cyan-500/30 p-8 rounded-2xl bg-black/70 shadow-[0_0_40px_#00ffff22]">
        
        {/* Header */}
        <p className="text-center text-cyan-300 text-xs tracking-[0.35em] mb-6">
          AI + DEVOPS CONTROL SYSTEM
        </p>

        {/* AI SECTION */}
        <div className="mb-8">
          <p className="text-pink-300 text-xs tracking-widest mb-3">
            AI CORE STATUS
          </p>

          <p className="text-green-400 text-xs font-mono leading-relaxed">
            &gt; scanning neural networks... OK<br />
            &gt; optimizing rendering pipeline... OK<br />
            &gt; generating UI structures... ACTIVE<br />
            &gt; model inference engine... STABLE ✔<br />
            &gt; memory allocation... OPTIMIZED ✔
          </p>
        </div>

        {/* DEVOPS SECTION */}
        <div className="border-t border-cyan-500/20 pt-6">
          <p className="text-cyan-300 text-xs tracking-widest mb-3">
            DEVOPS PIPELINE STATUS
          </p>

          <p className="text-gray-400 text-xs font-mono leading-relaxed">
            &gt; build system: Next.js ✔<br />
            &gt; bundler: Turbopack ✔<br />
            &gt; deployment: Vercel Edge Network ✔<br />
            &gt; CI/CD pipeline: ACTIVE<br />
            &gt; docker container: RUNNING ✔<br />
            &gt; server latency: &lt;10ms<br />
            &gt; uptime: 99.99%<br />
          </p>
        </div>

        {/* STATUS FOOTER */}
        <div className="mt-8 text-center">
          <span className="text-green-400 text-xs tracking-widest animate-pulse">
            ● SYSTEM ONLINE
          </span>
        </div>

      </div>
    </section>
  );
}