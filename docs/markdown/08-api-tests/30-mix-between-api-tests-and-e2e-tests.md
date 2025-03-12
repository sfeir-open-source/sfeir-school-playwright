<!-- .slide: class="transition" -->

# Mix between API tests and E2E Tests

##==##

<!-- .slide: class="quote-slide" -->

## When use API tests ? When E2E Tests ?

Notes:

- it depends on your test's strategy
- most of the time: make a mix of both,
  - some things are easier/faster to test on API level
  - some things can only be tested with E2E to be realistic
- recommendation: create a separate project for API testing (what will not make on the lab), it will be easier to keep tidy
