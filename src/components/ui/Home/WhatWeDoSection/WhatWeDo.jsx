'use client';

import { motion } from "framer-motion";
import test from "@/json/HeroBannerData.json";

export default function WhatWeDo({ containerVariants, itemVariants }) {
  return (
    <>
      <motion.p
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="text-center sm:text-left text-sm tracking-widest uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
      >
        {test.article_1.title}
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
          >
            {test.article_1.heading}
          </motion.h1>
        </div>

        <div className="space-y-8">
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 leading-relaxed"
          >
            {test.article_1.para1}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 leading-relaxed"
          >
            {test.article_1.para2}
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
          >
            Explore Our Work →
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
