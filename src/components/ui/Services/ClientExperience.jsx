'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import testimonials from "@/json/client-experience.json";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Client Experiences
        </h2>
        <p className="text-slate-400">
          What clients say about working together on technical projects
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-lg transition-all duration-300 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={testimonial.image}
                alt={`${testimonial.author} profile photo`}
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-indigo-400">
                  {testimonial.author}
                </h4>
                <p className="text-slate-400 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              “{testimonial.quote}”
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
