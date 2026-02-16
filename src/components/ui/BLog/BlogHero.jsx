"use client";

import React from "react";
import { motion } from "framer-motion";

const BlogHero = () => {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          py-24 px-4 sm:px-6 lg:px-8
          max-w-4xl mx-auto text-center
        "
      >
        {/* Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          className="
            inline-block px-5 py-2 rounded-full
            bg-indigo-100/60 dark:bg-indigo-900/30
            border border-indigo-300/40 dark:border-indigo-800/50
            mb-8 backdrop-blur-sm
          "
        >
          <span className="text-indigo-600 dark:text-indigo-300 font-medium text-sm tracking-wide">
            Insights & Perspectives
          </span>
        </motion.div>

        {/* Heading */}
        <h1
          className="
            text-4xl md:text-6xl font-extrabold mb-6
            bg-clip-text text-transparent
            bg-gradient-to-r
            from-indigo-500 via-purple-500 to-pink-500
            dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
            leading-tight
          "
        >
          Engineering Journal
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Sharing technical insights, design philosophies, and career reflections
          from years of building scalable digital products.
        </p>
      </motion.div>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
};

export default BlogHero;
