import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

const AdvocacySevenWaysSection = () => {
  const advocacyWays = [
    {
      title: "Ambassadors as Catalysts of Change",
      description:
        "We empower youth, teachers, and farmers to lead change from within their communities. Our ambassadors raise awareness, deploy grassroots interventions, and mentor their peers.",
      listTitle: "Spotlight",
      spotlight: [
        "GreenLITE turns peanut husk + plastic waste into eco-friendly boards (Nigeria)",
        "Skills on Wheels supports Almajiri children with literacy and tech skills (Nigeria)",
        "Kenyan Kids Network builds literacy through child-friendly libraries (Kenya)",
      ],
    },
    {
      title: "Volunteer Mobilization",
      description:
        "Our network of over 1,000 volunteers includes mentors, trainers, evaluators, and program assistants. They help us deliver our work, raise awareness, and expand SOSF’s reach across Africa.",
      listTitle: "Highlights ",
      spotlight: [
        "139 mentors",
        "120 certified trainers",
        "900+ active field and departmental volunteers",
      ],
    },
    {
      title: "Data & Research for Advocacy",
      description:
        "We turn data into insight and insight into action. Through our Social & Economic Register, we design factsheets, baseline reports, and public briefs to raise awareness and guide reform.",
      listTitle: "Impact",
      spotlight: [
        "Data from our reports influenced integration of life skills into the Nigerian secondary school curriculum in partnership with UNICEF.",
      ],
    },
    {
      title: "Policy & Regulatory Reform",
      description:
        "We advocate for legal and policy changes that improve access to education, employment, and entrepreneurship.",
      listTitle: "Wins",
      spotlight: [
        "Universal Basic Education Act amendment",
        "NGO regulatory input",
        "Youth policy contributions at national level",
      ],
    },
    {
      title: "Awareness & Movement Building",
      description:
        "From tweet chats to summits, we amplify voices and spotlight causes through strategic media engagement.",
      listTitle: "Channels",
      spotlight: [
        "Social Media & Webinars",
        "Print, Radio, and TV (NTA, Kaftan TV, etc.)",
        "Flagship Events: TEES, International Youth Day, Walk4Education, Digital Nigeria Conference, YALI Summit",
      ],
    },
    {
      title: "Institutionalizing Our Interventions",
      description:
        "We embed SOSF’s proven programs into national systems for long-term sustainability.",
      listTitle: "Examples",
      spotlight: [
        "300+ schools across 12 states integrated Girls4Girls & He4She programs",
        "15,000+ girls reached with life skills training",
        "Curriculum design and teacher training for UNICEF Girls Empowerment Program",
      ],
    },
    {
      title: "Stakeholder Engagement & Coalitions",
      description:
        "We co-create with government, private sector, and NGOs to scale impact and policy influence.",
      // listTitle: "Key Stakeholders",
      spotlight: [
        "Public Sector: NBS, FCT-SEB, NAFDAC, FAAN, Ministry of Education, NUC",
        "Private Sector: Shell, CBN, MTN, Flexisaf, Tongston",
        "NGOs & Donors: ACT Foundation, British Council, UNICEF, Denmark Embassy, YIAGA",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = advocacyWays[activeIndex];

  return (
    <div>
      {/* Title */}
      <div className="my-16 flex justify-center">
        <div className="inline-block border-4 border-[#94B1FC] rounded-2xl px-8 py-3">
          <h1 className="font-mont font-semibold text-[22px] md:text-[24px] text-center">
            7 Ways We Advocate
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-[4rem] lg:px-[7.6rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white drop-shadow-lg rounded-2xl overflow-hidden">
          {/* Left Section */}
          <div className="bg-[#EFF1F399] divide-y">
            {advocacyWays.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center justify-between px-5 py-5 cursor-pointer transition-all
                  ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-[rgba(203,218,255,0.9)] via-[rgba(223,232,253,0.9)] to-[rgba(203,218,255,0.9)]"
                      : "hover:bg-[#E6EBF7]"
                  }
                `}
              >
                <h1 className="font-mont font-semibold text-[18px]">
                  {item.title}
                </h1>
                <ChevronRight
                  className={`transition-transform ${
                    activeIndex === index ? "translate-x-1" : ""
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="p-8">
            <h1 className="font-mont text-[24px] text-[#0047AB] font-bold">
              {activeItem.title}
            </h1>

            <p className="my-5 text-[16px] leading-relaxed">
              {activeItem.description}
            </p>

            <h2 className="font-mont font-semibold text-[18px] mb-2">
              {activeItem.listTitle}
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-[15px]">
              {activeItem.spotlight.map((spot, i) => (
                <li key={i}>{spot}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvocacySevenWaysSection;
