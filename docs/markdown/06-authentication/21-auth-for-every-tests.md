<!-- .slide: class="transition" -->

# One account for every tests

##==##

<!-- .slide: class="with-code" -->

# One account for every tests

```TypeScript [1-5|7-10]
// auth.setup.ts
import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  await fillLoginForm(page, 'john@doe.com', 'SuperSecure1');
  await page.context().storageState({ path: authFile });
});
```

<!-- .element: class="big-code" -->

Notes:

- we use the setup hook to define our authentication
- the file is used to save the context (cookie, etc.) and reuse it for multiple tests

##==##

<!-- .slide: class="with-code" -->

# One account for every tests (configure setup)

```TypeScript [1,4|10,12]
// playwright.config.ts
export default defineConfig({
  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Use prepared auth state.
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});
```

<!-- .element: class="big-code" -->

Notes:

- we need to configure the setup as dependencies of every projects
- we can have a specific storage per browser as we can run test across browsers in parallel
- this configuration can be useful for a lot a things (not specific to auth)

##==##

<!-- .slide: class="with-code" -->

# One account for every tests (on test side)

```TypeScript
test('should be logged in to access XXXX', ({ page }) => {
    // do action with the logged in account
});
```

<!-- .element: class="big-code" -->

Notes:

- every test is now made logged in
