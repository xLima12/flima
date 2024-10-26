import { Client } from "pg";

interface QueryObject {
  text: string;
  values: string[];
}

async function query(queryObject: string | QueryObject) {
  let client;
  try {
    client = await getNewClient();
    console.log(client);
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    if (client) {
      await client.end();
    }
  }
}

async function getNewClient() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect();
  return client;
}

const database = {
  query,
  getNewClient,
};

export default database;
