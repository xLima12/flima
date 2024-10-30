import React from "react";
import styles from "@/styles/components/NavBar.module.css";
import { Montserrat } from "next/font/google";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const LightMode = (): JSX.Element => {
  return (
    <Image
      width={24}
      height={24}
      src="/icons/brightness-up.svg"
      alt="Icon Light Mode"
    />
  );
};

export default function NavBar() {
  return (
    <header className={`${styles.header} ${montserrat.className}`}>
      <div className={styles.navContainer}>
        <Image
          width={1174}
          height={1600}
          className={styles.avatar}
          src="/images/avatar.jpeg"
          alt="Avatar"
        />
        <nav className={styles.navMenu}>
          <ul>
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
        </nav>
        <Button
          className={`${styles.themeButton} ${styles.icon}`}
          icon={<LightMode />}
        />
      </div>
    </header>
  );
}
