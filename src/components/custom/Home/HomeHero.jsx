'use client';

import { motion } from "framer-motion";
import next from "next/image";
import Link from "next/link";

export default function App() {
  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
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
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative background elements */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-indigo-900/30 to-purple-900/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-gradient-to-br from-pink-900/20 to-rose-900/20 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10 text-center md:text-left"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-4 py-1.5 rounded-full bg-indigo-900/30 border border-indigo-800/50 text-indigo-300 font-medium text-sm">
              Full Stack Developer
            </span>
          </motion.div>

          <div>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 block">
                Building Digital
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 block mt-2">
                Experiences That Matter
              </span>
            </motion.h1>
          </div>

          <motion.p 
            variants={itemVariants}
            className="text-slate-300 text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            I craft elegant solutions to complex problems. Specializing in React, TypeScript, and modern web architectures to deliver exceptional user experiences and robust applications.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
            >
              <Link href='/Work' >View My Work</Link>
              
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-slate-800/50 border border-slate-700 text-white px-8 py-4 rounded-xl font-bold hover:border-indigo-700 transition-all duration-300"
            >
              <Link href='/Contact' >Contact Me</Link>
            </motion.button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-6 pt-4 border-t border-slate-800/50"
          >
            {[
              { label: "React", value: "Expert" },
              { label: "TypeScript", value: "Advanced" },
              { label: "Node.js", value: "Proficient" },
              { label: "Three.js", value: "Specialized" }
            ].map((skill, index) => (
              <div key={index} className="text-center">
                <div className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  {skill.label}
                </div>
                <div className="text-sm text-slate-400">{skill.value}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Code Visualization */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl blur-2xl opacity-20" />
            
            {/* Code Container */}
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-slate-400">developer@portfolio</div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <div className="space-y-2">
                  <div className="text-indigo-400">&lt;<span className="text-pink-400">section</span> <span className="text-amber-400">className</span>=<span className="text-green-400">"hero"</span>&gt;</div>
                  <div className="pl-4 text-slate-400">  &lt;<span className="text-pink-400">div</span> <span className="text-amber-400">className</span>=<span className="text-green-400">"content"</span>&gt;</div>
                  <div className="pl-8 text-slate-300">    <span className="text-cyan-400">&lt;h1&gt;</span>
                      <span className="text-rose-400">Hello, I'm Alex</span>
                      <span className="text-cyan-400">&lt;/h1&gt;</span>
                    </div>
                  <div className="pl-8 text-slate-300">    <span className="text-cyan-400">&lt;p&gt;</span>
                      <span className="text-amber-300">Building exceptional digital experiences</span>
                      <span className="text-cyan-400">&lt;/p&gt;</span>
                    </div>
                  <div className="pl-4 text-slate-400">  &lt;/<span className="text-pink-400">div</span>&gt;</div>
                  <div className="text-indigo-400">&lt;/<span className="text-pink-400">section</span>&gt;</div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-800 text-emerald-400">
                    <span className="animate-pulse">█</span> npm run deploy
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-900/50 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-900/50 to-transparent rounded-tr-full" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-indigo-600/20 rounded-full blur-xl animate-blob" />
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-purple-600/20 rounded-full blur-xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 -right-10 w-12 h-12 bg-pink-500/20 rounded-full blur-xl animate-blob animation-delay-4000" />
          </div>
        </motion.div>
      </div>

      {/* Floating action button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 shadow-2xl shadow-indigo-500/30 cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative text-white text-2xl font-bold">↓</div>
          <span className="sr-only">Scroll Down</span>
        </motion.button>
      </motion.div>

      {/* Animated gradient orbs */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </motion.section>
  );
}
