// src/components/AnimatedImage.jsx

import { motion } from "framer-motion";

export default function AnimatedImage({ src, alt }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="w-48 h-48 object-contain mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    />
  );
}
