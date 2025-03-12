import { expect, Locator, Page } from "@playwright/test";

export class GuestbookPage {
    constructor(private page: Page) {}

    title() {
        return this.page.getByText("Last guestbook messages");
    }

    messages() {
        return this.page.getByTestId("guestbook-message");
    }

    newMessageButton() {
        return this.page.getByRole("button", { name: "Publish a message" });
    }

    oneMessageByContent(
        { author, message }: { author: string; message: string },
    ) {
        return this.page
            .getByTestId("guestbook-message") // get every guestbook-message
            .filter({ hasText: author }) // extract message with the author we want
            .filter({ hasText: message }); // ensure it's the correct message
    }

    async everyMessages() {
        const all = await this.page.getByText("Last guestbook messages")
            .getByTestId(
                "guestbook-message",
            ).all();
        return all.map((card) => new GuestbookMessageCardPage(this.page, card));
    }
}

export class GuestbookMessageCardPage {
    constructor(private page: Page, private card: Locator) {}

    firstParagraph() {
        return this.card.getByRole("paragraph").nth(0);
    }

    author() {
        return this.card.getByTestId("author");
    }

    date() {
        return this.card.getByRole("time");
    }
}

export class NewGuestbookMessageFormPage {
    constructor(private page: Page) {}

    authorField() {
        return this.page.getByRole("textbox", { name: "Author" });
    }
    messageField() {
        return this.page.getByRole("textbox", { name: "message" });
    }
    submitButton() {
        return this.page.getByRole("button", { name: "Send" });
    }

    submitSuccessMessage() {
        return this.page.getByRole("paragraph").filter({
            hasText: "Thank you",
        });
    }

    async isOnPage() {
        await expect(
            this.page.getByRole("heading", { name: "Guestbook", exact: true }),
        ).toBeVisible();
    }

    async fillForm({ author, message }: { author: string; message: string }) {
        await this.authorField().fill(author);
        await this.messageField().fill(message);
    }

    async submitForm() {
        await this.submitButton().click();
    }
}
