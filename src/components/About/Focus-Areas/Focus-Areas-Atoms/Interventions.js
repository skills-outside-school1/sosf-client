import Accordion5 from "@/components/shared/accordions/Accordion5";
import { H2 } from "@/components/shared/Atoms/Typography/typography";

const accordionData = [
  {
    title: "SOSF Headstart Agropreneurs Program: Cultivating Resilient Futures",
    content:
      "The SOSF Headstart Agropreneurs Program empowers young farmers with modern practices, access to resources, and mentorship for resilient agricultural entrepreneurship.",
  },
  {
    title: "SOSF Education Empowerment Initiative",
    content:
      "This initiative supports students and educators through scholarships, digital learning tools, and mentorship to foster innovation and lifelong learning.",
  },
  {
    title: "SOSF Startup Catalyst Program",
    content:
      "We provide seed funding, incubation, and advisory services for startups focused on solving local challenges with global potential.",
  },
];

const Interventions = () => {
  return (
    <div className="w-full py-8 md:py-10 flex flex-col">
      <div className="mx-auto px-4 md:px-[4rem] lg:px-[7.6rem] w-full ">
        {/* Heading */}
        <div className="text-center flex flex-col gap-6">
          <H2>INTERVENTION</H2>
          <p className="text-gray-600">
            At (SOSF), our strategic model is built on direct, impactful
            interventions designed to address critical gaps in education,
            entrepreneurship, and employability. We empower individuals and
            communities through targeted programs and catalytic funding,
            fostering a new generation of problem-solvers and value creators.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="mt-10 w-full flex justify-center">
          <div className="w-full max-w-3xl flex justify-center items-center text-center">
            <Accordion5 items={accordionData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interventions;
