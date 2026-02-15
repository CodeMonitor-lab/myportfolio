import React,{useState} from "react";
import { motion } from "framer-motion";

const JoinDevCommunity = () => {
      const [email, setEmail] = useState("");
      const [newsletterStatus, setNewsletterStatus] = useState({ type: "", message: "" });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setNewsletterStatus({ type: "", message: "" });
    
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        // Basic validation
        if (!email.trim()) {
          setNewsletterStatus({
            type: "error",
            message: "Please enter a valid email address."
          });
          setIsSubmitting(false);
          return;
        }
    
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          setNewsletterStatus({
            type: "error",
            message: "Please enter a valid email address."
          });
          setIsSubmitting(false);
          return;
        }
    
        // Simulate successful submission
        setNewsletterStatus({
          type: "success",
          message: "Thanks for subscribing! You'll receive our next article directly in your inbox."
        });
        
        // Reset form
        setEmail("");
        setIsSubmitting(false);
        
        // Trigger animation
        controls.start({
          scale: [1, 1.05, 1],
          transition: { duration: 0.3 }
        });
      };

  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <div className="relative p-10 md:p-14 rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-800/20" />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Join My Developer Community
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
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
                  className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`absolute right-1 top-1 bottom-1 px-6 rounded-lg font-medium transition-all ${
                    isSubmitting
                      ? "bg-slate-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="w-5 h-5 border-2 border-indigo-300 border-t-transparent rounded-full animate-spin" />
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
                  className={`mt-4 p-3 rounded-lg text-sm ${
                    newsletterStatus.type === "success"
                      ? "bg-green-900/30 border border-green-800/50 text-green-300"
                      : "bg-rose-900/30 border border-rose-800/50 text-rose-300"
                  }`}
                >
                  {newsletterStatus.message}
                </motion.div>
              )}

              <p className="mt-3 text-xs text-slate-500">
                No spam ever. Unsubscribe anytime. I respect your privacy and
                follow GDPR guidelines.
              </p>
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default JoinDevCommunity;
