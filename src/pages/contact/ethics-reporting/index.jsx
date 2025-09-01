import { useEffect } from "react";
import Hero2 from "@/components/Contacts/Contact-Atoms/Others/2/Hero2";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-[fixed] pb-8 flex flex-col gap-y-[100px]  justify-center items-center p-2  md:px-[7rem] mb-[20%]">
      <Hero2 />
    </div>
  );
};

export default Index;
