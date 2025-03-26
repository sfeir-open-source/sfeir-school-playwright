import test, { expect, Page } from "@playwright/test";
import { absolutePath } from "./node";

export const LAURENT = {
    email: "laurent@laboulangerieduterroir.fr",
    password: "19LeB0nPain87",
} as const;

export async function fillLoginForm(
    page: Page,
    email: string,
    password: string,
) {
    await page.goto("/login");

    await page.getByRole("textbox", { name: "E-mail" }).fill(email);
    await page.getByRole("textbox", { name: "Password" }).fill(password);
    await page.getByRole("button", { name: "Login" }).click();
}

export async function isLoggedIn(page: Page) {
    await expect(
        page.getByText(
            "You will be redirected within 5 seconds. If not, click here.",
        ),
    ).toBeVisible();

    await expect(page.getByText("Welcome on the website of"))
        .toBeVisible();
}

export function withLogin(
    user: { email: string; password: string },
) {
    return async ({ page }: { page: Page }) => {
        await fillLoginForm(page, user.email, user.password);
        await isLoggedIn(page);
    };
}

export const adminUserAuthFile = absolutePath(
    "../../playwright/.auth/laurent.json",
);

export function withLoggedInUser() {
    test.use({
        storageState: absolutePath("../../playwright/.auth/laurent.json"),
    });
}

export function withGuestUser() {
    test.use({ storageState: { cookies: [], origins: [] } });
}
