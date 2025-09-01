import React from "react";
import Image from "next/image";
import SubHero from "@/components/shared/Atoms/Subhero-Atoms/Subhero";
import Link from "next/link";
import { P } from "@/components/shared/Atoms/Typography/typography";
import TabbedContentDisplay from "@/components/shared/cards/TouchContentDisplay";

export default function PillSubHero() {
  //table data goes here
  const data = [
    {
      feature: "33-Part Entrepreneurial Education Framework",
      meaning:
        "Based on the Tongston model: project-based, real-world, student-centered learning",
    },
    {
      feature: "Data-Driven Design",
      meaning:
        "Every intervention is informed by our Social & Economic Register and desktop data",
    },
    {
      feature: "Teacher Training + Tech",
      meaning:
        "CPD + AI-powered platforms for lesson planning, assessment & professional growth",
    },
    {
      feature: "Gamification & Personalization",
      meaning:
        "Students and teachers receive incentives, badges & personalized learning journeys",
    },
    {
      feature: "Global Benchmark, Local Impact",
      meaning:
        "Content aligned with SDGs, African realities & sector-specific pathways (TVET, STEM, enterprise)",
    },
  ];

  const data2 = [
    {
      feature: "Student Outcomes",
      meaning:
        "Improved performance in Employment & Entrepreneurship as well as overall academic performance",
    },
    {
      feature: "Teacher Capacity",
      meaning: "Over 500 trained educators delivering enhanced lessons",
    },
    {
      feature: "Farmer Empowerment",
      meaning:
        "500+ low-income farmers trained in cooperative, technical & business skills with increased yields and market access",
    },
    {
      feature: "Career Alignment",
      meaning:
        "Thousands of students now aware of career pathways + entrepreneurship options",
    },
    {
      feature: "Policy Impact",
      meaning: "Life skills mainstreamed into national curriculum with UNICEF",
    },
    {
      feature: "System Change",
      meaning:
        "Institutionalized M&E for education through our AI-powered data systems",
    },
  ];

  const data3 = [
    {
      feature: "SOSF Bridge",
      meaning:
        "Career and employability skills integrated into classroom learning across secondary & tertiary levels",
    },
    {
      feature: "SOSF Headstart",
      meaning:
        "Work-readiness for informal sector entrepreneurs and adults in agriculture and other trades",
    },
    {
      feature: "Online Skill-Up for Career (OSC)",
      meaning:
        "Digital modules preparing youth for job search, workplace readiness, and career growth",
    },
    {
      feature: "T-World Platform",
      meaning:
        "Access to assessments, certifications, jobs, mentoring & skills-based pathways across sectors",
    },
  ];

  const data4 = [
    {
      feature: "Foundation Skills",
      meaning: "Literacy, numeracy, digital tools, communication",
    },
    {
      feature: "Transferable Skills",
      meaning: "Problem-solving, teamwork, self-management, leadership",
    },
    {
      feature: "TVET & Technical Skills",
      meaning:
        "Agriculture value chains, media production, customer service, sales",
    },
    {
      feature: "Career Management",
      meaning:
        "Resume writing, interview skills, goal-setting, workplace ethics",
    },
    {
      feature: "Job Creation Skills",
      meaning:
        "Intrapreneurship projects, community initiatives, market mapping",
    },
  ];

  const data5 = [
    {
      feature: "Youth Work Readiness",
      meaning:
        "Thousands of learners trained in career decision-making, workplace conduct, and sector pathways",
    },
    {
      feature: "Increased Employability",
      meaning:
        "Alumni placed in internships, work-study programs, and paid roles",
    },
    {
      feature: "Adult Livelihoods",
      meaning:
        "Farmers and informal entrepreneurs earning more through improved cooperative and market skills",
    },
    {
      feature: "Industry Linkages",
      meaning:
        "Curriculum co-developed with employers, job fairs, and mentorship by professionals across sectors",
    },
    {
      feature: "Digital Footprint",
      meaning:
        "Credentials, job-matching and performance data tracked on our platforms, creating digital work passports",
    },
  ];

  const data6 = [
    {
      feature: "Enterprise Skills",
      meaning:
        "Opportunity identification, market testing, business model design, value creation",
    },
    {
      feature: "Entrepreneurial Thinking",
      meaning: "Innovation, resilience, risk-taking, growth mindset",
    },
    {
      feature: "Financial & Economic Literacy",
      meaning: "Pricing, costing, budgeting, taxation, investment",
    },
    {
      feature: "Industry & Sector Alignment",
      meaning:
        "Sector-specific training in agriculture, media, education, health, etc.",
    },
    {
      feature: "Tools & Platforms",
      meaning:
        "Access to digital learning, e-wallets, funding pathways, mentorship",
    },
  ];

  const data7 = [
    {
      feature: "SOSF Bridge",
      meaning:
        "Enterprise skills integrated into secondary and tertiary school curriculum; students build micro-projects aligned with their community needs",
    },
    {
      feature: "SOSF Headstart (Agropreneurs)",
      meaning:
        "Business, cooperative & technical training for low-income adult entrepreneurs in agriculture and informal sectors",
    },
    {
      feature: "Online Skill-Up for Business (OSB)",
      meaning:
        "AI-powered online learning for youth & adults looking to start or grow sustainable ventures, with post-course access to funding and support",
    },
    {
      feature: "T-World Platform",
      meaning:
        "Tools for pricing, costing, bookkeeping, branding, storytelling, cooperative formation, e-wallets, and funding — all in one digital ecosystem",
    },
  ];

  const data8 = [
    {
      feature: "Youth Entrepreneurship",
      meaning:
        "Over 2,000 youth reached across 80+ countries via our online platforms, building real projects and pitching ventures",
    },
    {
      feature: "Adult Micro-Enterprise Growth",
      meaning:
        "Farmers and artisans supported to improve productivity, access markets, and scale community-based ventures",
    },
    {
      feature: "Intrapreneurship Pathways",
      meaning:
        "Tertiary students trained in entrepreneurial thinking within their field (law, media, medicine, etc.) to drive innovation from within institutions",
    },
    {
      feature: "Financial Literacy",
      meaning:
        "Entrepreneurs across programs trained in costing, pricing, and cashflow tools for enterprise sustainability",
    },
    {
      feature: "Marketplace Enablement",
      meaning:
        "Entrepreneurs matched with funding, mentors, markets, and digital tools through our T-World platform",
    },
  ];

  //Edu - Data falls bellow
  const Edu_Data = [
    {
      title: " Why We Focus on Education",
      content: (
        <span>
          Across Africa, millions of children and youth are denied access to
          quality education due to:
          <span className=" list-disc   flex flex-col gap-y-4 text-base mt-5 mb-5 px-5">
            <li>Outdated, impractical curricula</li>
            <li>Under-resourced teachers and infrastructure</li>
            <li>Gender, geographic, and economic inequality</li>
            <li>Lack of career guidance and learning tools</li>
            <li>Disconnection between learning and the job market</li>
          </span>
          Even those who complete school often emerge unprepared for work or
          entrepreneurship. At SOSF, we are changing that — by redefining what
          education looks like, and who it truly serves.
        </span>
      ),
      image: "",
    },
    {
      title: " Our Approach: Education, The SOSF Way",
      content: (
        <span>
          We follow the Tongston Entrepreneurial Education Framework (TEEM -
          [More on the Tongston Entrepreneurial Education Model – Refer to
          <a
            href="http://tworldk12.zohosites.com"
            target="_blank"
            className="underline"
          >
            {" "}
            Tongston’s K-12 website
          </a>
          ]) — a globally benchmarked model that combines:
          <span className="list-dash flex flex-col gap-y-5 px-5 mt-5 mb-5 text-base">
            <li>Knowledge</li>
            <li>Skills & Tools</li>
            <li>Attitudes</li>
          </span>
          to prepare learners for real-world success.
          <br />
          <b>Our model is:</b>{" "}
          <span className="list-dash flex flex-col gap-y-5 px-5 mt-5 mb-5 text-base">
            <li>Project-Based</li>
            <li>Competency-Focused</li>
            <li>Teacher-Led, Technology-Supported</li>
            <li>Aligned with Market, Industry & SDG Needs</li>
          </span>
          Whether it’s through a teacher workshop in Kebbi or a digital lesson
          plan in Swahili, every SOSF intervention is designed to prepare youth
          and educators with the tools to lead, create, employ, and adapt.
        </span>
      ),
      image: "",
    },

    {
      title: " What We Deliver",
      content: (
        <span>
          <b> SOSF Bridge</b>
          <span className="list-dash flex flex-col gap-y-5 px-5 mt-5 mb-5 text-base">
            A flagship K12 & Tertiary school-based program that equips students
            and teachers in public secondary schools with:
            <li>Life Skills</li>
            <li>Career Skills</li>
            <li>Academic Skills</li>
            <li>Technical & Vocational Training</li>
            <li>Enterprise Skills</li>
          </span>
          Built on Entrepreneurial Education led by teachers
          <br />
          <b>Deployed in 3 levels:</b>{" "}
          <span className="list-dash flex flex-col gap-y-5 px-5 mt-5 mb-5 text-base">
            <li> Basic (JSS)</li>
            <li>Intermediate (SSS)</li>
            <li>Advanced (Tertiary)</li>
          </span>
          <b> SOSF Headstart</b>{" "}
          <span className="list-dash flex flex-col gap-y-5 px-5 mt-5 mb-5 text-base">
            A livelihoods transformation program for adult entrepreneurs in the
            informal economy — especially in agriculture. We provide:
            <li>Cooperative training</li>
            <li>Financial literacy</li>
            <li>Access to tools, inputs, and funding</li>
            <li>Digital, technical, and advisory support</li>
          </span>{" "}
          <b>Online Skill-Up for Business & Career</b>{" "}
          <span className="list-dash flex flex-col gap-y-5 px-5 mt-5 mb-5 text-base">
            Digital courses on Udemy teaching real-world business and career
            readiness skills. Powered by AI and open to learners globally.
          </span>
        </span>
      ),
      image: "",
    },

    {
      title: " Our Distinct Edge",
      content: (
        <div className="w-full flex flex-col gap-y-4">
          <div className="overflow-x-auto px-4 py-6 w-full pb-6 flex flex-col gap-y-5">
            <table className="min-w-full divide-y divide-gray-200 rounded-xl shadow-sm bg-[#000000] dark:bg-secondary_blue">
              <thead className="bg-gray-100 dark:bg-blue">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    What It Means
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-blue">
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-blue transition duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-white dark:text-black font-medium">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-white dark:text-black">
                      {item.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <b>What Success Looks Like</b>
          We measure our impact across:
          <div className="overflow-x-auto px-4 py-6 w-full pb-6 flex flex-col gap-y-5">
            <table className="min-w-full divide-y divide-gray-200 rounded-xl shadow-sm bg-[#000000] dark:bg-secondary_blue">
              <thead className="bg-gray-100 dark:bg-blue">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Outcome
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Example
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-blue">
                {data2.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-blue transition duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-white dark:text-black font-medium">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-white dark:text-black">
                      {item.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <b>Interventions+ Data + Advocacy = Systems Change</b>
          Our education work powers our advocacy and data agenda:
          <span className="list-disc flex flex-col gap-y-4 px-5  text-base">
            <li>
              We track outcomes and impact across beneficiary groups to the
              extent possible.
            </li>
            <li>
              We publish insights to inform partners, donors, and government
              action.
            </li>
            <li>
              We use evidence to trigger direct SOSF programs or recommend
              third-party interventions.
            </li>
            <li>
              We mobilize alumni, teachers, and ambassadors as advocates and
              catalysts for change.
            </li>
          </span>
          <b>Join Us to Transform Education</b>
          Are you a policymaker, partner, school, teacher, or donor?
          <br />
          <span className="list-disc flex flex-col gap-y-4 px-5  text-base">
            <strong> Work with us to:</strong>
            <li>Reform education systems</li>
            <li>Empower students and teachers</li>
            <li>Scale what works</li>
            <li>Institutionalize change</li>
            <li>Build a future-ready Africa</li>
          </span>
          <span className="flex flex-rw  flex-wrap  gap-y-3 gap-x-3    text-blue font-bold  list-dash  text-sm  w-full ">
            <Link className="hover-line" href="/contact">
              Contact Us
            </Link>{" "}
            <Link className="hover-line" href="/partners">
              Partner With Us Us
            </Link>{" "}
            <Link className="hover-line" href="/our-work">
              Explore Our Work
            </Link>{" "}
            <Link className="hover-line" href="/contact">
              Invest in our Work
            </Link>
          </span>
        </div>
      ),
      image: "",
    },

    {
      title: "EMPLOYABILITY: TRANSFORMING EDUCATION INTO DECENT WORK",
      content: (
        <div className="w-full flex flex-col gap-y-4">
          At SOSF, we don’t stop at education. We go further — transforming
          learning into meaningful, sustainable work and income opportunities
          for youth and adults alike.
          <br />
          <br />
          <b> Education is not the end goal — it is the launchpad</b>We believe
          employability means the ability to find, maintain, and grow in decent
          work that:
          <span className="list-disc flex flex-col gap-y-4 px-5  text-base">
            <li>Aligns with one’s skills, knowledge, tools and attitude</li>
            <li>Meets personal needs and aspirations</li>
            <li>Creates value for society</li>
          </span>
          Whether it’s a student preparing for their first job or an agropreneur
          seeking better market access, our mission is to equip them to thrive
          in today’s workforce and tomorrow’s economy.
          <b>The Challenge</b>Africa’s youth face a triple crisis:{" "}
          <span className="list-inside flex flex-col gap-y-4 px-5  text-base">
            <li>
              <b> Unemployment</b> – Millions of young people, including
              tertiary graduates, remain jobless.
            </li>
            <li>
              <b> Underemployment</b> – Those with jobs often earn below
              survival wages or work in low-productivity sectors.
            </li>
            <li>
              <b> Skills Mismatch</b> – Education systems fail to equip learners
              with the soft, technical, and entrepreneurial skills the job
              market demands.
            </li>
            In Nigeria alone, over 11 million youth are unemployed, and many
            more are ill-prepared to transition into the world of work. This is
            not just an economic crisis — it is a systemic failure of education
            to deliver outcomes.
          </span>
          <b>Our Solution: From Learning to Earning</b>
          SOSF’s employability agenda is anchored in our education model and
          powered by:{" "}
          <span className="list-inside flex flex-col gap-y-4 px-5  text-base">
            {" "}
            <li>
              Competency-Based Education that integrates soft skills, digital
              literacy, leadership, civic values & emotional intelligence
            </li>
            <li>
              Career Mapping Tools to align learning to real industry pathways
            </li>
            <li>
              Hands-On Learning via internships, simulations, job shadowing &
              work readiness training
            </li>
            <li>
              Cross-sector Partnerships with employers, agencies, and private
              sector actors
            </li>
            <li>
              Access to Opportunity via our T-World platform, mentorship
              programs, digital credentials, and job-matching tools
            </li>
            We follow the Tongston Entrepreneurial Education Framework to ensure
            learning is not only about knowledge — it is about application,
            adaptability, and advancement in real-world careers.
          </span>
          <b>What We Offer</b>
          <div className="overflow-x-auto px-4 py-6 w-full pb-6 flex flex-col gap-y-5">
            <table className="min-w-full divide-y divide-gray-200 rounded-xl shadow-sm bg-[#000000] dark:bg-secondary_blue">
              <thead className="bg-gray-100 dark:bg-blue">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Program
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Employability Focus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-blue">
                {data3.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-blue transition duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-white dark:text-black font-medium">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-white dark:text-black">
                      {item.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <b>Core Competencies We Build</b>Our employability programs deliver
          real-world, transferable outcomes:
          <div className="overflow-x-auto px-4 py-6 w-full pb-6 flex flex-col gap-y-5">
            <table className="min-w-full divide-y divide-gray-200 rounded-xl shadow-sm bg-[#000000] dark:bg-secondary_blue">
              <thead className="bg-gray-100 dark:bg-blue">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Competency
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Example Activities
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-blue">
                {data4.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-blue transition duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-white dark:text-black font-medium">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-white dark:text-black">
                      {item.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <b>What Success Looks Like</b>
          <div className="overflow-x-auto px-4 py-6 w-full pb-6 flex flex-col gap-y-5">
            <table className="min-w-full divide-y divide-gray-200 rounded-xl shadow-sm bg-[#000000] dark:bg-secondary_blue">
              <thead className="bg-gray-100 dark:bg-blue">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Outcome
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Example
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-blue">
                {data5.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-blue transition duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-white dark:text-black font-medium">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-white dark:text-black">
                      {item.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <b>Employability = Systems Change</b>
          <span className="flex flex-col gap-y-4 list-none text-base ">
            <li>
              Our work is not just about finding jobs. It’s about transforming
              the way education connects to industry and society.
            </li>
            <li>
              We use data to identify market needs, and design programs that
              close real-world gaps. We conduct advocacy to push for
              industry-relevant curricula, investment in TVET, and
              public-private partnership. We institutionalize outcomes, turning
              pilots into policy and scaling what works.
            </li>
          </span>
          <b>Ready to Empower a Workforce?</b>Are you a job-seeker, employer,
          policymaker, or partner?{" "}
          <span className="flex flex-col gap-y-4 px-5 text-base  list-disc">
            Work with us to:
            <li>Bridge the education–employment gap</li>
            <li>Empower informal and formal workforce participation</li>
            <li>
              Build a new pipeline of youth ready for 21st-century careers
            </li>
          </span>
          <span className="flex flex-rw  flex-wrap  gap-y-3 gap-x-3    text-blue font-bold  list-dash  text-sm  w-full ">
            <Link className="hover-line" href="/contact">
              Contact Us
            </Link>{" "}
            <Link className="hover-line" href="/partners">
              Join Our Online Career Course
            </Link>{" "}
            <Link className="hover-line" href="/our-work">
              Fund or Mentor an Intrapreneur
            </Link>{" "}
            <Link
              className="hover-line"
              href="https://t-world.tongston.com"
              target="_blank"
            >
              Visit the T-World Platform
            </Link>
          </span>
        </div>
      ),
      image: "",
    },

    {
      title: "ENTREPRENEURSHIP: FROM LEARNING TO VALUE CREATION",
      content: (
        <div className="w-full flex flex-col gap-y-4">
          At SOSF, we don’t teach entrepreneurship as an isolated skill — we
          treat it as a mindset, a tool for transformation, and a solution to
          development challenges. We believe in entrepreneurship not just as a
          path to income, but as a way for young people and adults to create
          solutions, build livelihoods, and contribute to society — whether as
          founders of startups, builders of small businesses, or change-makers
          within institutions.
          <br /> <b>Education is the vehicle. Enterprise is the destination.</b>
          <span className="flex flex-col gap-y-4 px-5 list-disc  ">
            <b>Our Philosophy</b>
            Entrepreneurship at SOSF means the ability to:
            <li>Start, scale, and sustain a solution or business</li>
            <li>That meets your needs and the needs of others</li>
            <li>Using knowledge, skills, tools, and the right attitude</li>
            <li>Across any industry, sector, or profession</li>
            Whether you&apos;re a farmer, teacher, engineer, or creative — you
            need entrepreneurial skills to survive and thrive in today&apos;s
            economy. <br />
            <br />
            We follow the Tongston Entrepreneurial Education Framework,
            equipping learners with:
          </span>
          <span className="flex flex-col gap-y-4 px-5 list-disc  ">
            <li>
              Project-based, interdisciplinary, and sector-driven learning
            </li>
            <li>Personal, social, and financial responsibility</li>
            <li>Tools for problem-solving, innovation, and sustainability</li>
          </span>
          <b>The Challenge</b>
          Despite increasing investment in youth entrepreneurship, real
          enterprise outcomes remain limited due to:
          <span className="flex flex-col gap-y-4 px-5 list-disc  ">
            <li>
              Narrow interpretation of enterprise as limited to vocational
              skills
            </li>
            <li>
              Lack of entrepreneurial thinking among professionals,
              intrapreneurs, and students in formal education
            </li>
            <li>
              Skills acquisition programs disconnected from real market demands
              and sustainability
            </li>
            <li>
              No integration of entrepreneurship into school and university
              curricula in a practical, relevant way
            </li>
            At SOSF, we address this by embedding enterprise development in
            every education level and across every professional or vocational
            path.
          </span>
          <b> Our Approach</b>
          We don’t run stand-alone “business training.” We build entrepreneurial
          education systems that work.
          <li className="list-none">Our programs develop:</li>
          <div className="overflow-x-auto px-4 py-6 w-full pb-6 flex flex-col gap-y-5">
            <table className="min-w-full divide-y divide-gray-200 rounded-xl shadow-sm bg-[#000000] dark:bg-secondary_blue">
              <thead className="bg-gray-100 dark:bg-blue">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Type of Skills
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-blue">
                {data6.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-blue transition duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-white dark:text-black font-medium">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-white dark:text-black">
                      {item.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            We serve formal and informal entrepreneurs, and intrapreneurs across
            professions.
          </div>
          <b>Our Entrepreneurship Programs</b>
          <div className="overflow-x-auto px-4 py-6 w-full pb-6 flex flex-col gap-y-5">
            <table className="min-w-full divide-y divide-gray-200 rounded-xl shadow-sm bg-[#000000] dark:bg-secondary_blue">
              <thead className="bg-gray-100 dark:bg-blue">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Program{" "}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Focus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-blue">
                {data7.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-blue transition duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-white dark:text-black font-medium">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-white dark:text-black">
                      {item.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <b>What Success Looks Like</b>
          <div className="overflow-x-auto px-4 py-6 w-full pb-6 flex flex-col gap-y-5">
            <table className="min-w-full divide-y divide-gray-200 rounded-xl shadow-sm bg-[#000000] dark:bg-secondary_blue">
              <thead className="bg-gray-100 dark:bg-blue">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Outcome{" "}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider"
                  >
                    Example
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-blue">
                {data8.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-blue transition duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-white dark:text-black font-medium">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-white dark:text-black">
                      {item.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* start another content here */}
          <b>Entrepreneurship = Development</b>Entrepreneurship is how we unlock
          the potential of education to drive:
          <span className="flex flex-col gap-y-4 px-5 list-disc  ">
            <li>Poverty reduction</li>
            <li>Food security</li>
            <li>Job creation</li>
            <li>Digital transformation</li>
            <li>Community-led change</li>We advocate for:
            <li>
              Mainstreaming enterprise thinking into all levels of education
            </li>
            <li>Investment in youth and women-led ventures</li>
            <li>
              Integration of entrepreneurship into public policy and curriculum
              reform
            </li>
            Our alumni aren’t just trained — they’re building value and changing
            their communities.
          </span>
          <b>Ready to Power an Entrepreneurial Revolution?</b>
          Are you an aspiring entrepreneur, a teacher, a government official, or
          a corporate partner?
          <span className="flex flex-col gap-y-4 px-5 list-disc  ">
            Join us to:
            <li>Scale inclusive enterprise education</li>
            <li>Enable entrepreneurship across sectors and regions</li>
            <li>Fund or co-create solutions for a more sustainable Africa</li>
            <span className="flex flex-rw  flex-wrap  gap-y-3 gap-x-3    text-blue font-bold  list-dash  text-sm  w-full ">
              <Link className="hover-line" href="/contact">
                Contact Us
              </Link>{" "}
              <Link className="hover-line" href="/partners">
                Join Our Online Business Course
              </Link>{" "}
              <Link className="hover-line" href="/our-work">
                Fund or Mentor a Venture
              </Link>{" "}
              <Link
                className="hover-line"
                href="https://t-world.tongston.com"
                target="_blank"
              >
                Visit the T-World Platform
              </Link>
            </span>
          </span>
        </div>
      ),
      image: "",
    },
  ];

  //render method falls under ere
  return (
    <div className="flex flex-col gap-y-12 justify-start items-start w-full h-[fixed]">
      <div className="w-full h-[fixed]   justify-start items-start px-2  flex flex-col md:flex-row gap-x-[4rem] gap-y-5  md:px-[4rem] lg:px-[6rem] ">
        <section className="pillar-image-container w-full  h-[fixed]  md:w-[400px]   ">
          <Image
            src="/assets/images/home/pillars.png"
            alt="Pillar Image"
            width={500}
            height={500}
            className="w-[400px] h-auto  object-contain  shadow-secondary_blue   "
          />
        </section>
        <section className="sub-text-container  flex flex-col justify-start items-end   w-full    h-[fixed]   md:mb-auto md:w-[70%]  md:mt-9">
          <P className=" ">
            Our pillars are education, entrepreneurship and employability.
            <br />
            <br />
            Education (as a holistic focus on Knowledge, Skills & Tools and
            Attitude) is the bedrock driving Entrepreneurship (Starting, Scaling
            & Sustaining a sustainable enterprise/business that meets their
            needs & that of others) & Employability (Finding, Maintaining &
            Growing in a decent work in line with your knowledge, skills &
            attitude that meets their needs & meets the need of others; whilst
            accessing the tools needed to thrive) in our target beneficiaries.
            <br />
            <br />
            We believe the key to unlocking the 16 other SDGs lies in{" "}
            <strong>SDG4 – Quality Education</strong>.
          </P>
        </section>
      </div>

      {/* second section on the detailed Eduction Pillar */}
      <div className="w-full h-[fixed]   justify-start items-start px-2  flex flex-col  gap-x-[4rem] gap-y-5  md:px-[4rem] lg:px-[6rem] ">
        <section className="pillar-image-container w-full  h-[fixed]  md:w-[400px]   ">
          {/* <Image
            src="/assets/images/home/subpillars.png"
            alt="Pillar Image"
            width={500}
            height={500}
            className="w-[400px] h-auto  object-contain  shadow-secondary_blue   animate-bounce "
          /> */}
        </section>
        <section className="sub-text-container  flex flex-col justify-start items-end   w-full      h-[fixed]   md:mb-auto md:w-full  md:mt-9">
          {/* embed the switching ui here   this is a reusable component */}

          <TabbedContentDisplay
            sectionTitle="EDUCATION: THE FOUNDATION FOR TRANSFORMATION"
            sectionDescription={
              <>
                At Skills Outside School Foundation (SOSF), education is not
                just a program — it is the foundation of our mission to unlock
                the potential of Africa’s most underserved communities.
                <br />
                <br />
                We believe education is the single most powerful tool for social
                mobility, economic independence, and national development.
                That’s why education sits at the heart of everything we do —
                powering our interventions, guiding our advocacy, and driving
                the data that informs public policy and institutional change.
              </>
            }
            items={Edu_Data}
            imageStyle={{ filter: "grayscale(0%)" }}
          />
        </section>

        {/* second section on the detailed Eduction Pillar */}
      </div>
    </div>
  );
}
