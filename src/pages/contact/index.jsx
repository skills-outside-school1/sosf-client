import { useEffect } from "react";
import Head from "next/head";
import ContactContainer from "@/components/Contacts/Contact-Container/Contact-Container";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main w-full h-[fixed] flex flex-col overflow-hidden">
      {/* SEO and Meta Tags */}
      <Head>
        {/* Primary Meta Tags */}
        <title>Contact </title>
        <meta
          name="description"
          content="Contact Skills Outside School Foundation for inquiries, partnership opportunities, volunteering, and more. We're here to empower the youth across Africa through education, employability, and entrepreneurship."
        />
        <meta
          name="keywords"
          content="Contact, Inquiries, Skills Outside School Foundation, education, employability, entrepreneurship, partnerships, volunteering"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Open Graph Meta Tags (for Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="Contact Us | Skills Outside School Foundation"
        />
        <meta
          property="og:description"
          content="Get in touch with Skills Outside School Foundation for inquiries, partnerships, or volunteering opportunities. We're working to drive socio-economic development across Africa."
        />
        <meta
          property="og:image"
          content="/assets/images/logos/logo-renew.png"
        />
        <meta
          property="og:url"
          content="https://skillsoutsideschool.com/contact"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us | Skills Outside School Foundation"
        />
        <meta
          name="twitter:description"
          content="Contact Skills Outside School Foundation for partnership, inquiries, and volunteering. Empowering the youth across Africa through education and entrepreneurship."
        />
        <meta
          name="twitter:image"
          content="/assets/images/logos/logo-renew.png"
        />
        <meta name="twitter:site" content="@SOS_Foundation1" />

        {/* Additional Meta Tags for SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Skills Outside School Foundation" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://skillsoutsideschool.com/contact" />

        {/* Structured Data for SEO (JSON-LD) */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Skills Outside School Foundation",
            "url": "https://www.skillsoutsideschool.com",
            "logo": "/assets/images/logos/logo-renew.png",
            "sameAs": [
              "https://www.facebook.com/skilloutsideschool/",
              "https://twitter.com/SOS_Foundation1?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
              "https://ng.linkedin.com/company/skills-outside-school-foundation"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": " 0706-553-0455",
              "contactType": "Customer Service",
            "areaServed": ["NG", "GH", "KE", "ZA", "UG", "TZ", "RW", "ZM", "ZW", "CI", "SN", "ET", "MA", "DZ", "CM", "SD"]

              "availableLanguage": "English"
            },
            "description": "Get in touch with Skills Outside School Foundation for inquiries, partnerships, or volunteering opportunities. We're working to drive socio-economic development across Africa."
          }`}
        </script>
      </Head>

      {/* Main Content */}
      <ContactContainer />
    </div>
  );
};

export default Index;
