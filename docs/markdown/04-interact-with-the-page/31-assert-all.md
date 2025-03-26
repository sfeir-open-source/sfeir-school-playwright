<!-- .slide: class="transition" -->

# Assert all elements

##==##

<!-- .slide: class="with-code" -->

# Count

```Html
<ul>
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
```
<!-- .element: class="big-code" -->

```TypeScript
await expect(page.getByRole('listitem')).toHaveCount(3);
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Check all values at once

```Html
<ul>
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
```
<!-- .element: class="big-code" -->

```TypeScript
await expect(page.getByRole('listitem'))
    .toHaveText(['apple', 'banana', 'orange']);
```
<!-- .element: class="big-code" -->
