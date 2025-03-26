import { ProductList } from '../components/products.js';
import { PRODUCTS } from '../data/products.js';
import { BaseLayout } from '../layouts/base.js';
import { usePastryTitle } from '../utils/lang.js';

export function Pastry() {
  const title = usePastryTitle();
  return (
    <BaseLayout title={title}>
      <main>
        <h2>{title}</h2>
        <ProductList products={PRODUCTS.filter((p) => p.type === 'pastry')} />
      </main>
    </BaseLayout>
  );
}
