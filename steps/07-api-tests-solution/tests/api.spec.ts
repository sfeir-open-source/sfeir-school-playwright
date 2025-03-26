import { expect, test } from "./fixtures";

test.describe("/api/app", () => {
    test("should be able to GET /api/app/health", async ({ request }) => {
        const res = await request.get("/api/app/health");
        expect(res.status()).toBe(200);
        expect(await res.json()).toStrictEqual({ status: "UP" });
    });
    test("should be able to GET /api/app/info", async ({ request }) => {
        const res = await request.get("/api/app/info");
        expect(res.status()).toBe(200);
        const body: { name: string; version: string } = await res.json();
        expect(body.name).toBe("demo-app");
        expect(body.version).not.toHaveLength(0);
    });
    test("should be able to GET /api/app/mappings", async ({ request }) => {
        const res = await request.get("/api/app/mappings");
        expect(res.status()).toBe(200);
        const body: { mappings: { method: string; path: string }[] } = await res
            .json();
        expect(body.mappings).not.toHaveLength(0);
        for (const mapping of body.mappings) {
            expect(mapping.method).not.toHaveLength(0);
            expect(mapping.path).not.toHaveLength(0);
        }
    });
});

test.describe("discoveries", () => {
    test("should be able to GET /api/v1/discoveries", async ({ request }) => {
        const res = await request.get("/api/v1/discoveries");
        expect(res.status()).toBe(200);
        const body = await res.json();
        expect(body).not.toHaveLength(0);
        for (const product of body) {
            expect(product.label).toHaveProperty("fr");
            expect(product.label).toHaveProperty("en");
            expect(product.description).toHaveProperty("fr");
            expect(product.description).toHaveProperty("en");
        }
    });
});

test.describe("/api/doc", () => {
    test("should be able to GET /api/doc", async ({ request }) => {
        const res = await request.get("/api/doc");
        expect(res.status()).toBe(200);
        const body = await res.json();
        expect(body.info).toStrictEqual({
            title: "La Boulangerie du Terroir API",
            description: "La Boulangerie du Terroir API",
            version: "1.0.0",
        });
        expect(body.paths).toHaveProperty("/api/app/health");
        expect(body.paths).toHaveProperty("/api/app/info");
        expect(body.paths).toHaveProperty("/api/app/mappings");
        expect(body.paths).toHaveProperty("/api/v1/discoveries");
    });
});
