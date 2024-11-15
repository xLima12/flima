import React, { useState, useEffect } from "react";
import Card from "@/src/components/CardProject";

interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/v1/projects");
        if (!response.ok) {
          throw new Error("Erro ao buscar projetos.");
        }
        const data = await response.json();
        setProjects(data.projects);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-5xl ml-[55px] px-4">
          <div className="space-y-4 mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Carregando Projetos...
            </h1>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-5xl ml-[55px] px-4">
          <div className="space-y-4 mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Erro ao carregar projetos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">{error}</p>
          </div>
        </div>
      </section>
    );
  }

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

        {projects.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Não existem projetos registrados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                photo={project.image}
                url={project.url}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
