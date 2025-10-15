import { useEffect } from "react";


const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative  w-full h-[fixed]     md:h-[800px] flex flex-col   bg-transparent ">
      <div
        className="   w-full  h-[520px]  mt-0"
        style={{
          backgroundImage: `url('/assets/maps/MapChart_Map.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="w-full h-[520px] absolute  top-0 left-0 right-0 bg-blue bg-opacity-10  flex flex-col justify-center items-center  ">

        <h1 className="text-xl font-black text-black font-montserrat md:text-5xl ">
       News & Insights
        </h1>
      </div>
      {/* <Hero/> */}
    </div>
  );
};

export default Index;
