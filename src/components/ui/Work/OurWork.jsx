
'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import works from "@/json/works.json";

export default function Works() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.12, 0.23, 0.98]
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white 
                        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 
                        text-slate-900 dark:text-slate-200 
                        py-28 px-4 sm:px-6 lg:px-8 overflow-hidden 
                        transition-colors duration-300">

      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] 
                      bg-indigo-300/30 dark:bg-indigo-900/20 
                      blur-3xl rounded-full" />

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] 
                      bg-purple-300/30 dark:bg-purple-900/20 
                      blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {works.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative backdrop-blur-xl 
                         bg-white/70 dark:bg-white/5 
                         border border-slate-200 dark:border-white/10 
                         rounded-3xl overflow-hidden 
                         transition-all duration-500 
                         hover:border-indigo-400/50 
                         dark:hover:border-indigo-500/40 
                         hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 
                                bg-gradient-to-t 
                                from-black/30 
                                dark:from-slate-950/90 
                                to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs 
                                 bg-indigo-100 text-indigo-600 border border-indigo-200
                                 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold 
                               text-slate-900 dark:text-white 
                               mb-2">
                  {work.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 
                              text-sm leading-relaxed mb-6">
                  {work.description}
                </p>

                <div className="flex gap-4 pt-4 
                                border-t border-slate-200 
                                dark:border-white/10">
                  <a
                    href={work.liveUrl}
                    className="text-indigo-600 hover:text-indigo-500 
                               dark:text-indigo-400 dark:hover:text-indigo-300 
                               transition font-medium text-sm"
                  >
                    🌐 Live Demo →
                  </a>

                  <a
                    href={work.codeUrl}
                    className="text-teal-600 hover:text-teal-500 
                               dark:text-teal-400 dark:hover:text-teal-300 
                               transition font-medium text-sm"
                  >
                    💻 Source →
                  </a>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl 
                              bg-gradient-to-br 
                              from-indigo-600/0 via-indigo-600/0 to-indigo-600/10 
                              opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
