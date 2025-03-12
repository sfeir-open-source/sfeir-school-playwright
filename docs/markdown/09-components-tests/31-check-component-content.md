<!-- .slide: class="with-code" -->

# Check component content

```TypeScript [3]
test('should work', async ({ mount }) => {
  const component = await mount(<LearnReactButton />);
  await expect(component).toContainText('Learn React');
});
```

<!-- .element: class="big-code" -->

Notes:

- we can use every assertions we used to use with Playwright
- we no more use the page fixture but directly the component instance
