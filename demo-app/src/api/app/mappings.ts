import { describeRoute } from "hono-openapi";
import { resolver } from "hono-openapi/zod";
import { z } from "zod";
import packageJson from "../../../package.json";
import type { Hono } from "hono";

export const MappingsSchema = z.object({
    mappings: z.array(z.object({
        method: z.string(),
        path: z.string(),
    })),
});

export type Mappings = z.infer<typeof MappingsSchema>;

export function getMappingsDoc() {
    return describeRoute({
        description: "Get api mappings",
        responses: {
            200: {
                description: "Successful response",
                content: {
                    "application/json": {
                        schema: resolver(z.array(MappingsSchema)),
                    },
                },
            },
        },
    });
}

export function getMappings(app: Hono): Mappings {
    return {
        mappings: app.routes.map((r) => ({ method: r.method, path: r.path })),
    };
}
