import SocialMedia from "@/src/components/SocialMedia";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Olá, eu sou o Felipe,{" "}
              <span className="block mt-2">
                estudante de Análise e Desenvolvimento de Sistemas e apaixonado
                por desenvolvimento de software.
              </span>
            </h1>

            <div className="text-justify space-y-10">
              <p className="text-gray-600 dark:text-gray-300">
                Desde cedo, sempre fui movido pela curiosidade e pela vontade de
                criar soluções. Comecei escrevendo pequenos programas e, ao
                longo do tempo, aprimorei minhas habilidades em linguagens como
                Java, JavaScript e TypeScript, além de frameworks como React,
                Angular e Spring Boot.
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                O que mais me motiva é transformar ideias em soluções digitais
                que realmente façam a diferença. A cada linha de código, vejo a
                oportunidade de resolver problemas de forma criativa e
                eficiente, sempre com foco em aprender e evoluir.
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                Agora, estou em busca da minha primeira oportunidade
                profissional, pronto para colaborar e contribuir com projetos
                que tragam impacto real, seja em uma equipe dinâmica ou em um
                ambiente inovador.
              </p>
            </div>
          </div>

          {/* Right Column - Image and Social Links */}
          <div className="flex flex-col space-y-10">
            {/* Image Container */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/images/profile.jpeg"
                  alt="Felipe Lima"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-start space-y-6">
              <SocialMedia
                key="GitHub"
                name="Siga no GitHub"
                url="https://github.com/xLima12"
                icon={<FaGithub className="w-8 h-8" />}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              />
              <SocialMedia
                key="LinkedIn"
                name="Siga no LinkedIn"
                url="https://www.linkedin.com/in/felipe-lima-19873a14b/"
                icon={<FaLinkedin className="w-8 h-8" />}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              />
              <SocialMedia
                key="Email"
                name="contato@flima.dev"
                url="mailto:contato@flima.dev"
                icon={<MdEmail className="w-8 h-8" />}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
