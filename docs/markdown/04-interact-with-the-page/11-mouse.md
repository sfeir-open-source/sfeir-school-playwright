<!-- .slide: class="transition" -->

# Mouse

##==##

<!-- .slide: class="with-code" -->

# Basic click

```TypeScript
await page.getByRole('button').click();
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Right click

```TypeScript
await page.getByRole('button').click({ button: 'right' });
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Shift + click

```TypeScript
await page.getByRole('button').click({ modifiers: ['Shift'] });
```
<!-- .element: class="big-code" -->


##==##

<!-- .slide: class="with-code" -->

# Ctrl + click (on Windows/Linux) or Meta + click on macOS

```TypeScript
await page.getByRole('button').click({ modifiers: ['ControlOrMeta'] });
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Double click

```TypeScript
await page.getByRole('button').dblclick();
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Click on arbitrary position

```TypeScript
await page.getByRole('button').click({ position: { x: 150, y: 150 } });
```
<!-- .element: class="big-code" -->

Notes:
- to avoid as much as possible!

##==##

<!-- .slide: class="with-code" -->

# Hover

```TypeScript
await page.getByRole('button').hover();
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Drag and drop

```TypeScript
await page.locator('#item-to-be-dragged').dragTo(page.locator('#item-to-drop-at'));
```
<!-- .element: class="big-code" -->


##==##

<!-- .slide: class="with-code" -->

# Scroll manually

```TypeScript
await page.getByText('Footer text').scrollIntoViewIfNeeded();
```
<!-- .element: class="big-code" -->

Notes:
- on most case scrolling is automatic if element is not visible (when `.click()` for example)
- but on some case we need manual scroll

