# 02-writing-first-tests instructions

## How to run?

```Bash
cd ./steps
npm run 02-writing-first-tests
```

## TODO

1. Ensure Playwright UI is started and app is running when going to http://localhost:3000
2. Create a new test file named `first-tests.spec.ts`
3. Create one test that go to home page, then check the URL is `http://localhost:3000`
4. Create a second test that go to /about page, then check the page title include "A propos" in French
5. Create a third test that go to /bakery page, then check the page title include "Bakery" in English

Notes:
- you can force the demo app language with the URL using the query param `lang` with `en` or `fr` as value (example: `/bakery?lang=en` will open the `/bakery` page with language forced to `en`)

Bonus:
- Check the file `playwright.config.ts`
  - Demo-app is auto-started by Playwright
  - Playwright will automatically wait demo-app is ready to show the UI / run any tests
  - A base URL is defined to let us use relative URL when using `page.goto()`
- You can use [Parameterized Tests](https://playwright.dev/docs/test-parameterize#parameterized-tests) to run tests 2 and 3 twice to check both French and English version of the page
