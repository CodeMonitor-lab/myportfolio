import React from 'react'
import process from "@/json/studio/process.json";
import { motion } from 'framer-motion';

const BrandProcess = () => {
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
                    Our Brand Process
                  </h2>
                  <p className="text-slate-400">
                    A collaborative journey from strategic foundation to technical implementation
                  </p>
                </div>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-700/30 to-transparent -translate-x-1/2" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {process.map((step, index) => (
                      <motion.div
                        key={step.step}
                        variants={itemVariants}
                        className={`relative flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
                      >
                        {/* Timeline dot */}
                        <div className="absolute -left-3 md:-left-4 top-0 w-7 h-7 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-sm font-bold text-white z-10">
                          {step.step}
                        </div>
                        
                        <div className={`w-full ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-indigo-800/50 transition-colors">
                            <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                              {step.title}
                            </h3>
                            <p className="text-slate-400">{step.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
    </main>
  )
}

export default BrandProcess