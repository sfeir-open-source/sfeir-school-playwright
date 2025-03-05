import type { PropsWithChildren } from 'hono/jsx';
import { BaseLayout } from '../layouts/base.js';
import { useTranslation } from '../utils/lang.js';
import { useHonoContext } from '../utils/context.js';
import { setAuthCookie } from '../utils/auth.js';

export async function Login() {
  const context = useHonoContext();
  if (context.req.method === 'POST') {
    const form = await context.req.formData();
    const formEmail = form.get('email')?.toString();
    const formPassword = form.get('password')?.toString();
    if (formEmail === 'laurent@laboulangerieduterroir.fr' && formPassword === '19LeB0nPain87') {
      setAuthCookie(context, formEmail, 'Laurent', 'Dubois');
      return <LoginOk />;
    }
    return (
      <AdminPage>
        <LoginErrorMessage />
      </AdminPage>
    );
  }
  return <AdminPage />;
}

function AdminPage({ children }: PropsWithChildren) {
  return (
    <BaseLayout>
      <main>
        <h1>Admin</h1>
        {children}
        <LoginForm />
      </main>
    </BaseLayout>
  );
}

function LoginErrorMessage() {
  const error = useTranslation({ en: 'Failed to login.', fr: 'Échec de connexion.' });
  return <article class="pico-background-red-500 pico-color-red-50">{error}</article>;
}

function LoginOk() {
  const redirectPending = useTranslation({
    en: (
      <>
        You will be redirected within 5 seconds. If not, click <a href="/">here</a>.
      </>
    ),
    fr: (
      <>
        Vous allez être redirigé dans les 5 prochaines secondes. If not, click <a href="/">here</a>.
      </>
    ),
  });
  return (
    <BaseLayout>
      <p>{redirectPending}</p>
      <script type="text/javascript" src="/assets/autoredirect-home.js" defer />
    </BaseLayout>
  );
}

function LoginForm() {
  const loginButton = useTranslation({ en: 'Login', fr: 'Se connecter' });
  return (
    <form action="/login" method="post">
      <input type="text" name="email" placeholder="E-mail" aria-label="E-mail" required />
      <input type="password" name="password" placeholder="Password" aria-label="Password" required />
      <button>{loginButton}</button>
    </form>
  );
}
