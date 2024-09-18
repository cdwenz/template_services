import React from "react";
import styles from "./landingBenefits.module.css";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from '@mui/icons-material/Edit';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LanguageIcon from '@mui/icons-material/Language';
import UpdateIcon from '@mui/icons-material/Update';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import FindInPageIcon from '@mui/icons-material/FindInPage';

const benefits = [
  {
    for: "tu negocio",
    items: [
      {
        icon: <SavingsOutlinedIcon />,
        title: "Menores Costos",
        description: "Ahorra evitando reimpresiones",
      },
      {
        icon: <CheckIcon />,
        title: "Listo Para Usar",
        description: "Nos encargamos de la carga inicial de productos y categorías",
      },
      {
        icon: <EditIcon />,
        title: "Diseño Personalizado",
        description: "Creamos el menú digital respetando tu logo e identidad de marca",
      },
      {
        icon: <SupportAgentIcon />,
        title: "Soporte Postventa",
        description: "Brindamos soporte ante cualquier consulta o problema que pueda surgir",
      },
      {
        icon: <SettingsIcon />,
        title: "Autogestión Sencilla",
        description: "Carga y actualización de precios y productos de manera fácil",
      },
      {
        icon: <AutoStoriesIcon />,
        title: "Capacitación - Tutoriales",
        description: "Te guiamos paso a paso para actualizar tu carta digital.",
      },
      {
        icon: <LanguageIcon />,
        title: "Multi-Idioma",
        description: "Permite a tus clientes ver la carta en español/Inglés",
      },
    ],
  }
];

const LandingBenefits = () => {
  return (
    <section id="BENEFITS" className={styles.mainBenefits}>
      <div className={styles.containCard}>
        {benefits.map((item, index) => (
          <div className={styles.cardBenefits} key={index}>
            <h2>Para {item.for}</h2>
            <div className={styles.containPoints}>
              {item.items.map((point) => (
                <div className={styles.pointBenefits} key={point.title}>
                  <div className={styles.iconBenefit}>{point.icon}</div>
                  <div>
                    <h4>{point.title}</h4>
                    <small className={styles.smallDescr}>{point.description}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LandingBenefits;
