"use client";

import React from "react";
import { motion } from "framer-motion";

const FeatureArticle = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-y border-gray-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full 
                       bg-purple-100 dark:bg-purple-900/30
                       border border-purple-200 dark:border-purple-800/50
                       text-purple-600 dark:text-purple-300
                       font-medium text-sm mb-6"
          >
            Featured Article
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold leading-tight 
                       text-gray-900 dark:text-white"
          >
            Mastering the Developer–Designer Workflow
          </motion.h2>

          <p className="text-gray-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            A comprehensive guide to creating seamless collaboration between
            design and engineering teams, with practical frameworks and tooling
            recommendations.
          </p>
        </div>

        {/* Article Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -6 }}
          className="
            relative rounded-3xl overflow-hidden
            bg-white/70 dark:bg-slate-900/60
            backdrop-blur-xl
            border border-gray-200 dark:border-slate-800
            shadow-md hover:shadow-2xl
            transition-all duration-500
          "
        >
          <div className="p-8 md:p-12">

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Collaboration",
                "Design Systems",
                "Workflow",
                "Figma",
                "Developer Handoff",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="
                    px-4 py-1.5 rounded-full text-xs font-medium
                    bg-gray-100 dark:bg-slate-800
                    border border-gray-200 dark:border-slate-700
                    text-gray-600 dark:text-slate-300
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div className="space-y-6 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                In today's digital product landscape, the boundary between design
                and development continues to blur. Yet many teams still struggle
                with inefficient handoff processes, misaligned expectations, and
                tooling mismatches that slow down delivery.
              </p>

              <p>
                Through years of building products with cross-functional teams,
                I've developed a framework that bridges this gap. The key lies
                not in finding the perfect tool, but in establishing shared
                language and creating living documentation.
              </p>

              <p>
                This article explores component-driven workflows, design token
                systems, automated UI testing, and collaborative review
                processes that transform how teams ship products.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-gray-200 dark:border-slate-800">
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-md">
                  AR
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Alex Rivera
                  </div>
                  <div className="text-sm text-gray-500 dark:text-slate-400">
                    Lead Engineer & Design Technologist
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-8 py-3 rounded-xl font-medium text-white
                  bg-gradient-to-r from-indigo-600 to-purple-700
                  shadow-lg shadow-indigo-500/20
                  hover:shadow-indigo-500/40
                  transition-all duration-300
                "
              >
                Read Full Article →
              </motion.button>
            </div>
          </div>

          {/* Soft Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureArticle;
