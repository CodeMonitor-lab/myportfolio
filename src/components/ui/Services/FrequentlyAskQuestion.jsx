"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import faqs from "@/json/faqs.json";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="
        py-24 border-t
        bg-gradient-to-b
        from-slate-50 via-white to-slate-100
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
        border-slate-200 dark:border-slate-800
        transition-colors duration-300
      "
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl md:text-5xl font-bold mb-6
              bg-clip-text text-transparent
              bg-gradient-to-r
              from-indigo-500 to-purple-600
              dark:from-indigo-400 dark:to-purple-400
            "
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Everything you need to know about my development services and collaboration process
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                border rounded-xl overflow-hidden
                bg-white border-slate-200
                dark:bg-white/5 dark:border-slate-700
                backdrop-blur-xl
                transition-all duration-300
                ${
                  openIndex === index
                    ? "border-indigo-500/50 shadow-lg shadow-indigo-500/20"
                    : "hover:border-indigo-400/40"
                }
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  flex justify-between items-center w-full
                  p-6 text-left
                  focus:outline-none
                  focus:ring-2 focus:ring-indigo-500
                  focus:ring-offset-2
                  focus:ring-offset-white
                  dark:focus:ring-offset-slate-900
                "
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium text-slate-800 dark:text-slate-200 pr-4">
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-indigo-500 dark:text-indigo-400 text-lg"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      id={`faq-answer-${index}`}
                      className="
                        px-6 pb-6 pt-2
                        text-slate-600 dark:text-slate-300
                        leading-relaxed
                        border-t border-slate-200
                        dark:border-slate-700
                      "
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}

      </div>
    </section>
  );
}
