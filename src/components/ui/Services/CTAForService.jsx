'use client'

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CTAForService = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center 
                        bg-slate-100 dark:bg-slate-950 
                        transition-colors duration-300 overflow-hidden">

      {/* Subtle Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-900/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 dark:bg-purple-900/20 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl mx-auto"
      >
        <p className="text-lg text-slate-700 dark:text-slate-400 mb-8 transition-colors">
          Still have questions? I'd love to hear from you!
        </p>

        <Link
          href="/Contact"
          className="
            inline-flex items-center
            px-8 py-4
            rounded-full
            font-semibold
            text-white
            bg-gradient-to-r 
            from-indigo-600 to-purple-600
            hover:from-indigo-700 hover:to-purple-700
            shadow-md dark:shadow-lg 
            dark:shadow-indigo-500/30
            hover:scale-105 active:scale-95
            transition-all duration-300
          "
        >
          Contact Me
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </motion.div>
    </section>
  );
};

export default CTAForService;
