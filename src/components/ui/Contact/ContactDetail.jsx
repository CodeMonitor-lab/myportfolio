"use client";

import { motion } from "framer-motion";

const ContactDetail = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      className="space-y-10"
    >
      {/* Contact Details */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Details</h2>

        <div className="space-y-5">
          {[
            {
              title: "Email",
              content: "developer@example.com",
              link: "mailto:developer@example.com",
            },
            {
              title: "Availability",
              content: "Open to freelance & full-time opportunities",
            },
            {
              title: "Response Time",
              content: "Usually within 24-48 hours",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl"
            >
              <h3 className="font-semibold mb-1">{item.title}</h3>
              {item.link ? (
                <a href={item.link} className="text-indigo-400">
                  {item.content}
                </a>
              ) : (
                <p className="text-slate-400">{item.content}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Links */}

    </motion.div>
  );
};

export default ContactDetail;
