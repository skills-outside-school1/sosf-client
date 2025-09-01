import { useEffect } from "react";
import Hero from "@/components/Contacts/Contact-Atoms/Others/1/Hero";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-[fixed] pb-8 flex flex-col gap-y-[100px]  justify-center items-center p-2  md:px-[7rem] mb-[20%]">
      <Hero />
    </div>
  );
};

export default Index;
