import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Navbar from "../components/Navbar/index";

interface Experience {
  company: string;
  role: string;
  period: string;
  logo: string;
}

interface Education {
  institution: string;
  course: string;
  period: string;
}

const experiences: Experience[] = [
  {
    company: "Qualiit Soluções em TI",
    role: "Analista de Suporte Pleno",
    period: "Jul de 2023 - o momento",
    logo: "/images/companies/qualiit.png",
  },
  {
    company: "Trilha Tecnologia",
    role: "Analista de Suporte",
    period: "Fev de 2022 - Abr de 2023",
    logo: "/images/companies/trilha.png",
  },
  {
    company: "STT Digital",
    role: "Analista de Suporte",
    period: "Nov de 2018 - Set de 2019",
    logo: "/images/companies/stt.png",
  },
];

const educationItems: Education[] = [
  {
    institution: "Universidade Presbiteriana Mackenzie",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "Julho de 2025",
  },
  {
    institution: "FIAP",
    course: "Blockchain Advanced",
    period: "Janeiro de 2024",
  },
  {
    institution: "DIO",
    course: "Santander Bootcamp | Fullstack Developer",
    period: "Março de 2023",
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
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-6 h-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Two Column Layout for Experience and Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Education Column */}
              <div className="space-y-6">
                <div className="space-y-4">
                  {educationItems.map((edu) => (
                    <div
                      key={edu.course}
                      className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {edu.course}
                      </p>
                      <div className="mt-1 flex items-center">
                        <Link
                          href="#"
                          className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Exibir certificado →
                        </Link>
                        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                          {edu.period}
                        </span>
                      </div>
                    </div>
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
                      <div key={exp.company}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 relative flex-shrink-0">
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              {exp.company}
                            </h3>
                            <div className="flex items-center justify-between w-full mt-1">
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {exp.role}
                              </span>
                              <span className="text-sm text-gray-500 dark:text-gray-400 ml-4">
                                {exp.period}
                              </span>
                            </div>
                          </div>
                        </div>
                        {index < experiences.length - 1 && (
                          <div className="my-8 border-b border-gray-200 dark:border-gray-700" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  className="flex w-full justify-center items-center space-x-2 px-4 py-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Download CV"
                >
                  <HiDownload className="w-5 h-5" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
