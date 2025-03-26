<!-- .slide: class="transition" -->

# Copy/paste

##==##

<!-- .slide: class="transition-bg-blue-3 right" -->

# ❌ Not possible 😰

Notes:
- no helper to make copy/paste
- because of the security model of modern browsers
- possible through "classical frontend way"

##==##

<!-- .slide: class="with-code" -->

# Get access to clipboard for one test

```TypeScript
test('...', () => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);

})
```
<!-- .element: class="big-code" -->

Notes:
Source: https://www.adebayosegun.com/snippets/copy-paste-playwright

##==##

<!-- .slide: class="with-code" -->

# Get access to clipboard for one every tests

```TypeScript
export default defineConfig({
  use: {
    //...
    permissions: ['clipboard-read', 'clipboard-write'],
  },
});
```
<!-- .element: class="big-code" -->


##==##

<!-- .slide: class="with-code" -->

# Paste text

```TypeScript [3-4|5-6|7-8]
test('...', () => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  // focus input
  await page.locator('input').focus();
  // add content to the clipboard
  await page.evaluate(() => navigator.clipboard.writeText('123'));
  // paste text from clipboard
  await page.locator(first).press('Meta+v');
})
```
<!-- .element: class="big-code" -->



##==##

<!-- .slide: class="with-code" -->

# Copy text

```TypeScript [3-4|5-6|7-8|9-11]
test('...', () => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  // focus input
  await page.locator('input').focus();
  // select all content
  await page.locator(first).press('Meta+a');
  // copy text to clipboard
  await page.locator(first).press('Meta+c');
  // Get clipboard content
  const handle = await page.evaluateHandle(() => navigator.clipboard.readText());
  const clipboardContent = await handle.jsonValue();
})
```
<!-- .element: class="big-code" -->

