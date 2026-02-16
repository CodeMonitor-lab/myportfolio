import React from "react";
import { motion } from "framer-motion";

const BrandStudio = () => {
  return (
    <section
      className="
        py-24 px-4 sm:px-6 lg:px-8 
        max-w-7xl mx-auto text-center
        transition-colors duration-300
      "
    >
      {/* Badge */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", bounce: 0.3 }}
        className="
          inline-block px-4 py-1.5 rounded-full mb-8
          bg-indigo-100 border border-indigo-200
          dark:bg-indigo-900/30 dark:border-indigo-800/50
        "
      >
        <span className="text-indigo-600 dark:text-indigo-300 font-medium text-sm">
          Where code meets creativity
        </span>
      </motion.div>

      {/* Heading */}
      <h1
        className="
          text-4xl md:text-6xl font-bold mb-8
          bg-clip-text text-transparent
          bg-gradient-to-r
          from-indigo-600 via-purple-600 to-pink-600
          dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
        "
      >
        Brand Studio
      </h1>

      {/* Description */}
      <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
        Crafting distinctive brand identities that blend aesthetic excellence
        with technical precision. We build brands that developers love to
        implement and audiences remember.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3">
        {[
          "Strategy",
          "Identity Design",
          "Design Systems",
          "Motion",
          "Developer Handoff",
          "Brand Evolution",
        ].map((item, index) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="
              px-4 py-1.5 rounded-full text-sm
              bg-slate-100 border border-slate-200 text-slate-700
              dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-300
              transition-all duration-300
            "
          >
            {item}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default BrandStudio;
