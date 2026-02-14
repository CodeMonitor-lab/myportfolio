"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const controls = useAnimation();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please complete all required fields.",
      });
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus({
      type: "success",
      message: "Your message has been sent successfully. I’ll get back to you shortly.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);

    controls.start({
      scale: [1, 1.04, 1],
      transition: { duration: 0.3 },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) setStatus({ type: "", message: "" });
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full max-w-xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl shadow-black/30"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-semibold mb-10 text-center flex items-center justify-center gap-3"
      >
        <span className="w-1.5 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full" />
        Let’s Work Together
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-7">
        {/* Name */}
        <motion.div variants={itemVariants}>
          <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants}>
          <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          />
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants}>
          <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
            Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
          />
        </motion.div>

        {/* Status */}
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            aria-live="polite"
            className={`p-4 rounded-xl text-sm ${
              status.type === "success"
                ? "bg-green-900/30 border border-green-800 text-green-300"
                : "bg-rose-900/30 border border-rose-800 text-rose-300"
            }`}
          >
            {status.message}
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          variants={itemVariants}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          animate={controls}
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3.5 rounded-2xl font-semibold text-lg transition-all duration-300 ${
            isSubmitting
              ? "bg-slate-700 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:brightness-110 shadow-xl shadow-indigo-600/30"
          }`}
        >
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </motion.button>
      </form>

      <motion.p
        variants={itemVariants}
        className="mt-8 text-center text-xs text-slate-500 border-t border-slate-800 pt-6"
      >
        🔒 Your information is secure and will never be shared.
      </motion.p>
    </motion.div>
  );
};

export default ContactForm;
