"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "What development services do you offer?",
      answer: "I specialize in full-stack web development, mobile app development, UI/UX design, API integration, and performance optimization. My expertise includes React, Node.js, TypeScript, and modern cloud infrastructure."
    },
    {
      question: "How do you handle project timelines and deadlines?",
      answer: "I use agile methodologies with 1-2 week sprints, providing regular progress updates and demos. All projects include detailed timelines with milestone checkpoints, and I maintain transparent communication through weekly status reports and available collaboration tools."
    },
    {
      question: "What is your approach to responsive design?",
      answer: "I implement a mobile-first approach using modern CSS techniques (Flexbox, Grid) and responsive frameworks. All projects undergo rigorous testing across multiple devices and screen sizes to ensure seamless user experiences on desktop, tablet, and mobile platforms."
    },
    {
      question: "Do you provide maintenance and support after project completion?",
      answer: "Yes, I offer flexible post-launch support packages including bug fixes, performance monitoring, security updates, and feature enhancements. All projects include a 30-day warranty period for critical fixes, with optional ongoing maintenance plans available."
    },
    {
      question: "How do you ensure code quality and security?",
      answer: "I follow industry best practices including comprehensive testing (unit, integration, E2E), code reviews, static analysis, and CI/CD pipelines. Security is prioritized through regular dependency audits, input validation, secure authentication practices, and adherence to OWASP guidelines."
    },
    {
      question: "What information do you need to start a project?",
      answer: "I begin with a discovery phase to understand your business goals, target audience, and technical requirements. Please prepare any existing brand guidelines, competitor references, user stories, and specific functionality requirements to accelerate the kickoff process."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Everything you need to know about my development services and collaboration process
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border rounded-xl overflow-hidden ${
                openIndex === index 
                  ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/20' 
                  : 'border-gray-700 hover:border-indigo-700/50 transition-colors'
              } bg-gray-800/50 backdrop-blur-sm`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-xl font-medium pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-indigo-400 text-xl"
                >
                  ▼
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: "auto",
                      transition: { height: { duration: 0.4 }, opacity: { duration: 0.3 } }
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } }
                    }}
                    className="overflow-hidden"
                  >
                    <div 
                      id={`faq-answer-${index}`}
                      className="px-6 pb-6 pt-2 text-gray-300 leading-relaxed border-t border-gray-700"
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Still have questions? I'd love to hear from you!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg shadow-indigo-500/30 text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all"
          >
            <Link href='/Contact' >
            Contact Me
            </Link>
            <span className="ml-2">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
