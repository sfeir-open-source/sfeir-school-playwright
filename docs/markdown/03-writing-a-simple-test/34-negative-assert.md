<!-- .slide: class="transition" -->

# Negative assert

##==##

<!-- .slide: class="with-code" -->

# `.not`

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
await expect(page.getByRole('textbox', { name: 'captcha' })).not.toBeVisible();
```
<!-- .element: class="big-code" -->

Notes:
- ask students
- assert OK
