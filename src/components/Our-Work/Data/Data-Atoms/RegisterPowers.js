import CustomIcon from "@/components/structure-chart/Main/Main-Atoms/CustomIcon"

const  featureData = [
  {
    icon: "/assets/icons/paintbrush-pencil.svg",
    title: "Design of Interventions",
    description:
      " Identify gaps across education, entrepreneurship, and agriculture, and deploy fit-for-purpose programs like SOSF Bridge or Headstart.",
  },
  {
    icon: "/assets/icons/monitor.svg",
    title: "Monitoring & Evaluation",
    description:
      "Auto-generates dashboards, factsheets, and summaries across multiple points in the intervention lifecycle",
  },
  {
    icon: "/assets/icons/Vector.svg",
    title: "Advocacy & Policy",
    description:
      "Provides granular insights that can be shared with government, NGOs, academia, and multilateral institutions to drive systemic change.",
  },
  {
    icon: "/assets/icons/partner.svg",
    title: "Partner & Grantee Selection",
    description:
      "Enables strategic co-implementation by identifying pre-qualified institutions and individuals for SOSF Funds and Grants.",
  },
  {
    icon: "/assets/icons/book.svg",
    title: "Learning & Improvement",
    description:
      "Data is continuously fed into program updates, ensuring SOSF remains adaptive and evidence-based",
  },
]

export default function RegisterPowers() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div className="relative z-20 w-full max-w-6xl">
        <h2 className="text-1xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-16 sm:mb-20">
          What the Register Powers
        </h2>

        <div className="flex flex-col items-center">
          {/* First row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl">
          { featureData.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg">
                <CustomIcon src={feature.icon} alt={`${feature.title} Icon`} className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 text-blue-400" />
                <h3 className="text-[24px] font-semibold text-white font-[500] mb-3">{feature.title}</h3>
                <p className="text-[16px] text-base text-gray-200 leading-[24px] font-[400]">{feature.description}</p>
              </div>
            )) }
          </div>
            {/* Second row - 2 items centered */}
            <div className="flex flex-row justify-center items-stretch gap-6  w-full max-w-3xl mt-6 md:mt-8">
            { featureData.slice(3).map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg">
                  <CustomIcon src={feature.icon} alt={`${feature.title} Icon`} className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 text-blue-400" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-[16px] text-base text-gray-200 leading-[24px] font-[400]">{feature.description}</p>
                </div>
              )) }
            </div>
          </div>
      </div>
    </section>
  )
}
