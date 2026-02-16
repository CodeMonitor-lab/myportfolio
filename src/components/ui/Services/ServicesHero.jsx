"use client";

import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 dark:bg-indigo-900/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-900/20 blur-3xl rounded-full" />

      <div className="relative max-w-4xl mx-auto">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full 
                     bg-indigo-100 dark:bg-indigo-500/10 
                     border border-indigo-300 dark:border-indigo-500/20 
                     mb-8 transition-colors duration-300"
        >
          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
            Professional Engineering Services
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r 
                     from-indigo-600 via-purple-600 to-pink-600
                     dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400"
        >
          Development Services That Scale
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed transition-colors duration-300"
        >
          From custom web applications to high-performance optimization, I help
          startups and businesses build scalable, maintainable, and beautifully
          engineered digital products.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesHero;
