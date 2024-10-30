import Layout from "@/components/Layout";
import Paragraph from "@/components/Paragraph";
import SocialMedia from "@/components/SocialMedia";
import Title from "@/components/Title";
import styles from "@/styles/pages/about.module.css";
import { Lato, Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

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

const GitHubIcon = (): JSX.Element => {
  return (
    <Image
      width={24}
      height={24}
      src="/icons/Github-light-theme.svg"
      alt="Icon GitHub"
    />
  );
};

const LinkedIn = (): JSX.Element => {
  return (
    <Image
      width={24}
      height={24}
      src="/icons/Linkedin-light-theme.svg"
      alt="Icon LinkedIn"
    />
  );
};

const Email = (): JSX.Element => {
  return (
    <Image
      width={24}
      height={24}
      src="/icons/email-light-theme.svg"
      alt="Icon e-mail"
    />
  );
};

export default function About() {
  return (
    <Layout
      children={
        <section className={styles.sectionAbout}>
          <div className={styles.resumeContainer}>
            <Title
              className={`${styles.title} ${montserrat.className}`}
              text="Olá, eu sou o Felipe, estudante de Análise e Desenvolvimento de Sistemas e apaixonado por desenvolvimento de software."
            />
            <Paragraph
              className={`${styles.paragraph} ${lato.className}`}
              text={`Desde cedo, sempre fui movido pela curiosidade e pela vontade de criar soluções. Comecei escrevendo pequenos programas e, ao longo do tempo, aprimorei minhas habilidades em linguagens como Java, JavaScript e TypeScript, além de frameworks como React, Angular e Spring Boot.
                \nO que mais me motiva é transformar ideias em soluções digitais que realmente façam a diferença. A cada linha de código, vejo a oportunidade de resolver problemas de forma criativa e eficiente, sempre com foco em aprender e evoluir.
                \nAgora, estou em busca da minha primeira oportunidade profissional, pronto para colaborar e contribuir com projetos que tragam impacto real, seja em uma equipe dinâmica ou em um ambiente inovador.`}
            />
          </div>
          <div className={styles.mediaContainer}>
            <Image
              width={1174}
              height={1600}
              className={styles.photo}
              src="/images/avatar.jpeg"
              alt="Avatar"
            />
            <SocialMedia
              className={`${styles.iconGitHub} ${montserrat.className}`}
              icon={<GitHubIcon />}
              text="Siga no GitHub"
              href="https://github.com/xLima12"
            />
            <SocialMedia
              className={`${styles.iconLinkedIn} ${montserrat.className}`}
              icon={<LinkedIn />}
              text="Siga no LinkedIn"
              href="https://www.linkedin.com/in/felipe-lima-19873a14b/"
            />
            <SocialMedia
              className={`${styles.iconEmail} ${montserrat.className}`}
              icon={<Email />}
              text="contato@flima.dev"
            />
          </div>
        </section>
      }
    />
  );
}
