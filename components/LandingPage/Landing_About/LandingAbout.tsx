import React from "react";
import styles from "./landingAbout.module.css";
import { Button } from "@mui/material";

const LandingAbout = () => {
  return (
    <section id="ABOUT" className={styles.sectionAbout}>
      <div className={styles.textAbout}>
        <h1 className={styles.aboutH1}>
          Nuestra experiencia es lo que nos caracteriza.
        </h1>
        <hr />
        <h3 className={styles.aboutH3}>
          Creemos firmemente que la confianza y una comunicación abierta son
          fundamentales en cada proyecto. Ha sido nuestra fórmula desde el
          principio, y es la razón por la que nuestros clientes se ven
          beneficiados.
        </h3>
        <Button
          variant="contained"
          className={styles.button}
        >
          VER PROYECTOS 
        </Button>
      </div>
    </section>
  );
};

export default LandingAbout;
