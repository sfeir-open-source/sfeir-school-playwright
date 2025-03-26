<!-- .slide: class="transition" -->

# Test annotations

##==##

<!-- .slide: class="with-code" -->

# `test.skip`

```TypeScript
import { test, expect } from '@playwright/test';

test.skip('one', async ({ page }) => {
  // ...
});

test('two', async ({ page }) => {
  // ...
});

```

<!-- .element: class="big-code" -->

Notes:
- ask student to guess what will append
- only the test "two" will be executed

##==##

<!-- .slide: class="with-code" -->

# `test.skip`

```TypeScript
import { test, expect } from '@playwright/test';

test.skip(browserName === 'firefox', 'one', async ({ page }) => {
  // ...
});

test('two', async ({ page }) => {
  // ...
});

```

<!-- .element: class="big-code" -->

Notes:
- ask student to guess what will append
- both tests will executed on all browsers except on Firefox, on this case the test "one" will not be executed

##==##

<!-- .slide: class="with-code" -->

# `test.only`

```TypeScript
import { test, expect } from '@playwright/test';

test.only('one', async ({ page }) => {
  // ...
});

test('two', async ({ page }) => {
  // ...
});

```

<!-- .element: class="big-code" -->

Notes:
- ask student to guess what will append
- only the test "one" will be executed

##==##

<!-- .slide: class="with-code" -->

# `test.fail`

```TypeScript
import { test, expect } from '@playwright/test';

test.fail('one', async ({ page }) => {
  // ...
});

test('two', async ({ page }) => {
  // ...
});

```

<!-- .element: class="big-code" -->

Notes:
- ask student to guess what will append
- both tests will be executed, if the test "one" is not failed Playwright will signal it

##==##

<!-- .slide: class="with-code" -->

# `test.fixme`

```TypeScript
import { test, expect } from '@playwright/test';

test.fixme('one', async ({ page }) => {
  // ...
});

test('two', async ({ page }) => {
  // ...
});

```

<!-- .element: class="big-code" -->

Notes:
- ask student to guess what will append
- the test "one" will not be run

##==##

<!-- .slide: class="with-code" -->

# `test.slow`

```TypeScript
import { test, expect } from '@playwright/test';

test.slow('one', async ({ page }) => {
  // ...
});

test('two', async ({ page }) => {
  // ...
});

```

<!-- .element: class="big-code" -->

Notes:
- ask student to guess what will append
- the test "one" will be run with a triple timeout
