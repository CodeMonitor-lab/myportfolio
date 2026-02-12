'use client';

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    setStatus({ type: "", message: "" });

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields."
      });
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address."
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate successful submission
    setStatus({
      type: "success",
      message: "Message sent successfully! I'll get back to you soon."
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    
    // Trigger animation
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.3 }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear status when user starts typing again
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  useEffect(() => {
    if (status.type === "success") {
      const timer = setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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
          <span className="text-indigo-300 font-medium text-sm">Let's connect</span>
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Get In Touch
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'm always open to connecting with fellow developers and exploring new challenges.
        </p>
      </motion.section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.h2 
                variants={itemVariants}
                className="text-2xl font-bold flex items-center gap-3"
              >
                <span className="w-1.5 h-8 bg-indigo-500 rounded-full" />
                Contact Details
              </motion.h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "✉️",
                    title: "Email",
                    content: "developer@example.com",
                    link: "mailto:developer@example.com"
                  },
                  {
                    icon: "💡",
                    title: "Availability",
                    content: "Open to freelance projects and full-time opportunities"
                  },
                  {
                    icon: "🕒",
                    title: "Response Time",
                    content: "Usually within 24-48 hours"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-indigo-800/50 transition-colors"
                  >
                    <div className="text-2xl mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-slate-400">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <motion.h2 
                variants={itemVariants}
                className="text-2xl font-bold flex items-center gap-3"
              >
                <span className="w-1.5 h-8 bg-purple-500 rounded-full" />
                Professional Links
              </motion.h2>
              
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                {[
                  { platform: "GitHub", url: "#", icon: "🐱" },
                  { platform: "LinkedIn", url: "#", icon: "💼" },
                  { platform: "Twitter", url: "#", icon: "🐦" },
                  { platform: "Portfolio", url: "#", icon: "🎨" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="group flex items-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg hover:border-indigo-700 transition-all"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="font-medium group-hover:text-indigo-400 transition-colors">
                      {social.platform}
                    </span>
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3"
            >
              <span className="w-1.5 h-8 bg-pink-500 rounded-full" />
              Send a Message
            </motion.h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </motion.div>
              
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status.type === "success" 
                      ? "bg-green-900/30 border border-green-800/50 text-green-300" 
                      : "bg-rose-900/30 border border-rose-800/50 text-rose-300"
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
              
              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={controls}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 rounded-xl font-medium text-lg transition-all ${
                    isSubmitting
                      ? "bg-slate-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 border-2 border-indigo-300 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.div>
            </form>
            
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-slate-800/50 text-center text-sm text-slate-500"
            >
              <p>🔒 Your information is secure and will never be shared with third parties.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
      >
        <div className="relative p-8 md:p-12 rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-800/20" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Prefer a quick chat?
            </h2>
            <p className="text-slate-400 mb-6">
              Sometimes a conversation is better than a form. Feel free to reach out directly on any of my social platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["GitHub", "LinkedIn", "Twitter", "Discord"].map((platform, index) => (
                <motion.button
                  key={platform}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="px-5 py-2.5 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-indigo-700 transition-all font-medium flex items-center gap-2"
                >
                  {platform === "GitHub" && "🐱"}
                  {platform === "LinkedIn" && "💼"}
                  {platform === "Twitter" && "🐦"}
                  {platform === "Discord" && "🎮"}
                  {platform}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50 max-w-7xl mx-auto text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Developer Portfolio. Crafted with code and creativity.</p>
      </footer>
    </div>
  );
}
