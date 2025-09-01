import React from "react";

// HeroSection component to accept props and render accordingly
const ReuseHero = ({
  backgroundImage,
  title,
  children,
  overlayOpacity = "bg-opacity-60", // Optional: allow customization of overlay opacity
  height = "h-[520px]", // Optional: default height, but allow customization
}) => {
  return (
    <div className={`relative w-full ${height} flex flex-col bg-transparent  `}>
      <div
        className={`w-full ${height}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* <div
        className={`w-full ${height} absolute top-0 left-0 right-0 bg-gray-200 ${overlayOpacity} flex flex-col gap-y-[30px] justify-center px-5 items-start`}
      >
        {title && (
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-stone-200   to-white   font-montserrat md:text-7xl">
            {title}
          </h1>
        )}
        {children}
      </div> */}
    </div>
  );
};

export default ReuseHero;
