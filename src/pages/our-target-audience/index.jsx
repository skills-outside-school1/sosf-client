import { useEffect } from "react";
import Head from "next/head";
import AudienceContainer from "@/components/About/Target-Audience/Audience-Container/AudienceContainer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      <Head>
        {/* in page seo for the about page  */}
        <title>Our Target Audience | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <AudienceContainer />
    </div>
  );
};

export default Index;
