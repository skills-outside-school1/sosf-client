// import React from "react";
// import Navbar from "@/components/home/nav";
// import Footer from "@/components/home/Footer";
// import BackToTop from "@/components/shared/Atoms/Button-Atoms/Backt-To-Top";

// export default function MainLayout({ children, showFooter = true, showNav = true }) {
//   return (
//     <>
//       {showNav && <Navbar />}
//       {children}
//       {showFooter && <Footer />}{showFooter && <Footer />}
//       <BackToTop />
//     </>
//   );
// }

import React from "react";
import Navbar from "@/components/home/nav";
import Footer from "@/components/home/Footer";
import BackToTop from "@/components/shared/Atoms/Button-Atoms/Backt-To-Top";

export default function MainLayout({
  children,
  showFooter = true,
  showNav = true,
}) {
  return (
    <>
      {showNav && <Navbar />}
      {children}
      {showFooter && <Footer />}
      <BackToTop />
    </>
  );
}
