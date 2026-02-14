"use client";

import React from "react";
import { motion } from "framer-motion";
import {Facebook,Github,Instagram,Twitter,Linkedin,Panda} from 'lucide-react'

const ProfessionalLinks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 18, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 14, stiffness: 90 },
    },
  };

  const links = [
      { name: "Twitter", url: "https://twitter.com/yourusername",icon:<Twitter /> },
      { name: "Facebook", url: "https://twitter.com/yourusername",icon:<Facebook /> },
      { name: "Instagram", url: "https://twitter.com/yourusername",icon:<Instagram /> },
      { name: "Discord", url: "https://twitter.com/yourusername",icon:<Panda /> },
      { name: "GitHub", url: "https://github.com/yourusername",icon:<Github /> },
      { name: "LinkedIn", url: "https://linkedin.com/in/yourusername",icon:<Linkedin /> },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold mb-8 text-center"
        >
          Connect With Me
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {links.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-2xl 
                         hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 
                         transition-all duration-300 text-sm font-medium"
            >
              {platform.name}
            </motion.a>
          ))}
          
        </div>
      </motion.div>
    </section>
  );
};

export default ProfessionalLinks;
