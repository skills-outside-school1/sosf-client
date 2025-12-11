import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/cards/card";
import { Badge } from "@/components/structure-chart/Atoms/badge";
import { Button } from "@/components/structure-chart/Atoms/button";
import { CheckCircle2 } from "lucide-react";
import CustomIcon from "./CustomIcon";
import Link from "next/link";
import IframeModal from "../../shared/modals/iframe-modal";
import { useState } from "react";

// Shared icon
const advisor = "/assets/icons/advisor.svg";
const board = "/assets/icons/advisor.svg";
const tertiarystd = "/assets/icons/tertiarystd.svg";

const formUrls = {
  volunteerFormUrl:
    "https://forms.zohopublic.com/halimaabba/form/VolunteerApplicationForm/formperma/WKRQtXOv2NVaAQbw77Rd_LTMyKSX2bYqp0BlYzvRRvg",
  advisorFormUrl:
    "https://forms.zohopublic.com/halimaabba/form/VolunteerApplicationForm/formperma/WKRQtXOv2NVaAQbw77Rd_LTMyKSX2bYqp0BlYzvRRvg",
  trusteesFormUrl:
    "https://forms.zohopublic.com/halimaabba/form/VolunteerApplicationForm/formperma/WKRQtXOv2NVaAQbw77Rd_LTMyKSX2bYqp0BlYzvRRvg",
};

export default function GovernanceSection() {
  // Modal state
  const [activeModal, setActiveModal] = useState({
    isOpen: false,
    title: "",
    description: "",
    url: "",
  });

  const advisorContent = [
    {
      title: "Who this is for",
      description:
        "Experts and leaders with deep knowledge in education, enterprise, finance, policy, development",
    },
    {
      title: "Role",
      description:
        "Provide insights, strategic advice, review initiatives, represent SOSF at engagements",
    },
  ];

  const volunteerRoles = [
    "Program facilitation",
    "Mentorship",
    "Event hosting",
    "Content support",
    "Training & curriculum delivery",
  ];

  const trusteesContent = [
    {
      title: "Role",
      description: "Governance, fiduciary oversight, accountability",
    },
    {
      title: "What's expected of you",
      description:
        "Attendance at board meetings, approvals, strategic alignment",
    },
  ];

  // Modal handlers
  const handleOpenModal = (title, description, url) => {
    setActiveModal({
      isOpen: true,
      title,
      description,
      url,
    });
  };

  const handleCloseModal = () => {
    setActiveModal({
      isOpen: false,
      title: "",
      description: "",
      url: "",
    });
  };

  return (
    <section className="px-4 py-16 mx-auto bg-white sm:px-6" id="govern-section">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <Badge
            variant="outline"
            className="px-4 py-1.5 mb-6 text-2xl font-medium text-black rounded-lg border-governblue"
          >
            Govern
          </Badge>
          <p className="mb-4 text-lg text-gray-600">
            Join as a scale up impact partner
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
              Want to Shape Strategy and Oversight?
            </h2>

            <Link href="https://pifafrica.org/careers" target="_blank">
              <Button
                variant="default"
                className="bg-[#B7C8F4] text-blue-800 hover:bg-[#A5B9E9] rounded-lg px-6 py-3 font-semibold w-full md:w-auto whitespace-nowrap"
              >
                Join the team
              </Button>
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Become an SOSF Advisor */}
          <Card className="flex flex-col p-6 border shadow-sm bg-background_blue border-gray-200/80 rounded-2xl">
            <CardHeader className="items-center pb-6 space-y-4 text-center">
              <div className="p-3 rounded-full bg-indigo-50">
                <CustomIcon src={advisor} className="w-8 h-8 text-indigo-500" />
              </div>
              <Button
                variant="default"
                className="bg-[#B7C8F4] text-blue-800 hover:bg-[#A5B9E9] rounded-lg px-5 py-2.5 font-semibold w-full"
                onClick={() =>
                  handleOpenModal(
                    "Become an SOSF Advisor",
                    "Apply to become an SOSF Advisor and provide strategic guidance in education, enterprise, finance, policy, and development.",
                    formUrls.advisorFormUrl
                  )
                }
              >
                <CardTitle className="text-lg font-semibold text-gray-800">
                  Become an SOSF Advisor
                </CardTitle>
              </Button>
            </CardHeader>
            <CardContent className="pt-0 space-y-5">
              {advisorContent.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Become a Volunteer */}
          <Card className="flex flex-col p-6 border shadow-sm bg-background_blue border-gray-200/80 rounded-2xl">
            <CardHeader className="items-center pb-6 space-y-4 text-center">
              <div className="p-3 rounded-full bg-indigo-50">
                <CustomIcon
                  src={board}
                  className="w-8 h-8 text-indigo-500"
                />
              </div>
              <Button
                variant="default"
                className="bg-[#B7C8F4] text-blue-800 hover:bg-[#A5B9E9] rounded-lg px-5 py-2.5 font-semibold w-full"
                onClick={() =>
                  handleOpenModal(
                    "Become a Volunteer",
                    "Apply to become a SOSF Volunteer and contribute through program facilitation, mentorship, event hosting, content support, and training.",
                    formUrls.volunteerFormUrl
                  )
                }
              >
                <CardTitle className="text-lg font-semibold text-gray-800">
                  Become a Volunteer
                </CardTitle>
              </Button>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              <h4 className="text-sm font-semibold text-gray-800">
                Types of Volunteer Roles
              </h4>
              <div className="space-y-3">
                {volunteerRoles.map((role, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed text-gray-600">{role}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Join the Board of Trustees */}
          <Card className="flex flex-col p-6 border shadow-sm bg-background_blue border-gray-200/80 rounded-2xl">
            <CardHeader className="items-center pb-6 space-y-4 text-center">
              <div className="p-3 rounded-full bg-indigo-50">
                <CustomIcon
                  src={tertiarystd}
                  className="w-8 h-8 text-indigo-500"
                />
              </div>
              <Button
                variant="default"
                className="bg-[#B7C8F4] text-blue-800 hover:bg-[#A5B9E9] rounded-lg px-5 py-2.5 font-semibold w-full"
                onClick={() =>
                  handleOpenModal(
                    "Join the Board of Trustees",
                    "Apply to join the SOSF Board of Trustees and provide governance, fiduciary oversight, and strategic alignment.",
                    formUrls.trusteesFormUrl
                  )
                }
              >
                <CardTitle className="text-lg font-semibold text-gray-800">
                  Join the Board of Trustees
                </CardTitle>
              </Button>
            </CardHeader>
            <CardContent className="pt-0 space-y-5">
              {trusteesContent.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Iframe Modal */}
      <IframeModal
        isOpen={activeModal.isOpen}
        onClose={handleCloseModal}
        title={activeModal.title}
        description={activeModal.description}
        iframeUrl={activeModal.url}
      />

      {/* Dashed Line Divider */}
      <div className="mx-auto mt-24 max-w-7xl">
        <div className="border-t-2 border-blue-400 border-dashed"></div>
      </div>
    </section>
  );
}