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
    <main>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Client Perspectives
          </h2>
          <p className="text-slate-400">
            What clients say about our brand strategy and implementation
            approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
            >
              <div className="absolute -top-4 -right-4 text-8xl text-indigo-900/20 font-serif select-none">
                "”
              </div>

              <div className="relative z-10">
                <blockquote className="text-slate-300 leading-relaxed mb-6 border-l-2 border-indigo-700/50 pl-5 py-1">
                  <p className="relative z-10">{testimonial.quote}</p>
                </blockquote>

                <div>
                  <h4 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    {testimonial.author}
                  </h4>
                  <p className="text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default BrandPerspective;
