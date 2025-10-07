import { useRef } from "react";
import { Badge } from "@/components/structure-chart/Main/Main-Atoms/badge";
import InfoCarousel from "./InfoCarousel";

// Shared icon for all slides
const sharedIcon = "/assets/icons/check.svg";

// Each object = one container of 4 cards
const partnerSlides = [
  {
    id: 1,
    title: "Are You an Individual with a Passion for Legacy and Social Impact?",
    subtitle: "Join as a Scale-Up Impact Partner",
    sections: {
      who: {
        heading: "Who this is for",
        content:
          "Senior industry leaders, retirees, philanthropists, and purpose-driven individuals looking to create long-term, scalable impact aligned with their values.",
      },
      expected: {
        heading: "What’s Expected of You",
        items: [
          "Provide the vision, funding (or assets), and time (if desired)",
          "Collaborate in reviews and final decisions",
        ],
      },
      canDo: {
        heading: "What You Can Do",
        items: [
          "Launch your own social initiatives (scholarships, fellowships, mentorships, waqf funds, zakat administration, grant schemes, etc.)",
          "Co-create and lead impactful projects with SOSF’s full backend support",
        ],
      },
      offers: {
        heading: "What SOSF Does for You",
        items: [
          "Research and Strategy Design",
          "Full Project Execution",
          "Marketing and Outreach",
          "Impact Reporting and Analytics",
          "Partnership Development",
          "Financial Oversight and Resource Allocation",
        ],
      },
    },
  },
  {
    id: 2,
    title: "Are You a Network, Coalition, or Development Platform?",
    subtitle: "Join as a Network & Ecosystem Partner",
    sections: {
      who: {
        heading: "Who this is for",
        content:
          "Associations, advocacy groups, research institutes, academic departments, innovation hubs, umbrella bodies (e.g., CSO forums, youth faith networks, student unions).",
      },
      expected: {
        heading: "What’s Expected of You",
        items: [
          "Share opportunities with your network",
          "Provide referrals and data",
          "Be an active contributor in knowledge exchange",
        ],
      },
      canDo: {
        heading: "What You Can Do",
        items: [
          "Refer high-potential organizations/individuals to SOSF programs",
          "Disseminate SOSF programs to your communities",
          "Participate in ecosystem events and policy consultations",
          "Co-develop thought leadership and feedback mechanisms",
        ],
      },
      offers: {
        heading: "What SOSF Offers You",
        items: [
          "Data & insights sharing",
          "Co-curation of convenings, campaigns, and dialogues",
          "Visibility and inclusion in an African development ecosystem",
        ],
      },
    },
  },
  {
    id: 3,
    title: "Are You a Corporate or Institution Looking to Scale Your Social Impact?",
    subtitle: "Join as a Strategic Impact Partner",
    sections: {
      who: {
        heading: "Who this is for",
        content:
          "Companies, institutions, or donor agencies seeking to: launch or scale up CSR programs, access data and expertise to shape impactful interventions, support or deploy SOSF programs, and promote employee volunteerism.",
      },
      expected: {
        heading: "What’s Expected of You",
        items: [
          "Commit capital (financial, technical, or in-kind) to initiatives",
          "Co-own and co-review project design and impact reports",
          "Champion the SOSF approach within your institution",
          "Engage consistently with the SOSF team on strategic milestones",
        ],
      },
      canDo: {
        heading: "What You Can Do",
        items: [
          "Co-develop and deploy initiatives with SOSF",
          "Engage SOSF through consultancy",
          "Access our resources",
          "Support broader impact",
          "Support social innovators through Lead4Change",
        ],
      },
      offers: {
        heading: "What SOSF Offers You",
        items: [
          "End-to-end program co-creation",
          "Consultancy across CSR, SDG integration, and employee engagement",
          "Access to high-quality data, impact frameworks, and learning",
          "Deployment support for field-ready or pilot-tested initiatives",
          "Direct engagement with beneficiaries across Africa",
          "Amplification of your brand’s social legacy through tailored outreach and reporting",
        ],
      },
    },
  },
];

export default function PartnerSection() {
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current && carouselRef.current.nextSlide) {
      carouselRef.current.nextSlide();
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="mb-8 flex items-center justify-between">
        <Badge
          variant="outline"
          className="text-partnerblue border-partnerblue rounded-full px-3 py-1"
        >
          Partner
        </Badge>
      </div>

      {/* Carousel Section */}
      <InfoCarousel ref={carouselRef} slides={partnerSlides} icon={sharedIcon} />
    </div>
  );
}
