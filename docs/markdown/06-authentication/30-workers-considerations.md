<!-- .slide: class="transition" -->

# Workers considerations

##==##

<!-- .slide: class="quote-slide" -->

## Tests run in parallel by default:

<br/>

## Can you guess what will be the issue? 🤔

Notes:

- Ask students
- if 2 tests make write operation on the same data (or list) it can break tests

##==##

<!-- .slide: class="quote-slide" -->

## Tests run in parallel by default:

<br/>

## Can you guess what will be the issue?

<br/>

## Playwright offer mechanisms for that! 😃

##==##

<!-- .slide: class="with-code" -->

# Simplest solution: serial mode

```TypeScript
test.describe.configure({ mode: 'serial' });

test('first test', ({ page }) => {});
test('second test', ({ page }) => {});
```

<!-- .element: class="big-code" -->

Notes:

- tests will run one after one
- pay attention if "first test" fail, "second test" will not run

##==##

# Advance solution: one account per parallel worker

Check the doc: https://playwright.dev/docs/auth#moderate-one-account-per-parallel-worker

Notes:

- https://playwright.dev/docs/auth#moderate-one-account-per-parallel-worker
- too long code to show it here
- require to override "test" function
- not a hack, it's an official solution
- may need a lot of accounts
