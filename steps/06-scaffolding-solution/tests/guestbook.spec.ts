import { expect, test } from "./fixtures";
import { NewGuestbookMessageFormPage } from "./page-object/guestbook.page";

test.describe("last messages", () => {
  test('"Last guestbook messages" section is present', async ({ homePage, guestbookPage }) => {
    await homePage.go();
    await expect(guestbookPage.title()).toBeVisible();
    await expect(guestbookPage.messages()).toHaveCount(3);
  });
  test('All message card in "Last guestbook messages" section should have message, author and date', async ({ homePage, guestbookPage }) => {
    await homePage.go();
    for (const card of await guestbookPage.everyMessages()) {
      expect(card.firstParagraph()).not.toBeEmpty();
      expect(card.author()).not.toBeEmpty();
      expect(card.date()).toHaveText(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});

test.describe("new message", () => {
  test("should be able to add a new message then see it on home page", async ({ page, homePage, guestbookPage }) => {
    const newGuestbookMessageFormPage = new NewGuestbookMessageFormPage(page);
    await homePage.go();

    await guestbookPage.newMessageButton().click();

    await newGuestbookMessageFormPage.isOnPage();
    const author = "Playwright bot";
    // random messsage here ensure no false positive on re-run of the test
    const message = "This is a message from the future! " +
      Math.floor(Math.random() * 1_000_000);
    await newGuestbookMessageFormPage.fillForm({ author, message });
    await newGuestbookMessageFormPage.submitButton();

    await expect(newGuestbookMessageFormPage.submitSuccessMessage())
      .toBeVisible();

    await homePage.headerHomeLink().click();
    await expect(guestbookPage.oneMessageByContent({ author, message }))
      .toBeVisible();
  });
});
