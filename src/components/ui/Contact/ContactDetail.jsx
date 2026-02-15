"use client";

import { motion } from "framer-motion";
import { Mail, Handshake, Headset } from "lucide-react";

const ContactDetail = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  const details = [
    {
      title: "Email",
      content: "developer@example.com",
      link: "mailto:developer@example.com",
      icon: Mail,
    },
    {
      title: "Availability",
      content: "Open to freelance & full-time opportunities",
      icon: Handshake,
    },
    {
      title: "Response Time",
      content: "Usually within 24–48 hours",
      icon: Headset,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-12"
    >
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-8">
          Contact Details
        </h2>

        {/* Cards */}
        <div className="space-y-6">
          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group flex items-start gap-4 p-5
                           rounded-2xl border border-slate-800
                           bg-slate-900/60 backdrop-blur-xl
                           transition-all duration-300
                           hover:border-indigo-500
                           hover:shadow-lg hover:shadow-indigo-500/10"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800/60 group-hover:bg-indigo-500/10 transition-colors duration-300">
                  <Icon
                    size={18}
                    className="text-slate-400 group-hover:text-indigo-400 transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-400">
                      {item.content}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactDetail;
