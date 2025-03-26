import { useTranslation } from '../utils/lang.js';

export function Discovery() {
  const discoverProductTitle = useTranslation({ en: 'Discover', fr: 'Découvrez' });
  return (
    <section data-testid="discovery">
      <h2>{discoverProductTitle}</h2>
      <div id="discovery-content" class="product-list"></div>
      <script type="text/javascript" src="/assets/discoveries.js" defer></script>
    </section>
  );
}
