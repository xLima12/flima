import React from "react";
import Education from "@/src/components/Education";

interface EducationProps {
  institution: string;
  course: string;
  status: "Concluído" | "Cursando";
  period: string;
  certified?: string;
}

const educationItems: EducationProps[] = [
  {
    institution: "Universidade Presbiteriana Mackenzie",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "Julho de 2025",
    status: "Cursando",
  },
  {
    institution: "FIAP",
    course: "Blockchain Advanced",
    period: "Janeiro de 2024",
    status: "Concluído",
    certified:
      "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/105640/65b1274522575cf7728a792adfa2bb18/certificado.png",
  },
  {
    institution: "DIO",
    course: "Santander Bootcamp | Fullstack Developer",
    period: "Março de 2023",
    status: "Concluído",
    certified: "https://www.dio.me/certificate/B12927B4/share",
  },
  {
    institution: "DIO",
    course: "Desenvolvimento avançado em Java",
    period: "Setembro de 2021",
    status: "Concluído",
    certified: "https://www.dio.me/certificate/B12927B4/share",
  },
];

const Educations = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-3xl ml-[55px] px-4">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Aprimorando Habilidades
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Um aprendizado que nunca para.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-12">
          {educationItems.map((edu, index) => (
            <Education
              key={`${edu.institution}-${index}`}
              institution={edu.institution}
              course={edu.course}
              period={edu.period}
              status={edu.status}
              certified={edu.certified}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations;
