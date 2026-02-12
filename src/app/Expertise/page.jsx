'use client';

import { motion } from "framer-motion";

export default function App() {
  // Expertise data
  const expertiseAreas = [
    {
      id: 1,
      title: "Frontend Architecture",
      description: "Building responsive, accessible interfaces with modern frameworks and performance optimization",
      icon: "🎨",
      skills: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
      proficiency: 95
    },
    {
      id: 2,
      title: "Backend Engineering",
      description: "Scalable server-side solutions with robust APIs, database design, and system integration",
      icon: "⚙️",
      skills: ["Node.js", "Python", "REST/GraphQL", "Microservices"],
      proficiency: 90
    },
    {
      id: 3,
      title: "UI/UX Implementation",
      description: "Translating designs into pixel-perfect, intuitive user experiences with attention to detail",
      icon: "✨",
      skills: ["Figma", "Design Systems", "Animation", "Accessibility"],
      proficiency: 92
    },
    {
      id: 4,
      title: "DevOps & Deployment",
      description: "CI/CD pipelines, containerization, cloud infrastructure, and performance monitoring",
      icon: "🚀",
      skills: ["Docker", "AWS", "GitHub Actions", "Monitoring"],
      proficiency: 88
    },
    {
      id: 5,
      title: "Data Visualization",
      description: "Complex data representation through interactive charts, 3D visualizations, and real-time dashboards",
      icon: "📊",
      skills: ["D3.js", "Recharts", "Three.js", "WebGL"],
      proficiency: 93
    },
    {
      id: 6,
      title: "Technical Leadership",
      description: "Mentoring teams, establishing best practices, and driving technical strategy for product success",
      icon: "💡",
      skills: ["Code Reviews", "Architecture Planning", "Team Leadership", "Agile"],
      proficiency: 85
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

  const iconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4
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
            <span className="text-indigo-300 font-medium text-sm">Technical Excellence</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Areas of Expertise
          </h2>
          
          <p className="text-lg text-slate-400">
            I bring deep technical knowledge and practical experience across the full development lifecycle, from architecture to deployment.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative background elements */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-full blur-3xl transition-all duration-700 group-hover:scale-125" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-pink-900/20 to-rose-900/20 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-start gap-5 mb-6">
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-800/50 flex items-center justify-center text-3xl flex-shrink-0"
                  >
                    {area.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      {area.title}
                    </h3>
                    <p className="text-slate-400">{area.description}</p>
                  </div>
                </div>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {area.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 rounded-full text-sm bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-indigo-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Proficiency</span>
                    <span className="text-indigo-400 font-medium">{area.proficiency}%</span>
                  </div>
                  <div className="w-full bg-slate-800/50 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1.2,
                        delay: 0.5 + index * 0.1,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                    />
                  </div>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-950/30 to-slate-950 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "8+", label: "Years Experience" },
              { value: "50+", label: "Projects Delivered" },
              { value: "12+", label: "Technologies Mastered" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl"
              >
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <div className="relative p-10 md:p-14 rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-800/20" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Let's Build Your Vision Together
              </h3>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                Whether you need a complete product built or expert consultation on complex technical challenges, I bring the skills and experience to deliver exceptional results.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
              >
                Discuss Your Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
