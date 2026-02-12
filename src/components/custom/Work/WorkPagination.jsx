import React from "react";
import { motion } from "framer-motion";

const WorkPagination = ({ totalPages = 5, currentPage = 1, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-10">
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        const isActive = page === currentPage;

        return (
          <motion.button
            key={page}
            onClick={() => onPageChange && onPageChange(page)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className={`relative w-10 h-10 rounded-xl font-semibold transition-all duration-300 ${
              isActive
                ? "text-white"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-black rounded-xl"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}

            <span className="relative z-10">{page}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default WorkPagination;
