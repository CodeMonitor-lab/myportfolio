import React from "react";

const Terminal = () => {
  return (
    <section className="py-24 px-6 bg-black flex justify-center relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_60%)] blur-2xl" />

      {/* Terminal window */}
      <div className="relative max-w-2xl w-full border border-cyan-500/30 p-6 rounded-2xl bg-black/70 shadow-[0_0_40px_#00ffff22] font-mono">

        {/* Header */}
        <p className="text-center text-cyan-300 text-xs tracking-[0.35em] mb-6">
          SYSTEM TERMINAL v2.0
        </p>

        {/* Boot Section */}
        <div className="space-y-2 text-xs">

          <p className="text-green-400">
            &gt; initializing system core... <span className="text-cyan-300">DONE</span>
          </p>

          <p className="text-green-400">
            &gt; loading UI modules... <span className="text-cyan-300">DONE</span>
          </p>

          <p className="text-green-400">
            &gt; connecting neural network... <span className="text-cyan-300">ACTIVE</span>
          </p>

        </div>

        {/* Divider */}
        <div className="my-4 border-t border-cyan-500/20" />

        {/* DevOps Layer */}
        <div className="space-y-2 text-xs text-gray-400">

          <p>
            &gt; build system: <span className="text-pink-300">Next.js</span>
          </p>

          <p>
            &gt; bundler: <span className="text-pink-300">Turbopack</span>
          </p>

          <p>
            &gt; deployment: <span className="text-pink-300">Vercel Edge</span>
          </p>

          <p>
            &gt; CI/CD pipeline: <span className="text-cyan-300">RUNNING</span>
          </p>

        </div>

        {/* Cursor line */}
        <p className="text-green-400 text-xs mt-4">
          &gt; system status: ONLINE{" "}
          <span className="animate-pulse">█</span>
        </p>

      </div>
    </section>
  );
};

export default Terminal;