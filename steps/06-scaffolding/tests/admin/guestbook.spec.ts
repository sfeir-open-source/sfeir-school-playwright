import test, { expect } from "@playwright/test";
import {
    fillLoginForm,
    isLoggedIn,
    LAURENT,
    withLogin,
    withLoggedInUser,
} from "../utils/auth";

test.describe("admin", () => {
    test.describe("authentication", () => {
        test("should be able to authenticate with correct email/password", async ({ page }) => {
            await fillLoginForm(page, LAURENT.email, LAURENT.password);
            await isLoggedIn(page);
        });
        test("should not be able to authenticate with incorrect email", async ({ page }) => {
            await fillLoginForm(page, "not@laurent.fr", LAURENT.password);

            await expect(page.getByText("Failed to login.")).toBeVisible();
        });
        test("should not be able to authenticate with incorrect password", async ({ page }) => {
            await fillLoginForm(page, LAURENT.email, "WrongPassword1999");

            await expect(page.getByText("Failed to login.")).toBeVisible();
        });
    });

    test.describe("guestbook", () => {
        test.describe("connected as guest", () => {
            test('should not show "Manage guestbook" button on home', async ({ page }) => {
                await expect(
                    page.locator("button", { hasText: "Manage guestbook" }),
                ).toHaveCount(0);
            });
        });

        test.describe("logged in as admin", () => {
            test.describe.configure({ mode: "serial" });
            withLoggedInUser();

            test('should show "Manage guestbook" button on home', async ({ page }) => {
                await page.goto("/");
                await expect(
                    page.getByRole("button", { name: "Manage guestbook" }),
                ).toBeVisible();
            });

            test("should be able to navigate to Admin Guestbook page and see all messages", async ({ page }) => {
                await page.goto("/");
                await page.getByRole("button", { name: "Manage guestbook" })
                    .click();

                await expect(
                    page.getByRole("heading", { name: "Admin guestbook" }),
                ).toBeVisible();
            });

            test("should be able to remove a guestbook message", async ({ page }) => {
                await page.goto("/admin/guestbook");

                await expect(page.getByTestId("guestbook-message")).toHaveCount(
                    8,
                );
            });
        });
    });
});
