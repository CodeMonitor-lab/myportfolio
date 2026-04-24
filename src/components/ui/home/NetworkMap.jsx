"use client";

import React from "react";
import { motion } from "framer-motion";

const CyberGlobe = () => {
  return (
    <section className="min-h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.18),transparent_60%)] blur-2xl" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff10_1px,transparent_1px),linear-gradient(to_bottom,#00ffff10_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* Orbit system */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] border border-pink-500/10 rounded-full"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[400px] h-[400px] border border-cyan-500/10 rounded-full"
      />

      {/* Globe wrapper */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex items-center justify-center"
      >

        {/* Outer glow ring */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-[320px] h-[320px] rounded-full border border-cyan-400/30 shadow-[0_0_60px_#00ffff33]"
        />

        {/* Second ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[260px] h-[260px] rounded-full border border-pink-500/20"
        />

        {/* Globe core */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="relative w-[220px] h-[220px] rounded-full bg-black border border-cyan-400/40 shadow-[0_0_80px_#00ffff55] overflow-hidden"
        >

          {/* Grid inside globe */}
          <div className="absolute inset-0 opacity-30 bg-[repeating-radial-gradient(circle_at_center,#00ffff33_1px,transparent_3px)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:20px_20px]" />

          {/* Cyber nodes */}
          {[
            { top: "10%", left: "15%" },
            { top: "50%", right: "10%" },
            { bottom: "15%", left: "50%" },
          ].map((node, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00ffff]"
              style={node}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

        </motion.div>
      </motion.div>

      {/* Footer text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 text-center"
      >
        <p className="text-cyan-300 text-xs tracking-[0.35em]">
          GLOBAL NEURAL NETWORK ACTIVE
        </p>
        <p className="text-gray-500 text-[10px] mt-2">
          CYBER EARTH // REAL-TIME DATA SYNTHESIS
        </p>
      </motion.div>

    </section>
  );
};

export default CyberGlobe;