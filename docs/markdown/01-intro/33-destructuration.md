<!-- .slide: class="transition" -->

# Destructuration

##==##

<!-- .slide: class="with-code" -->

# Use functions parameters

```TypeScript
function extractParameters(thing) {
  console.log(`first=${thing.first} second=${thing.second}`);
}

extractParameters({ first: 'SFEIR', second: 'School' });
```

<!-- .element: class="big-code" -->

Notes:

- basic syntax
- a little heavy

##==##

<!-- .slide: class="with-code" -->

# Destructure any object

```TypeScript
function extractParameters(thing) {
  const { first, second } = thing;
  console.log(`first=${first} second=${second}`);
}

extractParameters({ first: 'SFEIR', second: 'School' });
```

<!-- .element: class="big-code" -->

Notes:

- just a syntax sugar to decompose an object

##==##

<!-- .slide: class="with-code" -->

# Destructure parameters directly

```TypeScript
function extractParameters({ first, second }) {
  console.log(`first=${first} second=${second}`);
}

extractParameters({ first: 'SFEIR', second: 'School' });
```

<!-- .element: class="big-code" -->

Notes:

- just a syntax sugar
- make more explicit what we get in parameters
