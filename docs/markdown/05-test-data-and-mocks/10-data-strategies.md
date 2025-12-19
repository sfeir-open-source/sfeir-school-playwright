<!-- .slide: class="transition" -->

# Data strategies

##==##

# Use real services

![](./assets/images/05-test-data-and-mocks/app-archi-overview.drawio.png 'center h-800')

Notes:
- E2E

##==##

# Mock external servers (pretty much E2E)

![](./assets/images/05-test-data-and-mocks/strat-mock-external-servers.png 'center h-800')

Notes:
- E2E on the "team" point of view

##==##

# Mock every API calls (aka UI tests)

![](./assets/images/05-test-data-and-mocks/strat-mock-all-calls.png 'center h-800')

##==##

# Mock only difficult use cases with Playwright

![](./assets/images/05-test-data-and-mocks/strat-mock-some-calls.png 'center h-800')

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
