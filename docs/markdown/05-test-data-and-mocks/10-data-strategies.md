<!-- .slide: class="transition" -->

# Data strategies

##==##

# Use real services

![center h-800](./assets/images/05-test-data-and-mocks/app-archi-overview.drawio.png)

Notes:
- E2E

##==##

# Mock external servers (pretty much E2E)

![center h-800](./assets/images/05-test-data-and-mocks/strat-mock-external-servers.png)

Notes:
- E2E on the "team" point of view

##==##

# Mock every API calls (aka UI tests)

![center h-800](./assets/images/05-test-data-and-mocks/strat-mock-all-calls.png)

##==##

# Mock only difficult use cases with Playwright

![center h-800](./assets/images/05-test-data-and-mocks/strat-mock-some-calls.png)

Notes:
- do we really need to tests theses cases?

##==##

<!-- .slide: class="quote-slide" -->

## The more you mock,
## The more your tests will be stable,
## BUT the less you test the reality.

Notes:
- always a balance between stability / realism / testability
- some cases need mocks
