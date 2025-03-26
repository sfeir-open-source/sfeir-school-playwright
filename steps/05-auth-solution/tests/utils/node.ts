import path from "node:path";

export function absolutePath(relativePath: string): string {
    return path.resolve(__dirname, relativePath);
}
