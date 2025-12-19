<!-- .slide: class="transition" -->

# Assert context

##==##

<!-- .slide: class="with-code" -->

# Check the url

```TypeScript
await expect(page).toHaveURL('http://localhost:3000');
```
<!-- .element: class="big-code" -->

![](./assets/images/03-writing-simple-test/url.png 'center h-1000')

Notes:
- full URL by default

##==##

<!-- .slide: class="with-code" -->

# Check the url

```TypeScript
await expect(page).toHaveURL(/\/bakery/);
```
<!-- .element: class="big-code" -->

![](./assets/images/03-writing-simple-test/url.png 'center h-1000')

Notes:
- check if the url contains "/bakery"

##==##

<!-- .slide: class="with-code" -->

# Check the url

```TypeScript
await expect(page).toHaveURL(/\/bakery$/);
```
<!-- .element: class="big-code" -->

![](./assets/images/03-writing-simple-test/url.png 'center h-1000')

Notes:
- check if the url ends with "/bakery"

##==##

<!-- .slide: class="with-code" -->

# Check the title

```TypeScript
await expect(page).toHaveTitle("La Boulangerie du Terroir");
```
<!-- .element: class="big-code" -->

![](./assets/images/03-writing-simple-test/page-title.png 'center h-1000')

Notes:
- exact match by default

##==##

<!-- .slide: class="with-code" -->

# Check the title

```TypeScript
await expect(page).toHaveTitle(/Boulangerie/);
```
<!-- .element: class="big-code" -->

![](./assets/images/03-writing-simple-test/page-title.png 'center h-1000')

Notes:
- for partial match use RegExp
  