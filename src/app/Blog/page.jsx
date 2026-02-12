'use client';

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function App() {
  // Blog posts data
  const posts = [
    {
      id: 1,
      title: "The Art of Clean Code Architecture",
      excerpt: "Exploring principles of maintainable codebases, modular design patterns, and how thoughtful architecture impacts long-term project success.",
      date: "February 10, 2026",
      readTime: "8 min read",
      tags: ["Engineering", "Best Practices", "Architecture"],
      image: "https://placehold.co/600x400/1e293b/64748b?text=Clean+Code",
      author: "Alex Rivera"
    },
    {
      id: 2,
      title: "Design Systems: Bridging Design and Development",
      excerpt: "How to create developer-friendly design systems that scale across products while maintaining visual consistency and technical flexibility.",
      date: "January 28, 2026",
      readTime: "12 min read",
      tags: ["Design Systems", "UI/UX", "Collaboration"],
      image: "https://placehold.co/600x400/1e293b/64748b?text=Design+Systems",
      author: "Maya Chen"
    },
    {
      id: 3,
      title: "Performance Optimization in React Applications",
      excerpt: "Advanced techniques for reducing bundle size, optimizing renders, and creating buttery-smooth user experiences in complex React applications.",
      date: "January 15, 2026",
      readTime: "15 min read",
      tags: ["React", "Performance", "JavaScript"],
      image: "https://placehold.co/600x400/1e293b/64748b?text=React+Performance",
      author: "Jordan Lee"
    },
    {
      id: 4,
      title: "Building Accessible Digital Experiences",
      excerpt: "Practical approaches to creating inclusive interfaces that work for everyone, with real-world examples and testing methodologies.",
      date: "December 5, 2025",
      readTime: "10 min read",
      tags: ["Accessibility", "Inclusive Design", "WCAG"],
      image: "https://placehold.co/600x400/1e293b/64748b?text=Accessibility",
      author: "Sam Taylor"
    },
    {
      id: 5,
      title: "The Future of Web Animation",
      excerpt: "Exploring the evolution of web animations from CSS transitions to advanced WebGL experiences and what's next for interactive storytelling.",
      date: "November 22, 2025",
      readTime: "9 min read",
      tags: ["Animation", "WebGL", "User Experience"],
      image: "https://placehold.co/600x400/1e293b/64748b?text=Web+Animation",
      author: "Riley Kim"
    },
    {
      id: 6,
      title: "Developer Wellness: Avoiding Burnout in Tech",
      excerpt: "Strategies for maintaining mental health, setting boundaries, and building sustainable workflows in high-pressure development environments.",
      date: "November 8, 2025",
      readTime: "7 min read",
      tags: ["Career", "Wellness", "Productivity"],
      image: "https://placehold.co/600x400/1e293b/64748b?text=Developer+Wellness",
      author: "Casey Morgan"
    }
  ];

  // Newsletter state
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const controls = useAnimation();

  // Categories for filtering
  const categories = ["All", "Engineering", "Design", "Career", "Technology", "Best Practices"];

  // Animation variants
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNewsletterStatus({ type: "", message: "" });

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Basic validation
    if (!email.trim()) {
      setNewsletterStatus({
        type: "error",
        message: "Please enter a valid email address."
      });
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterStatus({
        type: "error",
        message: "Please enter a valid email address."
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate successful submission
    setNewsletterStatus({
      type: "success",
      message: "Thanks for subscribing! You'll receive our next article directly in your inbox."
    });
    
    // Reset form
    setEmail("");
    setIsSubmitting(false);
    
    // Trigger animation
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.3 }
    });
  };

  useEffect(() => {
    if (newsletterStatus.type === "success") {
      const timer = setTimeout(() => {
        setNewsletterStatus({ type: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [newsletterStatus]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-200 font-sans">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", bounce: 0.3 }}
          className="inline-block px-4 py-1.5 rounded-full bg-indigo-900/30 border border-indigo-800/50 mb-8"
        >
          <span className="text-indigo-300 font-medium text-sm">Insights & Perspectives</span>
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Engineering Journal
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Sharing technical insights, design philosophies, and career reflections from years of building digital products.
        </p>
      </motion.section>

      {/* Categories Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ y: -2 }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                category === "All"
                  ? "bg-indigo-900/50 border border-indigo-700 text-indigo-300"
                  : "bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-indigo-700/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
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
                    <span className="text-sm text-slate-300">{post.author}</span>
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

      {/* Featured Article Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800/50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-800/50 mb-4 text-purple-300 font-medium text-sm"
            >
              Featured Article
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Mastering the Developer-Designer Workflow
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              A comprehensive guide to creating seamless collaboration between design and engineering teams, with practical frameworks and tooling recommendations.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMmYzNzQ0Ii8+PHBhdGggZD0iTTAgMzBsMzAgMzAgMzAtMzBIMHoiIGZpbGw9IiMzNzQxNTFhYSIvPjwvc3ZnPg==')] opacity-20" />
            
            <div className="relative p-8 md:p-12">
              <div className="flex flex-wrap gap-3 mb-6">
                {["Collaboration", "Design Systems", "Workflow", "Figma", "Developer Handoff"].map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm bg-slate-800/70 border border-slate-700 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="prose prose-slate max-w-none text-slate-300 space-y-6">
                <p>
                  In today's digital product landscape, the boundary between design and development continues to blur. Yet many teams still struggle with inefficient handoff processes, misaligned expectations, and tooling mismatches that slow down delivery and compromise quality.
                </p>
                <p>
                  Through years of experience building products with cross-functional teams, I've developed a framework that bridges this gap. The key lies not in finding the perfect tool, but in establishing shared language, creating living documentation, and building feedback loops that catch issues early.
                </p>
                <p>
                  This article explores practical strategies including component-driven workflows, design token systems, automated testing for UI consistency, and collaborative review processes that have transformed how my teams ship products.
                </p>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-slate-800/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center font-bold text-lg">
                    AR
                  </div>
                  <div>
                    <div className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      Alex Rivera
                    </div>
                    <div className="text-sm text-slate-400">Lead Engineer & Design Technologist</div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl font-medium text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
                >
                  Read Full Article
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <div className="relative p-10 md:p-14 rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-800/20" />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Join My Developer Community
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Get exclusive technical articles, early access to new resources, and thoughtful insights delivered to your inbox every two weeks.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`absolute right-1 top-1 bottom-1 px-6 rounded-lg font-medium transition-all ${
                    isSubmitting
                      ? "bg-slate-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="w-5 h-5 border-2 border-indigo-300 border-t-transparent rounded-full animate-spin" />
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
              
              {newsletterStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-3 rounded-lg text-sm ${
                    newsletterStatus.type === "success" 
                      ? "bg-green-900/30 border border-green-800/50 text-green-300" 
                      : "bg-rose-900/30 border border-rose-800/50 text-rose-300"
                  }`}
                >
                  {newsletterStatus.message}
                </motion.div>
              )}
              
              <p className="mt-3 text-xs text-slate-500">
                No spam ever. Unsubscribe anytime. I respect your privacy and follow GDPR guidelines.
              </p>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Recent Articles Preview */}
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
            Explore my latest technical articles and reflections on software development
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

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50 max-w-7xl mx-auto text-center text-slate-500">
        <p>© {new Date().getFullYear()} Engineering Journal. Sharing knowledge to elevate our craft.</p>
      </footer>
    </div>
  );
}
