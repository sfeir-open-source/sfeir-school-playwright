import { Style } from 'hono/css';
import type { PropsWithChildren } from 'hono/jsx';
import type { JSX } from 'hono/jsx/jsx-runtime';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { useUserLang } from '../utils/lang.js';

export type BaseLayoutProps = PropsWithChildren<{ title?: string | JSX.Element }>;

export function BaseLayout({ children, title }: BaseLayoutProps) {
  const lang = useUserLang();
  const pageTitle = `La Boulangerie du Terroir${title != undefined ? ` - ${title}` : ''}`;
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <title>{pageTitle}</title>
        <link href="/assets/pico.min.css" rel="stylesheet" />
        <link href="/assets/pico.colors.min.css" rel="stylesheet" />
        <link href="/assets/styles.css" rel="stylesheet" />
        <Style />
      </head>
      <body class="container" data-lang={lang}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
