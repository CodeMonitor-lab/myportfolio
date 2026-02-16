
import React from 'react'
import projects from "@/json/studio/projects.json";
import { motion } from 'framer-motion';

const BrandPortfolio = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section className="
      py-20 px-4 sm:px-6 lg:px-8
      bg-slate-100 dark:bg-slate-950
      transition-colors duration-300
    ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="
              text-3xl md:text-4xl font-bold mb-6
              bg-clip-text text-transparent
              bg-gradient-to-r from-indigo-500 to-purple-500
            "
          >
            Brand Portfolio
          </motion.h2>

          <motion.p
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-700 dark:text-slate-400 transition-colors"
          >
            Selected brand identity projects showcasing our strategic and visual approach
          </motion.p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="
                group relative overflow-hidden
                bg-white dark:bg-slate-900/60
                border border-slate-200 dark:border-slate-800
                rounded-2xl
                shadow-sm dark:shadow-none
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/60 via-black/30 to-transparent
                  dark:from-slate-950/90
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                " />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="
                      text-xl font-bold
                      bg-clip-text text-transparent
                      bg-gradient-to-r from-indigo-500 to-purple-500
                    ">
                      {project.name}
                    </h3>

                    <span className="
                      text-sm font-medium
                      text-indigo-600 dark:text-indigo-400
                    ">
                      {project.industry}
                    </span>
                  </div>

                  <span className="
                    px-3 py-1 rounded-full text-xs
                    bg-indigo-100 text-indigo-600
                    dark:bg-slate-800 dark:text-slate-400
                    border border-indigo-200
                    dark:border-slate-700
                  ">
                    Case Study
                  </span>
                </div>

                <p className="text-slate-700 dark:text-slate-400 transition-colors">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default BrandPortfolio
