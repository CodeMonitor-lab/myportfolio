"use client";

import React from "react";
import Image from "next/image";

const HologramProfile = () => {
  return (
    <section className="px-6 bg-transparent flex justify-center relative z-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_60%)] blur-2xl" />

      {/* Hologram container */}
      <div className="relative w-full max-w-md">
        {/* Outer glow frame */}
        <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 shadow-[0_0_40px_#00ffff22]" />

        {/* Scanning line animation */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="w-full h-[2px] bg-cyan-400/40 animate-[scan_3s_linear_infinite]" />
        </div>

        {/* Main card */}
        <div className="relative border border-cyan-500/30 p-8 rounded-2xl bg-black/70 backdrop-blur-md text-center">
          {/* Avatar hologram */}
          <div className="relative w-28 h-28 mx-auto mb-5">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/10 border border-cyan-400/40 animate-pulse shadow-[0_0_25px_#00ffff55]" />

            {/* Rotating ring */}
            <div className="absolute inset-2 rounded-full border border-pink-500/20 animate-spin-slow" />

            {/* Profile image */}
            <div className="absolute inset-3 rounded-full overflow-hidden border border-cyan-400/40">
              <img
                src="https://www.loremfaces.net/128/id/1.jpg"
                alt="Profile"
                className="w-full h-full object-cover opacity-80 mix-blend-screen"
              />
            </div>
          </div>

          {/* Identity */}
          <p className="text-cyan-300 tracking-[0.35em] text-sm">
            HOLOGRAM IDENTITY
          </p>

          <p className="text-gray-400 text-xs mt-2">
            STATUS: VERIFIED • NEURAL LINK ACTIVE
          </p>

          {/* Data stream */}
          <div className="mt-6 text-left text-[10px] font-mono text-green-400 space-y-1">
            <p>&gt; biometric scan: OK</p>
            <p>&gt; neural sync: ACTIVE</p>
            <p>&gt; encryption: AES-256</p>
            <p>&gt; access level: ROOT NODE</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(0);
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(400px);
            opacity: 0.2;
          }
        }

        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HologramProfile;
