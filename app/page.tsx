import React from "react";
import LandingNavbar from "@/components/LandingPage/Landing_Navbar/LandingNavbar";
import styles from "./page.module.css";
import LandingHead from "@/components/LandingPage/Landing_Head/LandingHead";
import LandingAbout from "@/components/LandingPage/Landing_About/LandingAbout";
import LandingFooter from "@/components/LandingPage/Landing_Footer/LandingFooter";
import LandingBenefits from "@/components/LandingPage/Landing_benefits/LandingBenefits";
import LandingPricing from "@/components/LandingPage/Landing_Pricing/LandingPricing";
import LandingFaqs from "@/components/LandingPage/Landing_FAQs/LandingFaqs";
import LandingContact from "@/components/LandingPage/Landing_Contact/LandingContact";
import WA from "@/components/Whatsapp_Float/WA";
import LandingDemos from "@/components/LandingPage/Landing_Demos/LandingDemos";
import LandingServices from "@/components/LandingPage/Landing_Services/LandingServices";

function page() {
  return (
    <div className={styles.mainPage}>
      <LandingNavbar />
      <LandingHead />
      <LandingAbout />
      <LandingServices />
      <hr style={{height: '25px', border: 'none', backgroundColor:'#202020'}}/>
      <LandingBenefits />
      {/* <LandingPricing /> */}
      {/* <LandingDemos /> */}
      <LandingFaqs />
      <LandingContact />
      <LandingFooter />
      <WA />
    </div>
  );
}

export default page;
