import React from "react";
import styles from "./landingFaqs.module.css";

const faqs = [
  {
    question: "Question",
    answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel maiores molestias assumenda laudantium natus eum magni. Dolorum explicabo pariatur adipisci voluptates totam? Nobis praesentium suscipit possimus accusantium illum necessitatibus quam.",
  },
  {
    question: "Question",
    answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel maiores molestias assumenda laudantium natus eum magni. Dolorum explicabo pariatur adipisci voluptates totam? Nobis praesentium suscipit possimus accusantium illum necessitatibus quam.",
  },
  {
    question: "Question",
    answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel maiores molestias assumenda laudantium natus eum magni. Dolorum explicabo pariatur adipisci voluptates totam? Nobis praesentium suscipit possimus accusantium illum necessitatibus quam.",
  },
  {
    question: "Question",
    answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel maiores molestias assumenda laudantium natus eum magni. Dolorum explicabo pariatur adipisci voluptates totam? Nobis praesentium suscipit possimus accusantium illum necessitatibus quam.",
  },
];

const LandingFaqs = () => {
  return (
    <section id="FAQ" className={styles.mainFaqs}>
      <h1>Preguntas Frecuentes</h1>
      <span>Aquí despejamos todas tus dudas</span>
      <div className={styles.containFaqs}>
        {faqs.map((faq, index) => (
            <details key={index}>
              <summary>{faq.question}</summary>
              <small>{faq.answer}</small>
              
            </details>
        ))}
      </div>
    </section>
  );
}

export default LandingFaqs;
