<!-- .slide: class="transition" -->

# Wait for an event

##==##

<!-- .slide: class="with-code" -->

# Waiting an http request was done

```TypeScript
const requestPromise = page.waitForRequest('**/*logo*.png');
await page.goto('https://wikipedia.org');
const request = await requestPromise;
console.log(request.url());
```
<!-- .element: class="big-code" -->

Notes:
- note the first line has no await

##==##

<!-- .slide: class="with-code" -->

# Waiting for a popup to appear

```TypeScript
const popupPromise = page.waitForEvent('popup');
await page.getByText('open the popup').click();
const popup = await popupPromise;
await popup.goto('https://wikipedia.org');
```
<!-- .element: class="big-code" -->

Notes:
- note the first line has no await
