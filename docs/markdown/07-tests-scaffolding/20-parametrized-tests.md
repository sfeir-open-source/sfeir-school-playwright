<!-- .slide: class="transition" -->

# Parametrized tests

##==##

<!-- .slide: class="with-code" -->

# Testing multiple times

```TypeScript [1-5|6-10|11-15|16-20|21-25]
test('should see Alice card', ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading')).toHaveText('Alice');
    await expect(page.getByRole('heading')).toHaveClass('woman');
});
test('should see Bob card', ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading')).toHaveText('Bob');
    await expect(page.getByRole('heading')).toHaveClass('man');
});
test('should see Carlos card', ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading')).toHaveText('Carlos');
    await expect(page.getByRole('heading')).toHaveClass('man');
});
test('should see Carol card', ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading')).toHaveText('Carol');
    await expect(page.getByRole('heading')).toHaveClass('woman');
});
test('should see Ted card', ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading')).toHaveText('Ted');
    await expect(page.getByRole('heading')).toHaveClass('man');
});
```

<!-- .element: class="big-code" -->

Notes:

- a little bit verbose, no?

##==##

<!-- .slide: class="with-code" -->

# Parametrize test

```TypeScript [1-6|7,13|8-12]
[
    { name: 'Alice', gender: 'woman' },
    { name: 'Bob', gender: 'man' },
    { name: 'Carlos', gender: 'man' },
    { name: 'Carol', gender: 'woman' },
    { name: 'Ted', gender: 'man' },
].forEach(({ name, gender }) => {
    test(`should see ${name} card`, ({ page }) => {
        await page.goto('/');
        await expect(page.getByRole('heading')).toHaveText(name);
        await expect(page.getByRole('heading')).toHaveClass(gender);
    });
});
```

<!-- .element: class="big-code" -->

Notes:

- better, no?
- nothing special, no special tool/syntax, just plain JS/TS
