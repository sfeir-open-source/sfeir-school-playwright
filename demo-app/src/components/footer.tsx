import { css } from 'hono/css';
import { useTermsAndConditionsTitle } from '../utils/lang.js';

export function Footer() {
  const termsLink = useTermsAndConditionsTitle();
  const year = new Date().getFullYear();

  const footerClass = css`
    display: flex;
    justify-content: space-between;
    border-top: 0.5px solid lightgray;
    margin-top: 2rem;
  `;
  return (
    <footer class={footerClass}>
      <p>La Boulangerie du Terroir © 1987-{year}</p>
      <a href="/terms-and-conditions">{termsLink}</a>
    </footer>
  );
}
