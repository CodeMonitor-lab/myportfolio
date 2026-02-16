import React from "react";
import { motion } from "framer-motion";
import testimonials from "@/json/studio/testimonials.json";

const BrandPerspective = () => {
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
    hidden: { y: 30, opacity: 0 },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-indigo-500 to-purple-500">
            Client Perspectives
          </h2>

          <p className="text-slate-700 dark:text-slate-400 transition-colors">
            What clients say about our brand strategy and implementation
            approach
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="
                relative 
                bg-white dark:bg-slate-900/60
                border border-slate-200 dark:border-slate-800
                rounded-2xl p-8
                shadow-sm dark:shadow-none
                transition-all duration-300
              "
            >
              {/* Quote mark */}
              <div className="
                absolute -top-4 -right-4 
                text-8xl 
                text-indigo-200 dark:text-indigo-900/20
                font-serif select-none
              ">
                “
              </div>

              <div className="relative z-10">
                <blockquote className="
                  text-slate-800 dark:text-slate-300
                  leading-relaxed mb-6
                  border-l-2 border-indigo-500/50
                  pl-5 py-1
                ">
                  {testimonial.quote}
                </blockquote>

                <div>
                  <h4 className="
                    font-bold 
                    bg-clip-text text-transparent
                    bg-gradient-to-r from-indigo-500 to-purple-500
                  ">
                    {testimonial.author}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BrandPerspective;
