import Form from "@/src/components/Form";
import SocialMedia from "@/src/components/SocialMedia";
import { useToast } from "@/src/context/ToastContext";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const Contacts = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status === 201) {
        showToast("Enviado com sucesso!", "success");
      } else {
        showToast(data.message || "Erro ao enviar o formulário", "error");
      }

      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      showToast("Erro ao enviar o formulário", "error");
    }
  };

  const fields = [
    { name: "nome", label: "Nome:" },
    { name: "celular", label: "Cel:", mask: "phone", type: "tel" },
    {
      name: "e-mail",
      label: "E-mail:",
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      type: "email",
    },
    { name: "assunto", label: "Assunto:" },
    { name: "mensagem", label: "Mensagem:", type: "textarea" },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl ml-[55px] px-4">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Fale Comigo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Pronto para novos desafios
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 lg:max-w-md">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Envie sua mensagem e vamos conversar sobre novas oportunidades!
            </h2>
            <Form onSubmit={handleSubmit} fields={fields} />
          </div>

          {/* Map and Social Links */}
          <div className="space-y-6 lg:pl-8">
            {/* Map */}
            <div className="aspect-square rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=your-map-embed-url"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <SocialMedia
                url="https://github.com/xLima12"
                icon={<FaGithub className="w-6 h-6" />}
                name="Siga no GitHub"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              />
              <SocialMedia
                url="https://www.linkedin.com/in/felipe-lima-19873a14b/"
                icon={<FaLinkedin className="w-6 h-6" />}
                name="Siga no LinkedIn"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              />
              <SocialMedia
                url="mailto:contato@flima.dev"
                icon={<MdEmail className="w-6 h-6" />}
                name="contato@flima.dev"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
