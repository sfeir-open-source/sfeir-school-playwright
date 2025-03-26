import { Page } from "@playwright/test";

export class HomePage {
    constructor(private page: Page) {}

    headerHomeLink() {
        return this.page.getByRole("link", {
            name: "La Boulangerie du Terroir",
        });
    }

    async go() {
        await this.page.goto("/");
    }
}
