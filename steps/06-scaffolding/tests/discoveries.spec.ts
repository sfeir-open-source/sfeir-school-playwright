import { test, expect } from '@playwright/test';

test('Should show an error when failed to get discoveries', async ({ page }) => {
  await page.route('*/**/api/v1/discoveries', async (route) => {
    await route.fulfill({ status: 404 });
  });

  await page.goto('/');
  await expect(page.getByText('An error occurred...')).toBeVisible();
});

test('Should work with only 2 discovery products', async ({ page }) => {
  await page.route('*/**/api/v1/discoveries', async (route) => {
    await route.fulfill({
      json: [
        {
          label: { fr: 'Un', en: 'One' },
          description: {
            fr: 'Le premier',
            en: 'The first',
          },
          img: '/assets/products/pain-aux-raisins.jpeg',
          price: 1111.1,
          quantity: 1,
          type: 'pastry',
        },
        {
          label: { fr: 'Deux', en: 'Two' },
          description: {
            fr: 'Le second',
            en: 'The second',
          },
          img: '/assets/products/baguette-de-campagne.jpeg',
          price: 2.2,
          quantity: 2,
          type: 'bread',
        },
      ],
    });
  });

  await page.goto('/');
  await expect(page.getByTestId('product-card')).toHaveCount(2);
});

test('Should work with 3 times the same product', async ({ page }) => {
  await page.route('*/**/api/v1/discoveries', async (route) => {
    const response = await route.fetch();
    const json = await response.json();
    json.fill(json[0]);
    await route.fulfill({ response, json });
  });

  await page.goto('/');
  await expect(page.getByTestId('product-card')).toHaveCount(3);
});
