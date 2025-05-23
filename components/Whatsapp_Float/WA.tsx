"use client";

import React, { useEffect, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "./wa.module.css";

function WA() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY > 300 ? setScroll(false) : setScroll(true);
    };

    globalThis.window.addEventListener("scroll", handleScroll);

    return () => {
      globalThis.window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.floating_button}>
      <a
        href={`https://wa.me/541166843836?text=${encodeURIComponent(
          `Hola, me gustaría recibir información sobre los servicios de Frasvial`
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon
          sx={{
            width: "40px",
            height: "40px",
            transition: "0.3s all ease",
            ":hover": { transform: 'scale(1.1)' },
          }}
        />
      </a>
    </div>
  );
}

export default WA;
