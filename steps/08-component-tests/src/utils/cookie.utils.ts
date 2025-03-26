export function useCookie(name: string, defaultValue: string): string {
    const cookie = document.cookie
        .split(";")
        .map((c) => c.trimStart())
        .find((c) => c.startsWith(name + "="));
    return cookie?.split("=")[1] ?? defaultValue;
}
