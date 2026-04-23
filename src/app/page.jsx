"use client";

import { Dock } from "lucide-react";
import { motion } from "framer-motion";
import { TerminalPreview, TypingWord } from "@/components/ui";
import PageTransition from "@/components/common/PageTransition";


export default function About() {
  return (
    <PageTransition>
    <main className="min-w-full min-h-screen bg-black text-cyan-400 font-mono overflow-hidden relative snap-start shrink-0">
      {/* Glow Background */}
      <div className="absolute inset-0 blur-3xl opacity-70 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.18),transparent_70%)]" />

      {/* Hero Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
      >
        <header className="flex flex-col items-center">
          {/* Typing Name */}
          <TypingWord />

          <h2 className="text-xl md:text-2xl text-cyan-300 mb-6 mt-4">
            Full Stack Developer • Arch Linux Enthusiast
          </h2>

          <p className="max-w-2xl text-cyan-200/70 mb-8 leading-relaxed">
            Building futuristic web applications with MERN, Next.js and Tailwind.
            Focused on performance, clean UI and hacker-style experiences.
          </p>
        </header>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://www.codemonitor.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-cyan-400 rounded-lg 
            hover:bg-cyan-400 hover:text-black transition-all duration-300 
            shadow-[0_0_10px_#00ffff] flex items-center gap-2"
          >
            <Dock size={18} />
           Projects
          </a>

          <button
            className="px-6 py-2 border border-cyan-400/40 rounded-lg 
            hover:border-cyan-400 hover:shadow-[0_0_8px_#00ffff] transition-all duration-300"
          >
            Playground
          </button>
        </div>

        {/* Terminal Preview */}
        <div className="mt-10 w-full flex justify-center">
          <TerminalPreview />
        </div>
      </motion.section>
    </main>
    </PageTransition>
  );
}
