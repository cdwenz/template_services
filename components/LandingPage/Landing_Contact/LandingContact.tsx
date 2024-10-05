"use client";

import React, { useState, Ref } from "react";
import styles from "./landingContact.module.css";
import { Button, TextField } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MarkunreadIcon from "@mui/icons-material/Markunread";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#FECC01",
    fontFamily: "Anta, sans-serif",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "primary",
    },
    "&:hover fieldset": {
      borderColor: "#000",
    },
    "&:hover fieldset legend span": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FECC01",
    },
  },
});

const LandingContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const miRef: Ref<HTMLDivElement> = React.createRef();

  const handleChange = (e: any) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log("PHONE: ", typeof formData.phone);
  };

  const handleClick = () => {
    if (formData.name === "") {
      return true;
    } else if (formData.phone === "" || formData.phone.length < 7) {
      return true;
    } else if (formData.message === "") {
      return true;
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      return true;
    }
    return false;
  };
  return (
    <section id="CONTACT" className={styles.mainContact}>
      <div className={styles.containContact}>
        <div className={styles.infoContact}>
          <h1 style={{ maxWidth: "400px" }}>Contacto</h1>
          <div className={styles.iconsContact}>
            <div>
              <LocalPhoneIcon sx={{ color: "#FFA400" }} />
              <span>+54 11 3081-9914</span>
            </div>
            <div>
              <LocationOnIcon sx={{ color: "#FFA400" }} />
              <span>Libertad 6701 Loma Hermosa 1657</span>
            </div>
            <div>
              <MarkunreadIcon sx={{ color: "#FFA400" }} />
              <span>frascarolivial@outlook.com</span>
            </div>
          </div>
          <h1 style={{ maxWidth: "400px" }}>Nuestras redes</h1>
          <div className={styles.socialFooter}>
            <a
              href="https://www.facebook.com/profile.php?id=61566606382695"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSocial}
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/menubarqr/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSocial}
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/541130819914"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSocial}
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
        <div className={styles.containForm}>
          <form
            action="https://formspree.io/f/xeojbrkj"
            method="POST"
            className={styles.formContact}
          >
            <CssTextField
              label="Nombre"
              name="name"
              id="custom-css-outlined-name"
              value={formData.name}
              onChange={handleChange}
            />
            <CssTextField
              label="Email"
              name="email"
              type="email"
              id="custom-css-outlined-email"
              value={formData.email}
              onChange={handleChange}
            />
            <CssTextField
              label="Teléfono"
              name="phone"
              type="number"
              id="custom-css-outlined-phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <CssTextField
              id="custom-css-outlined-input"
              label="Mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              type="submit"
              disabled={handleClick()}
              sx={{
                color: "black",
                fontWeight: "600",
                textTransform: "capitalize",
                backgroundColor: "#FECC01",
                fontFamily: "Anta, sans-serif",
                ":hover": { color: "#FECC01", backgroundColor: "black" },
              }}
              onClick={() => setLoading(true)}
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LandingContact;
