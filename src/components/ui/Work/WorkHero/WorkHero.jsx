"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import projects from "@/json/projects-slider.json";

const WorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!projects || projects.length === 0) return null;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const project = projects[currentIndex];

  return (
    <section className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white py-20 px-4 md:px-8 overflow-hidden relative transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-300/30 dark:bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">
            Creative Work
          </h2>

          <h3 className="text-4xl md:text-6xl font-extrabold mb-6">
            Selected Works
          </h3>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            A collection of projects demonstrating expertise in full-stack
            development, UI/UX design, and modern web technologies.
          </p>
        </div>

        {/* Slider */}
        <div className="relative w-full h-[600px] md:h-[700px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 260, damping: 25 },
                opacity: { duration: 0.3 },
              }}
              className="absolute w-full h-full flex flex-col md:flex-row gap-8 items-center justify-center"
            >
              {/* Image */}
              <div className="w-full md:w-3/5 h-full relative group">
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 dark:from-slate-950 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/5 flex flex-col justify-center space-y-8 p-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 text-xs font-semibold mb-4 border border-blue-200 dark:border-blue-500/20">
                    {project.category}
                  </span>

                  <h4 className="text-3xl md:text-5xl font-bold mb-4">
                    {project.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-950 rounded-full font-bold hover:opacity-90 transition"
                  >
                    View Live <ExternalLink size={18} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-900 border border-slate-200 dark:bg-slate-800 dark:text-white dark:border-slate-700 rounded-full font-bold hover:opacity-90 transition"
                  >
                    Source <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute bottom-0 left-0 w-full flex items-center justify-between mt-10">
            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-8 bg-blue-500"
                      : "w-2 bg-slate-300 dark:bg-slate-700"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:scale-95 transition"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:scale-95 transition"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkSection;
