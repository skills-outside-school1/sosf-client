// src/components/GetInvolvedModal.jsx

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PathStepper from "./PathStepper";
import { H2 } from "@/components/shared/Atoms/Typography/typography";

export default function GetInvolvedModal({ onClose, ...props }) {
  const [path, setPath] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const paths = {
    Partner: {
      image: "/partner.png",
      sections: [
        {
          heading:
            "🤝 Are You an Individual with a Passion for Legacy and Social Impact?",
          lines: [
            "Join as a Scale-Up Impact Partner",
            "Who This Is For: Senior industry leaders, retirees, philanthropists, and purpose-driven individuals looking to create long-term, scalable impact aligned with their values.",
            "What You Can Do:",
            "• Launch your own social initiatives (scholarships, fellowships, mentorships, waqf funds, zakat administration, grant schemes, etc.)",
            "• Co-create and lead impactful projects with SOSF’s full backend support",
            "What SOSF Does for You:",
            "• Research and Strategy Design",
            "• Full Project Execution",
            "• Marketing and Outreach",
            "• Impact Reporting and Analytics",
            "• Partnership Development",
            "• Financial Oversight and Resource Allocation",
            "What’s Expected of You:",
            "• Provide the vision, funding (or assets), and time (if desired)",
            "• Collaborate in reviews and final decisions",
          ],
        },
        {
          heading:
            "🏢 Are You a Corporate or Institution Looking to Scale Your Social Impact?",
          lines: [
            "Join as a Strategic Impact Partner",
            "Who This Is For: Companies, institutions, or donor agencies seeking to: Launch or scale up CSR programs or SDG-aligned initiatives, access data and expertise, support SOSF programs, promote employee volunteerism.",
            "What You Can Do:",
            "• Co-develop and deploy initiatives with SOSF",
            "• Engage SOSF through Consultancy",
            "• Access Our Resources",
            "• Support Broader Impact",
            "• Support Social Innovators through Lead4Change",
            "What SOSF Offers You:",
            "• End-to-end program co-creation, consultancy, data access, deployment, direct beneficiary engagement, brand amplification.",
            "What’s Expected of You:",
            "• Commit capital, co-own project design, champion SOSF in your institution, engage on milestones.",
          ],
        },
      ],
    },

    // Add Invest, Govern, Participate in same format.

    Partner: {
      image: "/partner.png",
      sections: [
        {
          heading:
            "🤝 Are You an Individual with a Passion for Legacy and Social Impact?",
          lines: [
            "Join as a Scale-Up Impact Partner",
            "Who This Is For: Senior industry leaders, retirees, philanthropists, and purpose-driven individuals looking to create long-term, scalable impact aligned with their values.",
            "What You Can Do:",
            "• Launch your own social initiatives (scholarships, fellowships, mentorships, waqf funds, zakat administration, grant schemes, etc.)",
            "• Co-create and lead impactful projects with SOSF’s full backend support",
            "What SOSF Does for You:",
            "• Research and Strategy Design",
            "• Full Project Execution",
            "• Marketing and Outreach",
            "• Impact Reporting and Analytics",
            "• Partnership Development",
            "• Financial Oversight and Resource Allocation",
            "What’s Expected of You:",
            "• Provide the vision, funding (or assets), and time (if desired)",
            "• Collaborate in reviews and final decisions",
          ],
        },
        {
          heading:
            "🏢 Are You a Corporate or Institution Looking to Scale Your Social Impact?",
          lines: [
            "Join as a Strategic Impact Partner",
            "Who This Is For:",
            "• Companies, institutions, or donor agencies seeking to:",
            "• Launch or scale up CSR programs or SDG-aligned initiatives",
            "• Access data and expertise to shape impactful development interventions",
            "• Support or deploy SOSF’s programs, initiatives, or schemes",
            "• Promote employee volunteerism and social innovation",
            "What You Can Do:",
            "• Co-develop and deploy initiatives with SOSF",
            "• Engage SOSF through Consultancy",
            "• Access Our Resources",
            "• Support Broader Impact",
            "• Support Social Innovators through Lead4Change",
            "What SOSF Offers You:",
            "• End-to-end program co-creation",
            "• Consultancy across CSR, SDG integration, and employee engagement",
            "• Access to high-quality data, impact frameworks, and learning",
            "• Deployment support for field-ready or pilot-tested initiatives",
            "• Direct engagement with beneficiaries across Africa",
            "• Amplification of your brand’s social legacy through tailored outreach and reporting",
            "What’s Expected of You:",
            "• Commit capital (financial, technical, or in-kind) to initiatives",
            "• Co-own and co-review project design and impact reports",
            "• Champion the SOSF approach within your institution",
            "• Engage consistently with the SOSF team on strategic milestones",
          ],
        },
        {
          heading: "🌍 Are You a Network, Coalition, or Development Platform?",
          lines: [
            "Join as a Network & Ecosystem Partner",
            "Who This Is For: Associations, advocacy groups, research institutes, academic departments, innovation hubs, umbrella bodies (e.g., CSO forums, youth faith networks, student unions)",
            "What You Can Do:",
            "• Refer high-potential organizations/individuals to SOSF programs",
            "• Disseminate SOSF programs to your communities",
            "• Participate in ecosystem events and policy consultations",
            "• Co-develop thought leadership and feedback mechanisms",
            "What SOSF Offers You:",
            "• Data & insights sharing",
            "• Co-curation of convenings, campaigns, and dialogues",
            "• Visibility and inclusion in an African development ecosystem",
            "What’s Expected of You:",
            "• Share opportunities with your network",
            "• Provide referrals and data",
            "• Be an active contributor in knowledge exchange",
          ],
        },
      ],
    },

    Invest: {
      image: "/invest.png",
      sections: [
        {
          heading: "💰 INVEST",
          lines: [
            "💼 What Would You Like to Contribute?",
            "1. Liquid Financial Assets",
            "• Shares, Bonds (Local/Euro), Treasury Bills, Commercial Paper, Fixed Deposits, Mutual Funds, Annuities, Waqf",
            "2. Non-Liquid Assets",
            "• Cryptocurrency, Art, Real Estate, Commodities, NFTs, Royalties, Private Equity Interests",
            "3. Cash Contributions",
            "• Donations, CSR Capital, Grant Funding, Zakat, Sadaqah",
            "4. In-Kind Contributions",
            "• Products: Donated/adapted tools, platforms, services",
            "• Services: Free or subsidized tech, strategy, creative support",
            "• Expertise: Join SOSF as an Advisor",
          ],
        },
      ],
    },

    Govern: {
      image: "/govern.png",
      sections: [
        {
          heading: "🧠 GOVERN",
          lines: [
            "🙋🏾 Want to Shape Strategy and Oversight?",
            "1. Become a Volunteer",
            "• Types of Volunteer Roles: Program facilitation, Mentorship, Event hosting, Content support, Training & curriculum delivery",
            "• Expected Commitment: Flexible – project-based or ongoing",
            "Form: https://www.dropbox.com/scl/fi/l5493vd2nmmlcfjtzrhny/ABOUT-SOSF-Repaired-Repaired.doc?rlkey=sgt2q5ev8a70aa2yipc6sth8e&dl=0",
            "2. Become an SOSF Advisor",
            "• Who This Is For: Experts and leaders with deep knowledge in education, enterprise, finance, policy, development",
            "• Role: Provide insights, strategic advice, review initiatives, represent SOSF at engagements",
            "• Commitment: Flexible; invited to quarterly strategic review sessions or ad-hoc as required",
            "3. Join the Board of Trustees",
            "• Role: Governance, fiduciary oversight, accountability",
            "• Expected of You: Attendance at board meetings, approvals, strategic alignment",
            "4. Join the Team (Management)",
            "• Note: Employment and operations are handled by our management company – [PIF Africa]. Visit [Join PIF Africa] to explore roles.",
          ],
        },
      ],
    },

    Participate: {
      image: "/participate.png",
      sections: [
        {
          heading: "🙋🏾 PARTICIPATE",
          lines: [
            "📊 PARTICIPATE IN OUR INTERVENTIONS",
            "🎯 Are You a Beneficiary? Start Your Journey:",
            "K–12 Student (JSS3): Start with SOSF Bridge Basic → Apply for SOSF Funds OR Skill Up (Career or Business) → Apply for SOSF Funds",
            "K–12 Student (SS1–SS3): Start with SOSF Bridge Intermediate → Same progression",
            "K–12 Teacher (JSS3): Join as Bridge Basic Teacher → Continue Skill Up → Apply for SOSF Funds",
            "K–12 Teacher (SS1–SS3): Join as Bridge Intermediate Teacher → Same progression",
            "Tertiary Student: Start with SOSF Bridge Advanced → Skill Up → Apply for SOSF Funds",
            "Entrepreneur: Start with Online Skill Up for Business → Apply for SOSF Enterprise Funds",
            "Professional: Start with Online Skill Up for Career → Apply for SOSF Scholarship Funds",
            "Farmer: Join SOSF Headstart Agropreneurs",
            "Informal Sector Worker: Join SOSF Headstart (General)",
            "School (K–12): Enroll teachers/students in SOSF Bridge",
            "Intermediary Org: Apply for SOSF Grants",
          ],
        },
        {
          heading: "📊 PARTICIPATE IN DATA",
          lines: [
            "1. Access Data (as User)",
            "• Request access to SOSF reports & raw datasets",
            "• Fill: SOSF Data Access Registration Form",
            "2. Contribute Data (as Contributor)",
            "• Register your beneficiaries/org in the SOSF Social & Economic Register",
          ],
        },
        {
          heading: "📢 PARTICIPATE IN ADVOCACY",
          lines: [
            "1. As a Catalyst (Ambassador): Submit your change initiative (alumni only) → https://www.dropbox.com/scl/fi/l5493vd2nmmlcfjtzrhny/ABOUT-SOSF-Repaired-Repaired.doc?rlkey=sgt2q5ev8a70aa2yipc6sth8e&dl=0",
            "2. As a Mobilizer: Access volunteer reports or register to engage SOSF volunteers → Volunteer Access Request Form",
            "3. As a Connector: Form/join coalitions with SOSF → Connector Registration Form",
            "4. As a Champion: Support institutionalization/mainstreaming of our interventions → Champion Form",
            "5. As an Awareness Builder: Co-host/Invite SOSF to campaigns or events → Awareness Collaboration Form",
            "6. As a Policy Advocate: Co-design policies/regulations/manuals with SOSF → Policy & Regulation Advocacy Form",
          ],
        },
      ],
    },
  };

  return (
    <motion.div
      //   onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-6 z-50 overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-full w-full space-y-6  flex flex-col flex-1  justify-center    overflow-y-auto  min-h-[300px]  max-h-[500px] mx-auto"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
      >
        {!path ? (
          <>
            <H2 className="text-xl font-semibold">Which Path Suits You?</H2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.keys(paths).map((key) => (
                <button
                  key={key}
                  className="bg-secondary_blue text-black py-2 px-4 rounded  transition"
                  onClick={() => setPath(key)}
                >
                  {key}
                </button>
              ))}
            </div>
          </>
        ) : (
          <PathStepper
            data={paths[path]}
            allPaths={paths}
            onSelectPath={setPath}
            currentPath={path}
            image={paths[path].image}
          />
        )}
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 w-[100px] bg-blue text-white rounded hover:bg-gray-900"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
