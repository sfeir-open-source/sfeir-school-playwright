import { css } from 'hono/css';
import type { Product } from '../data/products.js';
import { useTranslation } from '../utils/lang.js';

export interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <section class="product-list">
      {products.map((p) => (
        <ProductCard product={p} />
      ))}
    </section>
  );
}

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const label = useTranslation(product.label);
  const description = useTranslation(product.description);
  return (
    <article data-testid="product-card">
      <header>{label}</header>
      <main>
        <img src={product.img} />
        <p>{description}</p>
      </main>
      <footer>{product.price}€</footer>
    </article>
  );
}
