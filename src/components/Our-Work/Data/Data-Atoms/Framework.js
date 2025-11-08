"use client"

import { useState } from "react"

export default function Framework() {
  const [activeAccordion, setActiveAccordion] = useState(null)

  const steps = [
    {
      number: "1",
      title: "Desktop Evaluation",
      description:
        "Conducted via AI tools and public data sources (NBS, UBEC, Knoema), this stage helps assess whether an intervention is needed and viable. Custom templates and automated reports are generated",
      color: "bg-[#B7C8F4]",
    },
    {
      number: "2-5",
      title: "From Baseline to Impact Evaluation",
      description:
        "We deploy our Social & Economic Register, powered by AMP + MOSIP + AI, to Digitally register beneficiaries, Capture real-time baseline, midline, endline and impact data. Auto-generate reports, factsheets and dashboards",
      color: "bg-[#F7D3E5]",
    },
    {
      number: "6",
      title: "Learning & Improvement",
      description:
        "We use machine learning and analytics to extract insights, identify gaps and improve our programs. Every report feeds back into better design.",
      color: "bg-[#089F8D]",
    },
    {
      number: "7",
      title: "Institutionalization & Advocacy",
      description:
        "We translate findings into sector-wide briefs, policy guides, toolkits, and advocacy factsheets — shared via digital channels, media campaigns and targeted dissemination",
      color: "bg-[#95FAE3]",
    },
  ]

  const functionalityItems = [
    "Auto-populated surveys",
    "Role-specific data collection flows",
    "Multi-language support",
    "Inline AI report suggestions",
    "Real-time dashboards",
    "Auto-report generation & factsheets",
  ]

  const statusItems = [
    "Enabled via MOSIP",
    "Enabled via AMP",
    "AI-translated forms",
    "GPT-style Prompts",
    "Salesforce Dashboards",
    "AI + Predefined Templates",
  ]

  const researchAreas = [
    "The State of Basic, Secondary, and Tertiary Education",
    "Entrepreneurship ecosystems: commercial, social, impact investing",
    "Employability trends and workforce readiness",
    "Agricultural and Industry-Specific Value Chains (under Headstart)",
    "Government policy, legislation, and institutional effectiveness",
    "Education funding, infrastructure, and digital access",
  ]

  const targetAudiences = [
    "Policymakers",
    "Donors and investors",
    "Partner NGOs and multilaterals",
    "Researchers and think tanks",
    "Intermediary organizations and implementing agencies",
  ]

  return (
    <>
    <section className="w-full px-4 py-12  md:py-20 lg:py-24 relative z-10 bg-gray-900/70 opacity-95">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-white text-[20px]  md:text-4xl font-light text-center mb-2">
            Our 7-Step Evaluation Framework
          </h2>
          <p className="text-white text-base text-center mb-8 mb-12 md:mb-16">
            We follow a comprehensive, automated 7-step MEL process
          </p>

          <div className="relative mb-12 md:mb-20">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-white/100"></div>

            {/* Steps */}
            <div className="flex flex-wrap justify-between gap-4 md:gap-0 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center w-[calc(50%-8px)] md:w-auto">
                  <div
                    className={`w-10 h-10 w-12 sm:h-12 md:w-16 md:h-16 rounded-full ${step.color} border-2 border-white flex items-center justify-center text-white font-bold  md:text-lg mb-4 flex-shrink-0`}
                  >
                    {step.number}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-white text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* second */}
      <section className="w-full px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10 bg-gray-900/70 opacity-95">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4">
              Platform Integration & AI-Driven Innovation
            </h2>
            <p className="text-white text-base px-2 max-w-3xl mx-auto">
              We eliminate duplication, accelerate feedback loops, and empower decision-makers through dynamic
              dashboards and insight-driven reports. All data tools integrate via VERA AMP and MOSIP
            </p>
          </div>

          {/* Two Columns */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 justify-center">
            <div className="flex-1 w-full md:max-w-sm">
              {/* Header Button Style: Darker solid blue (bg-blue-700) */}
              <button className="w-full px-4 sm:px-6 py-3 bg-[#4A7CFD] text-white font-semibold rounded-full mb-4 sm:mb-6 cursor-default text-sm sm:text-base shadow-lg">
                Functionality
              </button>
              <div className="space-y-2 sm:space-y-3">
                {functionalityItems.map((item, idx) => (
                  <div
                    key={idx}
                    // UI Element: Semi-transparent white background with white text
                    className="px-3 sm:px-4 py-2 sm:py-3 bg-[#F6F6F6] text-black rounded-full text-center font-medium text-xs sm:text-sm backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full md:max-w-sm">
              {/* Header Button Style: Darker solid blue (bg-blue-700) */}
              <button className="w-full px-4  py-3 bg-[#4A7CFD] text-white font-semibold rounded-full mb-4 sm:mb-6 cursor-default text-sm sm:text-base shadow-lg">
                Status
              </button>
              <div className="space-y-2 sm:space-y-3">
                {statusItems.map((item, idx) => (
                  <div
                    key={idx}
                    // UI Element: Semi-transparent white background with white text
                    className="px-3  py-2 bg-[#F6F6F6] text-black rounded-full text-center font-medium text-xs backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* third */}
      <section className="w-full px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10 bg-gray-900/70 opacity-95">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-light">
              Thought Leadership That Shapes Systems
            </h2>
          </div>

          <p className="text-white text-base text-center mb-8  md:mb-16 max-w-4xl mx-auto leading-relaxed">
            We publish findings, insights, and thought leadership content across, Academic journals and research papers,
            Strategic reports and public factsheets, Webinars, roundtables, conferences and media campaigns. We explore
            trends and generate insights across the 3 E's — Education, Employability, and Entrepreneurship — aligned
            with national, regional, and global development goals
          </p>

          {/* Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div>
              <h3 className="text-white text-xl sm:text-2xl font-light mb-4 sm:mb-6">Key Areas of Research</h3>
              <ul className="space-y-3 sm:space-y-4">
                {researchAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-3 sm:gap-4">
                    {/* UI Element: Simple white-bordered circle for the "radio" effect */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white/50 flex-shrink-0 mt-0.5"></div>
                    <span className="text-white text-base leading-relaxed">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-xl sm:text-2xl font-light mb-4 ">Target Audiences</h3>
              <ul className="space-y-3">
                {targetAudiences.map((audience, idx) => (
                  <li key={idx} className="flex items-start gap-3 sm:gap-4">
                    {/* UI Element: Simple white-bordered circle for the "radio" effect */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white/50 flex-shrink-0 mt-0.5"></div>
                    <span className="text-white text-base leading-relaxed">{audience}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  
      
    </>
  )
}