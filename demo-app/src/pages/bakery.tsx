import { ProductList } from '../components/products.js';
import { PRODUCTS } from '../data/products.js';
import { BaseLayout } from '../layouts/base.js';
import { useBakeryTitle, useTranslation } from '../utils/lang.js';

export function Bakery() {
  const title = useBakeryTitle();
  return (
    <BaseLayout title={title}>
      <main>
        <h2>{title}</h2>
        <ProductList products={PRODUCTS.filter((p) => p.type === 'bread')} />
      </main>
    </BaseLayout>
  );
}
