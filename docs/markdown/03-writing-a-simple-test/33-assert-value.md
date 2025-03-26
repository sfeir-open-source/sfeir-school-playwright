<!-- .slide: class="transition" -->

# Assert value

##==##

<!-- .slide: class="with-code" -->

# `toHaveValue()`

```Html
<form>
  <input name="Username" />
  <input name="password" />
  <input type="hidden" name="captcha" />
  <button>Login</button>
</form>
```
<!-- .element: class="big-code" -->

```TypeScript
await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue("John");
```
<!-- .element: class="big-code" -->


##==##

<!-- .slide: class="with-code" -->

# `toHaveValues()`

```Html
<select data-testid="favorite-colors" multiple>
  <option value="Red">Red</option>
  <option value="Green">Green</option>
  <option value="Blue">Blue</option>
</select>
```
<!-- .element: class="big-code" -->

```TypeScript
await expect(page.getByTestId('favorite-colors')).toHaveValues(['Red', /^B/]);
```
<!-- .element: class="big-code" -->

