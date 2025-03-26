<!-- .slide: class="transition" -->

# TypeScript Reminder

##==##

<!-- .slide: class="with-code" -->

## Simple functions

```TypeScript
// JavaScript
function fn(a, b) {
  return a * b;
}

// TypeScript
function fn(a: number, b: number) {
  return a * b;
}

```

<!-- .element: class="big-code" -->

Notes:

- PlayWright is written in TypeScript
- it is fully typed to help users
- TypeScript is a superset of JavaScript which offer explicit typing to JavaScript

##==##

<!-- .slide: class="with-code" -->

## Interfaces vs Types

```TypeScript
interface Apple {
  cooked: boolean;
  color: 'red' | 'green';
}

type Apple = { cooked: boolean, color: 'red' | 'green' };

```

<!-- .element: class="big-code" -->

Notes:
- Interfaces and Types are pretty swappable
- color is a "union type" = a type defined as a list of value
  - union type = enum with zero runtime cost

##==##

<!-- .slide: class="two-column-layout"-->

## Generics

##--##

<!-- .slide: class="with-code" -->


```TypeScript
interface Box<T> {
  content: T;
}

type Apple = { color: 'red' | 'green' };
type PiePastry = { cooked: boolean };

```

<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code" -->


```TypeScript
// OK
const appleBox: Box<Apple> 
    = { content: { color: 'red' } };
const piePastryBox: Box<PiePastry> 
    = { content: { cooked: true } };
// KO
const box: Box<PiePastry> 
    = { content: { color: 'green' } };

```

<!-- .element: class="big-code" -->

