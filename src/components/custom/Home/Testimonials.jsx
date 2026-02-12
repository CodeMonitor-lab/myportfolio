'use client';

import { motion } from "framer-motion";

export default function App() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "Working with this developer transformed our product development cycle. Their clean architecture and performance optimizations reduced our load times by 70% while maintaining exceptional code quality.",
      author: "Alex Morgan",
      role: "CTO, TechNova Solutions",
      image: "https://placehold.co/100x100/1e293b/64748b?text=AM"
    },
    {
      id: 2,
      quote: "Their attention to detail and deep understanding of complex systems helped us solve scalability issues that had plagued our platform for months. A true engineering partner who delivers beyond expectations.",
      author: "Sarah Chen",
      role: "Lead Product Manager, InnovateX",
      image: "https://placehold.co/100x100/1e293b/64748b?text=SC"
    },
    {
      id: 3,
      quote: "Beyond technical excellence, they bring thoughtful problem-solving to every challenge. The design system they created became the foundation for our entire product suite, saving hundreds of development hours.",
      author: "Marcus Johnson",
      role: "Engineering Director, GlobalFin",
      image: "https://placehold.co/100x100/1e293b/64748b?text=MJ"
    },
    {
      id: 4,
      quote: "Their ability to translate complex requirements into elegant technical solutions is remarkable. The real-time analytics dashboard they built has become our most valued tool for data-driven decision making.",
      author: "Elena Rodriguez",
      role: "VP of Product, DataSphere Inc",
      image: "https://placehold.co/100x100/1e293b/64748b?text=ER"
    },
    {
      id: 5,
      quote: "Collaborating on the 3D visualization engine was a masterclass in technical craftsmanship. Their innovative approach to performance optimization made the impossible possible for our clients.",
      author: "David Kim",
      role: "Creative Director, VisualFrontier",
      image: "https://placehold.co/100x100/1e293b/64748b?text=DK"
    },
    {
      id: 6,
      quote: "They don't just write code—they solve business problems. The developer tools they created boosted our team's productivity by 40% and became essential to our daily workflow.",
      author: "Priya Patel",
      role: "Senior Engineer, DevFlow Systems",
      image: "https://placehold.co/100x100/1e293b/64748b?text=PP"
    }
  ];

  // Animation variants
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

  const quoteVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        delay: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-200 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-900/30 border border-indigo-800/50 mb-6"
          >
            <span className="text-indigo-300 font-medium text-sm">Trusted by industry leaders</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Client Testimonials
          </h2>
          
          <p className="text-lg text-slate-400">
            Don't just take my word for it—here's what clients and colleagues say about working together on complex technical challenges.
          </p>
          
          <div className="mt-10 flex justify-center">
            <div className="flex gap-1.5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-yellow-400 text-xl"
                >
                  ★
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative quote mark */}
              <motion.div
                variants={quoteVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 text-9xl text-indigo-900/20 font-serif select-none"
              >
                "”
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-900/50 bg-slate-800 flex items-center justify-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      {testimonial.author}
                    </h3>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <blockquote className="text-slate-300 leading-relaxed border-l-2 border-indigo-700/50 pl-5 py-1 relative">
                  <p className="relative z-10">
                    {testimonial.quote}
                  </p>
                  <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600/30 to-transparent" />
                </blockquote>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-full blur-3xl transition-all duration-700 group-hover:scale-125" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-950/30 to-slate-950 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <div className="relative p-10 md:p-14 rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-800/20" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Ready to Build Something Remarkable?
              </h3>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                Let's collaborate on your next project. I bring technical excellence, creative problem-solving, and a commitment to delivering exceptional results.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
              >
                Start Your Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
