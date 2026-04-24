"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SpaceNotFound() {
  const [stars, setStars] = useState([]);

  // Generate stars only on client after hydration
  useEffect(() => {
    const generated = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: Math.random() * 3,
    }));

    setStars(generated);
  }, []);

  const astronautVariants = {
    float: {
      y: [0, -18, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const starVariants = {
    twinkle: (star) => ({
      opacity: [0.2, 1, 0.2],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: star.delay,
      },
    }),
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#1b1b3a] to-[#090924] text-white px-6">

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          variants={starVariants}
          animate="twinkle"
          custom={star}
        />
      ))}

      {/* Planet Glow */}
      <div className="absolute left-[-120px] top-1/4 w-72 h-72 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-full blur-2xl opacity-40" />

      {/* Floating Astronaut */}
      <motion.div
        variants={astronautVariants}
        animate="float"
        className="absolute right-12 top-1/3 w-24 md:w-32 opacity-90"
      >
        <svg viewBox="0 0 100 150">
          <circle cx="50" cy="45" r="25" fill="#e0e0e0" stroke="#333" strokeWidth="2" />
          <ellipse cx="50" cy="45" rx="18" ry="12" fill="#1a1a1a" />
          <rect x="35" y="70" width="30" height="40" rx="5" fill="#4a90e2" stroke="#333" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[120px] md:text-[200px] font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent leading-none tracking-tight"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Lost in Space
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-300 text-lg md:text-xl mb-10"
        >
          The page you're looking for has drifted beyond our galaxy.
        </motion.p>

        <Link href="/">
          <motion.span
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-pink-500/40 transition-all duration-300 cursor-pointer"
          >
            🚀 Return to Home Base
          </motion.span>
        </Link>
      </div>
    </div>
  );
}
