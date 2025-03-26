<!-- .slide: class="with-code" -->

# `getByText()`

```TypeScript
page.getByText('Username');
page.getByText('Username', { exact: true });
```
<!-- .element: class="big-code" -->

Notes:
- also user centric
- by default match a text substring (exact avoid this) 

Source: 
- https://playwright.dev/docs/api/class-page#page-get-by-text
- https://playwright.dev/docs/locators

##==##

<!-- .slide: class="with-code" -->

# `getByText()`

```Html
<div>Hello <span>world</span></div>
<div>Hello</div>
```
<!-- .element: class="big-code" -->

What is selected with the following?

```TypeScript
page.getByText('world');
```
<!-- .element: class="big-code" -->

Notes:
- ask student
- Matches <span>

##==##

<!-- .slide: class="with-code" -->

# `getByText()`

```Html
<div>Hello <span>world</span></div>
<div>Hello</div>
```
<!-- .element: class="big-code" -->

What is selected with the following?

```TypeScript
page.getByText('Hello world');
```
<!-- .element: class="big-code" -->

Notes:
- ask student
- Matches first <div>

##==##

<!-- .slide: class="with-code" -->

# `getByText()`

```Html
<div>Hello <span>world</span></div>
<div>Hello</div>
```
<!-- .element: class="big-code" -->

What is selected with the following?

```TypeScript
page.getByText('Hello', { exact: true });
```
<!-- .element: class="big-code" -->

Notes:
- ask student
- Matches second <div>

##==##

<!-- .slide: class="with-code" -->

# `getByText()`

```Html
<div>Hello <span>world</span></div>
<div>Hello</div>
```
<!-- .element: class="big-code" -->

What is selected with the following?

```TypeScript
page.getByText(/Hello/);
```
<!-- .element: class="big-code" -->

Notes:
- ask student
- Matches both <div>s

##==##

<!-- .slide: class="with-code" -->

# `getByText()`

```Html
<div>Hello <span>world</span></div>
<div>Hello</div>
```
<!-- .element: class="big-code" -->

What is selected with the following?

```TypeScript
page.getByText(/^hello$/i);
```
<!-- .element: class="big-code" -->

Notes:
- ask student
- Matches second <div>
