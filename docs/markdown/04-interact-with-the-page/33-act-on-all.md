<!-- .slide: class="transition" -->

# Act on all elements

##==##

<!-- .slide: class="with-code" -->

# Waiting for the end of an http request

```TypeScript
for (const item of await page.getByRole('listitem').all()) {
  await item.click();
}
```
<!-- .element: class="big-code" -->

Notes:
- very rare to need this
