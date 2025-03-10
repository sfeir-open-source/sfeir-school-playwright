<!-- .slide: class="transition" -->

# Hooks

##==##

<!-- .slide: class="with-code" -->

# `beforeEach`

```TypeScript
test.beforeEach(() => { console.log('Ping') })
test('test one', ({ page }) => {});
test.describe('group', () => {
    test.beforeEach(() => { console.log('Pong') })
    test('test two', ({ page }) => {});
    test('test three', ({ page }) => {});
});
test('test four', ({ page }) => {});

```

<!-- .element: class="big-code" -->

Notes:

- ask student: when beforeEach are executed?

##==##

<!-- .slide: class="with-code" -->

# `beforeAll`

```TypeScript
test.beforeAll(() => { console.log('Ping') })
test('test one', ({ page }) => {});
test.describe('group', () => {
    test.beforeAll(() => { console.log('Pong') })
    test('test two', ({ page }) => {});
    test('test three', ({ page }) => {});
});
test('test four', ({ page }) => {});

```

<!-- .element: class="big-code" -->

Notes:

- ask student: when beforeAll are executed?

##==##

<!-- .slide: class="with-code" -->

# `beforeEach` / `beforeAll`

```TypeScript
test.beforeEach(() => { console.log('Ping') })
test('test one', ({ page }) => {});
test.describe('group', () => {
    test.beforeAll(() => { console.log('Pong') })
    test('test two', ({ page }) => {});
    test('test three', ({ page }) => {});
});
test('test four', ({ page }) => {});

```

<!-- .element: class="big-code" -->

Notes:

- ask student: when beforeEach/beforeAll are executed?

<!-- .slide: class="with-code" -->

# `afterEach`

```TypeScript
test.afterEach(() => { console.log('Ping') })
test('test one', ({ page }) => {});
test.describe('group', () => {
    test.afterEach(() => { console.log('Pong') })
    test('test two', ({ page }) => {});
    test('test three', ({ page }) => {});
});
test('test four', ({ page }) => {});

```

<!-- .element: class="big-code" -->

Notes:

- ask student: when afterEach are executed?

##==##

<!-- .slide: class="with-code" -->

# `afterAll`

```TypeScript
test.afterAll(() => { console.log('Ping') })
test('test one', ({ page }) => {});
test.describe('group', () => {
    test.afterAll(() => { console.log('Pong') })
    test('test two', ({ page }) => {});
    test('test three', ({ page }) => {});
});
test('test four', ({ page }) => {});

```

<!-- .element: class="big-code" -->

Notes:

- ask student: when afterAll are executed?

##==##

<!-- .slide: class="with-code" -->

# `afterEach` / `afterAll`

```TypeScript
test.afterEach(() => { console.log('Ping') })
test('test one', ({ page }) => {});
test.describe('group', () => {
    test.afterAll(() => { console.log('Pong') })
    test('test two', ({ page }) => {});
    test('test three', ({ page }) => {});
});
test('test four', ({ page }) => {});

```

<!-- .element: class="big-code" -->

Notes:

- ask student: when afterEach/afterAll are executed?
