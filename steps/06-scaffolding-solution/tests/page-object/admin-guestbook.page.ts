import { Page } from "@playwright/test";

export class AdminGuestbookPage {
    constructor(private page: Page) {}

    manageGuestbookButton() {
        return this.page.getByRole("button", { name: "Manage guestbook" });
    }

    title() {
        return this.page.getByRole("heading", { name: "Admin guestbook" });
    }

    messages() {
        return this.page.getByTestId("guestbook-message");
    }

    async go() {
        await this.page.goto("/admin/guestbook");
    }
}
