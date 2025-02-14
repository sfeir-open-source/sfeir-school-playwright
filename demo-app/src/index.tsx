import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { swaggerUI } from '@hono/swagger-ui';
import { Hono, type Context } from 'hono';
import { showRoutes } from 'hono/dev';
import type { FC } from 'hono/jsx';
import { languageDetector } from 'hono/language';

import { Home } from './pages/home.js';
import { About } from './pages/about.js';
import { ProvideLanguage, type SupportedLanguage } from './utils/lang.js';
import { getDiscoveries, getDiscoveriesDoc } from './api/dicoveries.js';
import { TermsAndConditions } from './pages/terms-and-conditions.js';
import { openAPISpecs } from 'hono-openapi';
import { Pastry } from './pages/pastry.js';
import { Bakery } from './pages/bakery.js';
import { Guestbook, GuestbookSaved } from './pages/guestbook.js';
import { GUESTBOOK } from './data/guestbook.js';

const app = new Hono();

app
  // middlewares
  .use('/favicon.ico', serveStatic({ path: './src/assets/favicon.ico' }))
  .use('/assets/*', serveStatic({ root: './src/' }))
  .use(languageDetector({ supportedLanguages: ['en', 'fr'], fallbackLanguage: 'en' }))
  // html pages
  .get('/', (c) => c.html(withLang(Home, c)))
  .get('/about', (c) => c.html(withLang(About, c)))
  .get('/bakery', (c) => c.html(withLang(Bakery, c)))
  .get('/guestbook', (c) => c.html(withLang(Guestbook, c)))
  .post('/guestbook', async (c) => {
    const body = await c.req.formData();
    // simulate variable network latency
    await new Promise((r) => setTimeout(r, Math.floor(Math.random() * 50) * 100));
    GUESTBOOK.push({
      author: body.get('author')?.toString()!,
      message: body.get('message')?.toString()!,
      date: body.get('date')?.toString()!,
    });
    return c.html(withLang(GuestbookSaved, c));
  })
  .get('/pastry', (c) => c.html(withLang(Pastry, c)))
  .get('/terms-and-conditions', (c) => c.html(withLang(TermsAndConditions, c)))
  // api
  .get('/api/v1/discoveries', getDiscoveriesDoc(), (c) => c.json(getDiscoveries()))
  // swagger
  .get(
    '/doc',
    openAPISpecs(app, {
      documentation: {
        info: {
          title: 'La Boulangerie du Terroir API',
          version: '1.0.0',
          description: 'La Boulangerie du Terroir API',
        },
        servers: [{ url: 'http://localhost:3000', description: 'Local Server' }],
      },
    })
  )
  .get('/swagger', swaggerUI({ url: '/doc' }))
  .get('/swagger-ui', swaggerUI({ url: '/doc' }))
  .get('/swagger-ui/index.html', swaggerUI({ url: '/doc' }));

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

showRoutes(app, {
  verbose: true,
});

serve({ fetch: app.fetch, port });

function withLang(Inner: FC, c: Context) {
  return (
    <ProvideLanguage lang={c.get('language') as SupportedLanguage}>
      <Inner />
    </ProvideLanguage>
  );
}
