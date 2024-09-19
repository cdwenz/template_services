import React from "react";
import styles from "./landingAbout.module.css";

const steps = [
  {
    title: "Excavación",
    img_light: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/external-icongeek26-outline-icongeek26/100/FFA400/external-excavator-vehicles-icongeek26-outline-icongeek26.png"
        alt="external-excavator-vehicles-icongeek26-outline-icongeek26"
      />
    ),
    img_black: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/100/external-excavator-vehicles-icongeek26-glyph-icongeek26.png"
        alt="external-excavator-vehicles-icongeek26-glyph-icongeek26"
      />
    ),
    alt: "excavator image",
    description:
      "Cavas, sótanos, subsuelos, rebajes de terrenos, pozos de infiltración. Ofrecemos un servicio completo e integral a su necesidad.",
  },
  {
    title: "Demolición",
    img_light: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/ios/100/FFA400/demolition-excavator.png"
        alt="demolition-excavator"
      />
    ),
    img_black: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/ios-filled/100/demolition-excavator.png"
        alt="demolition-excavator"
      />
    ),
    alt: "demolition image",
    description:
      "Servicio de demolición de casas, demolición de galpones y estructuras, demolición de edificios, oficinas, roturas de contrapisos, entre otros.",
  },
  {
    title: "Nivelación de terrenos",
    img_light: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/external-outlines-amoghdesign/100/FFA400/external-fog-weather-vol-01-outlines-amoghdesign.png"
        alt="external-fog-weather-vol-01-outlines-amoghdesign"
      />
    ),
    img_black: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/external-outlines-amoghdesign/100/external-fog-weather-vol-01-outlines-amoghdesign.png"
        alt="external-fog-weather-vol-01-outlines-amoghdesign"
      />
    ),
    alt: "imagen del menú digitalizado",
    description:
      "Preparación de jardines, nivelación del terrenos, limpieza fin de obras, nivelaciones, retiro de escombros, limpieza general de espacios para contrucción.",
  },
  {
    title: "Desmonte y Limpieza",
    img_light: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/ios-filled/100/FFA400/bulldozer.png"
        alt="bulldozer"
      />
    ),
    img_black: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/ios-filled/100/bulldozer.png"
        alt="bulldozer"
      />
    ),
    alt: "imagen del panel administrativo autogestionable",
    description:
      "Compactaciones, terraplenes, plateas, etc. Además realizamos excavacioes y retiro de tierra para piletas. ",
  },
  {
    title: "Desmonte y Limpieza",
    img_light: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/ios-filled/100/FFA400/bulldozer.png"
        alt="bulldozer"
      />
    ),
    img_black: (
      <img
        width="100"
        height="100"
        src="https://img.icons8.com/ios-filled/100/bulldozer.png"
        alt="bulldozer"
      />
    ),
    alt: "imagen del panel administrativo autogestionable",
    description:
      "Compactaciones, terraplenes, plateas, etc. Además realizamos excavacioes y retiro de tierra para piletas. ",
  },
];

const LandingAbout = () => {
  return (
    <section id="ABOUT" className={styles.sectionAbout}>
      <div className={styles.textAbout}>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil
          labore aliquid unde enim quisquam ratione. Adipisci iure ipsam vero ea
          accusamus. Sed ratione, labore neque distinctio dignissimos beatae
          debitis?
        </h1>
      </div>
    </section>
  );
};

export default LandingAbout;