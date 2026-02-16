import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="
          relative p-12 md:p-16 rounded-3xl overflow-hidden
          bg-white border border-slate-200
          dark:bg-slate-900/50 dark:border-slate-800
          transition-colors duration-300
        "
      >
        {/* Subtle background grid */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20 bg-grid-slate-300 dark:bg-grid-slate-800" />

        <div className="relative z-10">
          {/* Heading */}
          <h2
            className="
              text-3xl md:text-4xl font-bold mb-6
              bg-clip-text text-transparent
              bg-gradient-to-r
              from-indigo-600 via-purple-600 to-pink-600
              dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
            "
          >
            Ready to Build Your Brand?
          </h2>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Let's create a distinctive brand identity that resonates with your
            audience and scales with your technical ecosystem.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8 py-4 rounded-xl font-bold text-white
              bg-gradient-to-r from-indigo-600 to-purple-700
              hover:from-indigo-700 hover:to-purple-800
              shadow-lg shadow-indigo-500/20
              hover:shadow-indigo-500/40
              transition-all duration-300
            "
          >
            Start Your Brand Journey
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
