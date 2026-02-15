import React from "react";
import { motion } from "framer-motion";

const BrandStudio = () => {
  return (
    <main>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", bounce: 0.3 }}
          className="inline-block px-4 py-1.5 rounded-full bg-indigo-900/30 border border-indigo-800/50 mb-8"
        >
          <span className="text-indigo-300 font-medium text-sm">
            Where code meets creativity
          </span>
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Brand Studio
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
          Crafting distinctive brand identities that blend aesthetic excellence
          with technical precision. We build brands that developers love to
          implement and audiences remember.
        </p>
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
              className="px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-slate-300"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default BrandStudio;
