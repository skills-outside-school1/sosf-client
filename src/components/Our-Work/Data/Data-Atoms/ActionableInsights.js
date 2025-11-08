"use client"

import { useState } from "react"
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react"

export default function ActionableInsights() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const faqs = [
    {
      question: "How can enrollment rates improve?",
      answer: "Community awareness campaigns, financial support and scholarships, NGO-led support services",
    },
    {
      question: "How can teacher-student ratios improve?",
      answer: "Teacher relocation and recruitment drives, scholarship for teacher training, collaborations with  colleges of education",
    },
    {
      question: "How can infrastructure be improved?",
      answer: "Renewable energy installations, water sanitation and safety facilities, skill-based volunteering for renovations",
    },
    {
      question: "How can school data collection improve?",
      answer: "Deployment of trained data officers, provision of data management tools, capacity building for school administrators",
    },
  ]

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/70 opacity-95">
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div className="relative z-20 w-full max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Examples of Actionable Insights
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-400">
              <button
                onClick={() => setExpandedIndex(expandedIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between py-4 text-left hover:bg-black/20 transition px-2"
              >
                <span className="text-base sm:text-lg font-semibold text-white">{faq.question}</span>
                <span className="text-2xl text-white flex-shrink-0">{expandedIndex === idx ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}</span>
              </button>
              {expandedIndex === idx && (
                <div className="px-2 pb-4">
                  <p className="text-[16px] text-base text-gray-200">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
