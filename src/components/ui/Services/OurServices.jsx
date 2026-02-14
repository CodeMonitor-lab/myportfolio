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
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
          >
            <div className="text-3xl mb-4">{service.icon}</div>
            <h3 className="font-bold text-xl mb-2 text-indigo-400">
              {service.title}
            </h3>
            <p className="text-slate-400 mb-6">{service.description}</p>

            <ul className="space-y-2 mb-6">
              {service.features.map((feature, i) => (
                <li key={i} className="text-slate-300 text-sm">
                  ✓ {feature}
                </li>
              ))}
            </ul>

            <div className="text-lg font-semibold text-purple-400">
              {service.startingAt}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
