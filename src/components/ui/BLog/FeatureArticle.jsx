import React from 'react'
import { motion } from 'framer-motion'

const FeatureArticle = () => {
  return (
    <div>
              <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800/50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-800/50 mb-4 text-purple-300 font-medium text-sm"
            >
              Featured Article
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Mastering the Developer-Designer Workflow
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              A comprehensive guide to creating seamless collaboration between design and engineering teams, with practical frameworks and tooling recommendations.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMmYzNzQ0Ii8+PHBhdGggZD0iTTAgMzBsMzAgMzAgMzAtMzBIMHoiIGZpbGw9IiMzNzQxNTFhYSIvPjwvc3ZnPg==')] opacity-20" />
            
            <div className="relative p-8 md:p-12">
              <div className="flex flex-wrap gap-3 mb-6">
                {["Collaboration", "Design Systems", "Workflow", "Figma", "Developer Handoff"].map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm bg-slate-800/70 border border-slate-700 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="prose prose-slate max-w-none text-slate-300 space-y-6">
                <p>
                  In today's digital product landscape, the boundary between design and development continues to blur. Yet many teams still struggle with inefficient handoff processes, misaligned expectations, and tooling mismatches that slow down delivery and compromise quality.
                </p>
                <p>
                  Through years of experience building products with cross-functional teams, I've developed a framework that bridges this gap. The key lies not in finding the perfect tool, but in establishing shared language, creating living documentation, and building feedback loops that catch issues early.
                </p>
                <p>
                  This article explores practical strategies including component-driven workflows, design token systems, automated testing for UI consistency, and collaborative review processes that have transformed how my teams ship products.
                </p>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-slate-800/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center font-bold text-lg">
                    AR
                  </div>
                  <div>
                    <div className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      Alex Rivera
                    </div>
                    <div className="text-sm text-slate-400">Lead Engineer & Design Technologist</div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl font-medium text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
                >
                  Read Full Article
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default FeatureArticle