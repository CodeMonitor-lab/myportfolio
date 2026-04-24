import React from "react";

const About = () => {
  return (
    <section className="py-32 px-6 bg-black flex justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_60%)] blur-2xl" />

      {/* Container */}
      <div className="relative max-w-6xl w-full border border-cyan-500/30 px-8 pb-8 pt-32 rounded-2xl bg-black/60 shadow-[0_0_40px_#00ffff22]">
        {/* Header */}
        <h2 className="text-cyan-300 text-xl mb-6 tracking-[0.35em]">
           ABOUT CORE
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          A cybernetic interface engineer designing immersive digital systems
          that merge human interaction with futuristic UI architectures. Focused
          on performance, motion design, and neural-like experiences.
        </p>

        {/* System identity grid */}
        <div className="grid grid-cols-2 gap-4 text-xs font-mono">
          <div className="border border-cyan-500/20 p-3 rounded-lg">
            <p className="text-pink-300">ROLE</p>
            <p className="text-gray-400 mt-1">Full Stack Architect</p>
          </div>

          <div className="border border-cyan-500/20 p-3 rounded-lg">
            <p className="text-pink-300">FOCUS</p>
            <p className="text-gray-400 mt-1">Cyber UI Systems</p>
          </div>

          <div className="border border-cyan-500/20 p-3 rounded-lg">
            <p className="text-pink-300">STACK</p>
            <p className="text-gray-400 mt-1">React • Next.js • Node</p>
          </div>

          <div className="border border-cyan-500/20 p-3 rounded-lg">
            <p className="text-pink-300">MODE</p>
            <p className="text-gray-400 mt-1">Neural Interface Dev</p>
          </div>
        </div>

        {/* Status line */}
        <p className="mt-6 text-green-400 text-xs font-mono">
          &gt; identity sync complete • system node stable ✔
        </p>
      </div>
    </section>
  );
};

export default About;