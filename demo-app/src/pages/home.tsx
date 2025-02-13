import { css } from 'hono/css';
import { Discovery } from '../components/discovery.js';
import { Header } from '../components/header.js';
import { Logo } from '../components/logo.js';
import { BaseLayout } from '../layouts/base.js';
import { useTranslation } from '../utils/lang.js';

export function Home() {
  const titlePrefix = useTranslation({ en: 'Welcome on the website of', fr: 'Bienvenue sur le site de' });
  const titleClass = css`
    display: flex;
    align-items: center;
    & > h1 {
      flex: 1;
    }
    & > img {
      margin-left: 3rem;
      margin-right: 3rem;
    }
  `;
  return (
    <BaseLayout>
      <div class={titleClass}>
        <h1>
          {titlePrefix}
          <br />
          La Boulangerie du Terroir
        </h1>
        <Logo size="small" />
      </div>
      <hr />
      <Discovery />
    </BaseLayout>
  );
}
