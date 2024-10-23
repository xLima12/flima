import React from "react";
import styles from "@/styles/components/Footer.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${montserrat.className}`}>
      <ul className={styles.footList}>
        <li>About</li>
        <li>Education</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <span className={styles.span}>
        &copy; 2024 Felipe Lima - Todos os direitos reservados.
      </span>
    </footer>
  );
}
