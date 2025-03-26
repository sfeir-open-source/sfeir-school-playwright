import { describeRoute } from "hono-openapi";
import { PRODUCTS, ProductSchema } from "../../data/products.js";
import { resolver } from "hono-openapi/zod";
import { z } from "zod";

export const HealthSchema = z.object({
    status: z.union([z.literal("UP"), z.literal("DOWN")]),
});

export type Health = z.infer<typeof HealthSchema>;

export function getHealthDoc() {
    return describeRoute({
        description: "Get api health",
        responses: {
            200: {
                description: "Successful response",
                content: {
                    "application/json": {
                        schema: resolver(z.array(HealthSchema)),
                    },
                },
            },
        },
    });
}

export function getHealth(): Health {
    return { status: "UP" };
}
