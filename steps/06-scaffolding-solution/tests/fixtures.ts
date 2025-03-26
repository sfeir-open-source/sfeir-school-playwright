import { Page, test as base } from "@playwright/test";
import { HomePage } from "./page-object/home.page";
import { DiscoveriesPage } from "./page-object/discoveries.page";
import { GuestbookPage } from "./page-object/guestbook.page";
import { AdminGuestbookPage } from "./page-object/admin-guestbook.page";

export * from "@playwright/test";

export interface BakeryFixtures {
    homePage: HomePage;
    discoveriesPage: DiscoveriesPage;
    guestbookPage: GuestbookPage;
    adminGuestbookPage: AdminGuestbookPage;
}

export const test = base.extend<BakeryFixtures>({
    homePage: declarePO(HomePage),
    discoveriesPage: declarePO(DiscoveriesPage),
    guestbookPage: declarePO(GuestbookPage),
    adminGuestbookPage: declarePO(AdminGuestbookPage),
});

function declarePO(PageObject: { new (page: Page): void }) {
    return async ({ page }, use) => {
        await use(new PageObject(page));
    };
}
