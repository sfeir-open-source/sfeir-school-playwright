<!-- .slide: class="transition" -->

# How to login?

##==##

<!-- .slide: class="with-code" -->

# Just fill the form

```TypeScript
test('should be able to login', ({ page }) => {
    await page.goto("/login");
    await page.getByRole("textbox", { name: "E-mail" }).fill('john@doe.com');
    await page.getByRole("textbox", { name: "Password" }).fill('SuperSecure1');
    await page.getByRole("button", { name: "Login" }).click();

    // do action with the logged in account
});
```

<!-- .element: class="big-code" -->

Notes:

- it works
- but we do not want to have this on every test...

##==##

<!-- .slide: class="with-code" -->

# Share a function?

```TypeScript
async function fillLoginForm(page: Page, email: string, password: string) {
    await page.goto("/login");
    await page.getByRole("textbox", { name: "E-mail" }).fill(email);
    await page.getByRole("textbox", { name: "Password" }).fill(password);
    await page.getByRole("button", { name: "Login" }).click();
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Share a function?

```TypeScript
test('should be able to login', ({ page }) => {
    await fillLoginForm(page, 'john@doe.com', 'SuperSecure1');

    // do action with the logged in account
});

```

<!-- .element: class="big-code" -->

Notes:

- better
- no perfect because we do not split auth / test body

##==##

<!-- .slide: class="with-code" -->

# Before each?

```TypeScript

test.beforeEach(({page}) => {
    await fillLoginForm(page, 'john@doe.com', 'SuperSecure1');
});

test('should be logged in to access XXXX', ({ page }) => {
    // do action with the logged in account
});

```

<!-- .element: class="big-code" -->

Notes:

- better again
- we split explicitly auth / test body

##==##

<!-- .slide: class="with-code" -->

# Before each (v2)?

```TypeScript

function withLogin(): Parameters<typeof test.beforeEach>[1]  {
    return async ({ page }) => {
        await fillLoginForm(page, 'john@doe.com', 'SuperSecure1');
    }
}

test.beforeEach(withLogin());
```

<!-- .element: class="big-code" -->

Notes:

- as everywhere: we can create functions!
- we reduce syntax to put everywhere
- but we continue to login for every tests (time cost)
