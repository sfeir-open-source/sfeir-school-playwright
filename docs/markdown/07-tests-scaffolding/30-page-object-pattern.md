<!-- .slide: class="transition" -->

# Page object pattern

##==##

<!-- .slide: class="with-code" -->

# Simple test

```TypeScript [1-11|2-10|2-5|7|9-10]
test("should be able to login", ({ page }) => {
    await page.goto("/login");
    await page.getByRole("textbox", { name: "E-mail" }).fill("john@doe.com");
    await page.getByRole("textbox", { name: "Password" }).fill("SuperSecure1");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByRole("heading", { name: "Welcome" })).toBeVisible();

    await page.getByRole("button", { name: "Account" }).click();
    await expect(page.getByRole("textbox", { name: "Birthdate" })).toHaveValue("10/03/1825");
});
```

<!-- .element: class="big-code" -->

Notes:

- it works
- but not very reusable or structured or easy to make evolve or even business oriented
- we manipulate 3 pages, but we do not fill them

##==##

<!-- .slide: class="with-code" -->

# Imagine if...

```TypeScript [2-4|6-8|10|12-13]
test("should be able to login", ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const accountPage = new AccountPage(page);

    await loginPage.go();
    await loginPage.fillForm({ email: "john@doe.com", password: "SuperSecure1" });
    await loginPage.validateForm();

    await homePage.isVisible();

    await homePage.accountBadge().click();
    await expect(accountPage.birthdateField()).toHaveValue("10/03/1825");
});
```

<!-- .element: class="big-code" -->

Notes:

- ask students: what do you think about that?
- more business oriented / literal
- less technical vocabulary
- hide locators

##==##

<!-- .slide: class="with-code" -->

# Behind the scene - AccountPage

```TypeScript []
class AccountPage {
    constructor(private page: Page) {}
    birthdateField() {
        return this.page.getByRole("textbox", { name: "Birthdate" });
    }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Behind the scene - HomePage

```TypeScript [1-2|3-8|9-11]
class HomePage {
    constructor(private page: Page) {}
    pageTitle() {
        return this.page.getByRole("heading", { name: "Welcome" });
    }
    accountBadge() {
        return this.page.getByRole("button", { name: "Account" });
    }
    async isVisible() {
        await expect(this.pageTitle()).toBeVisible();
    }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Behind the scene - LoginPage

```TypeScript [1-2|3-11|12-18|19-21]
class LoginPage {
    constructor(private page: Page) {}
    emailField() {
        return this.page.getByRole("textbox", { name: "E-mail" });
    }
    passwordField() {
        return this.page.getByRole("textbox", { name: "Password" });
    }
    loginButton() {
        return this.page.getByRole("button", { name: "Login" });
    }
    async fillForm() {
        await this.emailField().fill("john@doe.com");
        await this.passwordField().fill("SuperSecure1");
    }
    async validateForm() {
        await this.loginButton().click();
    }
    async go() {
        await this.page.go("/login");
    }
}
```

<!-- .element: class="big-code" -->
