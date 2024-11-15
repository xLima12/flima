import { NextApiRequest, NextApiResponse } from "next";
import { saveRecord } from "@/src/services/databaseService";
import database from "@/infra/database";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const allowedMethods = new Set(["POST", "GET"]);
  if (!allowedMethods.has(request.method)) {
    return response.status(405).json({
      error: `Method "${request.method}" is not allowed`,
    });
  }

  try {
    if (request.method === "GET") {
      const result = await database.query("SELECT * FROM projects;");
      const projects = result.rows;

      return response.status(200).json({ projects });
    }

    if (request.method === "POST") {
      console.log(request.body);
      const { title, description, url, image } = request.body;

      // Validação dos campos obrigatórios
      if (!title || !description || !url || !image) {
        return response.status(400).json({
          error: "Todos os campos são obrigatórios.",
        });
      }

      // Salvando o projeto no banco de dados
      await saveRecord("projects", { title, description, url, image });
      return response.status(201).json({
        message: "Projeto salvo com sucesso!",
      });
    }
  } catch (error) {
    console.error("Erro ao processar o pedido:", error);
    return response.status(500).json({
      error: "Erro interno ao processar o pedido. Tente novamente mais tarde.",
    });
  }
}
