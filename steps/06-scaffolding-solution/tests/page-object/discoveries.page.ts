import { Page } from "@playwright/test";

export class DiscoveriesPage {
    constructor(private page: Page) {}

    productCards() {
        return this.page.getByTestId("product-card");
    }
}
