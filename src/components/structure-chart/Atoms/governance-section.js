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
    <section className="py-10  bg-white sm:mx-2 px-4" id="govern-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Badge
            variant="outline"
            className="mb-4 text-black text-2xl  border-governblue rounded-lg px-4 py-1 font-medium"
          >
            Govern
          </Badge>
          <p className="text-md text-gray-600 mb-2 text-xl ">
            Join as a scale up impact partner
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800 tracking-tight">
              Want to Shape Strategy and Oversight?
            </h2>

            <Link href="https://pifafrica.org/careers" target="_blank">
              <Button
                variant="default"
                className="bg-[#B7C8F4] text-blue-800 hover:bg-[#B7C8F4] rounded-lg px-5 py-2.5 font-semibold w-full md:w-auto"
              >
                Join the team
              </Button>
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Become an SOSF Advisor */}
          <Card className="bg-background_blue border border-gray-200/80 rounded-2xl shadow-sm p-4">
            <CardHeader className="text-center items-center pb-4">
              <CustomIcon src={advisor} className="w-8 h-8 text-indigo-400" />
              <Button
                variant="default"
                className="bg-[#B7C8F4] text-blue-800 hover:bg-bg-[#B7C8F4] rounded-lg px-5 py-2.5 font-semibold"
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
            <CardContent className="space-y-4">
              {advisorContent.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Become a Volunteer */}
          <Card className="bg-background_blue border border-gray-200/80 rounded-2xl shadow-sm p-4">
            <CardHeader className="text-center items-center pb-4">
              <CustomIcon
                src={board}
                className="text-center w-8 h-8 text-indigo-400"
              />
              <Button
                variant="default"
                className="bg-[#B7C8F4] text-blue-800 hover:bg-bg-[#B7C8F4] rounded-lg px-5 py-2.5 font-semibold"
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
            <CardContent>
              <h4 className="font-semibold text-sm text-left mb-3">
                Types of Volunteer Roles
              </h4>
              <div className="space-y-3">
                {volunteerRoles.map((role, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600">{role}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Join the Board of Trustees */}
          <Card className="bg-background_blue border border-gray-200/80 rounded-2xl shadow-sm p-4">
            <CardHeader className="text-center items-center pb-4">
              <CustomIcon
                src={tertiarystd}
                className="w-8 h-8 text-indigo-400"
              />
              <Button
                variant="default"
                className="bg-[#B7C8F4] text-blue-800 hover:bg-bg-[#B7C8F4] rounded-lg px-5 py-2.5 font-semibold"
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
            <CardContent className="space-y-4">
              {trusteesContent.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
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
      <div className="max-w-7xl mx-auto mt-20">
        <div className="border-t-2 border-blue-400 border-dashed"></div>
      </div>
    </section>
  );
}
