import React from "react";
import styles from "./landingFooter.module.css";

const LandingFooter = () => {
  return (
    <section className={styles.mainFooter}>
      <div className={styles.textFooter}>
        <span className={styles.footerCopyright}>©Copyright 2024</span>
        <span className={styles.footerCopyright}>
          Desarrollado por{" "}
          <span className={styles.hardcode}> HardCode Tecnologies</span>
        </span>
      </div>
    </section>
  );
};

export default LandingFooter;
