import React from "react";
import styles from "./landingDemos.module.css";

const demos = [
  {
    title: "Roti_pollo",
    url: "https://www.menubarqr.com/roti_pollo/MC66Rcj04DeZDnuf2H0pHdDRlka2",
    image:
      "https://firebasestorage.googleapis.com/v0/b/menubar-d5213.appspot.com/o/accounts%2FRotiPollo%2FRoti-Pollo.png?alt=media&token=02be0cef-110a-4fba-97df-d98b21f0d76c",
    alt: "imagen de Roti-Pollo",
  },
  {
    title: "Pizza_orcila",
    url: "https://www.menubarqr.com/pizza_orcila/K1L2CAkk30SM5tZK2nizRSD1FAj1",
    image:
      "https://firebasestorage.googleapis.com/v0/b/menubar-d5213.appspot.com/o/accounts%2FpizzaOrcila%2Fpizzaorcila.png?alt=media&token=09c80632-f199-45a1-a2c4-eba29e917a9f",
    alt: "imagen de Pizza orcila",
  },
  {
    title: "Rogerson Craft_Beer",
    url: "https://www.menubarqr.com/rogerson_craft_beer/0JyvOqv8UZgOYPpTSWd1SeHTJRg2",
    image: "https://firebasestorage.googleapis.com/v0/b/menubar-d5213.appspot.com/o/accounts%2FRogersonCraftBeer%2FrogersonCaftBeer.png?alt=media&token=3754c211-d367-4bcb-bcfb-f43607dc0662",
    alt: "imagen de rogerson craft beer",
  },
];

const LandingDemos = () => {
  return (
    <>
      <section id="DEMOS" className={styles.sectionDemos}>
        {demos.map((demo) => (
          <a
            href={demo.url}
            target="_blank"
            className={styles.anchorDemo}
            key={demo.alt}
          >
            <img
              src={demo.image}
              alt={demo.alt}
              className={styles.imgDemo}
            />
            {demo.title}
          </a>
        ))}
      </section>
      <h3 className={styles.watchDemos}>ver demos</h3>
    </>
  );
};

export default LandingDemos;
