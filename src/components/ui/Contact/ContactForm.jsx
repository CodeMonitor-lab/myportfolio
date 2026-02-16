"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ContactForm = () => {
  const controls = useAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ===============================
     Animation Variants
  =============================== */

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

  /* ===============================
     Handlers
  =============================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Validation
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

    // Simulated API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus({
      type: "success",
      message:
        "Your message has been sent successfully. I’ll get back to you shortly.",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setIsSubmitting(false);

    // Success animation pulse
    controls.start({
      scale: [1, 1.04, 1],
      transition: { duration: 0.3 },
    });
  };

  /* ===============================
     Auto-clear Success Message
  =============================== */

  useEffect(() => {
    if (status.type === "success") {
      const timer = setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  /* ===============================
     UI
  =============================== */

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        w-full max-w-xl mx-auto rounded-3xl p-8
        border shadow-xl transition-all duration-300
        bg-white border-slate-200 shadow-slate-200/60
        dark:bg-slate-900/60 dark:border-slate-800 dark:shadow-black/30
        dark:backdrop-blur-xl
      "
    >
      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="
          text-3xl font-semibold mb-10 text-center
          flex items-center justify-center gap-3
          text-slate-900 dark:text-white
        "
      >
        <span className="w-1.5 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full" />
        Let’s Work Together
      </motion.h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-7">
        {/* Name */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="
              w-full px-4 py-3 rounded-xl outline-none transition-all
              border bg-white border-slate-300 text-slate-900
              focus:ring-2 focus:ring-indigo-500 focus:border-transparent
              dark:bg-slate-800/60 dark:border-slate-700 dark:text-white
            "
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="
              w-full px-4 py-3 rounded-xl outline-none transition-all
              border bg-white border-slate-300 text-slate-900
              focus:ring-2 focus:ring-indigo-500 focus:border-transparent
              dark:bg-slate-800/60 dark:border-slate-700 dark:text-white
            "
          />
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
            Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
            className="
              w-full px-4 py-3 rounded-xl outline-none transition-all resize-none
              border bg-white border-slate-300 text-slate-900
              focus:ring-2 focus:ring-indigo-500 focus:border-transparent
              dark:bg-slate-800/60 dark:border-slate-700 dark:text-white
            "
          />
        </motion.div>

        {/* Status Message */}
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl text-sm border ${
              status.type === "success"
                ? "bg-green-50 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-800 dark:text-green-300"
                : "bg-rose-50 border-rose-200 text-rose-700 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-300"
            }`}
          >
            {status.message}
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          variants={itemVariants}
          animate={controls}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3.5 rounded-2xl font-semibold text-lg transition-all duration-300 ${
            isSubmitting
              ? "bg-slate-300 text-slate-500 cursor-not-allowed dark:bg-slate-700 dark:text-slate-400"
              : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:brightness-110 shadow-lg shadow-indigo-600/30 text-white"
          }`}
        >
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </motion.button>
      </form>

      {/* Footer Note */}
      <motion.p
        variants={itemVariants}
        className="
          mt-8 text-center text-xs pt-6
          border-t border-slate-200 text-slate-500
          dark:border-slate-800 dark:text-slate-500
        "
      >
        🔒 Your information is secure and will never be shared.
      </motion.p>
    </motion.div>
  );
};

export default ContactForm;
