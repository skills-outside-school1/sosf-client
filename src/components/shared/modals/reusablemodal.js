"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { H3 } from "../Atoms/Typography/typography";

export default function ReusableModal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 60 }}
        >
          <motion.div
            className="bg-white w-full max-w-[800px]   ml-auto p-6 relative  overflow-y-auto max-h-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-3xl font-bold text-gray-800 hover:text-gray-600"
            >
              &times;
            </button>
            {title && (
              <H3 className="text-2xl font-bold text-gray-800 mb-4">{title}</H3>
            )}
            <div className="text-gray-700 text-[#3558A2]">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
