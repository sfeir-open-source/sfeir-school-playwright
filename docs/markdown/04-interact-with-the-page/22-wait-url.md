<!-- .slide: class="transition" -->

# Wait for URL

##==##

<!-- .slide: class="with-code" -->

# Waiting we are on a specific page

```TypeScript
await page.goto('/login');
```
<!-- .element: class="big-code" -->

Notes:
- when you explicitly navigate, Playwright wait implicitly the navigation ends

##==##

<!-- .slide: class="with-code" -->

# Waiting manually

```TypeScript [2]
await page.getByText('Click me').click();
await page.waitForURL('**/login');
```
<!-- .element: class="big-code" -->

Notes:
- if needed you can explicitly wait the url
- in most case, prefer checking an element is visible on the page (like a real user)
