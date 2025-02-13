import { Style } from 'hono/css';
import type { PropsWithChildren } from 'hono/jsx';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { useUserLang } from '../utils/lang.js';

export function BaseLayout({ children }: PropsWithChildren) {
  const lang = useUserLang();
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <title>La Boulangerie du Terroir</title>
        <link href="/assets/pico.min.css" rel="stylesheet" />
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
