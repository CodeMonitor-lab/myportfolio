'use client';

import { motion } from "framer-motion";
import services from "@/json/services.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 12, stiffness: 100 }
  }
};

export default function ServicesSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/40"
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="font-bold text-xl mb-3 text-indigo-600 dark:text-indigo-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-6 transition-colors">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-slate-700 dark:text-slate-300 text-sm transition-colors"
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 transition-colors">
                {service.startingAt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
