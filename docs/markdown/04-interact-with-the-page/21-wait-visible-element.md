<!-- .slide: class="transition" -->

# Wait for visible element

##==##

<!-- .slide: class="with-code" -->

# Waiting for an element to appear

```TypeScript
await expect(page.getByRole('heading', { label: 'About' }).toBeVisible();
```
<!-- .element: class="big-code" -->

Notes:
- user wait to see element on screen
- Playwright implicitly wait for this

##==##

<!-- .slide: class="with-code" -->

# Waiting for an element to disappear

```TypeScript
await expect(page.getByRole('heading', { label: 'About' }).toBeHidden();
```
<!-- .element: class="big-code" -->

Notes:
- user wait to no more see element on screen
- Playwright implicitly wait for this too
