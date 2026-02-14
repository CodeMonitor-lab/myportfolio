'use client';

import { motion } from "framer-motion";

export default function OurSpecialties({ containerVariants, itemVariants }) {
  const specialties = [
    { id: 1, title: "Brand Strategy", icon: "🎯" },
    { id: 2, title: "Identity Systems", icon: "✨" },
    { id: 3, title: "Digital Experiences", icon: "💻" },
    { id: 4, title: "Next-Gen Innovation", icon: "🚀" }
  ];

  return (
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
        {specialties.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group relative p-8 bg-slate-900/50 border border-slate-800 rounded-2xl text-center overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-800/50 flex items-center justify-center text-3xl">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                {item.title}
              </h3>
              <div className="h-1 w-16 mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-4" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
