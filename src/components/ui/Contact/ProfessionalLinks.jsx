"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Instagram,
  Twitter,
  Linkedin,
  Send,
} from "lucide-react";

const ProfessionalLinks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 16, stiffness: 100 },
    },
  };

  const links = [
    { name: "GitHub", url: "https://github.com/yourusername", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: Linkedin },
    { name: "Teligram", url: "https://facebook.com/yourusername", icon: Send },
    { name: "Instagram", url: "https://instagram.com/yourusername", icon: Instagram },
    { name: "Twitter", url: "https://twitter.com/yourusername", icon: Twitter },
    { name: "Facebook", url: "https://facebook.com/yourusername", icon: Facebook },

  ];

  return (
    <section className="max-w-6xl mx-auto px-6 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12"
        >
          Connect With Me
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {links.map((platform, index) => {
            const Icon = platform.icon;

            return (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 px-6 py-3
                           rounded-2xl border border-slate-800
                           bg-slate-900/60 backdrop-blur-xl
                           transition-all duration-300
                           hover:border-indigo-500
                           hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <Icon
                  size={18}
                  className="text-slate-400 group-hover:text-indigo-400 transition-colors duration-300"
                />

                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                  {platform.name}
                </span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ProfessionalLinks;
