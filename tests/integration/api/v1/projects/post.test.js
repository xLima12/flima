import orchestrator from "@/tests/orchestrator";
import database from "@/infra/database";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();

  await database.query(`
    CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY,
      title VARCHAR(100),
      description VARCHAR(2000),
      url VARCHAR(100),
      image VARCHAR(100)
    );
  `);
});

describe("POST /api/v1/projects", () => {
  describe("Anonymous user", () => {
    describe("Running create projects", () => {});
    test("For the first time", async () => {
      const response = await fetch("http://localhost:3000/api/v1/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Tests create project",
          description: "Description tests create project",
          url: "https://projetotest.com",
          image: "https://projetotest.com/test.png",
        }),
      });
      expect(response.status).toBe(201);
    });
    test("For the second time", async () => {
      const response = await fetch("http://localhost:3000/api/v1/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Tests create project",
          description: "Description tests create project",
          url: "https://projetotest.com",
          image: "",
        }),
      });
      expect(response.status).toBe(400);
    });
  });
});
