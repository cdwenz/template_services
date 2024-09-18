"use client";

import React, { useState } from "react";
import styles from "./landingPricing.module.css";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@mui/material";
import Link from "next/link";

const planes = [
  {
    title: "Standard",
    price: 9.99,
    startPrice: 3.99,
    items: [
      {
        text: "Menú Digital QR",
        include: true,
      },
      {
        text: "Hasta 5 categorias",
        include: true,
      },
      {
        text: "Hasta 50 productos",
        include: true,
      },
      {
        text: "Alojamiento en la nube",
        include: true,
      },
      {
        text: "QR descargable para impresión ",
        include: true,
      },
      {
        text: "Adaptado a todo tipo de dispositivos móviles",
        include: true,
      },
      {
        text: "Autoadministrable (Agrega platos, cambia precios, cambia nombres, etc)",
        include: true,
      },
      {
        text: "Importación de productos desde excel",
        include: false,
      },
      {
        text: "Sección 'Destacados'",
        include: false,
      },
      {
        text: "Pedidos x WhatsApp",
        include: false,
      },
      {
        text: "Inglés / Español",
        include: false,
      },
    ],
  },
  {
    title: "Advance",
    price: 12.99,
    startPrice: 3.99,
    items: [
      {
        text: "Menú Digital QR",
        include: true,
      },
      {
        text: "Hasta 10 categorias",
        include: true,
      },
      {
        text: "Hasta 100 productos",
        include: true,
      },
      {
        text: "Alojamiento en la nube",
        include: true,
      },
      {
        text: "QR descargable para impresión ",
        include: true,
      },
      {
        text: "Adaptado a todo tipo de dispositivos móviles",
        include: true,
      },
      {
        text: "Autoadministrable (Agrega platos, cambia precios, cambia nombres, etc)",
        include: true,
      },
      {
        text: "Importación de productos desde excel",
        include: true,
      },
      {
        text: "Sección 'Destacados'",
        include: true,
      },
      {
        text: "Pedidos x WhatsApp",
        include: false,
      },
      {
        text: "Inglés / Español",
        include: false,
      },
    ],
  },
  {
    title: "Pro",
    price: 14.99,
    startPrice: 3.99,
    items: [
      {
        text: "Menú Digital QR",
        include: true,
      },
      {
        text: "Categorías Ilimitadas",
        include: true,
      },
      {
        text: "Productos Ilimitados",
        include: true,
      },
      {
        text: "Alojamiento en la nube",
        include: true,
      },
      {
        text: "QR descargable para impresión ",
        include: true,
      },
      {
        text: "Adaptado a todo tipo de dispositivos móviles",
        include: true,
      },
      {
        text: "Autoadministrable (Agrega platos, cambia precios, cambia nombres, etc)",
        include: true,
      },
      {
        text: "Importación de productos desde excel",
        include: true,
      },
      {
        text: "Sección 'Destacados'",
        include: true,
      },
      {
        text: "Pedidos x WhatsApp",
        include: true,
      },
      {
        text: "Inglés / Español",
        include: true,
      },
    ],
  },
];

const LandingPricing = () => {
  const [isDollar, setIsDollar] = useState(false);
  const colorText = (text: string) => {
    if (text === "Standard") return styles.standard;
    if (text === "Advance") return styles.advance;
    if (text === "Pro") return styles.pro;
  };

  return (
    <div id="PRICING" className={styles.mainPricing}>
      <h1>Nuestros Planes</h1>
      <div className={styles.checkSwitch}>
        ARS
        <label className={styles.switch}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={isDollar}
            onChange={() => console.log()}
          />
          <div
            className={styles.slider}
            onClick={() => setIsDollar(!isDollar)}
          ></div>
        </label>
        USD
      </div>
      <section className={styles.containPricingCards}>
        {planes.map((plan) => {
          return (
            <div
              className={`${styles.pricingCard}  ${
                plan.title === "Advance"
                  ? styles.backPrincipal
                  : styles.backCommon
              }`}
              key={plan.title}
            >
              <div className={styles.headCard}>
                <div className={styles.titlePlan}>
                  {plan.title === "Advance" && (
                    <div className={styles.salePlan}>MAS VENDIDO</div>
                  )}
                  <h2>
                    Plan{" "}
                    <span className={colorText(plan.title)}>{plan.title}</span>
                  </h2>
                  <h2>
                    {isDollar ? "USD" : "ARS"}{" "}
                    {isDollar ? plan.price : plan.price * 1000} /mes
                  </h2>
                </div>
                <small>
                  + {isDollar ? "USD" : "ARS"}{" "}
                  {isDollar ? plan.startPrice : plan.startPrice * 1000} x única
                  vez (alta de servicio)
                </small>
                <hr />
              </div>
              <div className={styles.itemsCard}>
                {plan.items.map((items, index) => {
                  return (
                    <div className={styles.lineItemCard} key={index}>
                      {items.include ? (
                        <CheckIcon />
                      ) : (
                        <CheckIcon color="disabled" />
                      )}
                      <span
                        className={`${!items.include && styles.textThrough}`}
                      >
                        {items.text}
                      </span>
                    </div>
                  );
                })}
              </div>
              <Link
                href={{
                  pathname: "/signin",
                  query: { plan: plan.title.toLocaleLowerCase() },
                }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    marginTop: "12px",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    fontFamily: "Anta, sans-serif",
                    color: plan.title === "Advance" ? "black" : "#FECC01",
                    backgroundColor:
                      plan.title === "Advance" ? "#FECC01" : "gray",
                    ":hover": {
                      color: plan.title === "Advance" ? "black" : "#FECC01",
                      backgroundColor:
                        plan.title === "Advance" ? "#fbd744" : "#5b5a5a",
                    },
                  }}
                  // onClick={() => handleRegister(plan.title)}
                >
                  Empezar
                </Button>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default LandingPricing;
