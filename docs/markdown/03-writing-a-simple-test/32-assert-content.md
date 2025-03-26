<!-- .slide: class="transition" -->

# Assert content

##==##

<!-- .slide: class="with-code" -->

# `toBeVisible()`

```Html
<form>
  <h3>You can login</h3>
  <input name="Username" />
  <input name="password" />
  <input type="hidden" name="captcha" />
  <button>Login</button>
</form>
```
<!-- .element: class="big-code" -->

Which is the result of this?

```TypeScript
await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
```
<!-- .element: class="big-code" -->

Notes:
- ask students
- assert OK

##==##

<!-- .slide: class="with-code" -->

# `toBeVisible()`

```Html
<form>
  <h3>You can login</h3>
  <input name="Username" />
  <input name="password" />
  <input type="hidden" name="captcha" />
  <button>Login</button>
</form>
```
<!-- .element: class="big-code" -->

Which is the result of this?

```TypeScript
await expect(page.getByRole('textbox', { name: 'captcha' })).toBeVisible();
```
<!-- .element: class="big-code" -->

Notes:
- ask students
- assert KO


##==##

<!-- .slide: class="with-code" -->

# `toBeVisible()`

```Html
<form>
  <h3>You can login</h3>
  <input name="Username" />
  <input name="password" />
  <input type="hidden" name="captcha" />
  <button>Login</button>
</form>
```
<!-- .element: class="big-code" -->

Which is the result of this?

```TypeScript
await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
```
<!-- .element: class="big-code" -->

Notes:
- ask students
- assert OK


##==##

<!-- .slide: class="with-code" -->

# `toBeInViewport()`

```Html
<form>
  <h3>You can login</h3>
  <input name="Username" />
  <input name="password" />
  <input type="hidden" name="captcha" />
  <button>Login</button>
</form>
```
<!-- .element: class="big-code" -->

Which is the result of this?

```TypeScript
await expect(page.getByRole('textbox', { name: 'Username' })).toBeInViewport();
```
<!-- .element: class="big-code" -->

Notes:
- ask students
- assert OK

##==##

<!-- .slide: class="with-code" -->

# `toBeInViewport()`

```Html
<form>
  <h3>You can login</h3>
  <input name="Username" />
  <input name="password" />
  <input type="hidden" name="captcha" />
  <button>Login</button>
</form>
```
<!-- .element: class="big-code" -->

Which is the result of this?

```TypeScript
await expect(page.getByRole('textbox', { name: 'captcha' })).toBeInViewport();
```
<!-- .element: class="big-code" -->

Notes:
- ask students
- assert OK


##==##

<!-- .slide: class="with-code" -->

# `toHaveCount()`

```Html
<form>
  <h3>You can login</h3>
  <input name="Username" />
  <input name="password" />
  <input type="hidden" name="captcha" />
  <button>Login</button>
</form>
```
<!-- .element: class="big-code" -->

Which is the result of this?

```TypeScript
await expect(page.getByRole('textbox')).toHaveCount(3);
```
<!-- .element: class="big-code" -->

Notes:
- ask students
- assert OK


##==##

<!-- .slide: class="with-code" -->

# `toBeEnabled()`

```Html
<form>
  <h3>You can login</h3>
  <input name="Username" />
  <input name="password" />
  <input type="hidden" name="captcha" />
  <button>Login</button>
</form>
```
<!-- .element: class="big-code" -->

Which is the result of this?

```TypeScript
await expect(page.getByRole('textbox', { name: 'Username' })).toBeEnabled();
```
<!-- .element: class="big-code" -->

Notes:
- ask students
- assert OK

##==##

<!-- .slide: class="with-code" -->

# `toHaveText()`

```Html
<form>
  <h3>You can login</h3>
  <input name="Username" />
  <input name="password" />
  <input type="hidden" name="captcha" />
  <button>Login</button>
</form>
```
<!-- .element: class="big-code" -->

Which is the result of this?

```TypeScript
await expect(page.getByRole('heading')).toHaveText("You can login");
```
<!-- .element: class="big-code" -->

Notes:
- ask students
- assert OK
