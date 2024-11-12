import database from "@/infra/database";
import sendContactEmail from "@/src/services/emailService";

export default async function handler(request, response) {
  const allowedMethods = "POST";
  if (!allowedMethods.includes(request.method)) {
    return response.status(405).json({
      error: `Method "${request.method}" not allowed`,
    });
  }

  let dbClient;

  if (request.method === "POST") {
    const { name, phone, email, subject, message } = request.body;

    try {
      dbClient = await database.getNewClient();
      await database.query({
        text: "INSERT INTO contacts (name, phone, email, subject, message) VALUES ($1, $2, $3, $4, $5)",
        values: [name, phone, email, subject, message],
      });

      await sendContactEmail({ name, phone, email, subject, message });

      response.status(201).send();
    } catch (error) {
      console.error("Erro ao processar o formulário:", error);
      response.status(500).json({ message: "Erro ao enviar o formulário" });
    } finally {
      await dbClient.end();
    }
  }
}
