<!-- .slide: class="transition" -->

# Keyboard

##==##

<!-- .slide: class="with-code" -->

# Filling inputs/textareas/contenteditable

```TypeScript [1|2|3|4|1-4]
await page.getByRole('textbox').fill('Peter');
await page.getByLabel('Birth date').fill('2020-02-02');
await page.getByLabel('Appointment time').fill('13:15');
await page.getByLabel('Local time').fill('2020-03-02T05:15');
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Typing characters

```TypeScript
await page.locator('#area').pressSequentially('Hello World!');
```
<!-- .element: class="big-code" -->

Notes:
- in most cases, prefer `.fill()`
- ensure every events (`keydown`, `keyup` and `keypress`) are in place
- can add delay between each character

##==##

<!-- .slide: class="with-code" -->

# Press keys and use shortcuts

```TypeScript
await page.getByText('Submit').press('Enter');
await page.getByRole('textbox').press('Control+ArrowRight');
await page.getByRole('textbox').press('$');
```
<!-- .element: class="big-code" -->

Notes:
- in most cases, prefer `.fill()`
- use this only for special case like shortcut or custom actions
