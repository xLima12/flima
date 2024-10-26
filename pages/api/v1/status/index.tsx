import database from "@/infra/database";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const getVersionDB = await database.query("SHOW server_version;");
  const versionDB = getVersionDB.rows[0].server_version;

  const getMaxConnection = await database.query("SHOW max_connections;");
  const maxConnections = getMaxConnection.rows[0].max_connections;

  const getNameDataBase = process.env.POSTGRES_DB;

  const getConnectionUsed = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [getNameDataBase],
  });
  const connectionUsed = getConnectionUsed.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version_db: versionDB,
        max_connections: maxConnections,
        connetion_used: connectionUsed,
      },
    },
  });
}

export default status;
