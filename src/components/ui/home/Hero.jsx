"use client";

import React from "react";
import { motion } from "framer-motion";
import { Dock, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-black">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,100,0.08),transparent_60%)] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glitch title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-4xl md:text-7xl font-extrabold uppercase tracking-[0.25em] text-green-400 drop-shadow-[0_0_25px_#00ff00]"
      >
        SYSTEM BREACH
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 mt-6 max-w-3xl text-green-200/70 text-sm md:text-lg leading-relaxed font-mono"
      >
        Enter the matrix. Building cinematic hacker-style interfaces inspired by
        Hollywood cyber warfare films, with immersive motion systems and dark
        futuristic aesthetics.
      </motion.p>

      {/* Fake terminal log */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 mt-8 bg-black/70 border border-green-500/30 rounded-xl p-4 w-full max-w-2xl text-left font-mono text-xs text-green-400 shadow-[0_0_25px_#00ff0033]"
      >
        <p>&gt; initializing breach protocol...</p>
        <p>&gt; bypassing firewall...</p>
        <p>&gt; decrypting secure node...</p>
        <p>&gt; ACCESS GRANTED █</p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 flex gap-4 flex-wrap justify-center mt-8"
      >
        <a
          href="https://www.codemonitor.online/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_#00ff00] flex items-center gap-2"
        >
          <Dock size={18} />
          View Projects
        </a>

        <button className="px-6 py-3 border border-green-400/40 rounded-lg hover:border-green-400 hover:shadow-[0_0_12px_#00ff00] transition-all duration-300 flex items-center gap-2">
          <Play size={18} />
          Watch Demo
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;