<!-- .slide: class="transition" -->

# Authentication for some tests

##==##

<!-- .slide: class="with-code" -->

# "Auth every except"

```TypeScript [1-5|7-12]
test.describe('auth', () => {
    test('should be login to access XXXX', ({ page }) => {
        // do action with the login account
    });
});

test.describe('not auth', () => {
    test.use({ storageState: { cookies: [], origins: [] } });
    test('should not see XXXX when not logged in', ({ page }) => {
        // do action without login
    });
});
```

<!-- .element: class="big-code" -->

Notes:

- if we made the setup for every tests is logged in we can avoid auth for some tests
- not perfect but it's simple
- good solution for one role + some tests without being connected

##==##

<!-- .slide: class="with-code" -->

# Specify auth for every test/group

```TypeScript
function withUserLoggedIn() {
  test.use({ storageState: 'playwright/.auth/user.json' });
}

function withGuessUser() {
    test.use({ storageState: { cookies: [], origins: [] } });
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Specify auth for every test/group

```TypeScript [1-6|8-14]
test.describe('auth', () => {
    withUserLoggedIn();
    test('should be login to access XXXX', ({ page }) => {
        // do action with the login account
    });
});

test.describe('not auth', () => {
    withGuessUser();
    test('should not see XXXX when not logged in', ({ page }) => {
        // do action without login
    });
});
```

<!-- .element: class="big-code" -->

Notes:

- simple
- open the door of multiple roles

##==##

<!-- .slide: class="with-code" -->

# Multiple roles

```TypeScript [1-6|8-11|13-16]
// auth.setup.ts
import { test as setup, expect } from '@playwright/test';
import path from 'path';

const simpleUserAuthFile = path.join(__dirname, '../playwright/.auth/user.json');
const adminAuthFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate as simple user', async ({ page }) => {
  await fillLoginForm(page, 'john@doe.com', 'SuperSecure1');
  await page.context().storageState({ path: simpleUserAuthFile });
});

setup('authenticate as admin', async ({ page }) => {
  await fillLoginForm(page, 'admin@doe.com', 'SuperSecure@dminPassword');
  await page.context().storageState({ path: adminAuthFile });
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Multiple roles

```TypeScript
function withAdminUser() {
  test.use({ storageState: 'playwright/.auth/admin.json' });
}
function withSimpleUser() {
  test.use({ storageState: 'playwright/.auth/user.json' });
}
function withGuessUser() {
    test.use({ storageState: { cookies: [], origins: [] } });
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# beforeEach

```TypeScript [1-6|8-12]
test.describe('auth', () => {
    test.beforeEach(withLogin());
    test('should be login to access XXXX', ({ page }) => {
        // do action with the login account
    });
});

test.describe('not auth', () => {
    test('should not see XXXX when not logged in', ({ page }) => {
        // do action without login
    });
});
```

<!-- .element: class="big-code" -->

Notes:

- simple as seen before
- pretty much no setup
- good solution when only have few connected tests
- prefer other solutions
