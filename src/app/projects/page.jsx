"use client";

import Link from "next/link";
import projects from "@/data/projects.json";
import { Terminal, FolderGit2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white font-mono overflow-hidden relative px-4 sm:px-6 py-16 sm:py-20">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" />

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15),rgba(0,0,0,0.15)_1px,transparent_1px,transparent_3px)]" />

      <section className="relative z-10">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-8 border border-cyan-500/30 bg-zinc-900/70 rounded-xl px-4 py-3 shadow-lg shadow-cyan-500/10"
        >
          <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
          <p className="text-green-400 text-xs sm:text-sm break-all">
            root@portfolio:~$ ls ./projects
          </p>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-8 sm:mb-10 text-center drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
        >
          [ PROJECT FILES ]
        </motion.h1>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block overflow-hidden p-5 sm:p-6 rounded-2xl bg-zinc-900/80 border border-cyan-500/20 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)] transition-all duration-500"
              >
                {/* Default View */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-between mb-4"
                >
                  <FolderGit2 className="w-6 h-6 text-cyan-400 group-hover:text-green-400" />
                  <ShieldCheck className="w-5 h-5 text-green-400 opacity-70" />
                </motion.div>

                <h2 className="text-lg sm:text-xl text-white mt-4 group-hover:text-green-400 transition">
                  {project.title}
                </h2>

                <p className="text-zinc-400 text-xs sm:text-sm mt-2">
                  status: deployed_{i + 1}
                </p>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-black/95 rounded-2xl p-4 opacity-0 group-hover:opacity-100 flex flex-col justify-between"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-32 sm:h-36 object-cover rounded-lg border border-cyan-400/20"
                  />

                  <div className="mt-3">
                    <p className="text-green-400 text-sm">Opening file...</p>
                    <p className="text-zinc-300 text-xs mt-2 line-clamp-3">
                      {project.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}