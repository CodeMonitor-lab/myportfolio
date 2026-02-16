"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import posts from "@/json/blog/blog-posts.json";

const RecentBlogPost = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 90,
      },
    },
  };

  const recentPosts = [...posts].slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Recently Published
        </h2>
        <p className="text-gray-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
          Explore my latest technical articles and reflections on software
          development.
        </p>
      </div>

      {/* Posts */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8 max-w-4xl mx-auto"
      >
        {recentPosts.map((post) => (
          <motion.article
            key={post.id}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="
              group relative p-6 rounded-2xl
              bg-white dark:bg-slate-900/60
              border border-gray-200 dark:border-slate-800
              shadow-sm hover:shadow-xl
              transition-all duration-500
            "
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="md:w-1/3">
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:w-2/3">
                <div className="flex justify-between text-sm text-gray-500 dark:text-slate-400 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-slate-400 mb-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="
                        px-3 py-1 rounded-full text-xs
                        bg-gray-100 dark:bg-slate-800
                        border border-gray-200 dark:border-slate-700
                        text-gray-600 dark:text-slate-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/blog/${post.slug}`} // Make sure slug exists in JSON
                  className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-medium hover:gap-2 transition-all"
                >
                  Continue Reading →
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default RecentBlogPost;
