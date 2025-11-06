"use client";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function AdvocacySevenWaysSection() {
  const cards = [
    {
      title: "Ambassadors as Catalysts of Change",
      desc:
        "We empower youth, teachers, and farmers to lead change from within their communities. Our ambassadors raise awareness, deploy grassroots interventions, and mentor their peers.",
      heading: "Spotlight",
      items: [
        "Skills on Wheels supports Almajiri children with literacy and tech skills (Nigeria)",
        "Kenyan Kids Network builds literacy through child-friendly libraries (Kenya)",
      ],
    },
    {
      title: "Volunteer Mobilization",
      desc:
        "Our network of over 1,000 volunteers includes mentors, trainers, evaluators, and program assistants. They help us deliver our work, raise awareness, and expand SOSF’s reach across Africa.",
      heading: "Highlights",
      items: ["139 mentors", "120 certified trainers", "900+ active field and departmental volunteers"],
    },
    {
      title: "Data & Research for Advocacy",
      desc:
        "We turn data into insight and insight into action. Through our Social & Economic Register, we design factsheets, baseline reports, and public briefs to raise awareness and guide reform.",
      heading: "Impact",
      items: [
        "Data from our reports influenced integration of life skills into the Nigerian secondary school curriculum (with UNICEF)",
        "GreenLITE turns peanut husk + plastic waste into eco-friendly boards (Nigeria)",
      ],
    },
    {
      title: "Policy & Regulatory Reform",
      desc:
        "We advocate for legal and policy changes that improve access to education, employment, and entrepreneurship.",
      heading: "Wins",
      items: ["Universal Basic Education Act amendment", "NGO regulatory input", "Youth policy contributions at national level"],
    },
    {
      title: "Awareness & Movement Building",
      desc:
        "From tweet chats to summits, we amplify voices and spotlight causes through strategic media engagement.",
      heading: "Channels",
      items: ["Social Media & Webinars", "Print, Radio, and TV (NTA, Kaftan TV, etc.)", "Flagship Events: TEES, International Youth Day, YALI Summit"],
    },
    {
      title: "Institutionalizing Our Interventions",
      desc:
        "We embed SOSF’s proven programs into national systems for long-term sustainability.",
      heading: "Examples",
      items: [
        "300+ schools across 12 states integrated Girls4Girls & He4She programs",
        "15,000+ girls reached with life skills training",
        "SOSF-led curriculum design and teacher training for UNICEF Girls Empowerment Program",
      ],
    },
    {
      title: "Stakeholder Engagement & Coalitions",
      desc:
        "We co-create with government, private sector, and NGOs to scale impact and policy influence.",
      heading: "",
      items: [
        "Public Sector: NBS, FCT-SEB, NAFDAC, FAAN, Ministry of Education, NUC",
        "Private Sector: Shell, CBN, MTN, Flexisaf, Tongston",
        "NGOs & Donors: ACT Foundation, British Council, UNICEF, Denmark Embassy, YIAGA",
      ],
    },
  ];

  // Split for exact two-row rendering like original
  const firstFour = cards.slice(0, 4);
  const lastThree = cards.slice(4);

  return (
    <section className="items-center justify-center w-full px-2 xl:px-0">
      <div className="py-8 rounded-[1.5rem] mx-auto xl:max-w-[1421px] sm:px-6 lg:p-16">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <div className="inline-block py-3 rounded-full md:px-8 bg-[rgba(59,130,246,0.36)]">
              <h2 className="text-2xl font-bold text-gray-900 font-mont">7 Ways We Advocate</h2>
            </div>
          </div>
        </AnimatedSection>

        {/* First Row: 4 cards on lg */}
        <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
          {firstFour.map((card, i) => (
            <AnimatedSection key={i} delay={(i + 1) * 0.1}>
              <motion.div
                whileHover={{ y: -8, shadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
                className="relative h-full p-6 overflow-hidden transition-shadow shadow-sm rounded-xl hover:shadow-xl bg-[linear-gradient(to_top_right,_#ffffff_30%,_rgba(59,130,246,0.18)_85%,_rgba(59,130,246,0.36)_5%)]"
              >
                <h3 className="relative z-10 mb-4 text-lg font-bold text-gray-900 font-mont">{card.title}</h3>
                <p className="relative z-10 mb-4 text-base leading-relaxed text-gray-700">{card.desc}</p>

                <p className="relative z-10 mb-2 font-semibold text-gray-900 text-md">{card.heading}</p>
                {card.items.map((item, idx) => (
                  <p key={idx} className="relative z-10 mb-2 text-sm text-gray-700">
                    {item}
                  </p>
                ))}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Second Row: 3 cards on lg */}
        <div className="grid grid-cols-1 gap-6 md:px-16 md:grid-cols-2 lg:grid-cols-3">
          {lastThree.map((card, i) => (
            <AnimatedSection key={i + 4} delay={(i + 5) * 0.1}>
              <motion.div
                whileHover={{ y: -8, shadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
                className="relative h-full p-6 overflow-hidden transition-shadow shadow-sm rounded-xl hover:shadow-xl bg-[linear-gradient(to_top_right,_#ffffff_30%,_rgba(59,130,246,0.18)_85%,_rgba(59,130,246,0.36)_5%)]"
              >
                <h3 className="relative z-10 mb-4 text-lg font-bold text-gray-900 font-mont">{card.title}</h3>
                <p className="relative z-10 mb-4 text-base leading-relaxed text-gray-700">{card.desc}</p>

                <p className="relative z-10 mb-2 font-semibold text-gray-900 text-md">{card.heading}</p>
                {card.items.map((item, idx) => (
                  <p key={idx} className="relative z-10 mb-2 text-sm text-gray-700">
                    {item}
                  </p>
                ))}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
