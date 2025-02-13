<!-- .slide: class="with-code" -->

# `getByRole()`

```TypeScript
// for buttons
page.getByRole('button');
page.getByRole('button', { name: 'Sign in' });
// for inputs
page.getByRole('textbox');
page.getByRole('textbox', { name: 'Username' });
// ...
```
<!-- .element: class="big-code" -->

Notes:
- the best and simpler way to target element
- fully user centric
- improve accessibility de facto

Source: 
- https://playwright.dev/docs/api/class-page#page-get-by-role
- https://playwright.dev/docs/locators

##==##

<!-- .slide: class="with-code" -->

# `getByRole()`

```Html
<h3>Sign up</h3>
<label>
  <input type="checkbox" /> Subscribe
</label>
<br/>
<button>Submit</button>
```
<!-- .element: class="big-code" -->

What is selected with the following?

```TypeScript
page.getByRole('heading', { name: 'Sign up' })
```
<!-- .element: class="big-code" -->

Notes:
- ask student
- "Sign up" heading

##==##

<!-- .slide: class="with-code" -->

# `getByRole()`

```Html
<h3>Sign up</h3>
<label>
  <input type="checkbox" /> Subscribe
</label>
<br/>
<button>Submit</button>
```
<!-- .element: class="big-code" -->

What is selected with the following?

```TypeScript
page.getByRole('checkbox', { name: 'Subscribe' })
```
<!-- .element: class="big-code" -->

Notes:
- ask student
- "Subscribe" checkbox

##==##

<!-- .slide: class="with-code" -->

# `getByRole()`

```Html
<h3>Sign up</h3>
<label>
  <input type="checkbox" /> Subscribe
</label>
<br/>
<button>Submit</button>
```
<!-- .element: class="big-code" -->

What is selected with the following?

```TypeScript
page.getByRole('button', { name: /submit/i })
```
<!-- .element: class="big-code" -->

Notes:
- ask student
- "Submit" button
