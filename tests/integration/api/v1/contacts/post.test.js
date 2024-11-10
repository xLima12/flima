import orchestrator from "@/tests/orchestrator";
import database from "@/infra/database";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();

  await database.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      phone CHAR(14),
      email VARCHAR(100),
      subject VARCHAR(100),
      message TEXT
    );
  `);
});

describe("POST /api/v1/contacts", () => {
  describe("Anonymous user", () => {
    describe("Running send e-mail message", () => {});
    test("For the first time", async () => {
      const response = await fetch("http://localhost:3000/api/v1/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Tests",
          phone: "11111111111",
          email: "test@test.com",
          subject: "Tests Integration",
          message: "Tests with jest.",
        }),
      });
      expect(response.status).toBe(200);
    });
    test("For the second time", async () => {
      const response2 = await fetch("http://localhost:3000/api/v1/contacts", {
        method: "GET",
      });
      expect(response2.status).toBe(405);
    });
  });
});
