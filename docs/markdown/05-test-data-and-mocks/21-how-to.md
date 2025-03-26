<!-- .slide: class="transition" -->

# How to do it with Playwright?

##==##

<!-- .slide: class="with-code" -->

# Build a fake OK response

```TypeScript [2-5]
test('...', async ({ page }) => {
  await page.route('*/**/api/v1/fruits', async route => {
    const json = [{ name: 'Strawberry', id: 21 }];
    await route.fulfill({ json });
  });

  await page.goto('/');
});
```
<!-- .element: class="big-code" -->

Notes:
- create an interception of the api calls
- you can read the request and build a new response

##==##

<!-- .slide: class="with-code" -->

# Build a fake KO response

```TypeScript [2-5]
test('...', async ({ page }) => {
  await page.route('*/**/api/v1/fruits', async route => {
    await route.fulfill({ status: 404 });
  });

  await page.goto('/');
});
```
<!-- .element: class="big-code" -->

Notes:
- create an interception of the api calls
- you can read the request and build a new response


##==##

<!-- .slide: class="with-code" -->

# Edit real request's response

```TypeScript [2-5]
test('...', async ({ page }) => {
  await page.route('*/**/api/v1/fruits', async route => {
    const response = await route.fetch();
    const json = await response.json();
    json.push({ name: 'Loquat', id: 100 });
    await route.fulfill({ response, json });
  });

  await page.goto('/');
});
```
<!-- .element: class="big-code" -->

Notes:
- keep the real response, but patch it with the given json

