import React from "react";
import Card from "@/src/components/CardProject";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Generated Supernotes",
    description:
      "Uma aplicação web desenvolvida para automatizar um processo de conversão de dados comuns para o formato de XML.",
    githubUrl: "https://github.com/username/generated-supernotes",
    image: "/images/projects/supernotes.png",
  },
  {
    title: "CloneTabnews",
    description:
      "Repositório criado para criado para desenvolver um clone do tabnews.com.br no curso.dev",
    githubUrl: "https://github.com/username/clone-tabnews",
    image: "/images/projects/tabnews.png",
  },
  {
    title: "BuzzFeed",
    description:
      "Repositório criado para desenvolver uma aplicação para descobrir se você seria um herói ou um vilão.",
    githubUrl: "https://github.com/username/buzzfeed-clone",
    image: "/images/projects/buzzfeed.png",
  },
  {
    title: "GeekNews",
    description:
      "Repositório criado para desenvolver uma aplicação de notícias de geeks.",
    githubUrl: "https://github.com/username/geeknews",
    image: "/images/projects/geeknews.png",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-5xl ml-[55px] px-4">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Meus Projetos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transformando ideias em realidade.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              photo={project.image}
              url={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
