import { expect, test } from "../fixtures";
import {
    fillLoginForm,
    isLoggedIn,
    LAURENT,
    withUserLoggedIn,
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
            test('should not show "Manage guestbook" button on home', async ({ adminGuestbookPage }) => {
                await expect(adminGuestbookPage.manageGuestbookButton())
                    .toHaveCount(0);
            });
        });

        test.describe("logged in as admin", () => {
            test.describe.configure({ mode: "serial" });
            withUserLoggedIn();

            test('should show "Manage guestbook" button on home', async ({ page, homePage, adminGuestbookPage }) => {
                await homePage.go();
                await expect(adminGuestbookPage.manageGuestbookButton())
                    .toBeVisible();
            });

            test("should be able to navigate to Admin Guestbook page and see all messages", async ({ page, homePage, adminGuestbookPage }) => {
                await homePage.go();
                await adminGuestbookPage.manageGuestbookButton().click();
                await expect(adminGuestbookPage.title()).toBeVisible();
            });

            test("should be able to remove a guestbook message", async ({ adminGuestbookPage }) => {
                await adminGuestbookPage.go();
                await expect(adminGuestbookPage.messages()).toHaveCount(8);
            });
        });
    });
});
