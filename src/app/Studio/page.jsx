'use client';

import { motion } from "framer-motion";

export default function App() {
  // Brand Studio Philosophy
  const philosophy = [
    {
      id: 1,
      title: "Strategic Foundation",
      description: "Every brand begins with deep research and strategic positioning to ensure authentic market resonance.",
      icon: "🎯"
    },
    {
      id: 2,
      title: "Visual Identity Crafting",
      description: "Meticulously designed logos, color systems, and typography that communicate your unique value proposition.",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Technical Integration",
      description: "Seamless implementation across digital platforms with developer-friendly brand assets and documentation.",
      icon: "💻"
    }
  ];

  // Services Offered
  const services = [
    {
      id: 1,
      title: "Brand Strategy",
      description: "Market analysis, positioning, messaging architecture, and brand voice development",
      deliverables: ["Brand Guidelines", "Messaging Framework", "Competitor Analysis"]
    },
    {
      id: 2,
      title: "Visual Identity",
      description: "Logo systems, color palettes, typography, iconography, and visual language development",
      deliverables: ["Primary & Secondary Logos", "Brand Style Guide", "UI Component Library"]
    },
    {
      id: 3,
      title: "Digital Implementation",
      description: "Developer handoff packages, design systems, and technical brand integration",
      deliverables: ["Figma Design System", "CSS/SCSS Variables", "React Component Library"]
    },
    {
      id: 4,
      title: "Brand Experience",
      description: "Motion design, interactive elements, and immersive brand storytelling",
      deliverables: ["Animation Guidelines", "Micro-interactions", "3D Brand Elements"]
    }
  ];

  // Process Steps
  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Deep dive into your business goals, audience, and competitive landscape"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop brand positioning, architecture, and core messaging framework"
    },
    {
      step: "03",
      title: "Design",
      description: "Create visual identity system with multiple concepts and refinements"
    },
    {
      step: "04",
      title: "Implementation",
      description: "Build technical assets and integrate brand across digital touchpoints"
    },
    {
      step: "05",
      title: "Evolution",
      description: "Ongoing refinement and brand system expansion as your business grows"
    }
  ];

  // Portfolio Projects
  const projects = [
    {
      id: 1,
      name: "Nebula Finance",
      industry: "Fintech",
      description: "Complete brand identity system with dark mode UI components and motion design",
      image: "https://placehold.co/600x400/1e293b/64748b?text=Nebula+Finance"
    },
    {
      id: 2,
      name: "Aura Wellness",
      industry: "Health & Wellness",
      description: "Minimalist brand identity with organic shapes and calming color palette",
      image: "https://placehold.co/600x400/1e293b/64748b?text=Aura+Wellness"
    },
    {
      id: 3,
      name: "Vertex Labs",
      industry: "SaaS",
      description: "Tech-forward brand system with geometric patterns and interactive elements",
      image: "https://placehold.co/600x400/1e293b/64748b?text=Vertex+Labs"
    },
    {
      id: 4,
      name: "Bloom E-commerce",
      industry: "Retail",
      description: "Vibrant brand identity with custom illustrations and animated components",
      image: "https://placehold.co/600x400/1e293b/64748b?text=Bloom+E-commerce"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "The brand system they created transformed our entire digital presence. The developer-friendly assets saved our engineering team hundreds of hours.",
      author: "Michael Chen",
      role: "Founder, TechFlow"
    },
    {
      id: 2,
      quote: "They uniquely bridge the gap between creative design and technical implementation. Our brand now scales perfectly across all platforms.",
      author: "Sophia Rodriguez",
      role: "Product Director, InnovateX"
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
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", bounce: 0.3 }}
          className="inline-block px-4 py-1.5 rounded-full bg-indigo-900/30 border border-indigo-800/50 mb-8"
        >
          <span className="text-indigo-300 font-medium text-sm">Where code meets creativity</span>
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Brand Studio
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
          Crafting distinctive brand identities that blend aesthetic excellence with technical precision. We build brands that developers love to implement and audiences remember.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Strategy", "Identity Design", "Design Systems", "Motion", "Developer Handoff", "Brand Evolution"].map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-slate-300"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Our Brand Philosophy
          </h2>
          <p className="text-slate-400">
            We believe exceptional brands live at the intersection of strategic thinking, visual craftsmanship, and technical execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-full blur-3xl transition-all duration-700 group-hover:scale-125" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-800/50 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  {item.title}
                </h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-950/30 to-slate-950 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
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
              Brand Services
            </motion.h2>
            <motion.p
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400"
            >
              Comprehensive branding solutions designed for modern digital products and platforms
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-pink-900/20 to-rose-900/20 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-5 rounded-lg bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-5">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-300">
                        <span className="mt-1 text-indigo-400">✓</span>
                        <span className="text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-950/30 to-slate-950 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Our Brand Process
          </h2>
          <p className="text-slate-400">
            A collaborative journey from strategic foundation to technical implementation
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-700/30 to-transparent -translate-x-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className={`relative flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 md:-left-4 top-0 w-7 h-7 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-sm font-bold text-white z-10">
                  {step.step}
                </div>
                
                <div className={`w-full ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-indigo-800/50 transition-colors">
                    <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      {step.title}
                    </h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
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
              Brand Portfolio
            </motion.h2>
            <motion.p
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400"
            >
              Selected brand identity projects showcasing our strategic and visual approach
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                        {project.name}
                      </h3>
                      <span className="text-sm text-indigo-400 font-medium">{project.industry}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs text-slate-400">
                      Case Study
                    </span>
                  </div>
                  <p className="text-slate-400">{project.description}</p>
                </div>
              </motion.div>
            ))}
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
            Client Perspectives
          </h2>
          <p className="text-slate-400">
            What clients say about our brand strategy and implementation approach
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
            >
              <div className="absolute -top-4 -right-4 text-8xl text-indigo-900/20 font-serif select-none">
                "”
              </div>
              
              <div className="relative z-10">
                <blockquote className="text-slate-300 leading-relaxed mb-6 border-l-2 border-indigo-700/50 pl-5 py-1">
                  <p className="relative z-10">{testimonial.quote}</p>
                </blockquote>
                
                <div>
                  <h4 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    {testimonial.author}
                  </h4>
                  <p className="text-slate-400">{testimonial.role}</p>
                </div>
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
              Ready to Build Your Brand?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's create a distinctive brand identity that resonates with your audience and scales with your technical ecosystem.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
            >
              Start Your Brand Journey
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50 max-w-7xl mx-auto text-center text-slate-500">
        <p>© {new Date().getFullYear()} Brand Studio. Where strategy meets pixels and code.</p>
      </footer>
    </div>
  );
}
