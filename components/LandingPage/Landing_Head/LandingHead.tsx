"use client";

import React from "react";
import styles from "./landingHead.module.css";
import { Button } from "@mui/material";
import Textra from "react-textra";

const LandingHead = () => {
  return (
    <div id="HOME" className={styles.containHead}>
      <div className={styles.titleHead}>
        <h1>
          <Textra
            effect="topDown"
            duration={300}
            data={["EXCAVACIONES","DEMOLICIONES", "NIVELACIÓN", "DESMONTE", "LIMPIEZA"]}
          />
        </h1>
        <h2 className={styles.subtitle}>Todo en movimiento de suelo</h2>
        <span>Qui qui cillum minim minim ullamco ea aliqua occaecat et et ad irure.</span>
        <div className={styles.demoHead}>
          <a href="#CONTACT" rel="noopener noreferrer">
            <Button
              variant="contained"
              fullWidth
              sx={{
                fontWeight: "600",
                textTransform: "capitalize",
                fontFamily: "Anta, sans-serif",
                color: "black",
                padding: "12px 24px",
                backgroundColor: "#FECC01",
                ":hover": {
                  color: "black",
                  backgroundColor: "#fbd744",
                },
              }}
            >
              Contacto
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingHead;
