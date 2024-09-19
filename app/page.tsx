import React from "react";
import LandingNavbar from "@/components/LandingPage/Landing_Navbar/LandingNavbar";
import styles from "./page.module.css";
import LandingHead from "@/components/LandingPage/Landing_Head/LandingHead";
import LandingAbout from "@/components/LandingPage/Landing_About/LandingAbout";
import LandingFooter from "@/components/LandingPage/Landing_Footer/LandingFooter";
import LandingBenefits from "@/components/LandingPage/Landing_benefits/LandingBenefits";
import LandingContact from "@/components/LandingPage/Landing_Contact/LandingContact";
import WA from "@/components/Whatsapp_Float/WA";
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
      <LandingContact />
      <LandingFooter />
      <WA />
    </div>
  );
}

export default page;
