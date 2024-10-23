import React from "react";
import styles from "@/styles/components/NavBar.module.css";
import { Montserrat } from "next/font/google";
import Button from "./Button";
import Image from "next/image";

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
            <li>About</li>
            <li>Education</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Button className={styles.themeButton} icon={<LightMode />} />
      </div>
    </header>
  );
}
