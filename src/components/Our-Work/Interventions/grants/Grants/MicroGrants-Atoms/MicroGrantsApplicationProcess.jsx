import React from "react";
import MicroGrantsProcessCard from "./MicroGrantsProcessCard";

const MicroGrantsApplicationProcess = ({ introText, processSteps }) => {
  return (
    <div className="w-full">
      <h2 className="mb-8 text-3xl font-bold">
        Application Process & Grant Cycle
      </h2>
      <p className="mb-8 leading-relaxed text-gray-600">{introText}</p>

      <div className="grid grid-cols-1    md:grid-cols-2 gap-4 px-2   md:pr-24">
        {/* Left column - 2 tall cards */}
        <div className="space-y-4">
          <MicroGrantsProcessCard
            title={processSteps.leftColumn[0].title}
            description={processSteps.leftColumn[0].description}
            bgColor={processSteps.leftColumn[0].bgColor}
            height={processSteps.leftColumn[0].height}
          />
          <MicroGrantsProcessCard
            title={processSteps.leftColumn[1].title}
            description={processSteps.leftColumn[1].description}
            bgColor={processSteps.leftColumn[1].bgColor}
            height={processSteps.leftColumn[1].height}
          />
        </div>

        {/* Right column - 3 stacked cards */}
        <div className="space-y-4">
          {processSteps.rightColumn.map((step, index) => (
            <MicroGrantsProcessCard
              key={index}
              title={step.title}
              description={step.description}
              bgColor={step.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MicroGrantsApplicationProcess;
