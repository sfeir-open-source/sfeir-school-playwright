<!-- .slide: class="transition" -->

# Others

##==##

<!-- .slide: class="with-code" -->

# Checkbox/radio button

```TypeScript
await page.getByLabel('I agree to the terms above').check();
await page.getByLabel('XL').uncheck();
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Select

```TypeScript
await page.getByLabel('Choose a color').selectOption('blue');
await page.getByLabel('Choose a color').selectOption({ label: 'Blue' });
await page.getByLabel('Choose multiple colors').selectOption(['red', 'green', 'blue']);
```
<!-- .element: class="big-code" -->

