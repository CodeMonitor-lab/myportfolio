"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import posts from "@/json/blog/blog-posts.json";

const BlogPosts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 120,
      },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {posts.map((post) => (
          <motion.article
            key={post.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="
              group relative rounded-3xl overflow-hidden
              bg-white/70 dark:bg-slate-900/60
              backdrop-blur-xl
              border border-gray-200 dark:border-slate-800
              shadow-sm hover:shadow-2xl
              transition-all duration-500
            "
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-slate-400 mb-4">
                <span>{post.date}</span>
                <span>• {post.readTime}</span>
              </div>

              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                {post.title}
              </h2>

              <p className="text-gray-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="
                      px-3 py-1 text-xs rounded-full
                      bg-gray-100 dark:bg-slate-800
                      border border-gray-200 dark:border-slate-700
                      text-gray-600 dark:text-slate-300
                      transition-colors
                      group-hover:border-indigo-500/40
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold shadow-md">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-700 dark:text-slate-300">
                    {post.author}
                  </span>
                </div>

                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-indigo-500 hover:text-indigo-400 font-medium text-sm transition-colors"
                  >
                    Read →
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default BlogPosts;
