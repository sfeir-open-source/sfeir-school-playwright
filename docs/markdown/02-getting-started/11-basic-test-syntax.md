<!-- .slide: class="transition" -->

# Basic test syntax

##==##

<!-- .slide: class="with-code" -->

# Let's check the tab title

```TypeScript
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

```

<!-- .element: class="big-code" -->

Notes:
- this test is the first generated test
- nothing is global with playwright: you need to import it
- a test is declared with `test()`
- we can specify a string a test name
- the function need to be async because we need to await every instruction
- we only have plain TypeScript with no weird control flow or queue or thing like that
- most of the api is semantic so without explaining it you should be able to read it

##==##

<!-- .slide: class="with-code" -->

# Let's navigate and check page title

```TypeScript
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

```

<!-- .element: class="big-code" -->

Notes:
- this test is the second generated test
- we have the same structure
- ask a student to explain the test
