import React from "react";
import { motion } from "framer-motion";
import posts from '@/json/blog/blog-posts.json'


const BLogPosts = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3
          }
        }
      };
      const itemVariants = {
        hidden: { y: 30, opacity: 0 },
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
    <div>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-500"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-slate-400 mb-4">
                  <span>{post.date}</span>
                  <span>• {post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  {post.title}
                </h2>

                <p className="text-slate-400 mb-5 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-0.5 rounded-full text-xs bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-indigo-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center text-sm font-medium">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-sm text-slate-300">
                      {post.author}
                    </span>
                  </div>
                  <motion.a
                    href="#"
                    className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Read Article →
                  </motion.a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-full blur-3xl transition-all duration-700 group-hover:scale-125" />
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-pink-900/20 to-rose-900/20 rounded-full blur-2xl" />
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default BLogPosts;
