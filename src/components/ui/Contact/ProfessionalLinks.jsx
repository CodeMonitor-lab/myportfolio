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
    hidden: { y: 18, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 14, stiffness: 100 },
    },
  };

  const links = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: Github,
      hover: "hover:border-gray-500 hover:shadow-gray-500/20",
      iconColor: "group-hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: Linkedin,
      hover: "hover:border-blue-500 hover:shadow-blue-500/20",
      iconColor: "group-hover:text-blue-400",
    },
    {
      name: "Telegram",
      url: "https://t.me/yourusername",
      icon: Send,
      hover: "hover:border-sky-500 hover:shadow-sky-500/20",
      iconColor: "group-hover:text-sky-400",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: Instagram,
      hover: "hover:border-pink-500 hover:shadow-pink-500/20",
      iconColor: "group-hover:text-pink-400",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: Twitter,
      hover: "hover:border-cyan-500 hover:shadow-cyan-500/20",
      iconColor: "group-hover:text-cyan-400",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/yourusername",
      icon: Facebook,
      hover: "hover:border-blue-600 hover:shadow-blue-600/20",
      iconColor: "group-hover:text-blue-500",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-semibold tracking-tight mb-14 
                     text-slate-900 dark:text-white"
        >
          Professional Links
        </motion.h2>

        {/* Links */}
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
                whileTap={{ scale: 0.96 }}
                aria-label={`Visit my ${platform.name}`}
                className={`group flex items-center gap-3 px-6 py-3
                  rounded-2xl border backdrop-blur-xl
                  transition-all duration-300
                  bg-white/70 border-slate-200 text-slate-700
                  dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-300
                  hover:shadow-lg ${platform.hover}`}
              >
                <Icon
                  size={18}
                  className={`transition-colors duration-300 text-slate-400 ${platform.iconColor}`}
                />

                <span className="text-sm font-medium transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">
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
