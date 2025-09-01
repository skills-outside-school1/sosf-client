import React from "react";
import Image from "next/image";

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-3 justify-start items-start w-full gap-4">
      {images.map((image, index) => (
        <section key={index} className="
         h-[150px] w-[300px]
        md:w-[450px] md:h-[300px] overflow-hidden">
          <Image
            src={image}
            alt={`image_${index}`}
            width={450}
            height={300}
            className="        
            h-[150px] w-[300px]
            md:w-[450px] md:h-[300px] transform transition-all duration-700 ease-in-out hover:scale-105 hover:duration-700 hover:ease-in-out hover:transition-all"
          />
        </section>
      ))}
    </div>
  );
};

export default ImageGrid;
