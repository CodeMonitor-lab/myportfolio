"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const JoinDevCommunity = () => {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const controls = useAnimation(); // ✅ FIXED

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNewsletterStatus({ type: "", message: "" });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    setNewsletterStatus({
      type: "success",
      message:
        "Thanks for subscribing! You'll receive our next article directly in your inbox.",
    });

    setEmail("");
    setIsSubmitting(false);

    // 🎉 Success animation
    controls.start({
      scale: [1, 1.04, 1],
      transition: { duration: 0.4 },
    });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        animate={controls}
        className="
          relative p-10 md:p-14 rounded-3xl
          bg-white/70 dark:bg-slate-900/60
          backdrop-blur-xl
          border border-gray-200 dark:border-slate-800
          shadow-md hover:shadow-xl
          transition-all duration-500
        "
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Join My Developer Community
          </h2>

          <p className="text-gray-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Get exclusive technical articles, early access to new resources,
            and thoughtful insights delivered to your inbox every two weeks.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="
                  w-full px-5 py-4 pr-32
                  bg-gray-100 dark:bg-slate-800
                  border border-gray-300 dark:border-slate-700
                  rounded-xl
                  text-gray-900 dark:text-white
                  focus:ring-2 focus:ring-indigo-500
                  focus:outline-none
                  transition-all
                "
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  absolute right-1 top-1 bottom-1 px-6
                  rounded-lg font-medium text-white
                  transition-all duration-300
                  ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-600 to-purple-700 hover:opacity-90"
                  }
                `}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
                className={`mt-5 p-3 rounded-lg text-sm ${
                  newsletterStatus.type === "success"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800"
                    : "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 border border-rose-200 dark:border-rose-800"
                }`}
              >
                {newsletterStatus.message}
              </motion.div>
            )}

            <p className="mt-4 text-xs text-gray-500 dark:text-slate-500">
              No spam ever. Unsubscribe anytime. I respect your privacy and
              follow GDPR guidelines.
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default JoinDevCommunity;
