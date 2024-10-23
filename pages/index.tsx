import React from "react";
import styles from "@/styles/ComingSoon.module.css";
import { Lato, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function ComingSoon() {
  return (
    <div className={`${styles.container} ${montserrat.className}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={`${styles.subtitle} ${lato.className}`}>
          We're working hard to bring you an amazing experience. Stay tuned!
        </p>
        <div className={styles.loader}></div>
        <p className={styles.footer}>
          © 2024 Felipe Lima - All rights reserved.
        </p>
      </div>
    </div>
  );
}
