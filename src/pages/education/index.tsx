import React from "react";
import Link from "next/link";

interface Education {
  institution: string;
  course: string;
  status: "Concluído" | "Cursando";
  period: string;
  certified?: string;
}

const educationItems: Education[] = [
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

const Education = () => {
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
            <div
              key={`${edu.institution}-${index}`}
              className="relative flex items-start space-x-8"
            >
              {/* Left Column - Institution */}
              <div className="w-1/3">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {edu.institution}
                </h3>
              </div>

              {/* Right Column - Details */}
              <div className="w-2/3 space-y-2">
                <div className="flex items-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    | {edu.period}
                  </span>
                </div>
                <p className="text-gray-900 dark:text-white">{edu.course}</p>
                {edu.status.match("Cursando") ? (
                  <span className="text-gray-500 dark:text-gray-400">
                    {edu.status}
                  </span>
                ) : (
                  <div className="mt-2">
                    <Link
                      href={`${edu.certified}`}
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      Exibir certificado →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
