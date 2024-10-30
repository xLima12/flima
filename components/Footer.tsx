import React from "react";
import styles from "@/styles/components/Footer.module.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${montserrat.className}`}>
      <ul className={styles.footList}>
        <li>
          <Link className={styles.link} href={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"#"}>
            Education
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"#"}>
            Experience
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"#"}>
            Projects
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"#"}>
            Contact
          </Link>
        </li>
      </ul>
      <span className={styles.span}>
        &copy; 2024 Felipe Lima - Todos os direitos reservados.
      </span>
    </footer>
  );
}
