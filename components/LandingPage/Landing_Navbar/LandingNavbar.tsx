"use client";

import React, { useEffect, useState } from "react";
import styles from "./landingnavbar.module.css";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const LandingNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const mobileMenu = async () => {
    if (typeof window !== "undefined") {
      window.document.getElementById("mobileMenu")!.style.left === "0px"
        ? (document.getElementById("mobileMenu")!.style.left = "-115%")
        : (document.getElementById("mobileMenu")!.style.left = "0px");
      setShowMobileMenu(!showMobileMenu);
    }
  };

  let lastScrollTop = 0;

  useEffect(() => {
    const setear = () => {
      if (typeof window !== "undefined") {
        const navbar = document.getElementById("navbar");
        let { scrollY } = window;
        if (scrollY > lastScrollTop) {
          navbar?.classList.remove(styles.visible);
        } else if (scrollY < lastScrollTop) {
          navbar?.classList.add(styles.visible);
        }
        lastScrollTop = scrollY <= 0 ? 0 : scrollY;
      }
    };
    const scroll = () => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", setear, { passive: true });
      }
    };
    scroll();
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", setear);
      }
    };
  });

  return (
    <nav id="navbar" className={`${styles.navLanding} ${styles.visible}`}>
      <div className={styles.containImg}>
      <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/bulldozer.png" alt="bulldozer"/>
        <h3>Ezequiel Servicios</h3>
      </div>
      <div className={styles.hamburguer}>
        <IconButton
          edge="start"
          aria-label="open drawer"
          sx={{
            color: "black",
            mr: 2,
            width: "45px",
            height: "45px",
          }}
          onClick={() => mobileMenu()}
        >
          {showMobileMenu ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
      <div id="mobileMenu" onClick={()=>mobileMenu()} className={styles.divItems}>
        <a href="#HOME">Inicio</a>
        <a href="#ABOUT">Empresa</a>
        <a href="#SERVICES">Servicios</a>
        {/* <a href="#PRICING">Planes</a> */}
        <a href="#FAQ">FAQ</a>
        <a href="#CONTACT" className={styles.signin}>Contacto</a>
      </div>
    </nav>
  );
};

export default LandingNavbar;
