import React from "react";
import { motion } from "framer-motion";
import services from "@/json/studio/services.json";

const BrandServices = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section
      className="
        py-20 px-4 sm:px-6 lg:px-8
        bg-slate-50 border-y border-slate-200
        dark:bg-slate-900/50 dark:border-slate-800/50
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6
              bg-clip-text text-transparent
              bg-gradient-to-r from-indigo-500 to-purple-600
              dark:from-indigo-400 dark:to-purple-400"
          >
            Brand Services
          </motion.h2>

          <motion.p
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400"
          >
            Comprehensive branding solutions designed for modern digital
            products and platforms
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="
                group relative
                bg-white border border-slate-200
                dark:bg-slate-900 dark:border-slate-800
                rounded-2xl p-8 overflow-hidden
                shadow-sm hover:shadow-lg
                transition-all duration-300
              "
            >
              {/* Soft glow */}
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-rose-500/10 dark:from-pink-900/20 dark:to-rose-900/20 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="
                  w-12 h-12 mb-5 rounded-lg
                  bg-gradient-to-br from-indigo-100 to-purple-100
                  dark:from-indigo-900/50 dark:to-purple-900/50
                  flex items-center justify-center
                  font-bold text-lg
                  text-indigo-600 dark:text-indigo-300
                ">
                  {index + 1}
                </div>

                <h3 className="
                  text-xl font-bold mb-3
                  bg-clip-text text-transparent
                  bg-gradient-to-r from-indigo-600 to-purple-600
                  dark:from-indigo-400 dark:to-purple-400
                ">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-5">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.deliverables.map((deliverable, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                    >
                      <span className="mt-1 text-indigo-500 dark:text-indigo-400">
                        ✓
                      </span>
                      <span className="text-sm">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandServices;
