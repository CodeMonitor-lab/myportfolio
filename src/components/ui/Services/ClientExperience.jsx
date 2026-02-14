'use client';

import { motion } from "framer-motion";
import testimonials from "@/json/client-experience.json";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/*  */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Client Experiences
          </h2>
          <p className="text-slate-400">
            What clients say about working together on technical projects
          </p>
        </div>
        {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            whileHover={{ y: -5 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
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
            <p className="text-slate-300">{testimonial.quote}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
