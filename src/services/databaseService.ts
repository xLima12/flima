import database from "@/infra/database";

/**
 * Função genérica para salvar dados em uma tabela específica no banco de dados.
 * @param tableName - Nome da tabela onde os dados serão salvos.
 * @param data - Objeto contendo os dados a serem salvos (chaves devem corresponder às colunas da tabela).
 */
export async function saveRecord(
  tableName: string,
  data: Record<string, any>,
): Promise<void> {
  const columns = Object.keys(data);
  const values = Object.values(data);

  const placeholders = columns.map((_, index) => `$${index + 1}`).join(", ");
  const queryText = `INSERT INTO ${tableName} (${columns.join(", ")}) VALUES (${placeholders})`;

  let dbClient;

  try {
    dbClient = await database.getNewClient();
    await database.query({
      text: queryText,
      values,
    });
  } catch (error) {
    console.error(`Erro ao salvar registro na tabela ${tableName}:`, error);
    throw new Error("Erro ao salvar registro no banco de dados");
  } finally {
    if (dbClient) {
      await dbClient.end();
    }
  }
}
