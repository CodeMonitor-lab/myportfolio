import React from "react";
import { motion } from "framer-motion";
import posts from '@/json/blog/blog-posts.json'


const RecentBlogPost = () => {
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
    // 

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
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Recently Published
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Explore my latest technical articles and reflections on software
            development
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {[...posts].slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="group relative p-6 bg-slate-900/50 border border-slate-800 rounded-xl transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex justify-between text-sm text-slate-400 mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 rounded-full text-xs bg-slate-800/50 border border-slate-700 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href="#"
                    className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    Continue Reading →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default RecentBlogPost;
