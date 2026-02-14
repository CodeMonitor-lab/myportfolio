'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function LeftContent() {
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
        I craft elegant solutions to complex problems. Specializing in React,
        TypeScript, and modern web architectures to deliver exceptional user
        experiences and robust applications.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
      >
        <Link
          href="/Work"
          className="group flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
        >
          View My Work
          <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        <Link
          href="/Contact"
          className="flex items-center justify-center gap-3 bg-slate-800/50 border border-slate-700 text-white px-8 py-4 rounded-xl font-bold hover:border-indigo-700 transition-all duration-300"
        >
          Contact Me
        </Link>
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
  );
}
