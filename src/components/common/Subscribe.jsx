"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "@/components/common";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xs p-5 rounded-xl border border-cyan-400/40 bg-black/80 shadow-[0_0_25px_#00ffff33]"
      >
        <h2 className="text-center text-cyan-300 text-lg font-semibold tracking-widest">
          SUBSCRIBE
        </h2>

        <p className="text-center text-[10px] text-gray-400 mb-4">
          Enter signal to join network
        </p>

        {subscribed ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-center text-sm"
          >
            ACCESS GRANTED ✓
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="cyber ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-black border border-cyan-500/40 text-cyan-200 text-xs rounded-md focus:outline-none focus:border-pink-500"
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-2 text-xs font-bold tracking-widest text-black bg-cyan-400 hover:bg-pink-400 transition rounded-md"
            >
              CONNECT
            </motion.button>
          </form>
        )}
      </motion.div>

      <div className="mt-6">
        <SocialIcon />
      </div>
    </div>
  );
};

export default Subscribe;
