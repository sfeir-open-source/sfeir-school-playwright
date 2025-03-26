import { expect, test } from "./fixtures";

test("check url is ok", async ({ page, homePage }) => {
  await homePage.go();
  await expect(page).toHaveURL("http://localhost:3000");
});

test("check about page title in French", async ({ page }) => {
  await page.goto("/about?lang=fr");
  await expect(page).toHaveTitle(/À Propos$/);
});

[
  { lang: "English", langCode: "en", title: /Bakery$/ },
  { lang: "French", langCode: "fr", title: /Boulangerie$/ },
].forEach(({ lang, langCode, title }) => {
  test(`check bakery page title in ${lang}`, async ({ page }) => {
    await page.goto("/bakery?lang=" + langCode);
    await expect(page).toHaveTitle(title);
  });
});
