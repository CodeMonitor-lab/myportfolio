'use client';

import { motion } from "framer-motion";

export default function App() {
  // Services data
  const services = [
    {
      id: 1,
      title: "Custom Web Applications",
      description: "Building responsive, high-performance web applications with modern frameworks and clean architecture.",
      icon: "🌐",
      features: [
        "React/TypeScript Development",
        "Progressive Web Apps (PWA)",
        "Real-time Features & WebSockets",
        "API Integration & Microservices"
      ],
      startingAt: "$5,000"
    },
    {
      id: 2,
      title: "UI/UX Implementation",
      description: "Transforming designs into pixel-perfect, accessible interfaces with smooth animations and interactions.",
      icon: "🎨",
      features: [
        "Figma to Code Conversion",
        "Design System Development",
        "Micro-interactions & Animations",
        "WCAG 2.1 Accessibility Compliance"
      ],
      startingAt: "$3,500"
    },
    {
      id: 3,
      title: "Performance Optimization",
      description: "Auditing and enhancing application speed, SEO, and user experience through technical refinements.",
      icon: "⚡",
      features: [
        "Core Web Vitals Improvement",
        "Bundle Size Optimization",
        "Lazy Loading Strategies",
        "Image & Asset Optimization"
      ],
      startingAt: "$2,500"
    },
    {
      id: 4,
      title: "Technical Consulting",
      description: "Strategic guidance on architecture, tooling, and best practices for engineering teams and startups.",
      icon: "💡",
      features: [
        "Codebase Audits & Reviews",
        "Architecture Planning",
        "Team Mentorship",
        "Technology Stack Selection"
      ],
      startingAt: "$150/hr"
    },
    {
      id: 5,
      title: "3D & Interactive Experiences",
      description: "Creating immersive brand experiences with WebGL, Three.js, and interactive 3D visualizations.",
      icon: "🎮",
      features: [
        "Product Visualizations",
        "Interactive Data Experiences",
        "WebGL Animations",
        "Custom Shaders & Effects"
      ],
      startingAt: "$7,000"
    },
    {
      id: 6,
      title: "DevOps & Deployment",
      description: "Setting up robust infrastructure, CI/CD pipelines, and monitoring for reliable application delivery.",
      icon: "🚀",
      features: [
        "Docker & Containerization",
        "Cloud Infrastructure (AWS/Azure)",
        "CI/CD Pipeline Setup",
        "Performance Monitoring & Alerts"
      ],
      startingAt: "$3,000"
    }
  ];

  // Process steps
  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "Free 30-minute consultation to understand your project goals, timeline, and technical requirements."
    },
    {
      step: "02",
      title: "Proposal & Scope",
      description: "Detailed project proposal with timeline, deliverables, and transparent pricing tailored to your needs."
    },
    {
      step: "03",
      title: "Kickoff & Planning",
      description: "Project kickoff meeting, technical planning, and establishing communication channels and milestones."
    },
    {
      step: "04",
      title: "Development & Review",
      description: "Agile development cycles with regular progress updates and opportunities for feedback."
    },
    {
      step: "05",
      title: "Delivery & Support",
      description: "Final delivery with documentation, training, and optional ongoing maintenance packages."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "Their technical expertise transformed our outdated platform into a modern, scalable application that handles 10x our previous traffic. The clean codebase made future development seamless.",
      author: "Jamie Wilson",
      role: "CTO, GrowthLabs",
      image: "https://placehold.co/80x80/1e293b/64748b?text=JW"
    },
    {
      id: 2,
      quote: "Working with them was a game-changer for our startup. They delivered a complex SaaS platform ahead of schedule while maintaining exceptional code quality and documentation.",
      author: "Taylor Reed",
      role: "Founder, StartupFlow",
      image: "https://placehold.co/80x80/1e293b/64748b?text=TR"
    },
    {
      id: 3,
      quote: "Their performance optimization work reduced our page load time by 3.2 seconds and increased conversions by 27%. Worth every penny for the ROI we saw.",
      author: "Morgan Chen",
      role: "Product Lead, EcomPlus",
      image: "https://placehold.co/80x80/1e293b/64748b?text=MC"
    }
  ];

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

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

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
          <span className="text-indigo-300 font-medium text-sm">Technical Solutions</span>
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Development Services
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Professional engineering services tailored to your project needs. Clean code, modern architecture, and pixel-perfect implementation delivered on time.
        </p>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            What I Offer
          </h2>
          <p className="text-slate-400">
            Comprehensive development services designed for startups, agencies, and established businesses seeking technical excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-full blur-3xl transition-all duration-700 group-hover:scale-125" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-pink-900/20 to-rose-900/20 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-800/50 flex items-center justify-center text-3xl flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      {service.title}
                    </h3>
                    <p className="text-slate-400">{service.description}</p>
                  </div>
                </div>
                
                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-slate-300">
                      <span className="mt-1 text-indigo-400 text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Pricing */}
                <div className="pt-4 border-t border-slate-800/50 flex justify-between items-center">
                  <span className="text-sm text-slate-500">Starting at</span>
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    {service.startingAt}
                  </span>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-950/30 to-slate-950 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
            >
              My Working Process
            </motion.h2>
            <motion.p
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400"
            >
              A transparent, collaborative approach ensuring your vision becomes reality with technical excellence
            </motion.p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-700/30 to-transparent -translate-x-1/2" />
            
            <div className="space-y-12">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-sm font-bold text-white z-10 border-4 border-slate-900">
                    {step.step}
                  </div>
                  
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
                      <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                        {step.title}
                      </h3>
                      <p className="text-slate-400">{step.description}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-2/12 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Client Experiences
          </h2>
          <p className="text-slate-400">
            What clients say about working together on technical projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
            >
              <div className="absolute -top-4 -right-4 text-8xl text-indigo-900/20 font-serif select-none">
                "”
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-900/50 bg-slate-800 flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      {testimonial.author}
                    </h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <blockquote className="text-slate-300 leading-relaxed">
                  <p className="relative z-10">{testimonial.quote}</p>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
      >
        <div className="relative p-12 md:p-16 rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-800/20" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Ready to Build Your Project?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a tailored solution that delivers exceptional results and technical excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-xl font-bold hover:border-indigo-700 transition-all duration-300"
              >
                View Project Examples
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Answers to common questions about working together on development projects
          </p>
        </div>
        
        <div className="space-y-6">
          {[
            {
              question: "What's your typical project timeline?",
              answer: "Timelines vary based on project complexity. Small projects (5-10 pages) typically take 2-4 weeks, while complex applications may require 2-6 months. I provide detailed timelines during the proposal phase."
            },
            {
              question: "Do you work with startups and agencies?",
              answer: "Yes! I specialize in partnering with startups needing technical co-founders and agencies requiring white-label development services. I adapt my communication style and workflow to fit your team's needs."
            },
            {
              question: "What technologies do you specialize in?",
              answer: "My core expertise is in React, TypeScript, and modern JavaScript frameworks. I also work extensively with Three.js for 3D experiences, Node.js for backend services, and cloud infrastructure on AWS."
            },
            {
              question: "How do you handle project communication?",
              answer: "I use a transparent communication approach with weekly syncs, shared project management tools (Trello/Asana), and regular progress demos. You'll always know the status of your project."
            },
            {
              question: "Do you provide ongoing maintenance?",
              answer: "Yes, I offer maintenance packages starting at $300/month that include hosting management, security updates, bug fixes, and minor feature additions. This ensures your application stays secure and performant."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden"
            >
              <div className="p-6 font-medium flex justify-between items-center cursor-pointer hover:bg-slate-800/30 transition-colors">
                <span>{faq.question}</span>
                <span className="text-indigo-400 text-xl">+</span>
              </div>
              <div className="px-6 pb-6 pt-0 text-slate-400">
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50 max-w-7xl mx-auto text-center text-slate-500">
        <p>© {new Date().getFullYear()} Development Services. Building exceptional digital experiences with clean code.</p>
      </footer>
    </div>
  );
}
