"use client";

import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
    >
      <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-900/30 border border-indigo-800/50 mb-8">
        <span className="text-indigo-300 font-medium text-sm">
          Let's connect
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
        Get In Touch
      </h1>

      <p className="text-lg text-slate-400 max-w-2xl mx-auto">
        Have a project in mind or want to discuss opportunities?
        I’m always open to connecting and exploring new challenges.
      </p>
    </motion.section>
  );
};

export default ContactHero;
