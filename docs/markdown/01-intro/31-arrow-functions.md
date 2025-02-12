<!-- .slide: class="transition" -->

# Arrow Functions

##==##

<!-- .slide: class="with-code" -->

# Classic function

```TypeScript
function thisIsAFunction(thing = "something pretty cool") {
  return `I have done ${thing}!`;
}
```

<!-- .element: class="big-code" -->

Notes:

- basic function
- one parameter with a default value
- template string

##==##

<!-- .slide: class="with-code" -->

# Classic function vs Arrow function

```TypeScript
function thisIsAFunction(thing = "something pretty cool") {
  return `I have done ${thing}!`;
}

const thisIsAlsoAFunction = (thing = "something pretty cool") => {
  return `I have done ${thing}!`;
}
```

<!-- .element: class="big-code" -->

Notes:

- both do the same thing (pretty)
- it's just another syntax
- only difference is arrow function have no self context (not important for today)


