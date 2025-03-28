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
import { Login } from './pages/login.js';
import { ProvideHonoContext } from './utils/context.js';
import { AdminGuestbook } from './pages/admin-guestbook.js';
import { getHealth, getHealthDoc } from './api/app/health.js';
import { getInfo, getInfoDoc } from './api/app/info.js';
import { getMappings, getMappingsDoc } from './api/app/mappings.js';

const app = new Hono();

app
  // middlewares
  .use('/favicon.ico', serveStatic({ path: './src/assets/favicon.ico' }))
  .use('/assets/*', serveStatic({ root: './src/' }))
  .use(
    languageDetector({
      supportedLanguages: ['en', 'fr'],
      fallbackLanguage: 'en',
      cookieOptions: { httpOnly: false },
    })
  )
  // html pages
  .get('/', (c) => c.html(withContexts(Home, c)))
  .get('/about', (c) => c.html(withContexts(About, c)))
  .get('/admin/guestbook', (c) => c.html(withContexts(AdminGuestbook, c)))
  .get('/bakery', (c) => c.html(withContexts(Bakery, c)))
  .get('/guestbook', (c) => c.html(withContexts(Guestbook, c)))
  .post('/guestbook', async (c) => {
    const body = await c.req.formData();
    // simulate variable network latency
    await new Promise((r) => setTimeout(r, Math.floor(Math.random() * 50) * 100));
    GUESTBOOK.push({
      author: body.get('author')?.toString()!,
      message: body.get('message')?.toString()!,
      date: body.get('date')?.toString()!,
    });
    return c.html(withContexts(GuestbookSaved, c));
  })
  .get('/login', (c) => c.html(withContexts(Login, c)))
  .post('/login', (c) => c.html(withContexts(Login, c)))
  .get('/pastry', (c) => c.html(withContexts(Pastry, c)))
  .get('/terms-and-conditions', (c) => c.html(withContexts(TermsAndConditions, c)))
  // api
  .get('/api/app/health', getHealthDoc(), (c) => c.json(getHealth()))
  .get('/api/app/info', getInfoDoc(), (c) => c.json(getInfo()))
  .get('/api/app/mappings', getMappingsDoc(), (c) => c.json(getMappings(app)))
  .get('/api/v1/discoveries', getDiscoveriesDoc(), (c) => c.json(getDiscoveries()))
  // swagger
  .get(
    '/api/doc',
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
  .get('/api/swagger', swaggerUI({ url: '/api/doc' }))
  .get('/api/swagger-ui', swaggerUI({ url: '/api/doc' }))
  .get('/api/swagger-ui/index.html', swaggerUI({ url: '/api/doc' }));

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

showRoutes(app, {
  verbose: true,
});

serve({ fetch: app.fetch, port });

function withContexts(Inner: FC, context: Context) {
  return (
    <ProvideHonoContext context={context}>
      <ProvideLanguage lang={context.get('language') as SupportedLanguage}>
        <Inner />
      </ProvideLanguage>
    </ProvideHonoContext>
  );
}
