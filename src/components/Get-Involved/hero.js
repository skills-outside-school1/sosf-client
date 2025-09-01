import React from "react";

function Hero() {
  return (
    <div className="w-full h-[fixed] md:h-[fixed] justify-start items-start overflow-hidden  rounded-b-[50%] md:rounded-bl-[50%] md:rounded-b-none">
      <section
        className={`   w-full h-[450px] md:h-[500px] rounded-b-[50%] md:rounded-bl-[50%] md:rounded-b-none`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 4, 0.5), rgba(0, 0, 4, 0.5)), url('https://media.tegna-media.com/assets/WZDX/images/c37c0391-46c8-42ba-98b3-a87db67ba08b/c37c0391-46c8-42ba-98b3-a87db67ba08b_1920x1080.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "zoomInOut 20s ease-in-out infinite",
        }}
      ></section>
      <style jsx>{`
        @keyframes zoomInOut {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
