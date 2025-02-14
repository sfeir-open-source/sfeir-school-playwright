<!-- .slide: class="transition" -->

# Target one element

##==##

<!-- .slide: class="with-code" -->

# Get it directly

```Html
<ul>
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
```
<!-- .element: class="big-code" -->

```TypeScript
await expect(page.getByRole('listitem', { name: 'banana' })).click();
await expect(page.getByText('orange')).click();
```
<!-- .element: class="big-code" -->

Notes:
- consider targeting as if it was not in a list


##==##

<!-- .slide: class="with-code" -->

# Using `filter()`

```Html
<ul>
  <li>apple</li>
  <li>banana</li>
  <li>orange</li>
</ul>
```
<!-- .element: class="big-code" -->

```TypeScript
await page
    .getByRole('listitem')
    .filter({ hasText: 'orange' })
    .click();
```
<!-- .element: class="big-code" -->

Notes:
- this will act in two times: select all "listitem" then extract the one with text "orange"

##==##

<!-- .slide: class="two-column-layout"-->

# You can chain `filter()`s

##--##

<!-- .slide: class="with-code" -->

```Html
<ul>
  <li>
    <div>John</div>
    <div><button>Say hello</button></div>
  </li>
  <li>
    <div>Mary</div>
    <div><button>Say hello</button></div>
  </li>
  <li>
    <div>John</div>
    <div><button>Say goodbye</button></div>
  </li>
  <li>
    <div>Mary</div>
    <div><button>Say goodbye</button></div>
  </li>
</ul>
```

<!-- .element: style="height: 700px" -->

##--##

<!-- .slide: class="with-code" -->

```TypeScript
await page.getByRole('listitem')
    .filter({ hasText: 'Mary' })
    .filter({has: page
      .getByRole('button', 
        { name: 'Say goodbye' }) })
    .click();
```
<!-- .element: class="big-code" -->

Notes:
- ask student: on which element will it click?
- on the <li> which has "Mary" and button "Say goodbye" (the last one)
- think chaining filter is not always easy to read

##==##

<!-- .slide: class="with-code" -->

# Using testid

```Html
<ul>
  <li data-testid="apple">apple</li>
  <li data-testid="banana">banana</li>
  <li data-testid="orange">orange</li>
</ul>
```
<!-- .element: class="big-code" -->

```TypeScript
await page.getByTestId('orange').click();
```
<!-- .element: class="big-code" -->

Notes:
- simple but not user centric (no user will focus an element with an attribute)


##==##

<!-- .slide: class="with-code" -->

# Using its position

```Html
<ul>
  <li data-testid="apple">apple</li>
  <li data-testid="banana">banana</li>
  <li data-testid="orange">orange</li>
</ul>
```
<!-- .element: class="big-code" -->

```TypeScript
await page.getByRole('listitem').nth(2).click();
```
<!-- .element: class="big-code" -->

Notes:
- this will click on "orange" (zero-based index)

