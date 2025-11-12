import React from "react";
import FeatureCard from "../Bridge-Atoms/FeatureCard";

const features = [
  {
    icon: "https://c.animaapp.com/mhuomfqaaqPDBB/img/paintbrush-pencil-1.svg",
    title: "Decentralized Model",
    description:
      "States and schools take ownership of registration, implementation, and reporting. SOSF supports with tools, training, and recognition",
  },
  {
    icon: "https://c.animaapp.com/mhuomfqaaqPDBB/img/dashboard-monitor-1.svg",
    title: "Online Portal",
    description:
      "Self-registration for schools, teachers, and students — no physical onboarding required",
  },
  {
    icon: "https://c.animaapp.com/mhuomfqaaqPDBB/img/vector-15.svg",
    title: "Teacher Training",
    description:
      "On-demand digital modules via the TEENS platform, aligned with Tongston's global educator certification standards.",
  },
  {
    icon: "https://c.animaapp.com/mhuomfqaaqPDBB/img/person-carry-box-1.svg",
    title: "Curriculum Delivery",
    description:
      "Teachers access weekly lesson plans, projects, assessments, and rubrics. Students engage in practical tasks and reflection exercises.",
  },
  {
    icon: "https://c.animaapp.com/mhuomfqaaqPDBB/img/book-alt-1.svg",
    title: "M&E System",
    description:
      "Public dashboards display real-time performance by state and school. Schools upload their own evaluation data.",
  },
  {
    icon: "https://c.animaapp.com/mhuomfqaaqPDBB/img/chart-user-1.svg",
    title: "Recognition & Incentives",
    description:
      "Certificates, awards, scholarships, and enterprise fund access for top performers — not for participation, but for performance.",
  },
];

export const ResourcesSection = () => {
  return (
    <section className="flex flex-col items-center w-full px-4 py-20 gap-9 md:px-10 lg:px-28">
      <h2 className="text-xl md:text-2xl font-semibold leading-6 text-center text-black font-mont">
        How It Works
      </h2>

      <div className="grid w-full max-w-[940px] gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};
