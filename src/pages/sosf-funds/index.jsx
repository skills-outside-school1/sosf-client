import FundsContainer from "@/components/Our-Work/Funds/Funds-Container/FundsContainer";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        {/* in page seo for the history page  */}
        <title>Our Work | Skills Outside School Foundation</title>
        <meta name="description" content="" />
      </Head>
      <FundsContainer />
    </div>
  );
};

export default index;
