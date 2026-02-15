import React from "react";
import { motion } from "framer-motion";

const BlogHero = () => {
  return (
    <main>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", bounce: 0.3 }}
          className="inline-block px-4 py-1.5 rounded-full bg-indigo-900/30 border border-indigo-800/50 mb-8"
        >
          <span className="text-indigo-300 font-medium text-sm">
            Insights & Perspectives
          </span>
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Engineering Journal
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Sharing technical insights, design philosophies, and career
          reflections from years of building digital products.
        </p>
      </motion.section>
    </main>
  );
};

export default BlogHero;
