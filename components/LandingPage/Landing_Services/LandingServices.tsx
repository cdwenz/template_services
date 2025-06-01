import React from "react";
import styles from "./landingServices.module.css";

const steps = [
  {
    title: "Demoloción",
    img_light: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/ios/100/FFA400/demolition-excavator.png"
        alt="demolition-excavator"
        loading="lazy"
      />
    ),
    img_black: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/ios-filled/100/demolition-excavator.png"
        alt="demolition-excavator"
        loading="lazy"
      />
    ),
    alt: "excavator image",
    description:
      "Servicio de demolición de altas estructuras de hormigón, edificios, silos, tanques, usinas, pisos entre otros.",
  },
  {
    title: "Excavación y nivelación de terrenos",
    img_light: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/ios-filled/100/FFA400/bulldozer.png"
        alt="bulldozer"
        loading="lazy"
      />
    ),
    img_black: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/ios-filled/100/bulldozer.png"
        alt="bulldozer"
        loading="lazy"
      />
    ),
    alt: "imagen del panel administrativo autogestionable",
    description:
      "Sótanos, subsuelos, rebaje de terrenos, desmonte y nivelación del suelo surras ante, ofrecemos un servicio completo a su necesidad.",
  },
  {
    title: "Canalización y limpieza de canales",
    img_light: (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADlElEQVR4nO2dS2sUQRSFjw+ioFuFgLpSUbPRvS4UQVxmqSCKawUh6Da/QHyLu5C5dyKMZukDRN342goKgoLuxAfRqKAS5Ej1jBpmSNLTXT1TkfNBr2am61TdquqqmsNtQAjRR3gfy1nHXjou0fGYhvc0/KDjOx1vaXhEw2U69ofv9kVfKDtoCFqCpqAtaGxqDfouZnVoYBkWKxzHhiwIhg90MOf1jo4LrGNL5frq2JKV1Swzn75QlxCccWzAYoE1rKXjfGsU5A1Ee8Vn6LhCw2B0fYbB1r1nSugLo+ccG1iDlKHhMB0fC1fUO65vNJyIMVWEe2T3CveMpa85+g8hNXgV62m4HTEQbLuecAJDhfVNYCi7R3X6btGwLm6rFqkosYSGozR8rrCybPXGn3SMsoGB3PoaGMh+0/xttfocn+g4Etqk2lafv9fd70FF2Xa9oGF4QX2G4ey7vdZnuEfDtt4EYQwrWcc+Oq7T8asPweCsij+lYyRbLQVdTW1h5TTS+qx/2pptcy1rqzGsjB+IcWymYbLUA9HwjIaTHMfWbCpJqwHZEeBzWBF6Oh2n6HhecmEyGdowZjCmSlT0NQ0HOIqlSU4xvvAUGLTTcZCGNyXaYSpKUFojo+iwPcsGVif5ELZCi4TV2R6r6HRtmCwciL8iHNMFCn/JOnYmvEx9UmoZbdhFw6sC5U4XLbNYQJq739OsYVWSGzmPutEMo+VMlzv+6d5NWYYHdGwvXWA1Rx3VHcVMYAcdD3s3ZS30UDfcoWN3lNrFPgzs5WFlDXvouFv5Q71t2fuFhq803GANx1jDxigFxDgu90SO8+vYRMNxGm62ptsvUZe9QgghhBBCCLHYkC8rEeTLSgT5shJCvqxEkC8L8mXlQb6s3lwv5Mv60+Pky2LOTiNfFsuOPPmy2uZ7+bLyIV/WP+TL8soWBvJldQvly5qjYeTLmhf5sly+LPmyukC+LCGEEEIIIYRoQ76sRJAvKxHky0oI+bISQb4syJeVB/my5Mui8mXVlS+rqO9J+bJioHxZUL4sKl/WPCNE+bI6UL4sj2aQU76sslD5stoaRPmycqF8WaZ8WUIIIYQQQgixKJAvKxHky0oE+bISQr6sRJAvC/Jl5UG+LPmyKF9WXb4s+bK86//x9R5DRkwZqPcYmt5jOHfvkC+rA/myXL6s2b1B7zGcB+XLcuXLUr6sLlC+LCGEEEIIIYQQAv8RvwFC0VElIoGkqAAAAABJRU5ErkJggg=="
        alt="wave-lines"
      />
    ),
    img_black: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/ios-filled/100/wave-lines.png"
        alt="wave-lines"
      />
    ),
    alt: "demolition image",
    description: "Dragado de canales, Lagos, limpieza de estaciones de bombeo.",
  },
  {
    title: "Limpieza de afluentes y lagunas decantadoras",
    img_light: (
      <img
        src="data:image/png;base64,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"
        alt="external-excavator-vehicles-icongeek26-outline-icongeek26"
      />
    ),
    img_black: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/100/external-excavator-vehicles-icongeek26-glyph-icongeek26.png"
        alt="external-excavator-vehicles-icongeek26-glyph-icongeek26"
        loading="lazy"
      />
    ),
    alt: "imagen del menú digitalizado",
    description:
      "Amplia experiencia en la limpieza de los mismos y transporte propios de traslado.",
  },
  {
    title: "Entoscado y pavimentos",
    img_light: (
      <img
        src="data:image/png;base64,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"
        alt="external-bulldozer-construction-justicon-lineal-justicon"
      />
    ),
    img_black: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/external-justicon-lineal-justicon/100/external-bulldozer-construction-justicon-lineal-justicon.png"
        alt="external-bulldozer-construction-justicon-lineal-justicon"
      />
    ),
    alt: "imagen del panel administrativo autogestionable",
    description:
      "Aporte de suelo seleccionado, suelo cal, suelo cemento, nivelación, compactación, hormigonado, alisado entre otros.",
  },
];

const LandingServices = () => {
  return (
    <section id="SERVICES" className={styles.sectionCards}>
      {steps.map((step, index) => {
        return (
          <div className={styles.mainCard} key={index}>
            <div className={styles.cardUp}>
              <div className={styles.img_light}>{step.img_light}</div>
              <div className={styles.img_black}>{step.img_black}</div>
              <div className={styles.headCard}>{step.title}</div>
            </div>
            <div className={styles.cardDown}>
              <hr className={styles.hrCard} />
              <span className={styles.textCard}>{step.description}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default LandingServices;
