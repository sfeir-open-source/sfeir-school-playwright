<!-- .slide: class="transition" -->

# Act on all elements

##==##

<!-- .slide: class="with-code" -->

# Waiting an http request was done

```TypeScript
for (const item of await page.getByRole('listitem').all()) {
  await item.click();
}
```
<!-- .element: class="big-code" -->

Notes:
- very rare to need this
