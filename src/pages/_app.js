import React, { useState, useEffect } from "react";
import Head from "next/head";
import "./global.css";
import "../styles/swipper.css";
import "../styles/our_work.css";
// import { FadeLoader } from "react-spinners";
import Navbar from "@/components/home/nav";
import Script from "next/script";
import Footer from "@/components/home/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../utils/helpers/fontawesome";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import CookiesModal from "@/components/shared/modals/modal1";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/saas.css";
import BackToTop from "@/components/shared/Atoms/Button-Atoms/Backt-To-Top";
import Loading from "@/components/shared/animations/Loading";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [iscookiesopen, setIsCookiesOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const closeCookies = () => {
    setIsCookiesOpen(false);
    sessionStorage.setItem("cookiesShown", "true");
  };

  useEffect(() => {
    if (iscookiesopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [iscookiesopen]);

  // Simulate website loading
  const simulateWebsiteLoading = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 4000);
    });
  };

  useEffect(() => {
    simulateWebsiteLoading()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Loading error:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const cookiesShown = sessionStorage.getItem("cookiesShown");
    if (!cookiesShown) {
      const timeout = setTimeout(() => {
        setIsCookiesOpen(true);
      }, 20000); // 20 seconds in milliseconds

      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  useEffect(() => {
    const preferences = JSON.parse(localStorage.getItem("cookiePreferences"));
    if (preferences) {
      preferences.forEach((preference) => {
        if (preference.isChecked) {
          console.log(`Applying ${preference.text}`);
          if (preference.text === "Analytics Cookies" && preference.isChecked) {
            loadAnalyticsScript();
          }
        }
      });
    }
  }, []);

  const loadAnalyticsScript = () => {
    const script = document.createElement("script");
    script.src = "https://www.google-analytics.com/analytics.js";
    script.async = true;
    document.body.appendChild(script);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Skills Outside School Foundation</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/images/logos/logo-renew.png"
        />

        {/* Primary SEO Meta Tags */}
        <meta
          name="description"
          content="Skills Outside School Foundation is the leading pan-African organization focused on education, employability, and entrepreneurship, driving transformational socio-economic development globally."
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
        <meta property="og:title" content="Skills Outside School Foundation" />
        <meta
          property="og:description"
          content="Leading organization in Africa promoting education, employability, and entrepreneurship for transformational development."
        />
        <meta
          property="og:image"
          content="/assets/images/logos/logo-renew.png"
        />
        <meta property="og:url" content="https://www.skillsoutsideschool.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skills Outside School Foundation" />
        <meta
          name="twitter:description"
          content="A foundation focused on education, employability, and entrepreneurship, driving socio-economic development globally."
        />
        <meta
          name="twitter:image"
          content="/assets/images/logos/logo-renew.png"
        />
        <meta name="twitter:site" content="@sosf" />

        {/* Additional Meta Tags for SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Skills Outside School Foundation" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.skillsoutsdeschool.com" />

        {/* Structured Data for SEO (JSON-LD) */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Skills Outside School Foundation",
            "url": "https://www.skillsoutsideschool.com",
            "logo": "/assets/images/logos/logo-renew.png" ,
            "sameAs": [
              "https://www.facebook.com/skilloutsideschool/",
              "https://twitter.com/SOS_Foundation1?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
              "https://ng.linkedin.com/company/skills-outside-school-foundation"
            ],
            "description": "The Skills Outside School Foundation is the leading pan-African organization focusing on education, employability, and entrepreneurship."
          }`}
        </script>
      </Head>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-M02SK14LBZ"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M02SK14LBZ');
        `}
      </Script>

      {loading ? (
        <Loading />
      ) : (
        <>
          {iscookiesopen && <CookiesModal onClose={closeCookies} />}
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <BackToTop />
          <ToastContainer />
        </>
      )}
    </React.Fragment>
  );
}

export default MyApp;
