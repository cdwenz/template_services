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
          Frasvial es una empresa con más de 30 años de experiencia en el rubro
          de la construcción y maquinaria vial. Nos especializamos en ofrecer
          soluciones integrales en movimiento de suelos, limpieza de afluentes y
          arroyos, demoliciones de gran escala y dragado de canales. Contamos
          con un equipo altamente capacitado y una flota de maquinaria moderna,
          incluyendo dragalinas de más de 35 metros de altura, lo que nos
          permite abordar proyectos de gran envergadura.
        </h3>
        <a href="#CONTACT">
          <Button variant="contained" className={styles.button}>
            CONTACTANOS
          </Button>
        </a>
      </div>
    </section>
  );
};

export default LandingAbout;
