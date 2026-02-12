import { motion } from "framer-motion";

export default function App() {
  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "Nexus Dashboard",
      description: "A real-time analytics platform with interactive data visualizations and customizable widgets for enterprise clients.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Recharts"],
      image: "https://placehold.co/600x400/1e293b/64748b?text=Nexus+Dashboard",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Aura Design System",
      description: "Comprehensive UI component library with dark mode support, accessibility features, and theming capabilities.",
      technologies: ["React", "Framer Motion", "Storybook", "CSS Modules"],
      image: "https://placehold.co/600x400/1e293b/64748b?text=Aura+Design+System",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Quantum CLI",
      description: "Developer productivity tool with intelligent code generation, project scaffolding, and automated testing workflows.",
      technologies: ["Node.js", "TypeScript", "Inquirer.js", "Chalk"],
      image: "https://placehold.co/600x400/1e293b/64748b?text=Quantum+CLI",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Stellar CMS",
      description: "Headless content management system with real-time collaboration, version control, and GraphQL API integration.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "GraphQL"],
      image: "https://placehold.co/600x400/1e293b/64748b?text=Stellar+CMS",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Vortex 3D Engine",
      description: "WebGL-powered rendering engine for interactive product visualizations and immersive brand experiences.",
      technologies: ["Three.js", "React Three Fiber", "GLSL", "Drei"],
      image: "https://placehold.co/600x400/1e293b/64748b?text=Vortex+3D+Engine",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Pulse Monitoring",
      description: "Infrastructure monitoring solution with anomaly detection, alerting system, and performance analytics dashboard.",
      technologies: ["React", "D3.js", "WebSockets", "Node.js"],
      image: "https://placehold.co/600x400/1e293b/64748b?text=Pulse+Monitoring",
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.12, 0.23, 0.98]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-200 font-sans">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-900/30 border border-indigo-800/50 mb-8"
          >
            <span className="text-indigo-300 font-medium text-sm">Crafted with precision</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Our Engineering Portfolio
          </h1>
          <p className="text-lg text-slate-400 mb-12">
            We build elegant technical solutions that solve complex problems. Each project represents our commitment to clean architecture, performance, and user experience.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Web Applications", "Developer Tools", "Data Visualization", "3D Experiences", "System Architecture", "Open Source"].map((category, index) => (
              <motion.span
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-slate-300 hover:border-indigo-700 transition-colors cursor-pointer"
              >
                {category}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2.5 py-0.5 rounded-full text-xs bg-indigo-900/30 text-indigo-300 border border-indigo-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-5 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-4 pt-4 border-t border-slate-800/50">
                  <a 
                    href={project.liveUrl} 
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium group/link"
                  >
                    <span>🌐 Live Demo</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium group/link"
                  >
                    <span>💻 Source Code</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </a>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-full blur-3xl transition-all duration-700 group-hover:scale-125" />
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-pink-900/20 to-rose-900/20 rounded-full blur-2xl" />
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
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center"
      >
        <div className="relative p-12 rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-800/20" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Let's Build Something Extraordinary
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              We transform complex challenges into elegant technical solutions. Ready to bring your vision to life with clean code and innovative architecture?
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
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50 max-w-7xl mx-auto text-center text-slate-500">
        <p>© {new Date().getFullYear()} Engineering Portfolio. Crafted with precision and passion.</p>
      </footer>
    </div>
  );
}
