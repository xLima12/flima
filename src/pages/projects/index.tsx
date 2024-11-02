import React from "react";
import Image from "next/image";
import Link from "next/link";

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
            <div key={project.title} className="group space-y-3">
              {/* Project Image */}
              <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span className="text-sm">github.com</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
