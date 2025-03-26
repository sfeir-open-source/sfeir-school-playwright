<!-- .slide: class="transition" -->

# Assertions

##==##

<!-- .slide: class="with-code" -->

# Assertions

```TypeScript
await expect(locator).toXXXX();
```
<!-- .element: class="big-code" -->

Notes:
- always this style
- notice the await keyword
- locator can be any target element
- toXXX() can be a lot of thing
- most of the assertions will auto-retry until validate or timeout
  - some are more low level, with no auto-retry, and in most cases avoidable

Source: https://playwright.dev/docs/test-assertions
