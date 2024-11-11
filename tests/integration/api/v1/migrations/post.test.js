import orchestrator from "@/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

describe("POST /api/v1/migrations", () => {
  describe("Anonymous user", () => {
    describe("Running pending migrations", () => {});
    test("For the first time", async () => {
      const response = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "POST",
      });
      expect(response.status).toBe(201);

      const responseBody = await response.json();

      expect(Array.isArray(responseBody)).toBe(true);
      expect(responseBody.length).toBeGreaterThan(0);
    });
    test("For the second time", async () => {
      const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "POST",
      });
      expect(response2.status).toBe(200);

      const responseBody2 = await response2.json();

      expect(Array.isArray(responseBody2)).toBe(true);
      expect(responseBody2.length).toBe(0);
    });
  });
});
