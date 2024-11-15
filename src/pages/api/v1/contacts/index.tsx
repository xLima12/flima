import { NextApiRequest, NextApiResponse } from "next";
import { saveRecord } from "@/src/services/databaseService";
import sendContactEmail from "@/src/services/emailService";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const allowedMethods = new Set(["POST"]);
  if (!allowedMethods.has(request.method)) {
    return response.status(405).json({
      error: `Method "${request.method}" is not allowed`,
    });
  }

  if (request.method === "POST") {
    const { name, phone, email, subject, message } = request.body;

    // Verificação de campos obrigatórios
    if (!name || !phone || !email || !subject || !message) {
      return response.status(400).json({
        error: "Todos os campos são obrigatórios.",
      });
    }

    // Remover todos os caracteres não numéricos do campo "phone"
    const sanitizedPhone = phone.replace(/\D/g, "");

    try {
      // Salvar dados de contato no banco de dados usando o serviço genérico
      await saveRecord("contacts", {
        name,
        phone: sanitizedPhone,
        email,
        subject,
        message,
      });

      // Enviar email de confirmação
      await sendContactEmail({
        name,
        phone: sanitizedPhone,
        email,
        subject,
        message,
      });

      response.status(201).send({ message: "Contato enviado com sucesso" });
    } catch (error) {
      console.error("Erro ao processar o formulário:", error);
      response.status(500).json({
        message: "Erro ao processar o formulário. Tente novamente mais tarde.",
      });
    }
  }
}
