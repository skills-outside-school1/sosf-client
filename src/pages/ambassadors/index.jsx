import { useEffect } from "react";
import AMbassadorsContainer from "@/components/About/Ambasadors/Ambassadors-Container/AMbassadorsContainer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      <AMbassadorsContainer />
    </div>
  );
};

export default Index;
