"use client";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function AdvocacySystemsSection() {
  const pillars = [
    {
      title: "Power in People",
      desc: "Real change begins where people live, work, and learn. We equip community ambassadors, volunteers, and local changemakers to drive transformation from the inside out.",
    },
    {
      title: "Evidence with a Voice",
      desc: "We believe numbers should do more than sit in reports , they should move leaders to act. Our research and social registers turn insight into influence, helping shape national conversations and curriculum reforms that put people first.",
    },
    {
      title: "Shaping Policy, Building Legacy",
      desc: "We don’t chase quick wins — we build structures that last. Through strategic partnerships and policy advocacy, SOSF helps governments, schools, and institutions integrate proven programs that outlive projects and create lasting impact.",
    },
  ];

  return (
    <section className="items-center justify-center w-full px-6 xl:px-0">
      <div className="py-8 rounded-[1.5rem] mx-auto xl:max-w-[1421px] sm:px-6 lg:p-16">
        <AnimatedSection>
          <h2 className="mb-12 text-2xl font-bold text-center text-gray-900 md:text-left md:text-3xl font-mont">
            Advocacy That Moves Systems and People
          </h2>
        </AnimatedSection>

        <div className="grid items-stretch justify-center max-w-5xl gap-6 mx-auto md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={i} delay={i * 0.2 + 0.2}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="
                  w-full max-w-[320px] h-[400px] px-6 py-10 flex flex-col text-white bg-gray-900 rounded-3xl hover:bg-gray-800 shadow-md  transition-all  md:w-full sm:h-auto "
              >
                <h3 className="mb-6 text-xl font-bold text-center font-mont md:text-left">
                  {pillar.title}
                </h3>
                <p className="text-base leading-relaxed text-center text-gray-100 sm:text-lg md:text-left">
                  {pillar.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
