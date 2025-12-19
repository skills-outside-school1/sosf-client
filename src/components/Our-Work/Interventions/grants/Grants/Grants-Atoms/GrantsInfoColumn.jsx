import React from "react";
import GrantsInfoBox from "./GrantsInfoBox";

const GrantsInfoColumn = ({ infoBoxes }) => {
  return (
    <div className="flex flex-col items-end gap-6">
      {infoBoxes.map((box, index) => (
        <GrantsInfoBox
          key={index}
          title={box.title}
          description={box.description}
          bgColor={box.bgColor}
          width={box.width}
          padding={box.padding}
        />
      ))}
    </div>
  );
};

export default GrantsInfoColumn;