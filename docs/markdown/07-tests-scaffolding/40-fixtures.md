<!-- .slide: class="transition" -->

# Fixtures

##==##

<!-- .slide: class="with-code" -->

# Built-in fixtures

```TypeScript [2]
test("should XXXX", ({
    page, context, browser, browserName, request
}) => {});
```

<!-- .element: class="big-code" -->

Notes:

- there are some build-it fixtures
- page: we already used it, is made to manipulate the page
- context: give access to browser context
- browser: give access to browser configuration
- browserName: is "chromium", "firefox" or "webkit"
- request: give access to a client to make API calls

##==##

<!-- .slide: class="with-code" -->

# Convert our page objects to fixtures?

```TypeScript [1]
test("should be able to login", ({ homePage, loginPage, accountPage }) => {
    await loginPage.go();
    await loginPage.fillForm({ email: "john@doe.com", password: "SuperSecure1" });
    await loginPage.validateForm();

    await homePage.isVisible();

    await homePage.accountBadge().click();
    await expect(accountPage.birthdateField()).toHaveValue("10/03/1825");
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Convert our page objects to fixtures?

```TypeScript [1-2|4-8|10,20|11-13|14-16|17-19]
// tests/fixtures.ts
import { test as base } from '@playwright/test';

interface MyFixtures {
    homePage: HomePage;
    loginPage: LoginPage;
    accountPage: AccountPage;
}

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },
});
```

<!-- .element: class="big-code" -->

Notes:

- we create a new file
- we declare our fixture interface
- we extends playwright `test` function
- we declare each fixtures
- if needed we can make some setup in the fixture declaration
- later we will creates with this `test` function (not the one from Playwright)
