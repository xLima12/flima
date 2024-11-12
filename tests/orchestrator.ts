/* eslint-disable no-unused-vars */
import retry from "async-retry";
import database from "@/infra/database";

async function waitForAllServices() {
  async function waitForWebServer() {
    return retry(fetchStatusPage, {
      retries: 100,
      maxTimeout: 1000,
    });
  }

  async function fetchStatusPage() {
    const response = await fetch("http://localhost:3000/api/v1/status");
    if (response.status !== 200) {
      throw Error();
    }
  }
}

async function clearDatabase() {
  await database.query("DROP SCHEMA PUBLIC CASCADE; CREATE SCHEMA PUBLIC;");
}

const orchestrator = {
  waitForAllServices,
  clearDatabase,
};

export default orchestrator;
