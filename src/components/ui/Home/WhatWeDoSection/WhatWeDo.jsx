'use client';

import { motion } from "framer-motion";
import test from "@/json/HeroBannerData.json";

export default function WhatWeDo({ containerVariants, itemVariants }) {
  return (
    <section className="py-20">
      
      {/* Small Label */}
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          text-center sm:text-left
          text-sm tracking-widest uppercase font-semibold
          bg-clip-text text-transparent
          bg-gradient-to-r from-indigo-500 to-purple-600
          dark:from-indigo-400 dark:to-purple-400
        "
      >
        {test.article_1.title}
      </motion.p>

      {/* Main Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mt-6"
      >
        {/* Heading */}
        <div>
          <motion.h1
            variants={itemVariants}
            className="
              text-4xl md:text-6xl font-extrabold leading-tight
              bg-clip-text text-transparent
              bg-gradient-to-r 
              from-indigo-600 via-purple-600 to-pink-600
              dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
            "
          >
            {test.article_1.heading}
          </motion.h1>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <motion.p
            variants={itemVariants}
            className="
              text-lg leading-relaxed
              text-slate-600
              dark:text-slate-300
            "
          >
            {test.article_1.para1}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="
              text-lg leading-relaxed
              text-slate-600
              dark:text-slate-300
            "
          >
            {test.article_1.para2}
          </motion.p>
        </div>
      </motion.div>

    </section>
  );
}
