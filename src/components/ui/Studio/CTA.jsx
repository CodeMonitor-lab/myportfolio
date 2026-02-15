import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
    
  return (
    <main>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
      >
        <div className="relative p-12 md:p-16 rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-800/20" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Ready to Build Your Brand?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's create a distinctive brand identity that resonates with your
              audience and scales with your technical ecosystem.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
            >
              Start Your Brand Journey
            </motion.button>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default CTA;
