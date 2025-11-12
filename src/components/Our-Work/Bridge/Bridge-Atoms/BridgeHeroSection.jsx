"use client";
import { motion } from "framer-motion";

export default function BridgeHeroSection() {
  return (
    <section className="items-center justify-center w-full px-2 xl:px-0">
      <div className="py-8 rounded-[1.5rem] mx-auto xl:max-w-[1421px] sm:px-6 lg:p-16">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-gray-900 font-mont md:text-6xl"
          >
            SOSF Bridge Program
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-lg leading-relaxed font-mont md:text-2xl"
          >
            SOSF Bridge Equipping Students Today for the Work, Innovation &
            Enterprise of Tomorrow
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 leading-relaxed font-inter text-md"
          >
            <p>
              At SOSF, we believe education should do more than just teach — it
              should prepare. The SOSF Bridge Program is our flagship
              intervention for government secondary and tertiary institutions
              that connects learning to living, education to enterprise, and
              school to society. 
            </p>
            <p>
             We don’t just fill gaps in public education. We
              bridge them — with life skills, career preparation, academic
              enhancement, and entrepreneurial thinking.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
