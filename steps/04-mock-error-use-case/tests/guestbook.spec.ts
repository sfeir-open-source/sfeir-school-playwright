import { test, expect } from '@playwright/test';

test.describe('last messages', () => {
  test('"Last guestbook messages" section is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Last guestbook messages')).toBeVisible();
    await expect(page.getByTestId('guestbook-message')).toHaveCount(3);
  });
  test('All message card in "Last guestbook messages" section should have message, author and date', async ({
    page,
  }) => {
    await page.goto('/');
    const allMessages = page.getByText('Last guestbook messages').getByTestId('guestbook-message').all();
    for (const card of await allMessages) {
      expect(card.getByRole('paragraph').nth(0)).not.toBeEmpty();
      expect(card.getByTestId('author')).not.toBeEmpty();
      expect(card.getByRole('time')).toHaveText(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});

test.describe('new message', () => {
  test('should be able to add a new message then see it on home page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Publish a message' }).click();

    await page.getByRole('heading', { name: 'Guestbook', exact: true });
    const author = 'Playwright bot';
    // random messsage here ensure no false positive on re-run of the test
    const message = 'This is a message from the future! ' + Math.floor(Math.random() * 1_000_000);
    await page.getByRole('textbox', { name: 'Author' }).fill(author);
    await page.getByRole('textbox', { name: 'message' }).fill(message);
    await page.getByRole('button', { name: 'Send' }).click();

    await expect(page.getByRole('paragraph').filter({ hasText: 'Thank you' })).toBeVisible();

    await page.getByRole('link', { name: 'La Boulangerie du Terroir' }).click();
    await expect(
      page
        .getByTestId('guestbook-message') // get every guestbook-message
        .filter({ hasText: author }) // extract message with the author we want
        .filter({ hasText: message }) // ensure it's the correct message
    ).toBeVisible();
  });
});
