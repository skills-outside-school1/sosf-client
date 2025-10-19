import Accordion5 from "@/components/shared/accordions/Accordion5";
import { H2 } from "@/components/shared/Atoms/Typography/typography";

const accordionData = [
  {
    title: "SOSF Headstart Agropreneurs Program: Cultivating Resilient Futures",
    content:
      "Our SOSF Headstart Agropreneurs Program is transforming small-scale and vulnerable farming across Africa. This initiative boosts yield, income, and resilience for farmers of high-value crops like cassava and plantain. We replace traditional extension systems with a cutting-edge Al-powered mobile platform, offering real-time, farm-specific advice (even without literacy), weather and crop forecasts, simple bookkeeping tools, and direct access to suppliers and markets. Beyond digital empowerment, the SOSF Headstart Farmer Growth Fund provides crucial non-cash input vouchers, equipment leasing, and low-interest working capital loans, ensuring productivity and financial inclusion. We're starting in Nigeria and scaling across Africa, connecting farmers digitally to opportunity and building a sustainable model for agricultural transformation.",
  },
  {
    title:
      "SOSF Bridge Program: Bridging K12 & Tertiary Education to Entrepreneurship & Employability",
    content:
      "The SOSF Bridge Program is our flagship education intervention, equipping students in government secondary and tertiary institutions with the knowledge, skills, and attitudes to thrive in tomorrow's world. This structured, 3-tier program (Bridge Basic, Intermediate, and Advanced) builds essential 21st-century competencies through in-school sessions, teacher-led facilitation, and data-backed evaluation. What sets us apart? We integrate academic learning with career, academic, TVET, and enterprise learning, all powered by Tongston's K-12 Entrepreneurial Education Platform. It's a decentralized, teacher-led model with an online portal and robust M&E, ensuring sustainability and tangible outcomes like enhanced literacy, career readiness, and early exposure to employment and entrepreneurship. We don't just fill gaps; we bridge them, preparing students to succeed in higher education, launch ventures, or join the workforce.",
  },
  {
    title:
      "SOSF Online Skill Up for Business (OSB): Global Skills, Local Impact",
    content:
      "The Online Skill-Up for Business (OSB) is a series of flagship digital courses designed to equip existing and emerging entrepreneurs with the knowledge, skills, and attitude aligned with Tongston's Entrepreneurial Thinking model, needed to start, grow, and sustain impactful ventures. Reaching over 2,000 learners across 80+ countries, OSB integrates Al-powered tools, real-world case studies, and practical business modules hosted on Udemy for global access. Learners who complete the course unlock further support on the T-World platform, including certification, digital badges, and eligibility for funding, mentorship, and venture-building resources.",
  },
  {
    title: "SOSF Online Skill Up for Career (OSC): Global Skills, Local Impact",
    content:
      "(SOSF) to prepare job seekers, students, and young professionals for meaningful intrapreneurial careers. Aligned with Tongston's Entrepreneurial Thinking model, OSC builds essential knowledge, skills, and attitudes through practical learning, Al-driven tools, and real-world career scenarios. Delivered globally via Udemy, learners who complete OSC unlock certification, digital badges, and gain access to further support on the T-World platform—including job readiness assessments, mentorship, and curated employment opportunities.",
  },
  {
    title: "SOSF Grants: Catalyzing Disruptive Development",
    content: (
      <>
        <p className="mb-5">
          Beyond our core programs, SOSF Grants provide targeted,
          non-programmatic funding to individuals and institutions poised to
          drive transformative change across Africa. Our grant philosophy is
          built on integrity, accountability, and genuine partnership. We offer
          distinct schemes:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-black">
          <li>
            <span className=" font-semibold">Large Grants:</span> Up to NGN
            20,000,000 (or equivalent, with a maximum NGN 10,000,000 cash
            component) over up to three years, designed for established
            organizations ready to scale impactful initiatives in education,
            employability, or entrepreneurship. We provide extensive
            non-financial support, focusing on strategic clarity and outcomes.
          </li>
          <li>
            <span className=" font-semibold">Small Grants:</span> Up to NGN
            5,000,000 (or equivalent, with a maximum NGN 1,000,000 cash
            component) over up to three years, supporting promising emerging
            innovators in our thematic areas. We offer flexible funding and
            tailored in-kind support to accelerate growth and deepen influence.
          </li>
          <li>
            <span className=" font-semibold">Micro Grants:</span> Up to NGN
            500,000 (or equivalent, entirely in cash) for passionate individuals
            and budding community-focused organizations. These grants provide
            crucial seed funding complemented by a standardized package of
            in-kind support across enterprise, media, learning & development,
            and finance capabilities—nurturing grassroots innovation and
            fostering long-term sustainability.
          </li>
        </ol>
        <p className="mt-5">
          Through our grants, we actively collaborate with partners to disrupt
          development, believing that well-placed funding, combined with
          comprehensive support, can spark profound, lasting change.
        </p>
      </>
    ),
  },
];

const Interventions = () => {
  return (
    <div className="w-full py-8 md:py-10 flex flex-col">
      <div className="mx-auto px-4 md:px-[4rem] lg:px-[7.6rem] w-full">
        {/* Heading */}
        <div className="text-center flex flex-col gap-6">
          <H2>INTERVENTION</H2>
          <p className="text-black">
            At (SOSF), our strategic model is built on direct, impactful
            interventions designed to address critical gaps in education,
            entrepreneurship, and employability. We empower individuals and
            communities through targeted programs and catalytic funding,
            fostering a new generation of problem-solvers and value creators.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="mt-10 w-full flex justify-center">
          <div className="w-full max-w-4xl flex justify-center items-center text-left">
            <Accordion5 items={accordionData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interventions;
