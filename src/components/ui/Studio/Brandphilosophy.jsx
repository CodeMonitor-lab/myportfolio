import React from "react";
import { motion } from "framer-motion";
import philosophy from "@/json/studio/philosophy.json";

const Brandphilosophy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="
      py-20 px-4 sm:px-6 lg:px-8
      bg-slate-100 dark:bg-slate-950
      transition-colors duration-300
    ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="
            text-3xl md:text-4xl font-bold mb-6
            bg-clip-text text-transparent
            bg-gradient-to-r from-indigo-500 to-purple-500
          ">
            Our Brand Philosophy
          </h2>

          <p className="text-slate-700 dark:text-slate-400 transition-colors">
            We believe exceptional brands live at the intersection of strategic
            thinking, visual craftsmanship, and technical execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophy.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="
                group relative overflow-hidden
                bg-white dark:bg-slate-900/60
                border border-slate-200 dark:border-slate-800
                rounded-2xl p-8 text-center
                shadow-sm dark:shadow-none
                transition-all duration-300
              "
            >
              {/* Glow Background */}
              <div className="
                absolute -top-16 -right-16 w-48 h-48
                bg-gradient-to-br 
                from-indigo-200/40 to-purple-200/40
                dark:from-indigo-900/20 dark:to-purple-900/20
                rounded-full blur-3xl
                transition-all duration-700
                group-hover:scale-125
              " />

              <div className="relative z-10">
                {/* Icon Box */}
                <div className="
                  w-16 h-16 mx-auto mb-6 rounded-xl
                  bg-gradient-to-br 
                  from-indigo-100 to-purple-100
                  dark:from-indigo-900/50 dark:to-purple-900/50
                  border border-indigo-200 dark:border-indigo-800/50
                  flex items-center justify-center
                  text-3xl
                ">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="
                  text-xl font-bold mb-3
                  bg-clip-text text-transparent
                  bg-gradient-to-r from-indigo-500 to-purple-500
                ">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-400 transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-br 
                from-transparent 
                via-transparent 
                to-indigo-500/5
                dark:to-slate-950/40
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              " />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Brandphilosophy;
