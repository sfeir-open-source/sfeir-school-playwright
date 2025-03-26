<!-- .slide: class="with-code" -->

# Listen to event

```TypeScript
test('should work', async ({ mount }) => {
  let clicked = false;
  const component = await mount(<LearnReactButton onClick={() => clicked = true} />);
  expect(clicked).toBeTruthy();
});
```

<!-- .element: class="big-code" -->

Notes:

- to get event from a component we can listen events
- we need to save the emitted value in the variable
- then we can make any assertion
