import React from "react";
import Head from "next/head";
import HomeContainer from "@/components/home/Home-Container/Home-Container";

const index = () => {
  return (
    <div className="main w-full h-auto overflow-hidden flex flex-col">
      {/* SEO and Meta Tags */}
      <Head>
        {/* Primary Meta Tags */}
        <title> Skills Outside School Foundation</title>
        <meta
          name="description"
          content="Welcome to Skills Outside School Foundation - a pan-African organization focusing on education, employability, and entrepreneurship, driving socio-economic development across Africa and beyond."
        />
        <meta
          name="keywords"
          content="education, employability, entrepreneurship, pan-African, socio-economic development, Skills Outside School Foundation, Grants, Grant, Startup, Farmers, Investment, Investors, 
          Partnerships, Partnership, Volunteering, Relationship, Volunteer, Govern, Governance, "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph Meta Tags (for Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="Home | Skills Outside School Foundation"
        />
        <meta
          property="og:description"
          content="A pan-African organization focusing on education, employability, and entrepreneurship, driving socio-economic development across Africa and beyond."
        />
        <meta
          property="og:image"
          content="/assets/images/logos/logo-renew.png"
        />
        <meta property="og:url" content="https://skillsoutsideschool.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content=" Skills Outside School Foundation"
        />
        <meta
          name="twitter:description"
          content="Welcome to Skills Outside School Foundation - empowering youth across Africa through education, employability, and entrepreneurship."
        />
        <meta
          name="twitter:image"
          content="/assets/images/logos/logo-renew.png"
        />
        <meta name="twitter:site" content="@skillsSOSF" />

        {/* Additional Meta Tags for SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Skills Outside School Foundation" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://skillsoutsideschool.com" />

        {/* Structured Data for SEO (JSON-LD) */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Skills Outside School Foundation",
            "url": "https://www.skillssosfoundation.org",
            "logo": "/assets/images/logos/logo-renew.png",
            "sameAs": [
           "https://www.facebook.com/skilloutsideschool/",
              "https://twitter.com/SOS_Foundation1?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
              "https://ng.linkedin.com/company/skills-outside-school-foundation"
            ],
            "description": "The leading Pan-African Education, Entrepreneurship & Employability organization disrupting development & redefining philanthropy through data, interventions & advocacy."
          }`}
        </script>
      </Head>

      {/* Main Content */}
      <HomeContainer />
    </div>
  );
};

export default index;
