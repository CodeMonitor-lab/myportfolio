'use client';

import { motion } from "framer-motion";
import test from "@/json/HeroBannerData.json";
import { Reply } from "lucide-react";

const HeroBanner = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const specialties = [
    { id: 1, title: "Brand Strategy", icon: "🎯" },
    { id: 2, title: "Identity Systems", icon: "✨" },
    { id: 3, title: "Digital Experiences", icon: "💻" },
    { id: 4, title: "Next-Gen Innovation", icon: "🚀" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative background elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-128 h-128 bg-gradient-to-br from-pink-900/20 to-rose-900/20 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMmYzNzQ0Ii8+PHBhdGggZD0iTTAgMzBsMzAgMzAgMzAtMzBIMHoiIGZpbGw9IiMzNzQxNTFhYSIvPjwvc3ZnPg==')] opacity-20" />
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Top Label */}
        <motion.p 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center sm:text-left text-sm tracking-widest uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
        >
          {test.article_1.title}
        </motion.p>

        {/* Main Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Heading */}
          <div>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            >
              {test.article_1.heading}
            </motion.h1>
          </div>

          {/* Paragraph Content */}
          <div className="space-y-8">
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed"
            >
              {test.article_1.para1}
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed"
            >
              {test.article_1.para2}
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
              >
                <span>Explore Our Work</span>
                <span className="text-xl">→</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Specialties Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pt-16 border-t border-slate-800/50"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-center sm:text-left text-2xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
          >
            Our Specialties
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-slate-900/50 border border-slate-800 rounded-2xl text-center overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-full blur-2xl transition-all duration-700 group-hover:scale-125" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-800/50 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    {item.title}
                  </h3>
                  <div className="h-1 w-16 mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-4" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-950/30 to-slate-950 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroBanner;
