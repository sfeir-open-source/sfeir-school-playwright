import { test as setup } from "@playwright/test";
import { adminUserAuthFile, LAURENT, withLogin } from "../utils/auth";

setup("authenticate as Laurent", async ({ page }) => {
    await withLogin(LAURENT)({ page });

    await page.context().storageState({ path: adminUserAuthFile });
});
