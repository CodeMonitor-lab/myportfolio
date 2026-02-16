'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import testimonials from "@/json/testimonials.json";

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 90
      }
    }
  };

  return (
    <section className="
      relative
      bg-gradient-to-b
      from-slate-50 via-white to-slate-100
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
      py-28 px-4 sm:px-6 lg:px-8
      overflow-hidden
      transition-colors duration-300
    ">

      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-900/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-900/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="
            inline-block px-4 py-1.5 rounded-full
            bg-indigo-500/10 border border-indigo-500/20
            mb-6
          ">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
              Trusted by Industry Leaders
            </span>
          </div>

          <h2 className="
            text-4xl md:text-5xl font-extrabold mb-6
            bg-clip-text text-transparent bg-gradient-to-r
            from-indigo-500 via-purple-500 to-pink-500
            dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
          ">
            What Clients Say
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Real feedback from teams and organizations I've partnered with to
            build scalable, high-performance systems.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="
                group relative backdrop-blur-xl
                bg-white border border-slate-200
                dark:bg-white/5 dark:border-white/10
                rounded-3xl p-8
                transition-all duration-500
                hover:border-indigo-500/40
                hover:shadow-xl
              "
            >
              {/* Quote mark */}
              <div className="
                absolute top-6 right-8 text-6xl
                text-indigo-500/10 dark:text-indigo-500/10
                font-serif select-none
              ">
                “
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-indigo-500/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
                {testimonial.quote}
              </blockquote>

              {/* Hover glow */}
              <div className="
                absolute inset-0 rounded-3xl
                bg-gradient-to-br
                from-indigo-600/0 via-indigo-600/0 to-indigo-600/10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              " />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
