import { expect, test } from '@playwright/experimental-ct-react';
import { Select } from './select';

test('should work', async ({ mount }) => {
  const component = await mount(<Select value={'one'} options={['one', 'two', 'three']} />);
  await expect(component).toBeVisible();
});

test('should have all options', async ({ mount }) => {
  const component = await mount(<Select value={'one'} options={['one', 'two', 'three']} />);

  await expect(component.getByRole('option', { name: 'one' })).toBeEnabled();
  await expect(component.getByRole('option', { name: 'two' })).toBeEnabled();
  await expect(component.getByRole('option', { name: 'three' })).toBeEnabled();
});

test('should emit the new value when emit', async ({ mount }) => {
  let lastValue: string | undefined = undefined;
  const component = await mount(
    <Select value={'one'} options={['one', 'two', 'three']} onChange={(e) => (lastValue = e)} />
  );

  await expect(component).toHaveValue('one');
  await component.selectOption({ label: 'two' });
  expect(lastValue).toBe('two');
});
