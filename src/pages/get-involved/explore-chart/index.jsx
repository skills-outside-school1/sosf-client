import { useEffect } from "react";

import Head from "next/head";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head>
        <title>
          {" "}
          Explore Structure Chart | Skills Outside School Foundation{" "}
        </title>
      </Head>

      <div className="w-full h-[fixed] justify-start items-start"></div>
    </>
  );
};

export default Index;
