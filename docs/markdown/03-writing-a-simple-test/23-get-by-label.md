<!-- .slide: class="with-code" -->

# `getByLabel()`

```TypeScript
page.getByLabel('Username');
page.getByLabel('Username', { exact: true });
```
<!-- .element: class="big-code" -->

Notes:
- also user centric
- by default match a text substring (exact avoid this) 

Source: 
- https://playwright.dev/docs/api/class-page#page-get-by-label
- https://playwright.dev/docs/locators

##==##

<!-- .slide: class="with-code" -->

# `getByLabel()`

```Html
<input aria-label="Username">
<label for="password-input">Password:</label>
<input id="password-input" />
<label>
  Confirmation Password:
  <input />
</label>
```
<!-- .element: class="big-code" -->

What is selected with the following?

```TypeScript
page.getByLabel('Username');
```
<!-- .element: class="big-code" -->

Notes:
- ask student
- Matches first input

##==##

<!-- .slide: class="with-code" -->

# `getByLabel()`

```Html
<input aria-label="Username">
<label for="password-input">Password:</label>
<input id="password-input" />
<label>
  Confirmation Password:
  <input />
</label>
```
<!-- .element: class="big-code" -->

What is selected with the following?

```TypeScript
page.getByLabel('Password');
```
<!-- .element: class="big-code" -->

Notes:
- ask student
- Matches second and third inputs

##==##

<!-- .slide: class="with-code" -->

# `getByLabel()`

```Html
<input aria-label="Username">
<label for="password-input">Password:</label>
<input id="password-input" />
<label>
  Confirmation Password:
  <input />
</label>
```
<!-- .element: class="big-code" -->

What is selected with the following?

```TypeScript
page.getByLabel('Password', { exact: true });
```
<!-- .element: class="big-code" -->

Notes:
- ask student
- Matches second input

