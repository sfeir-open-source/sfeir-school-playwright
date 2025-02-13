import { useBakeryTitle, usePastryTitle, useTranslation } from '../utils/lang.js';

export function Header() {
  const bakeryLink = useBakeryTitle();
  const pastryLink = usePastryTitle();
  const aboutLink = useTranslation({ en: 'About', fr: 'À propos' });
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <strong>La Boulangerie du Terroir</strong>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/bakery">{bakeryLink}</a>
        </li>
        <li>
          <a href="/pastry">{pastryLink}</a>
        </li>
        <li>
          <a href="/about">{aboutLink}</a>
        </li>
      </ul>
    </nav>
  );
}
