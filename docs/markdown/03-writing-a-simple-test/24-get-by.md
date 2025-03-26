<!-- .slide: class="with-code" -->

# `getByPlaceholder()`

```Html
<input type="email" placeholder="name@example.com" />
```
<!-- .element: class="big-code" -->

```TypeScript
page.getByPlaceholder('name@example.com');
page.getByPlaceholder('name@example.com', { exact: true });
```
<!-- .element: class="big-code" -->

Notes:
- depend on what is in the placeholder
- by default match a text substring (exact avoid this) 

Source: 
- https://playwright.dev/docs/api/class-page#page-get-by-placeholder
- https://playwright.dev/docs/locators

##==##

<!-- .slide: class="with-code" -->

# `getByAltText()`

```Html
<img alt='Playwright logo'>
```
<!-- .element: class="big-code" -->

```TypeScript
page.getByAltText('Playwright logo');
page.getByAltText('Playwright logo', { exact: true });
```
<!-- .element: class="big-code" -->

Notes:
- ok for accessibility but not for other users
- by default match a text substring (exact avoid this) 

Source: 
- https://playwright.dev/docs/api/class-page#page-get-by-alt-text
- https://playwright.dev/docs/locators

##==##

<!-- .slide: class="with-code" -->

# `getByTitle()`

```Html
<span title='Issues count'>25 issues</span>
```
<!-- .element: class="big-code" -->

```TypeScript
page.getByTitle('Issues count');
page.getByTitle('Issues count', { exact: true });
```
<!-- .element: class="big-code" -->

Notes:
- by default match a text substring (exact avoid this) 

Source: 
- https://playwright.dev/docs/api/class-page#page-get-by-alt-text
- https://playwright.dev/docs/locators

##==##

<!-- .slide: class="with-code" -->

# `getByTestId()`

```Html
<button data-testid="directions">Itinéraire</button>
```
<!-- .element: class="big-code" -->

```TypeScript
page.getByTestId('directions');
```
<!-- .element: class="big-code" -->

Notes:
- absolutely NOT user centric
- exact match only

Source: 
- https://playwright.dev/docs/api/class-page#page-get-by-test-id
- https://playwright.dev/docs/locators
