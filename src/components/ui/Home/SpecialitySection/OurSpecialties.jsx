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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        pt-20  
        border-slate-200 dark:border-slate-800/50
      "
    >
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {specialties.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="
              group relative p-8 rounded-2xl text-center overflow-hidden
              bg-white dark:bg-slate-900/50
              border border-slate-200 dark:border-slate-800
              shadow-sm hover:shadow-xl
              dark:hover:shadow-indigo-500/10
              transition-all duration-300
            "
          >
            {/* Glow hover background */}
            <div className="
              absolute inset-0 opacity-0 group-hover:opacity-100
              bg-gradient-to-br from-indigo-500/5 to-purple-500/5
              transition-opacity duration-500
            " />

            <div className="relative z-10">
              {/* Icon */}
              <div className="
                w-16 h-16 mx-auto mb-6 rounded-2xl
                bg-indigo-50 dark:bg-gradient-to-br dark:from-indigo-900/50 dark:to-purple-900/50
                border border-indigo-200 dark:border-indigo-800/50
                flex items-center justify-center text-3xl
              ">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="
                text-xl md:text-2xl font-semibold mb-3
                text-slate-800 dark:text-white
              ">
                {item.title}
              </h3>

              {/* Accent line */}
              <div className="
                h-1 w-16 mx-auto rounded-full mt-4
                bg-gradient-to-r
                from-indigo-500 to-purple-600
              " />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
