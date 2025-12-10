"use client";
import { motion } from "framer-motion";

export default function AdvocacyInActionSection() {
  return (
    <section
      className="relative h-[500px] md:h-[450px] flex items-center justify-end overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-black" />

      <div className="relative z-10 w-full md:w-[50%] px-6 md:px-10 lg:px-16 text-white">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-2xl font-bold font-mont"
        >
          Advocacy in Action: Our Theory of Change
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-base leading-relaxed text-gray-100"
        >
          We believe in advocacy as both a concept and a catalyst—the most
          effective way to inspire and sustain change. By empowering local
          voices and community-led solutions, we transform awareness into
          tangible progress.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base leading-relaxed text-gray-200"
        >
          Our advocacy framework creates the enabling environment necessary for
          SOSF’s programs to thrive—aligning policy, partnerships, and people
          toward lasting impact and equitable transformation.
        </motion.p>
      </div>
    </section>
  );
}
