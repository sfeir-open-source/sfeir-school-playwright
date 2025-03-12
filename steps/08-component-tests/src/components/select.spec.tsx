import { expect, test } from '@playwright/experimental-ct-react';
import { Select } from './select';

test('should work', async ({ mount }) => {
  const component = await mount(<Select value={'one'} options={['one', 'two', 'three']} />);
  await expect(component).toBeVisible();
});
