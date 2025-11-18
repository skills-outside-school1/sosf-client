"use client";
import { motion } from "framer-motion";

export default function AdvocacyHeroSection() {
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
            Advocacy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-lg leading-relaxed text-gray-700 font-mont md:text-2xl"
          >
            Institutionalizing Change through Impact: Turning Evidence into
            Action. Transforming Awareness into Reform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 leading-relaxed text-gray-600"
          >
            <p>
              At SOSF, advocacy is not just an add-on—it is a core pillar that
              converts insights into influence and influence into systemic
              change. We use proofs of concept from our interventions to raise
              awareness, build coalitions, shape policy, and institutionalize
              sustainable solutions across Africa’s education, employment, and
              entrepreneurship ecosystems.
            </p>
            <p>
              Our advocacy is grounded in data, community, and action—mobilizing
              people and evidence to shift mindsets, drive reforms, and create
              an enabling environment for lasting impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
