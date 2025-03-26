import { describeRoute } from "hono-openapi";
import { resolver } from "hono-openapi/zod";
import { z } from "zod";
import packageJson from "../../../package.json";

export const InfoSchema = z.object({
    name: z.string(),
    version: z.string(),
});

export type Info = z.infer<typeof InfoSchema>;

export function getInfoDoc() {
    return describeRoute({
        description: "Get api info",
        responses: {
            200: {
                description: "Successful response",
                content: {
                    "application/json": {
                        schema: resolver(z.array(InfoSchema)),
                    },
                },
            },
        },
    });
}

export function getInfo(): Info {
    return { name: packageJson.name, version: packageJson.version };
}
