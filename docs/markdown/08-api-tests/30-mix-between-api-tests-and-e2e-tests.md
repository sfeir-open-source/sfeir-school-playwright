<!-- .slide: class="transition" -->

# Mix between API tests and E2E tests

##==##

<!-- .slide: class="quote-slide" -->

## When to use API tests ? And when to use E2E tests ?

Notes:

- it depends on your test strategy
- most of the time: make a mix of both,
  - some things are easier/faster to test on API level
  - some things can only be tested with E2E to be realistic
- recommendation: create a separate project for API testing (what will not make on the lab), it will be easier to keep tidy
