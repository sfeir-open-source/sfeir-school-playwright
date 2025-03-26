<!-- .slide: class="transition" -->

# Mount a component

Notes:

- Next we will work with React component because we need to choose
- It works only for React, Svelte and Vue for now
- It's experimental

##==##

<!-- .slide: class="with-code" -->

# Mount a React component

```TypeScript [1|2|4,6|5|1-6]
import { test, expect } from '@playwright/experimental-ct-react';
import LearnReactButton from './LearnReactButton';

test('should work', async ({ mount }) => {
  const component = await mount(<LearnReactButton />);
});
```

<!-- .element: class="big-code" -->
