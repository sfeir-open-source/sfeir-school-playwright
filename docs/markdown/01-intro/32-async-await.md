<!-- .slide: class="transition" -->

# Async / Await

##==##

<!-- .slide: class="quote-slide" -->

## How to handle asynchronous actions ?

##==##

<!-- .slide: class="with-code" -->

# Callback

```TypeScript
document.addEventListener((event) => {
  // do something
});
```

<!-- .element: class="big-code" -->

Notes:

- ok for some use cases
- horrible to handle sequence or synchronization (need imbrication on most cases)

##==##

<!-- .slide: class="with-code" -->

# Promises

```TypeScript
function main() {
  fetch('/axolotl')
  .then((res) => res.json())
  .then(body => console.log(body))
}

main();
```

<!-- .element: class="big-code" -->

Notes:

- better than callback for sequence
- high level api for synchronization (`Promise.all()`, etc.)
- heavy syntax

##==##

<!-- .slide: class="with-code" -->

# Async / Await aka syntax sugar over Promises

```TypeScript
async function main() {
  const res = await fetch('/axolotl');
  const body = await res.json();
  console.log(body)
}

await main();
```

<!-- .element: class="big-code" -->

Notes:

- exact same things as Promises but with simpler syntax
- async function implicitly return a Promise that can be await
