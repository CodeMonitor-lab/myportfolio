'use client';

import { motion } from "framer-motion";
import process from "@/json/my-process.json";

export default function ProcessSection() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7 }
        }
      };
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
     <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
            >
              My Working Process
            </motion.h2>
            <motion.p
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400"
            >
              A transparent, collaborative approach ensuring your vision becomes reality with technical excellence
            </motion.p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-700/30 to-transparent -translate-x-1/2" />
            
            <div className="space-y-12">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-sm font-bold text-white z-10 border-4 border-slate-900">
                    {step.step}
                  </div>
                  
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
                      <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                        {step.title}
                      </h3>
                      <p className="text-slate-400">{step.description}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-2/12 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
        
    </section>
  );
}
