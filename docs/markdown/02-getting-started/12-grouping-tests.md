<!-- .slide: class="transition" -->

# Grouping tests

##==##

# 1 file = 1 group

![](./assets/images/02-getting-started/group-by-file.png)

Notes:
- 

##==##

<!-- .slide: class="with-code" -->

# Sub group

```TypeScript
test.describe('example group', () => {
  test('has title', async ({ page }) => {
    // ...
  });
  test('get started link', async ({ page }) => {
    // ...
  });
});

```

<!-- .element: class="big-code" -->

##==##

# Sub group

![](./assets/images/02-getting-started/group-with-describe.png)

##==##

# Sub sub group

![](./assets/images/02-getting-started/group-with-describe-with-describe.png)
