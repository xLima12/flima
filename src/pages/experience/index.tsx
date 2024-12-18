import React from "react";
import Experience from "@/src/components/Experience";

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  logo: string;
  description: string[];
  subRole?: {
    title: string;
    period: string;
    description: string[];
  };
}

const experiences: ExperienceProps[] = [
  {
    company: "Qualiit Soluções em TI",
    role: "Analista de Suporte Pleno",
    period: "Mai de 2024 - o momento",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGy0PkeVOGH8A/company-logo_200_200/company-logo_200_200/0/1701439802095/quallit_logo?e=1738800000&v=beta&t=j0p2r1oHuLWkdju_zkDXDukFis1kDx_YDUI4AuGJ8AU",
    description: [
      "Responsável por fornecer suporte especializado ao sistema WMS Manhattan, garantindo operações sem interrupções para os clientes.",
      "Desenvolvi uma aplicação Web utilizando Spring Boot e Angular, resultando em melhorias significativas no atendimento de chamados específicos e na eficiência operacional da equipe.",
      "Mantive altos padrões de qualidade, velocidade e consistência na resolução de problemas, contribuindo para a satisfação e fidelização dos clientes.",
    ],
    subRole: {
      title: "Analista de Suporte Júnior",
      period: "Jul de 2023 - Mai de 2024",
      description: [
        "Responsável por fornecer suporte especializado ao sistema WMS Manhattan, garantindo operações sem interrupções para os clientes.",
        "Desenvolvi uma aplicação Web utilizando Spring Boot e Angular, resultando em melhorias significativas no atendimento de chamados específicos e na eficiência operacional da equipe.",
        "Mantive altos padrões de qualidade, velocidade e consistência na resolução de problemas, contribuindo para a satisfação e fidelização dos clientes.",
      ],
    },
  },
  {
    company: "Trilha Tecnologia",
    role: "Analista de Suporte",
    period: "Fev de 2022 - Abr de 2023",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFNlGGVe5l9oA/company-logo_200_200/company-logo_200_200/0/1674486395827?e=1738800000&v=beta&t=Faoilvrt2Os-zksN5Zwf0ydh4L3k_TuEa7kCOUA2TyU",
    description: [
      "Realizei atendimento em campo, manutenção em impressoras, formatação, backup e instalação de software, demonstrando habilidades técnicas e de resolução de problemas.",
      "Efetuei a troca de componentes de desktop e notebook, garantindo a disponibilidade e o funcionamento adequado dos equipamentos.",
      "Configuração de modem, switch, câmeras e DVR, assegurando a conectividade e a integridade dos sistemas.",
    ],
  },
  {
    company: "STT Digital",
    role: "Analista de Suporte",
    period: "Nov de 2018 - Set de 2019",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEt6b1Ul_r8Rg/company-logo_200_200/company-logo_200_200/0/1666644425527?e=1738800000&v=beta&t=-7u0jb8ScQ1s1EDp2hE1spxb7wiIFAFduGpukOwq9n0",
    description: [
      "Análise e acompanhamento de automação fornecida pela STT, com ideias e relatórios para melhorias na automação.",
      "Análise, acompanhamento e suporte da ferramenta GATLink, desenvolvida e fornecida pela STT.",
      "Acompanhamento, elaboração de relatórios, atualização de versões e análise de RPA's, atualização e inserção de novos registros no banco de dados.",
      "Desenvolvimento de RPA para preenchimento de relatórios diários.",
    ],
  },
];

const Experiences = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-3xl sm:ml-[4vw] md:ml-[4vw] lg:ml-[3vw] xl:ml-[2vw] px-4">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Minhas Experiências
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Conectando conhecimento e resultados.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <Experience
              key={exp.company}
              company={exp.company}
              role={exp.role}
              period={exp.period}
              logo={exp.logo}
              description={exp.description}
              subRole={exp.subRole}
              showDivider={index < experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
