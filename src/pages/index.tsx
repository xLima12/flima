import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Navbar from "../components/Navbar/index";
import SocialMedia from "../components/SocialMedia";
import CardExperience from "../components/CardExperience";
import Button from "../components/Button";
import CardEducation from "../components/CardEducation";

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  logo: string;
}

interface EducationProps {
  institution: string;
  course: string;
  status: "Concluído" | "Cursando";
  period: string;
  certified?: string;
}

const experiences: ExperienceProps[] = [
  {
    company: "Qualiit Soluções em TI",
    role: "Analista de Suporte Pleno",
    period: "Jul de 2023 - o momento",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGy0PkeVOGH8A/company-logo_200_200/company-logo_200_200/0/1701439802095/quallit_logo?e=1738800000&v=beta&t=j0p2r1oHuLWkdju_zkDXDukFis1kDx_YDUI4AuGJ8AU",
  },
  {
    company: "Trilha Tecnologia",
    role: "Analista de Suporte",
    period: "Fev de 2022 - Abr de 2023",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFNlGGVe5l9oA/company-logo_100_100/company-logo_100_100/0/1674486395827?e=1738800000&v=beta&t=zR6fSilCm97a4mq1ip814pTXMWCGXLpd0HO1XZIWoTk",
  },
  {
    company: "STT Digital",
    role: "Analista de Suporte",
    period: "Nov de 2018 - Set de 2019",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEt6b1Ul_r8Rg/company-logo_100_100/company-logo_100_100/0/1666644425527?e=1738800000&v=beta&t=Lnd51chXbK8cusopP9MT505aX6jf1v9oy96oNXLQzfI",
  },
];

const educationItems: EducationProps[] = [
  {
    institution: "Universidade Presbiteriana Mackenzie",
    course: "Análise e Desenvolvimento de Sistemas",
    status: "Cursando",
    period: "Julho de 2025",
  },
  {
    institution: "FIAP",
    course: "Blockchain Advanced",
    status: "Concluído",
    period: "Janeiro de 2024",
    certified:
      "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/105640/65b1274522575cf7728a792adfa2bb18/certificado.png",
  },
  {
    institution: "DIO",
    course: "Santander Bootcamp | Fullstack Developer",
    status: "Concluído",
    period: "Março de 2023",
    certified: "https://www.dio.me/certificate/B12927B4/share",
  },
];

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNavbarLogo, setShowNavbarLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const progress = Math.min(scrollPosition / 150, 1);
      setScrollProgress(progress);
      setShowNavbarLogo(progress >= 0.9);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar showLogo={showNavbarLogo} />
      <section className="min-h-screen bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        {/* Profile Image with Animation */}
        <div
          className="fixed z-50 transition-all duration-300 ease-out transform"
          style={{
            top: `${85 - scrollProgress * 68}px`,
            left: "75px",
            transform: `scale(${1 - scrollProgress * 0.4})`,
            opacity: scrollProgress > 0.9 ? 0 : 1,
          }}
        >
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="/images/profile.jpeg"
              alt="Felipe Lima"
              width={96}
              height={96}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-12">
            {/* Placeholder div para manter o espaço da foto */}
            <div className="w-24 h-24 invisible" />

            {/* Title and Description */}
            <div className="space-y-6 max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Desenvolvedor de Software, resolvendo problemas, uma função de
                cada vez
              </h1>

              <p className="text-gray-600 dark:text-gray-300">
                Olá, eu sou o Felipe, estudante de Análise e Desenvolvimento de
                Sistemas e um desenvolvedor de software apaixonado. Adoro
                transformar ideias em soluções digitais impactantes, refletindo
                meu entusiasmo por programação e aprendizado contínuo.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <SocialMedia
                  url="https://github.com/xLima12"
                  icon={<FaGithub className="w-6 h-6" />}
                  name=""
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                />
                <SocialMedia
                  url="https://www.linkedin.com/in/felipe-lima-19873a14b/"
                  icon={<FaLinkedin className="w-6 h-6" />}
                  name=""
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                />
              </div>
            </div>

            {/* Two Column Layout for Experience and Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Education Column */}
              <div className="space-y-6">
                <div className="space-y-4">
                  {educationItems.map((edu) => (
                    <CardEducation
                      key={edu.course}
                      institution={edu.institution}
                      course={edu.course}
                      period={edu.period}
                      status={edu.status}
                      certified={edu.certified}
                    />
                  ))}
                </div>
              </div>
              {/* Experience Column */}
              <div className="space-y-6 border rounded-3xl border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Experiências
                </h2>
                <div className="p-4  bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl ">
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <CardExperience
                        key={exp.company}
                        logo={exp.logo}
                        company={exp.company}
                        role={exp.role}
                        period={exp.period}
                        showDivider={index < experiences.length - 1}
                      />
                    ))}
                  </div>
                </div>
                <Button
                  type="button"
                  name="Download CV"
                  icon={<HiDownload className="w-5 h-5" />}
                  className="flex w-full justify-center items-center space-x-2 px-4 py-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
