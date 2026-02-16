"use client";

import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-full" />
      </div>

      {/* Badge */}
      <div className="
        inline-block px-5 py-2 rounded-full mb-8
        border text-sm font-medium
        bg-indigo-50 border-indigo-200 text-indigo-600
        dark:bg-indigo-900/30 dark:border-indigo-800/50 dark:text-indigo-300
      ">
        Let’s Connect
      </div>

      {/* Heading */}
      <h1 className="
        text-4xl sm:text-5xl md:text-6xl font-bold mb-6
        bg-clip-text text-transparent
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      ">
        Get In Touch
      </h1>

      {/* Description */}
      <p className="
        text-lg max-w-2xl mx-auto leading-relaxed
        text-slate-600
        dark:text-slate-400
      ">
        Have a project in mind or want to discuss opportunities?
        I’m always open to connecting and exploring new challenges.
      </p>
    </motion.section>
  );
};

export default ContactHero;
